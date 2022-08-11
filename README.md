# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [https://github.com/pgc0004/Interactive-Rating-Conponent-Website.git]
- Live Site URL: [https://rating-conponent-solution-using-css-flexbox-and-javascript.netlify.app]

## My process

1. Layed out the HMTL and the CSS.
2. Modified the HTML and CSS to be used alongside the JavaScript.
3. Used JavaScript to listen to click events and toggle the the ratings buttons.
4. Next used JavaScript to modify the DOM to display the Thank You section.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

1. Whenever a ratingsBtn is clicked then it will turn orange. If another ratingsBtn is clicked then the previously activated one with be deactivated. (only one will be orange/activated)

```js
const proudOfThisFunc = () => {
  ratingsBtn.forEach((ratingsBtn) => {
    ratingsBtn.addEventListener("click", (e) => {
      currentRating = e.target.closest("#ratings-btn");
      currentRating.classList.toggle("active");

      checkingRating = document.querySelectorAll("#ratings-btn.active");

      checkingRating.forEach((ratingsBtn) => {
        if (ratingsBtn === currentRating) {
          outcomeRating = currentRating.textContent;
          return;
        } else {
          ratingsBtn.classList.remove("active");
        }
      });
    });
  });
};
```
