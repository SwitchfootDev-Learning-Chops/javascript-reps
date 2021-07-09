# jQuery

Running thoughts:

- Abstracts away DOM manipulation.

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
