document.addEventListener('DOMContentLoaded', function() {
    // ========== СЛАЙД-ШОУ (ПРОКРУТКА) ==========
    const slidemain = document.querySelector('.slidemain');
    const prevBtn = document.querySelector('.prev-button2');
    const nextBtn = document.querySelector('.next-button2');
    
    if (!slidemain) {
        console.log('Контейнер .slidemain не найден');
        return;
    }
    
    if (!prevBtn || !nextBtn) {
        console.log('Кнопки .prev-button2 или .next-button2 не найдены');
        return;
    }
    
    // Функция получения ширины одного слайда (включая отступы)
    function getSlideWidth() {
        const anySlide = slidemain.querySelector('.Slider1, .Slider2, .Slider3, .Slider4, .Slider5');
        if (anySlide) {
            const style = window.getComputedStyle(anySlide);
            const marginRight = parseFloat(style.marginRight) || 0;
            const marginLeft = parseFloat(style.marginLeft) || 0;
            return anySlide.offsetWidth + marginRight + marginLeft;
        }
        return 310;
    }
    
    // Прокрутка влево
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const slideWidth = getSlideWidth();
        slidemain.scrollBy({
            left: -slideWidth,
            behavior: 'smooth'
        });
        console.log('← Влево на', slideWidth);
    });
    
    // Прокрутка вправо
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const slideWidth = getSlideWidth();
        slidemain.scrollBy({
            left: slideWidth,
            behavior: 'smooth'
        });
        console.log('→ Вправо на', slideWidth);
    });
    
    // Прокрутка колёсиком мыши по горизонтали
    slidemain.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            slidemain.scrollLeft += e.deltaY > 0 ? 50 : -50;
        }
    });
    
    console.log('✅ Слайд-шоу готово! Ширина слайда:', getSlideWidth());
    
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

    // ========== MOBILE HEADER MENU ==========
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', function() {
            burgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        mobileMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                burgerBtn.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });
    }

});