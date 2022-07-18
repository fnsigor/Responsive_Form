function showPassword(){
    
    const input = document.getElementById("senha")

    if(input.getAttribute("type") == "password"){
        input.setAttribute('type', 'text')
    } else{
        input.setAttribute('type', 'password')
    }
}