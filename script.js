import { renderContact, renderProjects, renderResume } from "./contents.js";

document.addEventListener('DOMContentLoaded', ()=>{
  renderProjects();
})

document.querySelector(".header").addEventListener("click", (event) => {
  if (event.target.closest(".projects-button")) {
    renderProjects();
    return;
  } 
  
  if(event.target.closest(".resume-button")){
    renderResume();
    return;
  }
  
  if(event.target.closest(".contact-button")){
    renderContact()
    return;
  }
});
