document.addEventListener('DOMContentLoaded', function(){
    const params = new URLSearchParams(window.location.search);
    const elementoH1 = params.get('texto');

    const exibirelementoH1 = document.querySelector('.selected-service');
    exibirelementoH1.textContent = `Serviço selecionado: ${elementoH1}`;
});


document.addEventListener('DOMContentLoaded', function(){

    const currentMonthYearElement = document.getElementById('currentMonthYear');
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", 
        "Maio", "junho", "julho", "Agosto", 
        "Setembro", "outubro", "Novembro", "Dezembro"
    ];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    currentMonthYearElement.textContent = `${currentMonth} ${currentYear}`;
});