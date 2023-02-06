// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const posts = document.getElementsByClassName(".media-post")

function assignFunctionality(){
  let allLikeButtons = [...document.querySelectorAll(".like-glyph")]
  allLikeButtons.forEach(function(likeButton){
    likeButton.addEventListener("click", likeFunctionality)
    console.log("worked")
  })
}

assignFunctionality()

function likeFunctionality(event){
  mimicServerCall()
    .then(() => {
      if(event.srcElement.textContent === EMPTY_HEART){
        event.srcElement.textContent = FULL_HEART
        event.srcElement.classList.add("activated-heart");
        console.log("Liked!")
      } else if(event.srcElement.textContent === FULL_HEART){
        event.srcElement.textContent = EMPTY_HEART
        event.srcElement.classList.remove("activated-heart");
        console.log("Un-liked!")
      }
    })
    .catch(() => {
      let errorModal = document.getElementById("modal")
      errorModal.classList.remove("hidden");
      setTimeout(() =>{
        errorModal.classList.add("hidden");
      }, 3000)
    })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
