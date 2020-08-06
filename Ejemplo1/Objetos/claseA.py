from claseB import claseB
from package.claseC import claseC



class claseA(claseB,claseC):

    # a,b,c

    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c
    

    def multiplicar(self, message):
        return message , " " , str(self.a * self.b * self.c) 

        




if __name__ == "__main__":
    objeto_a = claseA(3, 4, 5)
    print(objeto_a.multiplicar("Hola mundo"))
    print(objeto_a.metodoB())
    print(objeto_a.metodoC("parametro prueba"))
    print(issubclass(claseA,claseB))
