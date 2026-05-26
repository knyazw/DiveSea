document.addEventListener('DOMContentLoaded', function() {
    // ========== ТАЙМЕР ДЛЯ ВСЕХ СЛАЙДОВ ==========
    const timers = document.querySelectorAll('.timer');
    
    timers.forEach((timer, index) => {
        let hours = 7, minutes = 9, seconds = 12;
        if (index >= 3) { // Slider4 и Slider5
            hours = 19;
            minutes = 9;
            seconds = 12;
        }
        
        let totalTime = hours * 3600 + minutes * 60 + seconds;
        
        function updateTimer() {
            let h = Math.floor(totalTime / 3600);
            let m = Math.floor((totalTime % 3600) / 60);
            let s = totalTime % 60;
            h = String(h).padStart(2, '0');
            m = String(m).padStart(2, '0');
            s = String(s).padStart(2, '0');
            timer.textContent = `${h}h ${m}m ${s}s`;
            if (totalTime > 0) totalTime--;
            else clearInterval(interval);
        }
        
        updateTimer();
        const interval = setInterval(updateTimer, 1000);
    });
});

const burgerBtn = document.getElementById('burgerBtn');
const dropdown  = document.getElementById('dropdown');
 
burgerBtn.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('open');
    burgerBtn.classList.toggle('open', isOpen);
});

dropdown.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('open');
        burgerBtn.classList.remove('open');
    });
});

document.addEventListener('click', (e) =>{
    if (!dropdown.contains(e.target) && !burgerBtn.contains(e.target)) {
        dropdown.classList.remove('open');
        burgerBtn.classList.remove('open');
    }
});