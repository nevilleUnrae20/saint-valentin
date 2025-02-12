document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event triggered');

    const continueBtn = document.getElementById('continue-btn');
    const dateInput = document.getElementById('valentine-date');
    const conseilBtn = document.getElementById('conseil-btn');
    const conseilText = document.getElementById('conseil-text');

    console.log('Continue Button:', continueBtn);
    console.log('Date Input:', dateInput);
    console.log('Conseil Button:', conseilBtn);

    if (!continueBtn || !dateInput) {
        console.error('Éléments non trouvés !');
        return;
    }

    // Tableau de conseils romantiques
    const conseilsRomantiques = [
        "Préparez une soirée surprise avec des bougies et de la musique douce.",
        "Écrivez une lettre d'amour manuscrite exprimant vos sentiments.",
        "Organisez une promenade romantique sous les étoiles.",
        "Cuisinez ensemble un repas spécial Saint Valentin.",
        "Offrez un cadeau qui a une signification personnelle profonde.",
        "Planifiez une escapade romantique dans un endroit que vous aimez tous les deux.",
        "Créez un album photo ou un diaporama de vos moments ensemble.",
        "Faites une séance photo romantique ensemble.",
        "Apprenez une nouvelle activité en couple, comme la danse.",
        "Organisez une soirée cinéma avec vos films préférés et des snacks."
    ];

    // Fonction pour générer un conseil aléatoire
    function genererConseilRomantique() {
        const conseilAleatoire = conseilsRomantiques[Math.floor(Math.random() * conseilsRomantiques.length)];
        conseilText.textContent = conseilAleatoire;
    }

    // Événement pour le bouton de conseil
    if (conseilBtn) {
        conseilBtn.addEventListener('click', genererConseilRomantique);
    }

    // Heart burst animation on hover
    continueBtn.addEventListener('mouseenter', createHeartBurst);
    continueBtn.addEventListener('mouseleave', clearHearts);

    // Continue button click handler
    continueBtn.addEventListener('click', handleDateSelection);

    function createHeartBurst(event) {
        console.log('Mouse entered button');
        const btn = event.target;
        const btnRect = btn.getBoundingClientRect();

        // Créer plus de cœurs avec des animations variées
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Position aléatoire à l'intérieur et autour du bouton
            const randomX = Math.random() * (btnRect.width * 1.5) - (btnRect.width * 0.25);
            const randomY = Math.random() * (btnRect.height * 1.5) - (btnRect.height * 0.25);
            
            heart.style.left = `${randomX}px`;
            heart.style.top = `${randomY}px`;
            
            // Délais et rotations aléatoires pour un effet plus dynamique
            heart.style.animationDelay = `${Math.random() * 1.5}s`;
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            btn.appendChild(heart);

            // Supprimer le cœur après l'animation
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }
    }

    function clearHearts(event) {
        const btn = event.target;
        btn.querySelectorAll('.heart').forEach(heart => heart.remove());
    }

    function handleDateSelection() {
        const selectedDate = new Date(dateInput.value);
        const valentinesDay2025 = new Date(2025, 1, 14); // 14 février 2025

        // Convertir les dates en format comparable
        const selectedDateString = selectedDate.toISOString().split('T')[0];
        const valentinesDayString = valentinesDay2025.toISOString().split('T')[0];

        console.log('Date sélectionnée:', selectedDateString);
        console.log('Date de la Saint-Valentin 2025:', valentinesDayString);

        if (selectedDateString === valentinesDayString) {
            console.log('Redirection vers valentine-confirm.html');
            window.location.href = 'valentine-confirm.html';
        } else {
            console.log('Redirection vers valentine-lieux.html');
            window.location.href = 'valentine-lieux.html';
        }
    }

    console.log('Script initialization complete');
});
