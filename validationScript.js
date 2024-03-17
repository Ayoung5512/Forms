    // JavaScript code for form validation
  // Prevent form from submitting

  
    
  // Retrieve the input field value

  // Regular expression pattern for alphanumeric input
      
      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message


  var inputElement = document.getElementById('inputField')
  var inputValue = inputElement.value;
  

 document.getElementById('myForm').addEventListener('submit', function (event) {
        let inputF = document.getElementById(inputValue);
        
        if (inputF != /^[a-zA-Z0-9]*$/) {
          event.preventDefault();
        } 
 
  function validateInput() {
         let inputString = document.getElementById('inputField').value;
         let regex = /^[a-zA-Z0-9]*$/;
         if (!regex.test(inputString)) {
           alert('Invalid format');
       } else {
        alert('Form submitted');
       }
             }
             
  
 
 validateInput();
 
      })


  


    
      
    
    
    


      