window.onload = function() {
        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var a = [];
        setInterval(anime, 1000);
       
        function anime() {
		var nb = document.forms[0].elements["nb"];
		var taille = document.forms[0].elements["taille"];
            context.fillStyle = "green";
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (i=0; i<nb; i++) {
                for (j=0; j<nb; j++) {
                    if (Math.random() > 0.9) {
                        a[i*nb+j] = 1;
                        context.fillStyle = "green";
                    } else {
                        a[i*nb+j] = 0;
                        context.fillStyle = "red";
                    }
                    context.fillRect(taille*i, taille*j, taille, taille);
                }
            }
        }
    }
