document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('popup').style.display = 'flex';
    }, 5000);
});

function submitName() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        document.getElementById('congratsMessage').innerText = `Congratulations, ${name}!`;
        document.getElementById('popup').style.display = 'none';
        document.getElementById('congratulations').style.display = 'flex';
        launchConfetti();
    }
}

function closeCongratulations() {
    document.getElementById('congratulations').style.display = 'none';
}

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confettiPiece);
    }
}

function getRandomColor() {
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7', '#ffdfd3', '#ffc9de'];
    return colors[Math.floor(Math.random() * colors.length)];
}
