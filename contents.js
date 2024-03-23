const projects = [
  ["calculator/calculator.html", "calculator-icon", "calculator"],
  [
    "password-generator/password-generator.html",
    "password-generator-icon",
    "password generator",
  ],
  ["quiz/quiz.html", "quiz-icon", "quiz game"],
  ["quote-generator/quote.html", "quote-generator-icon", "quote generator"],
  ["todo-list-app/todo-list.html", "todo-list-icon", "todo list"],
  ["validation-form/index.html", "validation-form-icon", "validation form"],
  ["weather-app/weather-app.html", "weather-app-icon", "weather app"],
];

export function renderProjects() {
  let projectsHTML = ``;
  projects.forEach((project) => {
    const html = `
      <a href="mini-js-projects-main/${project[0]}">
        <div class="project-container">
          <div class="project-thumbnail"><img src="images/${project[1]}.png"></div>
          <div class="project-title">${project[2]}</div>
        </div>
      </a>
    `;
    projectsHTML += html;
  });
  document.querySelector(
    ".body"
  ).innerHTML = `<div class="body-project">${projectsHTML}</div>`;
  document.querySelector(".body").classList.remove("centered-resume");
}

export function renderResume() {
  const bodyElement = document.querySelector(".body");
  bodyElement.innerHTML = `<img src="images/cv.jpg">`;
  bodyElement.classList.add("centered-resume");
}

export function renderContact() {
  let contactHTML = `
  <div class="body-contact">
    <div class="contact-info">
      <div class="contact-info">
        <h1>Contact Info</h1>
        <div class="mail">samuelgipit@gmail.com</div>
        <div class="contact-me">+639381223364</div>
        <div class="address">Sorsogon, Philippines</div>
      </div>
    </div>

    <div class="message-box">
      <h1>Let's Work Together.</h1>
      <input placeholder="Name*" />
      <input placeholder="Email*" />
      <input placeholder="Subject" />
      <input class="message-input" placeholder="Message*" />
      <button>Send Message</button>
    </div>
  </div>
  `;
  document.querySelector(".body").innerHTML = contactHTML;
  document.querySelector(".body").classList.remove("centered-resume");
}
