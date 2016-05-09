window.onload = function() {
        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var a = [];
	var time = 1000;
        var inter = setInterval(anime, time);
	setInterval(edittime, 10);



	function edittime(){
		var timeChange = document.forms[0].elements["time"].value;
		if (time != timeChange) {
			clearInterval(inter);
			time = timeChange
			inter = setInterval(anime, time);
		}
	}
       
        function anime() {
		var nb = document.forms[0].elements["nb"].value;
		var taille = document.forms[0].elements["taille"].value;
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
