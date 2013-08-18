$(document).ready(function(){
	console.log("El documento esta preparado");
	var t = $("div#contents ul.people li").text();
	console.log(t);

	var u = $("a.external:first");
	console.log(u.text());

	//USO DE EACH PARA RECORRER ELEMENTOS
	var v = $("#myForm input:even");
	$(v).each(function(index){
		console.log(index+", "+$(this).val());
	});

	if($("div.foo").length){
		console.log("Hay div!");
	}
	if($("div.foo").has("p")){
		console.log("Hay p!");
	}
	console.log($("ul.dolina li").first().text());	
	console.log($("ul.dolina li").eq(4).text());

	var linputs = $("#myForm :input:odd");
	$(linputs).each(function(index){
		console.log($(this).val());
	});

	//selectors:
	//:button,:checkbox,:checked;:disabled,:image
	//:text,:submit,:reset,:radio,:selected
	$("#content")
			.find("h3")
			.eq(2)
			.html("tercer elemento")
			.end()
			.eq(0)
			.html("primer elemento");

	//getters y setters
	$(".parrafo").html();
	$(".parrafo").html("Uso de setters");

	console.log($("h3").css("font-size"));
	$("h3").css({"font-size":"30px","color":"red"});
	$("h3").addClass("big");
	$("h3").removeClass("big");
	$("h3").toggleClass("big");

	if($("h3").hasClass("big")){
		console.log("tiene clase big");
	}

	//AGREGAR ELEMENTOS CON ATTR
	//Tambien hay .attr,.text,.html,.width,.height,.position,.val
	$("a.prueba").attr({
		"href": "mostrarLibro.jsp",
		"title": "All titles are too"
	});
	console.log($("a.prueba").attr("href"));

	//copiar, clonar, mover elementos
	$("#lista").insertAfter($("h2").text("Hola"));
	$("#lista").after($("h1").text("Mundo!"));

	$("#lista").before($("p").html("Vida!"));

	$(".lst").append($(".lst li:first"));
	$(".lst li:first").appendTo($(".lst"));
	$(".lst li:first").clone().appendTo($(".lst"));
	$(".lst li:last").remove();
	//$(".lst").empty();

	$('<li class="newLi">Nuevo item de lista</li>')
			.appendTo($(".lst"));

	//creando nuevos elementos
	$("<a/>",{
		"html" : "un <strong>nuevo</strong> enlace",
		"class" : "new",
		"href" : "foo.html"
	}).appendTo($("div#lista"));

	//Crea nuevo elemento, lo pone en un sitio
	//y lo mueve hacia otro con insertAfter
	var myNewElement = $("<p>Nuevo elemento</p>");
	myNewElement.appendTo($("div#content"));
	myNewElement.insertAfter("ul.lst:last");
	//crear y añadir
	$("ul.lst").append("<li>Item de la lista</li>");

	//agregar elementos a ul con un arreglo
	var myItems = [], myList = $("#myList");
	for(var i=0;i<10;i++){
		myItems.push("<li>item"+i+"</li>");
	}
	myList.append(myItems.join(""));

	//manipulacion atributos
	$("a.new").attr("href","newDestination.html");

	$("ul.lst").find("li").eq(4).attr({
		"rel":"super-special",
		"href": "newDestination.html"
	});

	$("ul.lst").find("li").eq(2).attr({
		"rel":"super-special",
		"href": function(idx,href){
			return "/new/"+href;
		}
	});	

	var oCocheInfo = {
		"coloresDisponibles": ["azul","rojo","verde"],
		"puertasDisponibles": [2,4]
	};

	var oCoche =[
		 {
			"color":"rojo",
			"puertas":4,
			"pagado":true,
			"placa":"MN-1546"
		},
		 {
			"color":"azul",
			"puertas":4,
			"pagado":false,
			"placa":"OB-9999"
		},
		 {
			"color":"verde",
			"puertas":2,
			"pagado":true,
			"placa":"KL-1221"
		}
	];

	console.log(oCocheInfo.coloresDisponibles[1]);
	console.log(oCocheInfo.puertasDisponibles[1]);

	JSON.
});