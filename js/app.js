document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.about__tab-links');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            handleTabClick(link);
        });
    });

    function handleTabClick(link) {
        tabLinks.forEach(item => {
            item.classList.remove('active-link');
        });

        link.classList.add('active-link');
        console.log('Clicked tab:', link.textContent);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // add javascript to inject html to load educaation information from "education.json, skills.json, and experience.json"
    const tabLinks = document.querySelectorAll('.about__tab-links');
});