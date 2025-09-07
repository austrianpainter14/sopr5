const hero = document.querySelector('.hero');
const wrappers = hero.querySelectorAll('.shape-wrapper');

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
let isHovering = false;

// Mouse inside hero
hero.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = hero.getBoundingClientRect();
    mouseX = (e.clientX - left) - width / 2;
    mouseY = (e.clientY - top) - height / 2;
    isHovering = true;
});

hero.addEventListener('mouseleave', () => {
    isHovering = false;
});

// Slower speed factors for subtle movement
const speedFactors = [0.02, 0.03, 0.015, 0.01, 0.035, 0.025];

function animate() {
    // Ultra smooth lerp (smaller = slower)
    targetX += (mouseX - targetX) * 0.02;
    targetY += (mouseY - targetY) * 0.02;

    wrappers.forEach((wrapper, index) => {
        const factor = speedFactors[index] || 0.02;
        wrapper.style.setProperty('--offset-x', `${targetX * factor}px`);
        wrapper.style.setProperty('--offset-y', `${targetY * factor}px`);
    });

    if (!isHovering) {
        mouseX = 0;
        mouseY = 0;
    }

    requestAnimationFrame(animate);
}

animate();
