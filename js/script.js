// Scroll to top button
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
};

// Form validation
$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
    } else {
      alert("Thank you for your message!");
    }
  });
});
