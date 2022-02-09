function chauchat(disparos) {
   

    while (disparos > 0) {//disparar mientras queden disparos
        const totalDisparos = disparos;//total de disparos a efectuar
        for (i = 1; i <= totalDisparos; i++) {//repetir cada disparo
            if ((Math.random() * 10) < 8) {//probabilidad de que se pille
                console.log("Illo, me he quedao pillá!");
              return//detener si se encasquilla
            } else {//si no se encasquilla
                console.log("Pium!");//disparar
                disparos--;//disparos restantes
                if (i % 3 === 0) {//espacio si se ha disparado 3 veces
                    console.log("");
                }
            }
        }
    }

}
