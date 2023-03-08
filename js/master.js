function show_slidenav()
{
    document.querySelector('nav').style.transform="translateZ(0)"; 
    document.querySelector('.overlay').style.opacity="1";
    document.querySelector('.overlay').style.visibility="visible";
}
function hide_overlay()
{
        document.querySelector('nav').style.transform="translate3D(100%, 0 ,0)"; 
        document.querySelector('.process-successfully').style.display="none"; 
        document.querySelector('.overlay').style.opacity="0";
        document.querySelector('.overlay').style.visibility="hidden";
}



window.addEventListener("scroll" , function(){
    var header = document.querySelector("header");
    header.classList.toggle("fixed-header" , window.scrollY > 150 );
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-product");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
switchcolor(0);
function switchcolor(m){
  let dots = document.getElementsByClassName("color");
  let captionTextcolor = document.getElementById("caption-color");
  captionTextcolor.innerHTML = dots[m].alt;
}
switchmodele(0);
function switchmodele(j){
  let dots = document.getElementsByClassName("modele");
  let captionTextcolor = document.getElementById("caption-modele");
  captionTextcolor.innerHTML = dots[j].alt;
}

var element = document.getElementsByClassName('.sticky-cart-bar');
if(typeof(element) != 'undefined' && element != null )
{
  document.querySelector('footer').style.margin="0 0 50px";
}

const myInput = document.getElementById("my-input");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = 1;
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (1) : (-1);
    let newValue = parseInt(val) + calcStep;
    if(newValue >= min){
        myInput.setAttribute("value", newValue);
        document.getElementById("quantity").setAttribute("value", newValue);
    }
}

// let slideIndex2 = 1 ;
// showSlides2(slideIndex2);
// function plusSlides2(n) {
//   showSlides2(slideIndex2 += n);
// }

// function currentSlide2(n) {
//   showSlides2(slideIndex2 = n);
// }

// function showSlides2(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides-avis");
//   if (n > slides.length) {slideIndex2 = 1}
//   if (n < 1) {slideIndex2 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex2-1].style.display = "block";
// }



//seend data
var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {
            // you can put any JS code here
              fbq('track', 'Purchase', {value: 30.00, currency: 'USD'});
              fbq('init', '498018699174553', {
                em: 'email@email.com',         //Values will be hashed automatically by the pixel using SHA-256
                fn: 'first_name',    
                ln: 'last_name' ,
                external_id :'id'
              });
            document.querySelector('.process-successfully').style.display="block"; 
            document.querySelector('.overlay').style.opacity="1";
            document.querySelector('.overlay').style.visibility="visible";
            yes=document.querySelector('.overlay');
            yes.onclick = function(){
              window.location.reload();
            }
       });
        });




