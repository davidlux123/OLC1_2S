from tkinter import *
from tkinter import ttk

class Ejemplo_tk:

    def __init__(self,window):
        self.ventana = window
        self.ventana.title("Ejemplo Interfaz Grafica")

        frame = LabelFrame(self.ventana, text = 'Titulo del Frame')
        frame.grid(row=0,column=0,columnspan=3,pady=20)

        
        ###########################__TextField__##############################
        Label(frame,text='TextField:').grid(row=1,column=1)

        self.url = Entry(frame)
        self.url.grid(row=1,column=2)


        ###########################__DropdownList__#############################
        Label(frame,text='DropdownList:').grid(row=2,column=1)

        #arreglo de numeros
        array_num = []
        for n in range(20):
            array_num.append(str(n+1))

        self.conc = StringVar(frame)
        self.conc.set('1')
        popupMenu = ttk.OptionMenu(frame, self.conc, *array_num)
        popupMenu.grid(row = 2, column =2)
        # self.conc.trace('w', self.metodo)


        ##############################__ProgressBar__##############################
        Label(frame,text='ProgressBar:').grid(row=6,column=1)

        self.progress = ttk.Progressbar(frame,orient = 'horizontal', length = 286, mode = 'determinate')
        self.progress.grid(row=6,column=2)

        ##############################__TextArea__################################
        Label(frame,text='TextArea:').grid(row=7,column=1)

        self.resumen = Text(frame, height=10, width=40)
        self.resumen.grid(row=7,column=2)

        ################################__BOTON__#################################
        self.boton = Button(frame, text ="Enviar") # , command = self.metodo
        self.boton.grid(row=9,column=3)



if __name__ == '__main__':
    window = Tk()
    app = Ejemplo_tk(window)
    window.mainloop()