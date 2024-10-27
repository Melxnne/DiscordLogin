var login = document.getElementById('login')

login.addEventListener('click', function () {
    if ('alt' in window) {
        alt.emit("StartAuth")
    }
})