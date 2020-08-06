
# Comentarios unilinea

'''
@
Comentarios multilinea
//
'''

var_string_1 = 'texto con comillas simples'

var_string_2 = "texto con comillas dobles"

var_int = 89

var_float = 6.9

var_boolean = True or False

array = []


def funcion1(param1, param2, param3):

    if param1 % 2 == 0:
        print("El valor de ",param1," es par.")

    elif param2 % 2 == 0:
        print("El valor de ",param2," es par.")

    elif param3 % 2 == 0:
        print("El valor de ",param3," es par.")

    else:
        print("Este texto se imprime sin salto de linea", end="")
    

funcion1(1, 2, 3)
funcion1(4, 5, 7)
funcion1(7, 9, 6)
funcion1(1, 1, 1)

print("Finalizo la ejecucion")