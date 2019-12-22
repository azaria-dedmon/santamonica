const toggleButton = document.querySelector('#main');
const aLinks = document.getElementsByTagName('a');


toggleButton.addEventListener('click', () => {
    for(i=0; i < aLinks.length; i++) {
     const links = aLinks[i].classList.toggle('Navbar__ToggleShow')
        }
});


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}