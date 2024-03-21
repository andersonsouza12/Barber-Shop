document.addEventListener('DOMContentLoaded', function(){
    
    // Preencher Serviço Selecionado
    const params = new URLSearchParams(window.location.search);
    const elementoH1 = params.get('texto');
    const exibirelementoH1 = document.querySelector('.selected-service');
    exibirelementoH1.textContent = `Serviço selecionado: ${elementoH1}`;

    // Preencher o mês e o ano Atual
    const currentMonthYearElement = document.getElementById('currentMonthYear');
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", 
        "Maio", "Junho", "Julho", "Agosto", 
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();
    currentMonthYearElement.textContent = `${currentMonth} ${currentYear}`;

    // Preencher os dias da semana e as datas
    const daysOfWeek = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];
    const currentDayOfMonth = currentDate.getDate();
    const currentDayOfWeek = currentDate.getDay();
    const daysToSubtract = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    
    for(let i = 0; i < daysOfWeek.length; i++) {
        const dayOfWeekElement = document.getElementById(daysOfWeek[i]);
        const dateElement = document.getElementById(`${daysOfWeek[i]}Date`);
        const date = new Date(currentDate);
        date.setDate(currentDayOfMonth - daysToSubtract + i);
    
        const dayName = getDayName(date.getDay());
        const dayOfMonth = date.getDate();
    
        dayOfWeekElement.textContent = dayName;
        dateElement.textContent = dayOfMonth;
    }
});

function getDayName(dayIndex){
    const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    return days[dayIndex];
}
