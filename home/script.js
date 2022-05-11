const botaoSaber = document.querySelector('.btn-2')
const modal = document.querySelector('.modal-adicionar');
const botaoAdicionar = document.querySelector('.btn-1');
const modalUpload = document.querySelector('.modal-upload');

const fechar = document.querySelector('.btn-x-2');


//Funcao abrir modal
function abrirModal(){
    modal.style.display = 'flex';
}
botaoSaber.addEventListener('click',function(){
    abrirModal();
})

//Para Sair do Modal
modal.addEventListener('click', function(){
    modal.style.display = 'none'
});


//Funcao abrir modal-UPLOAD
function abrirModalUPLOAD(){
    modalUpload.style.display = 'flex';
}

botaoAdicionar.addEventListener('click',function(){
    abrirModalUPLOAD();
})

// //Para Sair do Modal
// modalUpload.addEventListener('click', function(){
//     modalUpload.style.display = 'none'
// });


//Para sair do Modal
fechar.addEventListener('click',function(){
   modalUpload.style.display = 'none';
})

async function getConteudo(){
    
    try {
        const response = await fetch('http://localhost:6969/users') 
        // console.log(response)
        const data = await response.json()
        console.log(data)
        console.log(data[0].name)

        document.getElementById('nome').textContent
            = data[0].name;

        document.getElementById('total').textContent
            = data[0].totalPlantas;
            


    } catch (error) {
        console.log(error)
    }
}

getConteudo()


