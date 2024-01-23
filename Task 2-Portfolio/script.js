
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('scroll', function () {
    const skillsSection = document.getElementById('skills');
    const skillsSectionPosition = skillsSection.getBoundingClientRect().top;

    if (skillsSectionPosition < window.innerHeight * 0.75) {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
});