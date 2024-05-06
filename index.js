const toggleBtn = document.querySelector('.input-toggle');
const socialGridItem = document.querySelectorAll('.grid-item');
const socialCount = document.querySelectorAll('.social-count');
const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const title = document.querySelector('h1');
const metricsTitle = document.querySelector('.metrics-title');
const metricsGrid = document.querySelectorAll('.metrics-grid-item');
const metricsSubtitle = document.querySelectorAll('.metrics-subtitle');
const backdrop = document.querySelector('.backdrop');

const enableDarkMode = () => {
    document.body.classList.add('body-dark');
    backdrop.classList.add('backdrop-dark');
    container.classList.add('body-dark');
    title.classList.add('social-count-dark');
    metricsTitle.classList.add('social-count-dark');

    socialGridItem.forEach(item => {
        item.classList.add('grid-item-dark');
        item.classList.add('grid-item-effect')
    })
    socialCount.forEach(item => {
        item.classList.add('social-count-dark');
    })
    metricsGrid.forEach(item => {
        item.classList.add('grid-item-dark');
        item.classList.add('grid-item-effect')
    })
    metricsSubtitle.forEach(elem => {
        elem.classList.add('social-count-dark');
    })
};

const disableDarkMode = () => {
    document.body.classList.remove('body-dark');
    backdrop.classList.remove('backdrop-dark');
    container.classList.remove('body-dark');
    title.classList.remove('social-count-dark');
    metricsTitle.classList.remove('social-count-dark');

    metricsGrid.forEach(item => {
        item.classList.remove('grid-item-dark');
        item.classList.add('grid-item-effect');
    })
    socialGridItem.forEach(item => {
        item.classList.remove('grid-item-dark');
        item.classList.remove('grid-item-effect');
    })
    socialCount.forEach(count => {
        count.classList.remove('social-count-dark');
    })
    metricsSubtitle.forEach(item => {
        item.classList.remove('social-count-dark');
    })
};

toggleBtn.addEventListener('change', (e) => {
    if(e.target.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});