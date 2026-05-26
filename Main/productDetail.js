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