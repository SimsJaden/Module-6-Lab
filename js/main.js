window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}


function generateOption() {
    const options = document.getElementsByName('option');
    let selectedOption = '';
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selectedOption = options[i].value;
        break;
      }
    }
  
    if (selectedOption) {
      window.location.href = selectedOption + ".html";
    } else {
      alert("Please select an option.");
    }
  }
  
  // Add event listener to the button
  document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector(".generate-container button");
    generateButton.addEventListener("click", generateOption);
  });
  