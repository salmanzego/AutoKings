
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
  jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Enter your real name"); 
    $("#submit-form").validate({
      rules:{
        name:{
          required:true,
          lettersonly:true
        },
        district:{
          required:true
        },
        address:{
          required:true
        },
        Whatsapp:{
          required:true,
          number:true,
          minlength:10,
          maxlength:10
        },
        rule:{
          required:true
        }
      },
      messages:{
        Whatsapp:{
          minlength:"please enter a valid number",
          maxlength:"please enter a valid number"
        }
      }
    })
    $("#submit-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbz_7G4gECgv7YwN4TcflrbtENAFcDB6PRKk8pyY7iwpg_azeV0/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              window.location.href="success.html"
          },
          error:function (err){
              alert("Something Error")

          }
      })
  })
  });