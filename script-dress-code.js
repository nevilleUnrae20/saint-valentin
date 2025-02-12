document.addEventListener('DOMContentLoaded', () => {
    const lieuxTitre = document.getElementById('lieu-titre');
    const dressCodeBtns = document.querySelectorAll('.dress-code-btn');
    const heureInput = document.getElementById('heure-rendez-vous');
    const continuerBtn = document.getElementById('continuer-btn');

    // Récupérer le lieu depuis le localStorage
    const lieu = localStorage.getItem('lieu');
    const lieuTitres = {
        'restaurant': '🍽️ Notre Dîner Romantique',
        'cinema': '🎬 Notre Soirée Cinéma',
        'prendre-glace': '🍦 Notre Pause Glace',
        '-18': '🔞 Notre Moment Intime',
        'maison': '🏠 Notre Soirée Intime'
    };
    lieuxTitre.textContent = lieuTitres[lieu] || 'Notre Rendez-vous';

    let selectedDressCode = null;

    dressCodeBtns.forEach(btn => {
        btn.addEventListener('mouseenter', createHeartBurst);
        btn.addEventListener('mouseleave', clearHearts);
        
        btn.addEventListener('click', () => {
            // Désélectionner tous les boutons
            dressCodeBtns.forEach(b => b.classList.remove('selected'));
            
            // Sélectionner le bouton cliqué
            btn.classList.add('selected');
            selectedDressCode = btn.getAttribute('data-code');
        });
    });

    continuerBtn.addEventListener('mouseenter', createHeartBurst);
    continuerBtn.addEventListener('mouseleave', clearHearts);

    continuerBtn.addEventListener('click', () => {
        if (selectedDressCode && heureInput.value) {
            // Stocker le dress code et l'heure dans le localStorage
            localStorage.setItem('dressCode', selectedDressCode);
            localStorage.setItem('heure', heureInput.value);
            const date = new Date();
            localStorage.setItem('date', date.toLocaleDateString());
            window.location.href = 'valentine-love.html';
        } else {
            alert('Choisis un dress code et une heure !');
        }
    });

    function createHeartBurst(event) {
        const btn = event.target;
        const btnRect = btn.getBoundingClientRect();

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            const randomX = Math.random() * (btnRect.width * 1.5) - (btnRect.width * 0.25);
            const randomY = Math.random() * (btnRect.height * 1.5) - (btnRect.height * 0.25);
            
            heart.style.left = `${randomX}px`;
            heart.style.top = `${randomY}px`;
            
            heart.style.animationDelay = `${Math.random() * 1.5}s`;
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            btn.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }
    }

    function clearHearts(event) {
        const btn = event.target;
        btn.querySelectorAll('.heart').forEach(heart => heart.remove());
    }
});
