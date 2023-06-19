

// 08033233039, 090073078762
// 0803323309

// 09073078762
// uba 1019916694



const call = () => {
    alert(90)
}

// projects objects
const FontPreview = {
    id: 0,
    title: 'Font-preview',
    link: 'https://tayruddy.pythonanywhere.com/',
    img: './assets/pf4.png',
    description: 'This is the project\s description',
    source: 'https://github.com/Paulinelali/fontpreview',
    stack: ['CSS', 'Django', 'javaScript'],
    year: 2023,
}

const udml = {
    id: 1,
    title: 'UDML',
    link: 'https://paulinelali.github.io/Microverse-capstone-one/index.html',
    img: './assets/ps2.PNG',
    description: 'This is the project\s description',
    source: 'https://github.com/Paulinelali/Microverse-capstone-one',
    stack: ['HTML', 'CSS', 'javaScript'],
    year: 2023,
}

const projectList = [FontPreview, udml]

const projects = (wrapper) => {

    projectList.forEach( el => {
        let li = `<li class="project-card" id="${el.id}">
        <img class="project-img" src="${el.img}" alt="">
        <div class="project-detail-left">
            <h2>${el.title}</h2>
            <div class="canopy-wrapper">
                <ul class="canopy-inner-wrapper">
                    <li class="bold-font">Canopy</li>
                    <li class="empty"></li>
                    <li class="grey-color">Back End Dev</li>
                    <li class="empty"></li>
                    <li class="grey-color">${el.year}</li>
                </ul>
            </div>
            <p class="description">Description here</p>
            <div class="project-stack-wrapper">
                <ul class="project-stack-inner-wrapper">
                    <li>${el.stack[0]}</li>
                    <li>${el.stack[1]}</li>
                    <li>${el.stack[2]}</li>
                </ul>
            </div>
            <button class="see-project">See project</button>
        </div>
    </li>`;

    wrapper.innerHTML += li;
    });
}

export {projects, projectList}