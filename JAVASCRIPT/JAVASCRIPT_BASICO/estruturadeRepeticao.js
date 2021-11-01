//Comando FOR
//Serve para repetir uma coisa determinado numero de vezes
//Vejamos:

var numero = 1; //aqui eu coloquei um controle de quantidade de vezes

for (vez = 0; vez < numero; vez++) {
    console.log(numero + " x " + vez + " = " + (vez * numero));
}


//Comando While (enquanto)
//Deve se atentar para o incremento, caso contrário, cairemos no looping infinito.
while (numero < 10) {
    console.log(numero + " x " + numero + " = " + (numero * numero));
    numero++
}
//Devemos fazer o uso do while quando:
//Queremos que uma condição seja satisfeita, porém,
//não sabemos quando ela vai ser..