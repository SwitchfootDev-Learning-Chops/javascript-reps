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

### Common Methods

`$()`
: Targets id, class, or tag to create a jQuery object that can access jQuery methods through dot notation.

```jQuery
$('.someClass').handlerMethod();
$('#someId').handlerMethod();
$('[someTag]').handlerMethod();
```

Variable naming best practice is to start variables that use jQuery with a `$`

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

---

### jQuery Attributes

[Full listing here]('https://api.jquery.com/category/attributes/)

#### Common Attributes

`.addClass()`
: Add class name to element

`.removeClass()`
: Remove class name from element

`.toggleClass()`
: Add and remove with one method

---

### jQuery Effect Methods

[Full listing here]('https://api.jquery.com/category/events/)

#### Common Effects

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

`.animate({}, [optional time])`
: CSS value changes over time

---

### jQuery Events

[Full listing here]('https://api.jquery.com/category/events/)

#### Common Events

- mouseenter
- mouseleave
- click
- dblclick
- mousemove
- keydown
- keypress
- keyup

---

##### NOTES

- Events can be chained

```jQuery
  $('.product-photo').on('mouseenter', () => {
    $('.product-photo').addClass('photo-active')
  }).on('mouseleave', () => {
     $('.product-photo').removeClass('photo-active')
  });
```

- `$(event.currentTarget)` <----- Hi! I am your BFF for event actions!

```jQuery
  $('.product-photo').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('photo-active')
  });
```

- You can bind more than one event to the same listener

```jQuery
  $menu.on('mouseenter mouseleave', () => {
    $navMenu.toggle();
  });
```
