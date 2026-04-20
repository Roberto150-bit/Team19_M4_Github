(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  var navLinks = siteNav ? siteNav.querySelectorAll('a[href^="#"]') : [];
  var contactForm = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");
  var resetFormBtn = document.getElementById("resetFormBtn");
  var nameInput = document.getElementById("contactName");
  var emailInput = document.getElementById("contactEmail");
  var messageInput = document.getElementById("contactMessage");
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  function setNavOpen(isOpen) {
    if (!header || !navToggle) return;
    header.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  function closeNav() {
    setNavOpen(false);
  }

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      var next = !header.classList.contains("is-open");
      setNavOpen(next);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 860px)").matches) {
        closeNav();
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) closeNav();
  });

  /* Smooth scroll for in-page links (respect reduced motion via CSS) */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (id !== "#top") {
        history.pushState(null, "", id);
      } else {
        history.pushState(null, "", window.location.pathname + window.location.search);
      }
    });
  });

  function clearErrors() {
    [nameError, emailError, messageError].forEach(function (el) {
      if (el) el.textContent = "";
    });
    [nameInput, emailInput, messageInput].forEach(function (el) {
      if (el) el.removeAttribute("aria-invalid");
    });
  }

  function showFieldError(field, message, errorEl) {
    if (errorEl) errorEl.textContent = message;
    if (field) field.setAttribute("aria-invalid", "true");
  }

  function validateForm() {
    clearErrors();
    var ok = true;

    var nameVal = nameInput ? nameInput.value.trim() : "";
    if (!nameVal) {
      showFieldError(nameInput, "Please add your name.", nameError);
      ok = false;
    } else if (nameVal.length < 2) {
      showFieldError(nameInput, "Name looks a bit short.", nameError);
      ok = false;
    }

    var emailVal = emailInput ? emailInput.value.trim() : "";
    if (!emailVal) {
      showFieldError(emailInput, "Email is required.", emailError);
      ok = false;
    } else {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailVal)) {
        showFieldError(emailInput, "Use a simple email format like name@school.edu.", emailError);
        ok = false;
      }
    }

    var msgVal = messageInput ? messageInput.value.trim() : "";
    if (!msgVal) {
      showFieldError(messageInput, "Tell us a little more—message can’t be empty.", messageError);
      ok = false;
    } else if (msgVal.length < 10) {
      showFieldError(messageInput, "A few more words helps (10 characters minimum).", messageError);
      ok = false;
    }

    return ok;
  }

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateForm()) {
        var firstInvalid =
          (nameInput && nameInput.getAttribute("aria-invalid") === "true" && nameInput) ||
          (emailInput && emailInput.getAttribute("aria-invalid") === "true" && emailInput) ||
          (messageInput && messageInput.getAttribute("aria-invalid") === "true" && messageInput);
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      contactForm.hidden = true;
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  if (resetFormBtn && contactForm && formSuccess) {
    resetFormBtn.addEventListener("click", function () {
      contactForm.reset();
      clearErrors();
      formSuccess.hidden = true;
      contactForm.hidden = false;
      if (nameInput) nameInput.focus();
    });
  }

  /* Optional: reveal on scroll */
  var revealNodes = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealNodes.length) {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      revealNodes.forEach(function (node) {
        node.classList.add("is-visible");
      });
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealNodes.forEach(function (node) {
        observer.observe(node);
      });
    }
  } else if (revealNodes.length) {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
  }
})();
