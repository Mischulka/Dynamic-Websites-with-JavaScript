// Zobrazení a skrytí textových bloků
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");
    document.querySelectorAll(".content-section").forEach((section) => {
      if (section.id === targetId) {
        section.classList.toggle("active");
      } else {
        section.classList.remove("active");
      }
    });
    // Zavření menu po kliknutí na položku v mobilním zobrazení
    if (window.innerWidth <= 768) {
      document.querySelector("nav ul").classList.remove("active");
    }
  });
});

// Otevření editoru (Procvičování)
document.querySelectorAll(".open-editor").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    document.querySelectorAll(".editor").forEach((editor) => {
      editor.classList.add("hidden-content");
    });
    const editor = document.getElementById(targetId);
    if (editor) {
      editor.classList.remove("hidden-content");
    }
  });
});

// Spuštění kódu v editoru
document.querySelectorAll(".run-code").forEach((button) => {
  button.addEventListener("click", function () {
    const outputId = this.getAttribute("data-output");
    const outputFrame = document.getElementById(outputId);
    if (outputFrame) {
      const codeType = this.previousElementSibling.id;
      let code;
      if (codeType === "html-code") {
        code = this.previousElementSibling.value;
      } else if (codeType === "css-code") {
        code = `<style>${this.previousElementSibling.value}</style>`;
      } else if (codeType === "js-code") {
        code = `<script>${this.previousElementSibling.value}<\/script>`;
      }
      outputFrame.contentDocument.open();
      outputFrame.contentDocument.write(code);
      outputFrame.contentDocument.close();
    }
  });
});

// Scrollování nahoru
window.addEventListener("scroll", function () {
  const scrollTopButton = document.getElementById("scroll-top");
  if (window.pageYOffset > 300) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

document.getElementById("scroll-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle dark/light mode
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const icon = this.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
});

// Validace hesla
document
  .getElementById("form-section")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const message = document.getElementById("form-message");

    if (password1 !== password2) {
      message.textContent = "Hesla se neshodují.";
      message.style.color = "red";
    } else {
      message.textContent = "Hesla se shodují!";
      message.style.color = "green";
    }
  });
