// Fonction pour augmenter la quantité
function increaseQuantity(element) {
    // Récupère l'élément de quantité qui se trouve juste après l'icône de plus
    let quantityElement = element.nextElementSibling;
    let currentQuantity = parseInt(quantityElement.textContent);

    // Incrémente la quantité
    quantityElement.textContent = currentQuantity + 1;

    // Met à jour le prix total et le nombre total d'articles
    updateTotalPrice();
    updateTotalItems();
}

// Fonction pour diminuer la quantité
function decreaseQuantity(element) {
    // Récupère l'élément de quantité qui se trouve juste avant l'icône de moins
    let quantityElement = element.previousElementSibling;
    let currentQuantity = parseInt(quantityElement.textContent);

    // Décrémente la quantité si elle est supérieure à 0
    if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
    }

    // Met à jour le prix total et le nombre total d'articles
    updateTotalPrice();
    updateTotalItems();
}

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
    let total = 0;
    let unitPrices = document.querySelectorAll('.unit-price');
    let quantities = document.querySelectorAll('.quantity');

    for (let i = 0; i < unitPrices.length; i++) {
        let price = parseInt(unitPrices[i].textContent);
        let quantity = parseInt(quantities[i].textContent);
        total += price * quantity;
    }

    document.querySelector('.total').textContent = total + " $";
}

// Fonction pour mettre à jour le nombre total d'articles
function updateTotalItems() {
    let totalItems = 0;
    let quantities = document.querySelectorAll('.quantity');

    // Calculer le nombre total d'articles
    quantities.forEach(quantity => {
        totalItems += parseInt(quantity.textContent);
    });

    // Afficher le nombre total d'articles
    document.querySelector('.total-items').textContent = totalItems;
}

// Fonction pour supprimer un article
function removeItem(element) {
    // Supprime l'élément parent (carte de produit)
    let productCard = element.closest('.card-body');
    productCard.remove();
}

// Fonction pour aimer/désaimer un article
function toggleLike(element) {
    // Ajoute ou retire la classe 'liked' pour changer la couleur
    element.classList.toggle('liked');
}