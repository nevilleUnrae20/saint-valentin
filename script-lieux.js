document.addEventListener('DOMContentLoaded', () => {
    const lieuxBtns = document.querySelectorAll('.lieu-btn');

    // Ajouter une transition de page
    function pageTransition() {
        document.body.classList.add('page-transition');
        setTimeout(() => {
            document.body.classList.remove('page-transition');
        }, 1000);
    }

    lieuxBtns.forEach(btn => {
        btn.addEventListener('mouseenter', createHeartBurst);
        btn.addEventListener('mouseleave', clearHearts);
        
        btn.addEventListener('click', () => {
            const lieu = btn.getAttribute('data-lieu');
            // Stocker le lieu dans le localStorage pour le transferer à la page suivante
            localStorage.setItem('lieu', lieu);
            
            // Animation de transition
            pageTransition();
            
            // Redirection légèrement retardée pour permettre l'animation
            setTimeout(() => {
                window.location.href = 'valentine-dress-code.html';
            }, 500);
        });
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
