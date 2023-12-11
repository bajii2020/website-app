//prevent default

submit.addEventListener("click", function (event) {
    event.preventDefault();
  });
  
  //data 
  
  function myFunction(){
    let data = "";  
    let name = document.getElementById("userName").value
    let email = document.getElementById("userEmail").value
    let comment = document.getElementById("comment").value
   
    // cannot submit without the required fields
    if (name == null || name == "", email == null || email == "", comment == null || comment == "") {
      alert("Please Fill All Required Field");
      return false; 
    }
  
   // display data to paragraph 
   data = "fullName: "+name+"<br/>Email: "+email+ "<br/>Comment : "+comment
   document.getElementById("data").innerHTML = data 
   };
  
  
   // limit to 140 characters and count the character number as user types
  let textArea = document.getElementById("comment");
  let charCounter = document.getElementById("char_count");
  const maxNumOfChars = 140;
  
  const countCharacters = () => {
    // calculate the number of characters entered into the textarea
  let numOfEnteredChars = textArea.value.length;
    //calculate the number of characters left 
  let counter = maxNumOfChars - numOfEnteredChars;
    // Display this number in the span tag
    charCounter.textContent = counter + "/140";
  
   let commentBorder = document.getElementById("comment"); 
    if (counter < 0) {
      commentBorder.style.borderColor = "red";
  } else if (counter < 20) {
    commentBorder.style.borderColor = "green";
  } else {
    commentBorder.style.borderColor = "black";
  }
  
  };
  
  textArea.addEventListener("input", countCharacters);
  
