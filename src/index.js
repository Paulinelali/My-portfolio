


import {projects} from './modules/projects.js';
import modalFunc from './modules/modal.js';
import mobileMenuFunc from './modules/mobileMenu.js';

const wrapper = document.querySelector(".project-wrapper")
projects(wrapper);

modalFunc();

mobileMenuFunc();