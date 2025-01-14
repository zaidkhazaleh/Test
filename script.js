// تأثيرات النجوم المتلألئة
document.addEventListener('DOMContentLoaded', () => {
    const universe = document.querySelector('.universe');

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        universe.appendChild(star);
    }
});
