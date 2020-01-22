var getin = prompt("INTRODUZCA LA CONTRASEÑA PARA INGRESAR A ESTA PÁGINA")
        if (getin!="galeria") {
            alert('NO HAS INGRESADO A ESTA PÁGINA')
            location.href='index.html#blog'
        } else {
            alert('INGRESASTE CON ÉXITO A ESTA PÁGINA')
        }