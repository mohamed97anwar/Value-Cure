let myButton = document.getElementById("goup");

window.onscroll = function () {
    if ( window.scrollY >= 2500 ) {
        myButton.style.display = "flex";
    } else {
        myButton.style.display = "none";
    }
};

myButton.onclick = function () {
    window.scrollTo(0,0);
};



let myProduct = document.querySelectorAll(".product");

let myParagraph = document.querySelectorAll("#info");

let oldImg = document.querySelectorAll(".product .img img");


let modal = document.getElementById("the_modal");

let modalImg = document.getElementById("img");

let modalDescription = document.getElementById("modal_info");


for (let i = 0; i < myProduct.length; i++) {
  myProduct[i].onclick = function() {
    modal.style.display = "flex";
    modalImg.src = oldImg[i].src;
    modalDescription.innerHTML = myParagraph[i].innerHTML;
  }
}


// Flip Products
// for (let i = 0; i < myProduct.length; i++) {
//   myProduct[i].onclick = function() {
//     myProduct[i].style.transform = "rotateY(180deg)";
//     myProduct[i].classList.toggle("toggle");
//     if (myProduct[i].classList.contains("toggle")) {
//       myProduct[i].style.transform = "rotateY(-180deg)";
//     } else {
//       myProduct[i].style.transform = "rotateY(0)";
//     }
//   }
// }

let close = document.getElementsByClassName("close")[0];

close.onclick = function() {
  modal.style.display = "none";
};

document.onkeydown = function(ev) {
  if (ev.keyCode == 27) {
    modal.style.display = "none";
  }
}
