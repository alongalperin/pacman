 // Wait for the DOM to be ready
$(function() {   
   $.validator.addMethod("regex", function(value, element, regexpr) {
     var flag = false;
     var regexTemplate = /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/;
     return regexTemplate.test(value);
   }, "Please enter a valid pasword.");
    
   $.validator.addMethod("notContainingNumbers", function(value, element, regexpr) {
     var regexTemplate = /\d/;
     return !regexTemplate.test(value);
   }, "containing number.");
   
   $.validator.addMethod("isUserExists", function(user, element, regexpr) {
     if ((user in users) == false)
     {
         return true; // username is free
     } else {
        return false; // username is taken
     }
   }, "username already exsists.");
    
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      username: { required : true,
                isUserExists : true
      },
      password: {
         required : true,
         regex: true,
         minlength: 8
      },
      firstname: {
          required: true,
          notContainingNumbers: true
      },
       lastname: {
          required: true,
          notContainingNumbers: true
       }, 
       email: {
           required: true,
           email: true
       }, 
       birth_date: {
        required: true
       }
    },
      
    // Specify validation error messages
    messages: {
      username: {
          required: "Please enter username",
          isUserExists: "Username already taken"
      },
      password: {
          required: "password is required",
          minlength: "password in 8 chars minmum",
          regex: "password should contain at least 1 letter and 1 digit",
      },
      firstname: {
          required: "firstname is required",
          notContainingNumbers: "firstname shouldn't contain numbers"
      },
      lastname: {
          required: "lastname is required",
          notContainingNumbers: "lastname shouldn't contain numbers"
      },
      email: {
          required: "email is required"
      },
      birth_date: {
          required: "please select your birth date is required"
      }
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
      insertUser(form[0].value, form[1].value);
      $("#p_regSuccsess").text( "Register Successfully " + form[0].value );
    }
  });
});