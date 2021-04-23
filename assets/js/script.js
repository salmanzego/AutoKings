/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  
    document.getElementById("logo").style.display = "none";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("logo").style.display = "block";
  }
  $(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 80) {
        $(".mynav").css("background-color", "#111"); 
      } else {
        $(".mynav").css("background-color", "transparent");
      }
    });
    if ($(document).scrollTop() > 80) {
      $(".mynav").css("background-color", "#111"); 
    } else {
      $(".mynav").css("background-color", "transparent");
    }
  });

  

$(document).ready(function(){
  let video = document.querySelector('video');
  let text = document.querySelector('.headline');
  let joinbtn = document.querySelector('.joinbtn')
  window.addEventListener('scroll' , function(){
  let value = 1 + window.scrollY/-200 ;
  video.style.opacity = value ;
  let value1 = 1 + window.scrollY/-200 ;
  text.style.opacity = value1 ;
  let value2 = 1 + window.scrollY/-200 ;
  joinbtn.style.opacity = value1 ;
})
});


