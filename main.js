const form = document.getElementById('formValores');


form.addEventListener('submit',function(e){
    e.preventDefault()

    let aValue = document.querySelector('#aValue');
    let bValue = document.querySelector('#bValue');
    const msgSucesso = `O valor <strong>${aValue.value}</strong> é maior que o valor <strong>${bValue.value}</strong>`
    const msgError = `O valor <strong>${aValue.value}</strong> é menor que o valor <strong>${bValue.value}</strong>`
    if (+aValue.value < +bValue.value){
        const containerMsgError =  document.querySelector('.error')
        const containerMsgSucesso =  document.querySelector('.success')
        containerMsgError.innerHTML = msgError;
        containerMsgError.style.display = 'block';
        containerMsgSucesso.style.display = 'none';
        aValue.value = "";
        bValue.value = "";
    }  
    /*msg de erro sendo alocada na tela */ 
    else{
        const containerMsgSucesso =  document.querySelector('.success')
        const containerMsgError =  document.querySelector('.error')
        containerMsgSucesso.innerHTML = msgSucesso;
        containerMsgSucesso.style.display = 'block';
        containerMsgError.style.display = 'none';
        aValue.value = "";
        bValue.value = "";
    };
})
