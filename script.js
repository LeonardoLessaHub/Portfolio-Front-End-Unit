const tabs = document.querySelectorAll(".tech-tab");
const cards = document.querySelectorAll(".projeto-card");
const skillItems = document.querySelectorAll(".skill-item");
const projetosGrid = document.querySelector(".projetos-grid"); 
const skillsWrapper = document.querySelector(".skills-wrapper");

const contentWrappers = [projetosGrid, skillsWrapper];

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const tech = tab.dataset.tech;

        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        contentWrappers.forEach(wrapper => {
            if (wrapper) {
                wrapper.classList.remove("fade-in");
                wrapper.classList.add("fade-out");
            }
        });

        setTimeout(() => {
            cards.forEach((card) => {
                const cardTech = card.dataset.tech ? card.dataset.tech.split(" ") : [];

                if (tech === "all" || cardTech.includes(tech)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            skillItems.forEach((item) => {
                const skill = item.dataset.skill;
                if (tech === "all" || skill === tech) {
                    item.style.display = "grid";
                } else {
                    item.style.display = "none";
                }
            });

            contentWrappers.forEach(wrapper => {
                if (wrapper) {
                    wrapper.classList.remove("fade-out");
                    wrapper.classList.add("fade-in");
                }
            });
            
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    contentWrappers.forEach(wrapper => {
        if (wrapper) {
            wrapper.classList.add("fade-in");
        }
    });
});

const contatoForm = document.getElementById("contato-form");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const mensagemTextarea = document.getElementById("mensagem");

contatoForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    clearErrors();

    if (validateForm()) {
        console.log("Formulário validado com sucesso! Dados:", {
            nome: nomeInput.value,
            email: emailInput.value,
            mensagem: mensagemTextarea.value,
        });

        alert("Mensagem enviada com sucesso! (Funcionalidade de envio real requer um backend)");
        
        contatoForm.reset();
    }
});

function validateForm() {
    let isValid = true;

    if (nomeInput.value.trim().length < 2) {
        displayError("nome-error", "Por favor, insira um nome válido.");
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        displayError("email-error", "Por favor, insira um e-mail válido.");
        isValid = false;
    }

    if (mensagemTextarea.value.trim().length < 10) {
        displayError("mensagem-error", "A mensagem deve ter pelo menos 10 caracteres.");
        isValid = false;
    }

    return isValid;
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    document.getElementById("nome-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("mensagem-error").textContent = "";
}
