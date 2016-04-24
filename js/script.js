$(document).ready(function() {
	var $inicio = $("#inicio");
	var $estudios = $("#academico");
	var $acerca = $("#acerca");
	var $contacto = $("#contacto");

	$("#home").click(function (event) {
		ocultarMostrar($inicio, $estudios, $acerca, $contacto);
	});
	$("#study").click(function (event) {
		ocultarMostrar($estudios, $inicio, $acerca, $contacto);
	});
	$("#likes").click(function (event) {
		ocultarMostrar($acerca, $inicio, $estudios, $contacto);
	});
	$("#contactme").click(function (event) {
		ocultarMostrar($contacto, $inicio, $estudios, $acerca);
	});

	var ocultarMostrar = function (id1, id2, id3, id4) {
		id1.fadeIn("slow");
		id2.fadeOut(100);
		id3.fadeOut(100);
		id4.fadeOut(100);
	};

// Crear color de forma aleatoria
var randomColor = function(){
        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
        	(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
        };

        



    });