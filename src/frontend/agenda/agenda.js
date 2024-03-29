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

document.addEventListener('DOMContentLoaded', function(){
    const cards = document.querySelectorAll('.card');
    let selectedCard = null; // Variável para armazenar o card selecionado

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Verifica se o card clicado é o mesmo card selecionado atualmente
            if (selectedCard === card) {
                // Se sim, desmarca o card selecionado
                card.classList.remove('selected');
                card.querySelector('h5').style.color = ''; // Restaura a cor do texto do h5
                card.querySelector('h6').style.color = ''; // Restaura a cor do texto do h6
                selectedCard = null; // Limpa o card selecionado
                hideAvailableHours();
            } else {
                // Se não, desmarca o card selecionado anteriormente, se houver
                if (selectedCard) {
                    selectedCard.classList.remove('selected');
                    selectedCard.querySelector('h5').style.color = ''; // Restaura a cor do texto do h5
                    selectedCard.querySelector('h6').style.color = ''; // Restaura a cor do texto do h6
                }
                // Marca o novo card como selecionado
                selectedCard = card;
                card.classList.add('selected');
                card.querySelector('h5').style.color = '--text-primary-color'; // Altera a cor do texto do h5
                card.querySelector('h6').style.color = '--text-primary-color'; // Altera a cor do texto do h6
                // Exibir os horários disponíveis
                displayAvailableHours();
            }
        });
    });

     // Event listener para o botão "Finalizar"
    const btnFinish = document.querySelector('.btn-finalizar');
    btnFinish.addEventListener('click', function() {
         // Salvar o horário selecionado no LocalStorage
        saveSelectedTimeToLocalStorage();
         // Exibir mensagem de confirmação
        alert('Horário selecionado foi salvo com sucesso!');
    });

});

document.addEventListener('DOMContentLoaded', function(){
    const cardsHours = document.querySelectorAll('.card-hours');
    let selectedCardHours = null; // Variável para armazenar o card horas selecionado

    cardsHours.forEach(function(cardHour) {
        cardHour.addEventListener('click', function() {
            // Verifica se o card hours clicado é o mesmo card selecionado atualmente
            if (selectedCardHours === cardHour) {
                // Se sim, desmarca o card horas selecionado
                cardHour.classList.remove('selected');
                cardHour.querySelector('h2').style.color = ''; // Restaura a cor do texto do h2
                selectedCardHours = null; // Limpa o card selecionado
            } else {
                // Se não, desmarca o card horas selecionado anteriormente, se houver
                if (selectedCardHours) {
                    selectedCardHours.classList.remove('selected');
                    selectedCardHours.querySelector('h2').style.color = ''; // Restaura a cor do texto do h2
                }
                // Marca o novo card horas como selecionado
                selectedCardHours = cardHour;
                cardHour.classList.add('selected');
                cardHour.querySelector('h2').style.color = 'white'; // Altera a cor do texto do h2 para branco
                displayAvailablebtnFinish();
            }
        });
    });
});






function displayAvailablebtnFinish(){
    const btnFinish = document.querySelector('.btn-finalizar');
    btnFinish.style.display = "block";
}


function getDayName(dayIndex){
    const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    return days[dayIndex];
}


function hideAvailableHours (){
    const selectHours = document.querySelector('.select-hours');
    selectHours.style.display = "none";
}
 
function displayAvailableHours() {
    const selectHours = document.querySelector('.select-hours');
    const btnFinish = document.querySelector('.btn-finalizar');
    selectHours.style.display = "block";
    

    // Lógica para exibir os horários disponíveis
    const availableHours = getAvailableHoursFromLocalStorage();
    const cardsHours = document.querySelector('.cards-hours');
    cardsHours.innerHTML = ''; // Limpa a lista de horários

    if (availableHours && availableHours.length > 0) {
        // Exibir horários disponíveis do LocalStorage
        availableHours.forEach(function(hour) {
            const card = document.createElement('div');
            card.classList.add('card-hours');
            card.innerHTML = `<h2>${hour}</h2>`;
            cardsHours.appendChild(card);
        });
    } else {
        // Exibir horários padrão
        const defaultHours = [
            "09:00", "09:30", "10:00", "10:30", "11:00", 
            "14:00", "14:30", "15:00", "15:30", "16:00", 
            "16:30", "17:00", "17:30", "18:00", "18:30"
        ];
        defaultHours.forEach(function(hour) {
            const card = document.createElement('div');
            card.classList.add('card-hours');
            card.innerHTML = `<h2>${hour}</h2>`;
            cardsHours.appendChild(card);
        });
    }
}

function saveSelectedTimeToLocalStorage() {
    // Lógica para salvar o horário selecionado no LocalStorage
}

function getAvailableHoursFromLocalStorage() {
    // Lógica para obter os horários disponíveis do LocalStorage
}