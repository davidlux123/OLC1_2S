package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

type curso struct {
	Nombre string
}

func getInfo(w http.ResponseWriter, r *http.Request) {

	nodeip, defip := os.LookupEnv("NODEIP")
	nodeport, defport := os.LookupEnv("NODEPORT")

	if !defip {
		nodeip = "182.18.7.7"
	}

	if !defport {
		nodeport = "3000"
	}

	url := "http://" + nodeip + ":" + nodeport + "/getCurso/"

	log.Printf(url)

	//Enviamos una peticion GET a nodejs
	resp, err := http.Get(url)
	if err != nil {
		log.Fatalln(err)
	}

	defer resp.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(resp.Body)

	log.Printf(string(bodyBytes))

	var c curso
	_ = json.Unmarshal(bodyBytes, &c)

	t := template.Must(template.ParseFiles("index.html"))
	t.Execute(w, c)
}

func index(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("index.html"))
	t.Execute(w, "")
}

func main() {
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
