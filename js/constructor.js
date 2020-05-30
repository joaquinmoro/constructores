// Creamos un función constructora

function coches(marca, anyo, color) {
    this.marca = marca;
    this.anyo = anyo;
    this.color = color;
}

// Declarar 3 variables asignando a cada una de ellas diferentes propiedades de los 10 coches

var marcasCoches = ['SEAT', 'BMW', 'Mercedes', 'Toyota', 'Fiat', 'Ferrari', 'Opel', 'Skoda', 'Tesla', 'Citroen'];
var anyosTodos = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];
var coloresTodos = ['verde', 'amarillo', 'azul marino', 'azul eléctrico', 'negro', 'blanco', 'plateado', 'dorado', 'gris', 'rojo'];

// Loop para las marcas

for (var marca of marcasCoches) {
	coches(marcasCoches);
}

// Loop para los anyos

for (var anyo of anyosTodos) {
	coches(anyosTodos);
}

// Loop para los colores

for (var color of coloresTodos) {
	coches(coloresTodos);
}

// Instanciar la función constructora

var coche = new coches(marca, anyo, color);