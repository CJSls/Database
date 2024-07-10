const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('#wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});


document.getElementById('wrapper').addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (email === 'admin' && pass === '123456789'){
        alert("Log In Succesfully! Click OK");
        window.location.href ='profiles.html';
    } else {
        alert("Log In Failed");
    }
});