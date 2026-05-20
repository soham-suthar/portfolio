const skillsDiv = document.getElementById("skills");
const projectsDiv = document.getElementById("projects");
const contactDiv = document.getElementById("contact");
const mainDiv = document.getElementById("main");
const social = document.getElementById("bottom");
const divide = document.getElementById("social-divider-1");

function main() {
    mainDiv.style.display = "block";
    skillsDiv.style.display = "none";
    projectsDiv.style.display = "none";
    contactDiv.style.display = "none";
    social.style.display = "none";
}

function skills() {
    mainDiv.style.display = "none";
    skillsDiv.style.display = "block";
    projectsDiv.style.display = "none";
    contactDiv.style.display = "none";
    social.style.display = "none";
}

function projects() {
    mainDiv.style.display = "none";
    skillsDiv.style.display = "none";
    projectsDiv.style.display = "block";
    contactDiv.style.display = "none";
    social.style.display = "none";

    document.querySelectorAll(".ele")[2].click();
}

function contact() {
    mainDiv.style.display = "none";
    skillsDiv.style.display = "none";
    projectsDiv.style.display = "none";
    contactDiv.style.display = "block";
    social.style.display = "block";
    divide.style.display = "none";
}

let tab = [];
function sel(e) {
    const act = e.currentTarget;

    document.querySelectorAll(".ele").forEach((el) => {
        el.classList.remove("active");
    });

    act.classList.add("active");
}

document.querySelectorAll(".ele").forEach((act) => {
    act.addEventListener("click", sel);
});

document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        link.classList.add("clicked");
    });
});

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

const elements = document.querySelectorAll(".ele");

elements.forEach((item) => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            document.querySelector(".menu").classList.remove("active");
        }
    });
});



const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(
            "https://formsubmit.co/ajax/sohamnishtihsutharrr@gmail.com",
            {
                method: "POST",
                body: formData
            }
        );

        const result = await response.json();

        console.log(result);

        if (response.ok) {
            alert("Message sent successfully!");
            contactForm.reset();
        } else {
            alert(result.message || "Failed to send");
        }

    } catch (error) {

        console.error(error);

        alert("Failed to fetch");

    }

});