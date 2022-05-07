const inputSenha = document.querySelector('#senha');
const olho = document.querySelector('.foto-1 img');

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
    olho.src = './assets/olho-aberto.svg'
}

function esconderSenha(){
    inputSenha.type = "password";
    olho.src = './assets/olho-fechado.svg'

}