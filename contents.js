const projects = [
  ["calculator-icon", "calculator"],
  ["password-generator-icon", "password generator"],
  ["quiz-icon", "quiz game"],
  ["quote-generator-icon", "quote generator"],
  ["todo-list-icon", "todo list"],
  ["validation-form-icon", "validation form"],
  ["weather-app-icon", "weather app"],
];

export function renderProjects() {
  let projectsHTML = ``;
  projects.forEach((project) => {
    const html = `
      <div class="project-container">
        <div class="project-thumbnail"><img src="images/${project[0]}.png"></div>
        <div class="project-title">${project[1]}</div>
      </div>
    `;
    projectsHTML += html;
  });
  document.querySelector(".body").innerHTML = projectsHTML;
  document.querySelector(".body").classList.remove("centered-resume");
}

export function renderResume() {
  const bodyElement = document.querySelector(".body");
  bodyElement.innerHTML = `<img src="images/cv.jpg">`;
  bodyElement.classList.add("centered-resume");
}

export function renderContact() {}
