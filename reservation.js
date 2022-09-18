// Stuart Daniells
// C0829441

// on DOM creation (webpage load)
$(document).ready(function() {
   // moving focus to first text box on load
   $("#arrival_date").focus();

   // form validation using jquery
   $("#reservation_form").validate({
      rules: {
         arrival_date: {
             required: true,
             date:true
         },
         nights: {
             required: true,
             digits: true
         },
         adults: {
             required: true
         },
         children: {
             required: true
         },
         room: {
             required: true
         },
         bed: {
             required: true
         },
         name: {
             required: true
         }, 
         email: {
             required: true,
             email: true
         },
         phone: {
             required: true,
             minlength: 10,
             maxlength: 12,
             digits: true
         }
      },

      // custom error message for Nights text box
     messages: {
         nights: {
             required: "Please enter the number of nights.",
             digits: "Enter digits only."
         }
      }
   });
}); // end ready
