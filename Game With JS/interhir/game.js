var t ;
var sec=0;
var min=0;
function settime() {

        sec++;
        document.getElementById("SecEmp").innerHTML=(sec);
        if(sec==60){
            min++;
            document.getElementById("MinEmp").innerHTML=(min);
            sec=0;
        }
    }

    function resetTi(){
        document.getElementById("divStart").style.display="none";
        t = setInterval(settime,1000);
        }
     
    function stopTi(){
        document.getElementById("divStart").style.display="block";
        clearInterval(t);
    }

  

var tmp=[" "];
var countOfCorrect=0;
function  rotateOnClick(ee) {
    
    var numClick = ee.getAttribute("flagclick");
    if (numClick == '0') {
        var name = ee.getAttribute("father-name");
        ee.style.transform = "rotateY(180deg)";
        ee.setAttribute("state", '1');
        ee.setAttribute("flagclick", '1');
        if (tmp[0] == " ") {
            tmp[0] = name;
        }
        else if (tmp[0] == name) {
            tmp[0] = " ";
            countOfCorrect++;
            document.getElementsByClassName(name)[0].setAttribute("state", '2');
            document.getElementsByClassName(name)[1].setAttribute("state", '2');
            document.getElementsByClassName(name+'1').item(0).style.opacity = '.5';
            document.getElementsByClassName(name+'1').item(1).style.opacity = '.5';
        }
        else {
            tmp[0] = " ";
            for (let iii = 0; iii < 16; iii++) {
                var state = document.getElementById(iii).getAttribute("state");
                if (state == '1') {
                    setTimeout(function () {
                        document.getElementById(iii).style.transform = "rotateY(0deg)";
                        document.getElementById(iii).setAttribute("flagclick", '0');
                        document.getElementById(iii).setAttribute("state", '0');
                    }, 1000);
                }
            }
        }
    }
    if(countOfCorrect==8){
        setTimeout(function () { alert("great Success !! agine please");},500);
        clearInterval(t);
        setTimeout(function () {
            window.open("game.html");
        },1000);

    }
}








for (let ggg=0;ggg<16;ggg++){
    var r=Math.random()*15;
    var rr=Math.floor(r);
    document.getElementById(ggg).style.order=rr;
}
