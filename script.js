// script.js for index.html

const typingTexts = [
    "Welcome to my portfolio terminal.",
    "Robotics and AI Developer.",
    "Machine Learning Scientist.",
    "Embedded Systems Engineer.",
    "Full-stack Web and Android developer",
    "Data Scientist.",
];
const typingElement = document.getElementById('terminal-typing');
let textIdx = 0, charIdx = 0, isDeleting = false;

function typeText() {
    if (!typingElement) return;
    const currentText = typingTexts[textIdx];
    if (!isDeleting) {
        typingElement.innerHTML = currentText.substring(0, charIdx + 1) + '<span class="animate-pulse">|</span>';
        charIdx++;
        if (charIdx === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, 1200);
        } else {
            setTimeout(typeText, 50);
        }
    } else {
        typingElement.innerHTML = currentText + '<span class="animate-pulse">|</span>';
        setTimeout(() => {
            isDeleting = false;
            charIdx = 0;
            textIdx = (textIdx + 1) % typingTexts.length;
            typingElement.innerHTML = '';
            setTimeout(typeText, 400);
        }, 800);
    }
}
typeText();

// Animasi fade-in saat discroll
function handleFadeIn() {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && rect.bottom > 80) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('DOMContentLoaded', handleFadeIn);
