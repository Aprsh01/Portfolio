document.addEventListener("DOMContentLoaded", () => {
document.querySelector(".nav-btn.home")?.addEventListener("click", () => {
    window.location.href = "index.html";
});

document.querySelector(".nav-btn.project")?.addEventListener("click", () => {
    window.location.href = "project.html";
});

document.querySelector(".nav-btn.skill")?.addEventListener("click", () => {
    window.location.href = "skill.html";
});

document.querySelector(".nav-btn.goal")?.addEventListener("click", () => {
    window.location.href = "goal.html";
});
});
