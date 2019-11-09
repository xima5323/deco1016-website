let bgImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
let bgIdx = 0

// switch to previous background image
function prevBg () {
    bgIdx = (bgIdx - 1) % bgImgs.length
    if (bgIdx < 0) {
        bgIdx = bgImgs.length - 1
    }
    document.getElementById('header').style.backgroundImage = 'url(static/images/' + bgImgs[bgIdx] + ')'
}

// switch to next background image
function nextBg () {
    bgIdx = (bgIdx + 1) % bgImgs.length
    document.getElementById('header').style.backgroundImage = 'url(static/images/' + bgImgs[bgIdx] + ')'
}

function toggleNav () {
    let items = document.getElementsByClassName("nav-item")
    let webItems = document.getElementsByClassName("nav-web")
    let toggleBtn = document.getElementById("toggleBtn")

    // change text of toggle button
    let openNav = true
    if (toggleBtn.firstChild.data == "☰") {
        toggleBtn.firstChild.data = "|||"
    } else {
        toggleBtn.firstChild.data = "☰"
        openNav = false
    }

    // show or hide items
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = openNav ? "block" : "none"
    }

    // hide web items
    for (let i = 0; i < webItems.length; i++) {
        webItems[i].style.display = "none"
    }

    // show logo
    document.getElementById("logo").style.display = "flex"
}

function signup () {
    let form = document.getElementById('signup-form')
    if (form.checkValidity()) {
        window.alert('Sign Up successful!')
        window.location.href = 'courses.html'
    }
}

function signin () {
    let form = document.getElementById('signin-form')
    if (form.checkValidity()) {
        window.alert('Sign In successful!')
        window.location.href = 'courses.html'
    }
}