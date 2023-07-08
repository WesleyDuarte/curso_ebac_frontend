document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formSorteador').addEventListener('submit', function(){
        let numeroMax = document.getElementById('numeroMax').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleatorio = Math.random() * numeroMax;
        alert(numeroAleatorio);
    });
})