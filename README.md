# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<img src="svreenshot.png" alt="screenshot" />


### Links

- Solution URL: [https://github.com/vgarmy/faq-accordion](https://github.com/vgarmy/faq-accordion)
- Live Site URL: [https://vgarmy.github.io/faq-accordion/](https://vgarmy.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

How yo use react and navigat  with the keyboard

   const handleKeyDown = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevents the default action of the key
            toggleQuestion(index);
        }
    }

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@vgarmy](https://www.frontendmentor.io/profile/vgarmy)