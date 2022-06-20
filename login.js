let email = document.getElementById('email');
let password = document.getElementById('password');
let login = document.getElementById('login');

login.addEventListener('click', (e) => {
    e.preventDefault();
    let emailV = email.value;
    let passwordV = password.value;
    let emailDB = localStorage.getItem('email')
    let passwordDB = localStorage.getItem('password')
    if(emailV === emailDB && passwordV === passwordDB){
        window.location.href = 'dashboard.html';
    }
    else{
        alert('Invalid email or password');
    }
})