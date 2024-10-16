document.addEventListener("DOMContentLoaded", () => {
// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll(".menu .links a");
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

// Services section interactivity
const serviceItems = document.querySelectorAll("#servicos li");
serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05)";
    });
    item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
    });
});

// Form submission
const contactForm = document.querySelector("#contato form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Basic form validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Por favor, preencha todos os campos do formulário.");
    return;
    }

    // You would typically send this data to a server here
    // For now, we'll just log it to the console and show a success message
    console.log("Form submitted:", { name, email, message });

    alert(`Obrigado por entrar em contato, ${name}! Responderemos em breve.`);
    contactForm.reset();
});

// Gallery image modal
const galleryImages = document.querySelectorAll("#galeria .gallery img");
const body = document.body;

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `
                <div class="modal-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="close-modal">&times;</button>
                </div>
            `;
    body.appendChild(modal);

    modal.querySelector(".close-modal").addEventListener("click", () => {
        body.removeChild(modal);
    });
    });
});
});
