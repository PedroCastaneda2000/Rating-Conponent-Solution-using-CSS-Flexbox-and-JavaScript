const ratingsBtn = document.querySelectorAll("#ratings-btn")
const submitBtn = document.querySelector("#submit-btn")
let mainContainer = document.querySelector("#main-container")

let currentRating
let checkingRating 
let outcomeRating

// Whenever a ratingsBtn is clicked then it will turn orange. If another ratingsBtn is clicked then the previously activated one with be deactivated. (only one will be orange/activated)
ratingsBtn.forEach(ratingsBtn => {
  ratingsBtn.addEventListener("click", e => {
    currentRating = e.target.closest("#ratings-btn");
    currentRating.classList.toggle("active");

    checkingRating = document.querySelectorAll("#ratings-btn.active")

    checkingRating.forEach (ratingsBtn => {
      if (ratingsBtn === currentRating ) {
        outcomeRating = currentRating.textContent
        return  
      }
      
      else {
        ratingsBtn.classList.remove("active")
      }
    })
  })
})

// If the user submits without selecting any rating then the outcomeRating will be set to "none"
if (outcomeRating === undefined) {
  outcomeRating = "none"
}

// When the submitBtn is clicked then the innerHtml will be modified into the thankyou page with the outcomeRating presented. Template strings were used. 
submitBtn.addEventListener("click", function () {
  mainContainer.classList.add("active")
  mainContainer.innerHTML = `
  <!-- @@@@@@@@@@@@@@@@@@@@ thankyou icon @@@@@@@@@@@@@@@@@@@@ -->

  <div class="thankyou__icon">
    <img
      src="./images/illustration-thank-you.svg"
      alt=""
      aria-hidden="true"
    />
  </div>

  <!-- @@@@@@@@@@@@@@@@@@@@ /thankyou icon @@@@@@@@@@@@@@@@@@@@ -->

  <!-- @@@@@@@@@@@@@@@@@@@@ main outcome @@@@@@@@@@@@@@@@@@@@ -->

  <div class="main__outcome">
    <p>You selected ${outcomeRating} out of 5</p>
  </div>

  <!-- @@@@@@@@@@@@@@@@@@@@ /main outcome @@@@@@@@@@@@@@@@@@@@ -->

  <!-- @@@@@@@@@@@@@@@@@@@@ main thanks @@@@@@@@@@@@@@@@@@@@ -->

  <div class="main__thanks">
    <h1>Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </div>

  <!-- @@@@@@@@@@@@@@@@@@@@ /main thanks @@@@@@@@@@@@@@@@@@@@ -->
  `
})
