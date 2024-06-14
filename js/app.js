document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.about__tab-links');
    const tabContents = document.querySelectorAll('.about__tab-contents')

    tabLinks.forEach((link) => {
        const text = link.textContent.trim().toLowerCase();
        const content = document.getElementById(text)
        link.content = content;
    });
    
    function removeActiveClasses() {
        tabLinks.forEach(link => 
            link.classList.remove('active-link'));
        tabContents.forEach(content =>
            content.classList.remove('active-content'));
    }

    function activateTab(link) {
        removeActiveClasses();

        link.classList.add('active-link');

        const content = link.content;
        if (content) {
            content.classList.add('active-content');

            fetchData(content.id).then(data => {
                injectListItems(data, content.id);
            });
        }
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            activateTab(event.target);
        });
    });

    // Activate the first tab when the script is loaded
    if (tabLinks.length > 0) {
        activateTab(tabLinks[0]);
    }
});

function fetchData(key) {
    return fetch ('../data/about_information.json')
    .then(response => response.json())
    .then(data => {
        return data[key];
    });
}

function injectListItems(data, contentId) {
    const activeContent = document.querySelector('.active-content');
    const ul = activeContent.querySelector('ul');

    ul.innerHTML = ''; 

    data.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('about__tab-contents-list-items');
        
        const logoDiv = document.createElement('div');
        logoDiv.classList.add('logo-div');
        li.appendChild(logoDiv);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content-div');
        li.appendChild(contentDiv);

        if (contentId == 'education') {
        logoDiv.innerHTML = `<img src="${item.logo}" alt="logo" class="logo">`
        contentDiv.innerHTML += `<span class="list-items-title">${Object.values(item)[0]}</span>`;
        contentDiv.innerHTML += `<br>${Object.values(item)[1]}`;
        contentDiv.innerHTML += `<br><span class="duration">${Object.values(item)[2]} - ${Object.values(item)[3]}</span>`
        }

        if (contentId == 'experience') {
        logoDiv.innerHTML = `<img src="${item.logo}" alt="logo" class="logo">`
        contentDiv.innerHTML = `<span class="list-items-title">${Object.values(item)[1]}</span>`;
        contentDiv.innerHTML += `<br>${Object.values(item)[0]}, ${Object.values(item)[3]}`;
        contentDiv.innerHTML += `<br><span class="duration">${Object.values(item)[2]}</span>`
        }

        if (contentId == 'skills') {
        logoDiv.innerHTML = `<img src="${item.logo}" alt="logo" class="logo">`
        contentDiv.innerHTML = `<span class="list-items-title">${Object.values(item)[0]}</span>`;
        contentDiv.innerHTML += `<br>${Object.values(item)[1]}`;
        }

        ul.appendChild(li);
    });
    console.log(ul);
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.layer-container');
    const layers = document.querySelectorAll('.layer');

    container.addEventListener('mouseover', () => {
        layers.forEach((layer, index) => {
            layer.style.transform = `translateX(-500px) translateY(${index * 50}px) rotateX(90deg) rotateY(90deg) rotateZ(-90deg)`;
            layer.style.color = 'white';
        });
    });

    container.addEventListener('mouseout', () => {
        layers.forEach((layer, index) => {
            layer.style.transform = `translateZ(${index * -1}px)`;
            layer.style.color = layer.style.backgroundColor;
        });
    });
});