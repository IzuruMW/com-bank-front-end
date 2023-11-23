function show1 () {
    document.getElementById('div1').style.display = "block";
    document.getElementById('div2').style.display = "none";
    document.getElementById('div3').style.display = "none";
    document.getElementById('div4').style.display = "none";
    document.getElementById('div5').style.display = "none";
    document.getElementById('div6').style.display = "none";
    document.getElementById('div7').style.display = "none";

}
function show2 () {
    document.getElementById('div1').style.display = "none";
    document.getElementById('div2').style.display = "block";
    document.getElementById('div3').style.display = "none";
    document.getElementById('div4').style.display = "none";
    document.getElementById('div5').style.display = "none";
    document.getElementById('div6').style.display = "none";
    document.getElementById('div7').style.display = "none";

}
function show3 () {
    document.getElementById('div1').style.display = "none";
    document.getElementById('div2').style.display = "none";
    document.getElementById('div3').style.display = "block";
    document.getElementById('div4').style.display = "none";
    document.getElementById('div5').style.display = "none";
    document.getElementById('div6').style.display = "none";
    document.getElementById('div7').style.display = "none";

}
function show4 () {
    document.getElementById('div1').style.display = "none";
    document.getElementById('div2').style.display = "none";
    document.getElementById('div3').style.display = "none";
    document.getElementById('div4').style.display = "block";
    document.getElementById('div5').style.display = "none";
    document.getElementById('div6').style.display = "none";
    document.getElementById('div7').style.display = "none";

}
function show5 () {
    document.getElementById('div1').style.display = "none";
    document.getElementById('div2').style.display = "none";
    document.getElementById('div3').style.display = "none";
    document.getElementById('div4').style.display = "none";
    document.getElementById('div5').style.display = "block";
    document.getElementById('div6').style.display = "none";
    document.getElementById('div7').style.display = "none";

}
function show6 () {
    document.getElementById('div1').style.display = "none";
    document.getElementById('div2').style.display = "none";
    document.getElementById('div3').style.display = "none";
    document.getElementById('div4').style.display = "none";
    document.getElementById('div5').style.display = "none";
    document.getElementById('div6').style.display = "block";
    document.getElementById('div7').style.display = "none";

}
function show7 () {
    document.getElementById('div1').style.display = "none";
    document.getElementById('div2').style.display = "none";
    document.getElementById('div3').style.display = "none";
    document.getElementById('div4').style.display = "none";
    document.getElementById('div5').style.display = "none";
    document.getElementById('div6').style.display = "none";
    document.getElementById('div7').style.display = "block";

}




$(document).ready(function() {
    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("text-ro");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("text-ro").addClass("btn-primary");   
    });
    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btntrangle").addClass("text-ro");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("text-ro").addClass("btntrangle");   
    });
   
    });
         
// function show1() {
//     document.getElementById('btnbtn').style.color = "white"
// }
             
// function show2() {
//     document.getElementById('btnbtn').style.color = "white"
//     }
//     function show3() {
//         document.getElementById('btnbtn').style.color = "white"
//         }


// function businessBanking() {
//     document.getElementById('corpBank').style.display='block';
// }
function openCity(evt, comBank) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(comBank).style.display = "block";
    evt.currentTarget.className += " active";
  }

document.getElementById("defaultOpen").click();