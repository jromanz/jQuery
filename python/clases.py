#un script

class Twitter:
	""" Define al twitter,
	por @kalerguiz, para todos
	ustedes """
	def __init__(self,nombre_usuario):
		self.usuario = nombre_usuario;

	def obtenerNombre(self):
		"""Obtiene nombre de usuario """
		return self.usuario;


# para hacer pruebas
if __name__ == "__main__":
	t = Twitter("Julio");
	print t.usuario;
	print t.obtenerNombre();


class Facebook(object,Twitter):
	def __init__(self):
		"""Inicializa Facebook"""


class Ave(object):
	"""Define un ave"""
	def __init__(self,size):
		"""Inicializa el ave"""
		self.size = size;

	@staticmethod
	def volar(distancia):
		"""vuela un tramo"""
		for i in xrange(distancia):
			print "estoy volando ", i;

class Colibri(Ave):
	def __init__(self,color):
		"""Inicializa un colibri"""
		self.size = "Grande";
		self.color = color;
		self.panza = 0;
	

	def comer(self,comida):
		if comida>self.panza:
			self.panza+=10;
			print self.panza;
		else:
			self.panza-=5;
			print self.panza;


if __name__ == "__main__":
	c = Colibri("Verde");
	Colibri.volar(2);
	print c.size;
	print c.color;
	c.comer(-4);