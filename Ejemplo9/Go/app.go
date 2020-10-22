package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
	"os"
)

type curso struct {
	Nombre string
}

var nodeURL = ""

func getInfo(w http.ResponseWriter, r *http.Request) {
	var url = nodeURL + "/Curso/"

	var decoder = json.NewDecoder(r.Body)
	var c curso
	err := decoder.Decode(&c)
	if err != nil {
		panic(err)
	}

	var jsonStr = []byte(`{"Nombre":"` + c.Nombre + `"}`)
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(resp.Body)

	fmt.Println(string(bodyBytes))
	fmt.Fprintf(w, string(bodyBytes))
}

func index(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("index.html"))
	t.Execute(w, "")
}

func main() {
	//================= NODE API =================//
	nodeip, defip := os.LookupEnv("NODEIP")
	nodeport, defport := os.LookupEnv("NODEPORT")

	if !defip {
		nodeip = "182.18.7.7"
	}

	if !defport {
		nodeport = "3000"
	}

	nodeURL = "http://" + nodeip + ":" + nodeport

	//==================== GO ====================//
	ip, defip := os.LookupEnv("GOIP")
	port, defport := os.LookupEnv("GOPORT")

	if !defip {
		ip = "182.18.7.9"
	}

	if !defport {
		port = "8000"
	}

	http.Handle("/layout/", http.StripPrefix("/layout/", http.FileServer(http.Dir("layout/"))))

	http.HandleFunc("/", index)
	http.HandleFunc("/getInfo", getInfo)

	fmt.Println("Escuchando por IP:" + ip + " PORT:" + port)

	http.ListenAndServe(":"+port, nil)
}
