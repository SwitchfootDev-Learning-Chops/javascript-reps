# jQuery

A JS library that abstracts away DOM manipulation.

Example:

```JavaScript
const login = document.getElementById('login');
const loginMenu = document.getElementById('loginMenu');

login.addEventListener('click', () => {
    if(loginMenu.style.display === 'none'){
        loginMenu.style.display = 'inline';
    } else {
        loginMenu.style.display = 'none';
    }
});
```

is equivalent to

```jQuery
$('#login').click(() => {
    $('#loginMenu').toggle()
});
```

## jQuery Methods

(Not exhaustive)

`$()`
: Targets id, class, or tag to create a jQuery object that can access jQuery methods through dot notation.

```jQuery
$('.someClass').handlerMethod();
$('#someId').handlerMethod();
$('[someTag]').handlerMethod();
```

Variable naming best practice is to start variables that hold jQuery with a `$`

```jQuery
const $someVariable = $('#someId')
```

`.ready()`
: Invokes callback on page load

```jQuery
$(document).ready(() => {
    // Do thing here
});
```

`.on()`
: Method for adding event listeners to jQuery objects

```jQuery
$('#login').on('click', () => {
  $loginForm.show();
})
```

## jQuery Effect Methods

`.show()`
: Equivalent of adding `"display: block;"` to CSS

`.hide()`
: Equivalent of adding `"display: none;"` to CSS

`.toggle()`
: Ability to switch between two states

`.fadeIn()`
: Fade in animation. Optional time argument `$someClass.fadeIn(1000)`

`.fadeOut()`
: Fade out animation. Optional time argument `$someClass.fadeOut(1000)`

`.fadeToggle([duration],[easing],[complete])`
: One method for both fade in and out

`.slideUp()`
: Slide element up and out. Optional time argument (str/num)

`.slideDown()`
: Slide element in and down. Optional time argument (str/num)

`.slideToggle()`
: One method for toggle in and out
