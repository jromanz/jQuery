# -*- encoding: utf-8 -*-

import random;

numero = random.randint(1,100);

tentativas = 0;
escolha = 0;
print numero;
while escolha != numero:
	escolha = input("Informe un numero de 1 a 100: ");
	tentativas+=1;
	if escolha > numero:
		print "Menor";
	elif escolha < numero:
		print "Mayor";

print "Acerto el numero era ", numero;
print "Usted usó ", tentativas, " tentativas";