const btn = document.querySelector('.btn-tratamento');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.btn-fechar-modal');

btn.addEventListener('click',function(){
    modal.style.display = 'flex';
})


//Para sair do Modal
fechar.addEventListener('click',function(){
    modal.style.display = 'none';
})
