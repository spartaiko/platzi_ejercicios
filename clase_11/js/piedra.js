/*
var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina;

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste: " + opcionUsuario);

---------------------------------------//

var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina;

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

if(opcionUsuario == piedra)
{
	alert("Elegiste Piedra!");
}
else if(opcionUsuario == papel)
{
	alert("Elegiste Papel!");
}
else if(opcionUsuario == tijera)
{
	alert("Elegiste Tijera!");
}
else
{
	alert("Whata fack??");
}

---------------------------------------//

var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina = papel;

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

if(opcionUsuario == piedra)
{
	alert("Elegiste Piedra!");
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Perdiste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste!");
	}
}
else if(opcionUsuario == papel)
{
	alert("Elegiste Papel!");
	if(opcionMaquina == piedra)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste!");
	}
}
else if(opcionUsuario == tijera)
{
	alert("Elegiste Tijera!");
	if(opcionMaquina == piedra)
	{
		alert("Perdiste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate!");
	}
}
else
{
	alert("Whata fack??");
}
*/

function patito(minimo, maximo)
{
		var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
		return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"]; /*Array*/

var opcionUsuario;
var opcionMaquina = patito(0,2);

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligio " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Perdiste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste!");
	}
}
else if(opcionUsuario == papel)
{
	if(opcionMaquina == piedra)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste!");
	}
}
else if(opcionUsuario == tijera)
{
	if(opcionMaquina == piedra)
	{
		alert("Perdiste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate!");
	}
}
else
{
	alert("Whata fack??");
}

























