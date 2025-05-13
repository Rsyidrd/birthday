// ================ Konfigurasi Data ================
const birthdayPerson = "Alya Maemanah";
const birthdayDate = "2025-05-15"; // Format: YYYY-MM-DD
const photoPaths = [
    "assets/photos/photo1.jpg",
    "assets/photos/photo2.jpg",
    "assets/photos/photo3.jpg",
    "assets/photos/photo4.jpg"
];
const messages = [
    "Semoga hari ulang tahunmu penuh kebahagiaan!",
    "Kamu adalah orang yang luar biasa!",
    "Semoga semua impianmu tercapai di tahun ini!",
    "Teruslah bersinar seperti bintang!",
    "Panjang umur dan sehat selalu!"
];

// ================ Fungsi Utama ================
document.addEventListener('DOMContentLoaded', function() {
    // Personalisasi nama
    document.getElementById('name').textContent = birthdayPerson;
    
    // Inisialisasi musik
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    let isMusicPlaying = false;
    
    musicBtn.addEventListener('click', function() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.textContent = 'play';
        } else {
            bgMusic.play();
            musicBtn.textContent = 'pause';
        }
        isMusicPlaying = !isMusicPlaying;
    });
    
    // Generate galeri foto
    const photoGrid = document.getElementById('photoGrid');
    photoPaths.forEach(photoPath => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `<img src="${photoPath}" alt="Kenangan">`;
        photoGrid.appendChild(photoItem);
    });
    
    // Tampilkan pesan acak
    const showMessageBtn = document.getElementById('showMessageBtn');
    const randomMessage = document.getElementById('randomMessage');
    
    showMessageBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        randomMessage.textContent = messages[randomIndex];
        
        // Animasi
        randomMessage.parentElement.style.animation = 'none';
        setTimeout(() => {
            randomMessage.parentElement.style.animation = 'fadeIn 0.5s';
        }, 10);
    });
    
    // Hitung mundur
    if (new Date(birthdayDate) > new Date()) {
        setCountdown();
        setInterval(setCountdown, 1000);
    } else {
        document.getElementById('countdown').style.display = 'none';
    }
    
    // Confetti effect (simple version)
    createConfetti();
});

// ================ Fungsi Tambahan ================
function setCountdown() {
    const now = new Date();
    const targetDate = new Date(birthdayDate);
    const diff = targetDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3'];
    const confettiContainer = document.querySelector('.confetti');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -50 + 'px';
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = Math.random();
        
        // Animasi jatuh
        const animationDuration = Math.random() * 3 + 2;
        confetti.style.animation = `fall ${animationDuration}s linear infinite`;
        
        confettiContainer.appendChild(confetti);
    }
}

// Tambahkan keyframes untuk confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
