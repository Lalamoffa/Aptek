// Elementlər
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');

// Səbət ikonuna klik
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Modal bağlama düyməsinə klik
closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Modal pəncərədən kənara kliklə bağlamaq
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

const list = document.querySelectorAll('.list')
function active() {
    list.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach(item => item.addEventListener('click', active));

function activateMenu(selectedItem) {
    const allMenuItems = document.querySelectorAll('.menu-item');
    allMenuItems.forEach(item => item.classList.remove('active'));

    selectedItem.classList.add('active');

    const pageTitle = document.getElementById('page-title');
    const page = selectedItem.getAttribute('data-page');

    switch (page) {
        case 'home':
            pageTitle.textContent = 'Ana Sayfa';
            break;
        case 'calculator':
            pageTitle.textContent = 'Documents Page';
            break;
        case 'profile':
            pageTitle.textContent = 'Profile Page';
            break;
        default:
            pageTitle.textContent = 'Home Page';
    }
}