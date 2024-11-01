let timer;
const loader = document.getElementsByClassName('loader')[0];

document.addEventListener('click', ()=>{
    clearTimeout(timer);
    console.log('DEBOUNCING',10000);
    if (!loader.classList.contains('lag')) {
        loader.classList.add('lag');
    }
    timer = setTimeout(() => {
        if (loader.classList.contains('lag')) {
            loader.classList.remove('lag');
        }
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }, 10000);
});



// document.addEventListener("DOMContentLoaded", function() {
//     const inputField = document.getElementById('userInput');
//     const submitButton = document.getElementById('submitButton');

//     inputField.addEventListener('input', function() {
//         submitButton.disabled = inputField.value.trim() === ''; 
//     });
// });


window.onload = function () {
    const loadingScreen = document.getElementById('loadingScreen');

    loadingScreen.addEventListener('click', (event) => {
        if(loadingScreen.childElementCount>=3){
            if (!loader.classList.contains('more')) {
                loader.classList.add('more');
            }
            else{
                if(loadingScreen.childElementCount>= 6){
                    loader.classList.add('again');
                }
            }
        }
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = 'Please wait!';

        const popupWidth = 294;
        const popupHeight = 150;
        const left = event.clientX - popupWidth / 2;
        const top = event.clientY - popupHeight / 2;
        popup.style.backgroundColor = '#F5F5F5'
        popup.style.border = '1px solid black'; 
        popup.style.borderRadius = '8px'; 

        popup.style.left = `${left}px`;
        popup.style.top = `${top}px`;

        timer_arr = [1000,1500,0,3000,500];
        var random_lag = timer_arr[~~(Math.random() * timer_arr.length)];
        console.log(random_lag);

        setTimeout(()=>{
            loadingScreen.appendChild(popup);
            console.log("Popup created at:", { left, top });
        },random_lag);
        
        setTimeout(() => {
            loader.setAttribute("class", "loader");
            popup.remove();
        }, 10000);
    });    
};