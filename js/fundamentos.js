
var foo = bar ? 1 : 0;

switch(foo){
	case 'bar':
		alert("El valor es bar");
		break;
	case 'baz':
		alert("El valor es baz");
		break;
	default:
		alert("Predeterminado");
}

for(var i = 0;i<10;i++){
	console.log("Intento: "+ i);
}

var j = -1;
while(++j < 100){
	console.log("Es bucle " + j);
}


do{
	alert("Hello");
}while(false);



var myArray = ["Hello","World","foo",123];
myArray.push([1,2,3,4]);

var myString = myArray.join(''); //HelloWorldfoo1231,2,3,4
var mySplit = myString.split(''); //Devuelve el anterior


var myObject = {
	myName : "Daniella",
	sayHello : function(){
		console.log("Hello " + this.myName);
	}
};

var myObject = {
	validIdentifier: 123,
	"some string": 456,
	99999: 789
};

var foo = function(){
	var i = 2;
	var j = 3;
	console.log(i+j);
};

//En consola, tipear foo()

var greet = function(person,greeting){
	var text = greeting + ", "+person;
	console.log(text);
};

//greet("Rebeca","Hello");

var greet = function(person,greeting){
	var text = greeting +", "+person;
	return text; 
};

//console.log(greet("Daniella","Hola"));

var greeting = greet("Daniella","Hola");
greeting();



//Autoejecutable en consola
(function(){var foo="Hello World";console.log(foo);})();

//Funcion como argumento
var myFn = function(fn){
	var result = fn();
	console.log(result);
};
myFn(function(){return "Hello World"});	//imprime "Hello World"


//Determinar tipo de variable
var s = "Hola";
typeof s;
var myObject = {
	myName : "Julio",
	myDNI : "41091712",
	myDir : "Av. Juan Velasco 1340",
	myEdad : 44
};

var myArray = [ 'a', 'b', 'c' ];
var myString = 'hello';
var myNumber = 3;
typeof myFunction; // devuelve 'function'
typeof myObject; // devuelve 'object'
typeof myArray; // devuelve 'object' -- tenga cuidado
typeof myString; // devuelve 'string'
typeof myNumber; // devuelve 'number'


//LLAMADA A LOS OBJETOS
var myObject = { 	
	myName : "Julio", 	
	myDNI : "41091712", 	
	myDir : "Av. Juan Velasco 1340", 	
	myEdad : 44, 
	sayHello:function(){
		console.log("Esto es: "+this.myName + "con DNI "+ this.myDNI + "con direccion: "+this.myDir);
	} 
};

myObject.sayHello();

var secondObject = {
	myName:"Colin"
};

myObject.sayHello.call(secondObject);


//Llamando con objeto bind
var myName =	"El objeto es global",
				sayHello : function(){
					console.log("ni nombre es: " + this.myName);
				},
				myObject = {
					myName : "Romina"
				}
			;

var myObjectHello = sayHello.bind(myObject);
//Mi nombre es Romina



var a = function(){ console.log("Este es un nombre: " + this.name);};
var m = a.bind(objeto = {name:"Romina"});

m();
//Este es un nombre: Romina




var nombre = 	"el objeto global",
				sayHello = function(){
					console.log("Hola!, mi nombre es: " + this.name);
				},
				myObject = {
					name : "Daniella"
				},
				mySecondObject = {
					name : "Connie"
				};

sayHello(); // registra 'Hola, mi nombre es el objeto global'
myObject.sayHello(); // registra 'Hola, mi nombre es Daniella'
mySecondObject.sayHello(); // registra 'Hola, mi nombre es Connie'



var myNamespace = {
	myObject : {
		name: "Julio",
		sayHello : function(){
			console.log("Hola, mi nombre es: "+this.name);
		} 
	},
	name : "Eugenia"
};

myNamespace.myObject.sayHello();	//Hola, mi nombre es: Julio


var outerObj = {

	myName : "externo",
	outerFunction : function(){
		var self = this;
		var innerObj = {
			myName : "interno",
			innerFunction : function(){
				console.log(self.myName,this.myName);
			}
		}

		innerObj.innerFunction();
		console.log(this.myName);
	}
};


