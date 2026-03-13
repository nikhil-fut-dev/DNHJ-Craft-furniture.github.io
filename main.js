// ===============================
// SEARCH BAR FUNCTION
// ===============================

const searchInput = document.querySelector(".search-bar input");

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const value = searchInput.value.trim();

    if (value === "") {
      alert("Please type something to search.");
    } else {
      alert("Searching for: " + value);
    }
  }
});

// ===============================
// CHAT BUTTON FUNCTION
// ===============================

function openChat() {
  let chatBox = document.querySelector(".chat-box");

  if (!chatBox) {
    chatBox = document.createElement("div");
    chatBox.classList.add("chat-box");

    chatBox.innerHTML = `
        <div class="chat-header">
            DNHJ Support
            <span class="close-chat">✖</span>
        </div>

        <div class="chat-body">
            <p>Hello 👋</p>
            <p>How can we help you today?</p>
        </div>

        <input type="text" placeholder="Type a message..." class="chat-input">
        `;

    document.body.appendChild(chatBox);

    document.querySelector(".close-chat").addEventListener("click", () => {
      chatBox.remove();
    });
  }
}

// ===============================
// ICON CLICK ANIMATION
// ===============================

const icons = document.querySelectorAll(".icons span");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.style.transform = "scale(1.2)";

    setTimeout(() => {
      icon.style.transform = "scale(1)";
    }, 200);
  });
});

// ===============================
// HERO IMAGE HOVER EFFECT
// ===============================

const cards = document.querySelectorAll(".hero .card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "0.3s";
  });
});

// ===============================
// CATEGORY IMAGE HOVER EFFECT
// ===============================

const categories = document.querySelectorAll(".category");

categories.forEach((cat) => {
  cat.addEventListener("mouseenter", () => {
    cat.style.transform = "scale(1.1)";
    cat.style.transition = "0.3s";
  });

  cat.addEventListener("mouseleave", () => {
    cat.style.transform = "scale(1)";
  });
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// LAZY IMAGE LOADING
// ===============================

const images = document.querySelectorAll("img");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;

      img.style.opacity = "1";
      img.style.transition = "1s";

      observer.unobserve(img);
    }
  });
});

images.forEach((img) => {
  img.style.opacity = "0";

  observer.observe(img);
});

// ===============================
// SCROLL HEADER EFFECT
// ===============================

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});

function openChat() {
  alert("Chat support coming soon!");
}

// ================= FOOTER ACCORDION =================

const footerTitles = document.querySelectorAll(".footer-col h4");

footerTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const parent = title.parentElement;

    parent.classList.toggle("active");
  });
});
