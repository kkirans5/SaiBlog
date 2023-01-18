function submitForm(e){
    e.preventDefault();
     console.log(document.getElementById('username').value);

     const myForm = document.getElementById('login-form');
     myForm.submit();
} 