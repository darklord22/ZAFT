/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*alert("Hola Món");
 var semaforo = 0;
 var tabla = {"1": "2", "3": "4"};
 ++semaforo;*/
/*semaforo empieza en 1*/
/*if (semaforo == "1") alert("1"); else if (semaforo == "2") alert("2"); else alert("0");*/
/*switch();*/
/* var i = 0;
 for ( i in tabla);
 isNaN(semaforo);
 semaforo.toFixed();*/
var semaforo = 1;
var tamano = 10;
while (semaforo <= tamano) {
    var semaforo1 = 1;
    if (semaforo > 9) {
        var final1 = semaforo % 10;
    } else {
        final1 = semaforo;
    }
    var tabla1 = [final1];
    while (semaforo1 < semaforo) {
        var final = semaforo + semaforo1;
        if (final > 9) {
            final = final % 10;
        }
        tabla1.push(final);


        semaforo1++;
    }
    semaforo2 = 1;
     while (semaforo2 < semaforo) {
        var final = semaforo - semaforo2 + semaforo1 - 1;
        if (final > 9) {
            final = final % 10;
        }
        tabla1.push(final);


        semaforo2++;
    }

    var semaforo1 = 1;
    while (semaforo1 <= (tamano - semaforo)) {
        document.write("&nbsp");
        semaforo1++;
    }

    for (i in tabla1) {
        document.write(tabla1[i]);
    }
    document.write("<br/>")
    semaforo++;
}


