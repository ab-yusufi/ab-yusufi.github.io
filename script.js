function menuToggle(){
    var nav = document.querySelector('#nav')
    nav.classList.toggle('active')
    var toggle = document.querySelector('#toggle')
    if(toggle.className == 'menuicon fa fa-bars'){
        toggle.classList.remove('fa-bars')
        toggle.className += ' fa-times'
    } else {
        toggle.classList.remove('fa-times')
        toggle.className += ' fa-bars' 
        }
}
