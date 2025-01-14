// يمكنك إضافة أي تفاعلية إضافية هنا
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateY(-10px)';
            member.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateY(0)';
            member.style.boxShadow = 'none';
        });
    });
});
