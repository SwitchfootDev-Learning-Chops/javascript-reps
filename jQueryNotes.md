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

`$()`
: Targets id, class, or tag to create a jQuery object that can access jQuery methods through dot notation

```jQuery
$('.someClass').handlerMethod();
$('#someId').handlerMethod();
$('[someTag]').handlerMethod();
```

`.ready()`
: Invokes callback on page load

```jQuery
$(document).ready(() => {
    // Do thing here
});
```

`.show()`
: Equivalent of adding `"display: block;"` to CSS

`.hide()`
: Equivalent of adding `"display: none;"` to CSS
