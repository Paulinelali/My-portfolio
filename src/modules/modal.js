

import {projectList} from './projects.js';

const modalFunc = () => {
    const btn = document.querySelectorAll(".see-project");
    let siteWrapper = document.querySelector(".site-wrapper");
    let body = document.querySelector("body");
    let modalWrapper = document.querySelector(".modal-wrapper");

    const projectPopUp = (id) => {
        const project = projectList[id];
       
            let li = `<li class="modal-project-card" id="${project.id}">
                <dive class="modal-popup-header-wrapper">
                    <div class="modal-popup-header">
                        <h2>${project.title}</h2>
                        <div class="modal-canopy-wrapper">
                            <ul class="canopy-inner-wrapper">
                                <li class="bold-font">Canopy</li>
                                <li class="empty"></li>
                                <li class="grey-color">Back End Dev</li>
                                <li class="empty"></li>
                                <li class="grey-color">${project.year}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="close-modal">x</div>
                </dive>
                
                <img class="modal-project-img" src="${project.img}" alt="">
                <div class="modal-project-detail">
                    
                    <p class="description">Description here</p>
                    <div class="modal-project-stack-wrapper">
                        <ul class="modal-project-stack-inner-wrapper">
                            <li>${project.stack[0]}</li>
                            <li>${project.stack[1]}</li>
                            <li>${project.stack[2]}</li>
                        </ul>
                        <div class="modal-btns">
                            <button class="modal-see-project">See live</button>
                            <button class="modal-see-project">See source</button>
                        </div>
                    </div>
                </div>
            </li>`;
    
        modalWrapper.innerHTML = li;
    }


    const closeModal = () => {
        const closeIcon = document.querySelectorAll(".close-modal");

        closeIcon.forEach( el => {
            el.addEventListener("click", () => {
                body.classList.toggle("no-scroll-Y");
                modalWrapper.classList.toggle("toggleHide");
                siteWrapper.classList.toggle("blur");
                console.log(body.scrollTop)
            })
        })
    }

    
    const toggleClasses = () => {
        siteWrapper.classList.toggle("blur");
        body.classList.toggle("no-scroll-Y");
        modalWrapper.classList.toggle("toggleHide");
    }

   btn.forEach( el => {
    el.addEventListener("click", (e) => {
        const topParent = Number(e.target.parentElement.parentElement.id);
        toggleClasses();
        projectPopUp(topParent);
        closeModal();
    })
   })
}

export default modalFunc;