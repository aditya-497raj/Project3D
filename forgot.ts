const loginBox = document.querySelector('.login-box') as HTMLElement;
loginBox.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = loginBox.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const tiltX = (mouseY / rect.height - 0.5) * 30;
    const tiltY = (mouseX / rect.width - 0.5) * -30;
    loginBox.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});
loginBox.addEventListener('mouseleave', () => {
    loginBox.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});
loginBox.style.transition = 'transform 0.3s ease-out';
loginBox.addEventListener('mouseenter', () => {
    loginBox.style.boxShadow = '0 0 25px black)';
    loginBox.style.borderColor = 'rgba(255, 255, 255, 0.8)';
});
loginBox.addEventListener('mouseleave', () => {
    loginBox.style.boxShadow = 'none';
    loginBox.style.borderColor = 'transparent';
});
const createParticle = () => {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '5px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    loginBox.appendChild(particle);
    const animation = particle.animate([
        { transform: 'translateY(0) scale(1)', opacity: 1 },
        { transform: 'translateY(-100px) scale(0)', opacity: 0 }
    ], {
        duration: 2000 + Math.random() * 3000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });
    animation.onfinish = () => {
        particle.remove();
        createParticle();
    };
};
for (let i = 0; i < 15; i++) {
    createParticle();
}

