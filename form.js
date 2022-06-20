let Name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let gender = document.getElementById('gender')
let btn = document.getElementById('register')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let nameV = Name.value
    let emailV = email.value
    let passV = password.value
    let genV = gender.value
    localStorage.setItem('name', nameV)
    localStorage.setItem('email', emailV)
    localStorage.setItem('password', passV)
    localStorage.setItem('gender', genV)
})