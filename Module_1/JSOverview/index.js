function handlePassword(){
    if(document.getElementById('pw').type == 'password'){
        document.getElementById('pw').type = 'text';
        document.getElementById('btn').innerText = 'Hide Password'
    }
    else{
        document.getElementById('pw').type = 'password';
        document.getElementById('btn').innerText = 'Show Password'
    }
}