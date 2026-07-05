// Featured GitHub projects data
const projects = [
  {
    title: "Nigeria Inflation Analysis",
    desc: "Exploratory analysis of Nigerian inflation trends using Python & Pandas.",
    url: "https://github.com/Hayubb/Nigeria_inflation"
  },
  {
    title: "LinkedIn Job Analysis",
    desc: "Scraped and analysed LinkedIn job postings to surface in-demand skills.",
    url: "https://github.com/Hayubb/Linked_job"
  },
  {
    title: "Data Analysis Projects",
    desc: "End-to-end data analysis projects covering cleaning, EDA, and visualisation.",
    url: "https://github.com/Hayubb/Data_analysis"
  },
  {
    title: "Data Science Projects",
    desc: "Notebooks and pipelines for classification and regression tasks.",
    url: "https://github.com/Hayubb/data_science_project"
  },
  {
    title: "DNS Competition Project",
    desc: "Competitive DS project; feature engineering and model tuning for accuracy.",
    url: "https://github.com/Hayubb/DNS_competition"
  },
  {
    title: "Data Science Tutorials",
    desc: "Step-by-step tutorials on core data science concepts for beginners.",
    url: "https://github.com/Hayubb/datascience_tutorial"
  },
  {
    title: "Machine Learning Projects",
    desc: "Hands-on ML projects covering supervised and unsupervised learning.",
    url: "https://github.com/Hayubb/Machin-Learning-project"
  },
  {
    title: "Machine Learning Models",
    desc: "Trained and evaluated ML models with benchmarks and deployment notes.",
    url: "https://github.com/Hayubb/machine-model"
  },
  {
    title: "Python Projects",
    desc: "General-purpose Python scripts showcasing language proficiency.",
    url: "https://github.com/Hayubb/python_project"
  },
  {
    title: "R Programming Projects",
    desc: "Statistical computing and visualisation using R and ggplot2.",
    url: "https://github.com/Hayubb/R-Code"
  },
  {
    title: "Math for Machine Learning",
    desc: "Notebooks covering linear algebra, calculus, and probability for ML.",
    url: "https://github.com/Hayubb/math-for-machine-learning"
  },
  {
    title: "Intro to Python for DS & CS",
    desc: "Solutions and exercises from the Deitel Python Data Science textbook.",
    url: "https://github.com/Hayubb/Solutions-to-Deitel-P.-Deitel-H."
  }
];

const grid = document.getElementById("projectsGrid");
grid.innerHTML = projects.map(p => `
  <div class="project-card">
    <span class="project-title">${p.title}</span>
    <p class="project-desc">${p.desc}</p>
    <a class="project-link" href="${p.url}" target="_blank" rel="noopener">View on GitHub ↗</a>
  </div>
`).join("");

// Typewriter effect
const roles = ["Data Scientist", "AI & Technology Enthusiast", "FinTech Operations Lead", "Machine Learning Practitioner"];
const typeEl = document.getElementById("typewriterText");
let roleIndex = 0, charIndex = 0, deleting = false;

function tick() {
  const current = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    typeEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(tick, 1400);
      return;
    }
  } else {
    charIndex--;
    typeEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(tick, deleting ? 40 : 70);
}
tick();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Scroll-triggered section reveal
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("in-view")),
  { threshold: 0.12 }
);
sections.forEach(s => observer.observe(s));

// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form submission (Formspree, AJAX)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const formSubmit = document.getElementById("formSubmit");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  formSubmit.disabled = true;
  formSubmit.textContent = "Sending...";
  formStatus.textContent = "";
  formStatus.className = "form-status";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      formStatus.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
      formStatus.classList.add("success");
      contactForm.reset();
    } else {
      throw new Error("Submission failed");
    }
  } catch (err) {
    formStatus.textContent = "Something went wrong. Please email me directly at ayubaagiri1@gmail.com.";
    formStatus.classList.add("error");
  } finally {
    formSubmit.disabled = false;
    formSubmit.textContent = "Send Message";
  }
});
