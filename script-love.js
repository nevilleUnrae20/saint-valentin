document.addEventListener('DOMContentLoaded', () => {
    const loveBtn = document.getElementById('love-btn');
    const lieuDetail = document.getElementById('lieu-detail');
    const dressCodeDetail = document.getElementById('dress-code-detail');
    const heureDetail = document.getElementById('heure-detail');
    const dateDetail = document.getElementById('date-detail');

    // Récupérer les détails depuis le localStorage
    const lieu = localStorage.getItem('lieu');
    const dressCode = localStorage.getItem('dressCode');
    const heure = localStorage.getItem('heure');
    const date = localStorage.getItem('date');

    const lieuTitres = {
        'restaurant': '🍽️ Restaurant',
        'cinema': '🎬 Cinéma',
        'prendre-glace': '🍦 Prendre une Glace',
        '-18': '🔞',
        'maison': '🏠 Chez Nous'
    };

    const dressCodeTitres = {
        'casual': '👖 Casual',
        'chic': '👗 Chic',
        'elegant': '🕴️ Élégant',
        'romantique': '💕 Romantique'
    };

    // Formater la date
    const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    lieuDetail.textContent += lieuTitres[lieu] || lieu;
    dressCodeDetail.textContent += dressCodeTitres[dressCode] || dressCode;
    heureDetail.textContent += heure || 'Non spécifiée';
    dateDetail.textContent += formattedDate || 'Non spécifiée';

    loveBtn.addEventListener('click', () => {
        createHeartExplosion();
        envoyerEmail();
    });

    function envoyerEmail() {
        const emailData = {
            lieu: lieuTitres[lieu] || lieu,
            dressCode: dressCodeTitres[dressCode] || dressCode,
            heure: heure || 'Non spécifiée',
            date: formattedDate || 'Non spécifiée'
        };

        // Utiliser fetch pour envoyer l'email
        fetch('https://formspree.io/f/xyyrnpgj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'nevillecj4@gmail.com',
                message: `
                Détails de la Saint Valentin :
                - Lieu : ${emailData.lieu}
                - Dress Code : ${emailData.dressCode}
                - Heure : ${emailData.heure}
                - Date : ${emailData.date}
                `
            })
        }).catch(error => {
            console.error('Erreur lors de l\'envoi de l\'email', error);
        });
    }

    function createHeartExplosion() {
        const container = document.querySelector('.heart-explosion-container');
        
        for (let i = 0; i < 200; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart', 'explosion-heart');
            
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            const randomScale = Math.random() * 2 + 0.5;
            const randomRotation = Math.random() * 360;
            
            heart.style.left = `${randomX}px`;
            heart.style.top = `${randomY}px`;
            heart.style.transform = `scale(${randomScale}) rotate(${randomRotation}deg)`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }

        // Message final
        setTimeout(() => {
            alert('Je t\'aime ❤️');
        }, 2000);
    }
});
