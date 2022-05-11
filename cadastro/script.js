const inputSenha = document.querySelector('#senha');
const olho = document.querySelector('.foto-1 img');
const formulario = document.querySelector('form');
const inputs = document.querySelectorAll('#email');

function olhoClicar(){
    let inputTypeSenha = inputSenha.type == "password"; //retorna um booleano

    if(inputTypeSenha){//Se o tipo de input for senha
        mostrarSenha()
    }
    else{
        esconderSenha()
    }
}

function mostrarSenha(){
    inputSenha.type = "text";
    olho.src = '../login/assets/olho-aberto.svg'
}

function esconderSenha(){
    inputSenha.type = "password";
    olho.src = '../login/assets/olho-fechado.svg'

}


formulario.addEventListener('submit', function(event){
    if(!inputs.value || !inputSenha.value){
        event.preventDefault();  // funcao que previni alguns comportamentos padroes 
    }
    let senha = inputSenha.value;
    console.log(senha);
})

async function getDados(){
    try {  
        const body = {
            name: name,
            age: age
        };
    const response = await fetch('http://localhost:6969/users',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(body)
    }) ;
    const data = await response.json();
    console.log(data);

    } catch (error) {
        console.log(error)
    }
}
getDados()