document.addEventListener('DOMContentLoaded', () => {
    // Background music setup
    const bgMusic = new Audio('https://raw.githubusercontent.com/somepath/soft-background.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.1;

    // Hover sound effect
    const hoverSound = new Audio('data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU8GAACBhYqFbF1fdH2Hh4NtZGZ2gYSDfG9veHyAgH96cG9zfYGAfHZtb3h+gIJ8dG9yfoODgHhucXqChYOAeHFxfYSGg393cnSAhoiEfndzdoCHiYZ/eHR1gYeJhn94dHaBh4mGf3h0dYGHiYZ/eHR2gYeJhn94dHaBh4mGf3h0doGHiYZ/eHV2gYeJhn95dXaBh4mGf3l1doGHiYZ/eXV2gYeJhn95dXaBh4mGf3l1doGHiYZ/eXV2');
    hoverSound.volume = 0.15; // Softer hover sound

    // Add hover sound to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .service-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            const newSound = hoverSound.cloneNode();
            newSound.play();
        });
    });

    // Surprise sound effect
    const surpriseSound = new Audio('data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU8GAACBhYqFbF1fdH2Hh4NtZGZ2');
    surpriseSound.volume = 0.2;

    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mouseenter', () => {
            surpriseSound.currentTime = 0;
            surpriseSound.play();
        });
    });

    // Start background music when user interacts
    document.addEventListener('click', () => {
        bgMusic.play();
    }, { once: true });

    // Theme switching
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    });


    // Progress bars animation
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.setProperty('--percent', `${percent}%`);
        bar.style.width = `${percent}%`;
    });

    // Circular progress animation
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--percent', `${percent}%`);
    });

    // Typing animation
    const typedTextSpan = document.querySelector('.typed-text');
    const words = ['Frontend Developer', 'Web Designer', 'UI/UX Designer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
});