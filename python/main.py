#-*- coding: utf-8 -*-
import clases;
from clases import Ave;
from modulos.extension import zoo;
from modulos.extension import *; #no recomendable

def alguna_funcion():
	return "Bien!";

if __name__ == "__main__":
	c = clases.Ave("Grande");
	d = Ave("Chico");
	c.volar(10);

	print alguna_funcion();
	print zoo();
	print "Hola sí!!!";