const toggleButton = document.querySelector('#main');
const aLinks = document.getElementsByTagName('a');


toggleButton.addEventListener('click', () => {
    Array.from(aLinks).forEach((a) => {
        const links = a.classList.toggle('Navbar_ToggleShow
    });
        
//old code
//     for(i=0; i < aLinks.length; i++) {
//      const links = aLinks[i].classList.toggle('Navbar__ToggleShow')
//         }
});


let myIndex = 0;
const carousel = () => {
  let i;
  let x = document.getElementsByClassName("mySlides");
    
    Array.from(x).forEach((element) => {
        element.style.display = "none"; 
    })
//old code
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none"; 
//   }
    
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
carousel();
