$(document).ready(function(){
    $('#input-telefone').mask('(00) 90000-0000');

    const formElement = $('form');
    formElement.submit(function (event) {
        event.preventDefault();

        const formDataArray = formElement.serializeArray();

        if (formDataArray[14].value === 'nao') {
            alert('Pergunta 9 deve ser Sim para continuar!');
            return;
        }

        if (formDataArray[15].value === 'nao') {
            alert('Pergunta 10 deve ser Sim para continuar!');
            return;
        }

        if (formDataArray[16].value === 'nao') {
            alert('Pergunta 11 deve ser Sim para continuar!');
            return;
        }

        this.submit();
    })
});