// PASSWORD PROTECTION SCRIPT		
function TheLogin() {
    ;
    var navn = 'Grow';
    var password = 'Grow2021';
    if (this.document.login.pass.value == password && this.document.login.name.value == navn) {
        //window.alert("TILLYKKE!!! Kodeord og navn er korrekt og du logges ind :-)");
        top.location.href = "somestrategi.html";
    } else {
        if (this.document.login.pass.value != password || this.document.login.name.value != navn)
            window.alert("Kodeord eller password er forkert - prøv venligst igen");
        /*else if (this.document.login.pass.value != password)
            window.alert("Navn er kendt men Kodeord er forkert - prøv veligst igen :-)");
        else if (this.document.login.name.value != navn)
            window.alert("Navn er ukendt men kodeordet er rigtigt - prøv veligst igen :-)");*/
    }
}

// NAVIGATIONSBAR
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

// LUK NAVIGATIONSBAR
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// UGE-ARRAY
let enUge = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag"
]

let maaneder = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December"
]

let datoKlokkeslaet = new Date()
currentMinutes = datoKlokkeslaet.getMinutes();
currentMinutes = ("0" + currentMinutes).slice(-2);

let klokkeslaet = enUge[datoKlokkeslaet.getDay()] +
    " " +
    datoKlokkeslaet.getDate() +
    "." +
    " " +
    maaneder[datoKlokkeslaet.getMonth()] +
    " " +
    datoKlokkeslaet.getHours() +
    ":" +
    currentMinutes;

arrays.innerHTML = klokkeslaet



// MODAL 1
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
modal1.style.display = "none";
    modal2.style.display = "none";
}

// MODAL 2
var modal = document.getElementById("myModal1");
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img101");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close1")[0];

span.onclick = function() {
    modal.style.display = "none";
modal1.style.display = "none";
    modal2.style.display = "none";
}

// MODAL 3
var modal = document.getElementById("myModal2");
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img201");
var captionText = document.getElementById("caption2");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close2")[0];

span.onclick = function() {
    modal.style.display = "none";
modal1.style.display = "none";
    modal2.style.display = "none";
}

// SLIDESHOW
      var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }