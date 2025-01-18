const checkButtons = document.querySelectorAll('.check');
const selectedProductsList = document.getElementById('selected-products');
const totalPriceElement = document.getElementById('total-price');

let total = 0;

checkButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Default link davranışını ləğv edir

        const productCard = this.closest('.product-card'); // Ən yaxın product-card-ı seç
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // Məhsul artıq seçilibsə
        if (productCard.classList.contains('selected')) {
            // Kartı seçilmişlərdən çıxar
            productCard.classList.remove('selected');
            productCard.querySelector('.check i').classList.remove('checked-icon'); // İkonun rəngini sil
            selectedProductsList.querySelector(`[data-id="${productCard.dataset.id}"]`).remove();
            total -= productPrice; // Ümumi qiyməti azaldır
        } else {
            // Məhsulu seçilmişlərə əlavə et
            const clonedCard = productCard.cloneNode(true); // Kartı klonla
            clonedCard.setAttribute('data-id', productCard.dataset.id); // Klon üçün ID təyin et
            clonedCard.classList.add('small'); // Kiçildilmiş görünüş
            selectedProductsList.appendChild(clonedCard); // Klonu siyahıya əlavə et
            // Klondakı `check` klik funksionallığı
            const clonedCheckButton = clonedCard.querySelector('.check');
            clonedCheckButton.addEventListener('click', function () {
                clonedCard.remove(); // Klonu siyahıdan sil
                productCard.classList.remove('selected'); // Orijinal kartın sinfini sil
                productCard.querySelector('.check i').classList.remove('checked-icon'); // Yaşıl ikon sil
                total -= productPrice; // Ümumi qiyməti azaldırıq
                totalPriceElement.textContent = total.toFixed(2); // Yenilənmiş qiyməti göstər
            });

            selectedProductsList.appendChild(clonedCard); // Klonu seçilmişlər siyahısına əlavə et

            productCard.classList.add('selected'); // Orijinal kartı seçilmiş kimi qeyd et
            productCard.querySelector('.check i').classList.add('checked-icon'); // Yaşıl ikon əlavə et
            total += productPrice; // Ümumi qiyməti artırırıq
        }

        // Ümumi qiyməti yenilə
        totalPriceElement.textContent = total.toFixed(2);
    });
});
