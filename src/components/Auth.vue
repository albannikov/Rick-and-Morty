<script>
function store(){

var name = document.getElementById('name');
var pw = document.getElementById('pw');
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

if(name.value.length == 0){
    alert('Please fill in email');

}else if(pw.value.length == 0){
    alert('Please fill in password');

}else if(name.value.length == 0 && pw.value.length == 0){
    alert('Please fill in email and password');

}else if(pw.value.length > 8){
    alert('Max of 8');

}else if(!pw.value.match(numbers)){
    alert('please add 1 number');

}else if(!pw.value.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');

}else if(!pw.value.match(lowerCaseLetters)){
    alert('please add 1 lovercase letter');

}else{
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
    alert('Your account has been created');
}
}

//checking
function check(){
var storedName = localStorage.getItem('name');
var storedPw = localStorage.getItem('pw');

var userName = document.getElementById('userName');
var userPw = document.getElementById('userPw');
var userRemember = document.getElementById("rememberMe");

if(userName.value == storedName && userPw.value == storedPw){
    alert('You are logged in.');
}else{
    alert('Error on login');
}
}
</script>

<template>
<div class="login">
    <form name='form-login'>

        <h1>REGISTER</h1>

        <label for="name">Email</label>
        <input type="email" id="name" placeholder="Username" required>

        <label for="pw">Password</label>
        <input type="password"
               id= "pw"
               placeholder="Password" required>

        <ul class="helper-text">
            <li class="length">Must be at least 8 characters long.</li>
            <li class="lowercase">Must contain a lowercase letter.</li>
            <li class="uppercase">Must contain an uppercase letter.</li>
            <li class="special">Must contain a number or special character.</li>
        </ul>
        <input id="rgstr_btn" type="submit" value="Register" onclick="store()">

    </form>
</div>

<div class="login">
    <form name='form-login'>

        <h1>SIGN IN</h1>

        <label for="userName">Email</label>
        <input type="email" id="userName" placeholder="Username" required>

        <label for="userPw">Password</label>
        <input type="password" id= "userPw" placeholder="Password" required>

        <div id="remember">
            <input type="checkbox" value="lsRememberMe" id="rememberMe"
                   style="display: inline-block;">
            <label>Remember me</label>
        </div>

        <input id= "login_btn" type="submit" value="Login" onclick="check()">

    </form>
</div>

  
 
</template>

<style scoped>
form {
    background-color: aquamarine;
}
.read-the-docs {
  color: #888;
}
</style>
