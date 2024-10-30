# jQuery Practice Project 🎉

This project is a simple demonstration of jQuery functionality and event handling in web development. It includes various features that allow users to interact with the page, showcasing the ease of manipulating the DOM using jQuery.

## Project Overview

The project demonstrates the following jQuery features:

- **DOM Manipulation**: Using jQuery to modify elements in the HTML.
- **Event Handling**: Adding event listeners to various elements to respond to user actions.
- **Dynamic Content**: Modifying the HTML content dynamically based on user interactions.

## Features

- **Change Title Color**: Clicking on the heading (`<h1>`) changes its color to green.
- **Display Key Presses**: The title (`<h1>`) displays the key pressed by the user when typing in the input field.
- **Add New Button**: A new button is added before the heading dynamically.
- **Change Title Color on Button Click**: A button click changes the color of the heading to red.

## Code Snippets

Here are some key code snippets from the project:

```javascript
// Add class to the heading
// $('h1').addClass('big-title');

// Change button text
// $('button').html('<em>dont click me</em>');

// Set hyperlink attribute
// $('a').attr('href', 'https://www.google.com');

// Change heading color on click
$('h1').click(function() {
    $('h1').css('color', 'purple');
});

// Change heading color on button click
$('#click').click(function() {
    $('h1').css('color', 'green');
});

// Display key pressed in the input field
$('input').keypress(function(k) {
    $('h1').html(k.key);
});

// Add a new button before the heading
$('h1').before('<button>New</button>');
