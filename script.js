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