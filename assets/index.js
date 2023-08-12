document.addEventListener("DOMContentLoaded", () => {
  const links = document.getElementsByClassName("link");
  const form = document.querySelector(".contact_right_form");
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const messageInput = document.querySelector(".message");

  function comingSoon() {
    alert("coming soon");
  }

  for (const link of links) {
    link.addEventListener("click", comingSoon);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;
    console.log(name);

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("message", message);

    alert(name+"'s ,data is stored in sessionstorage");

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });
});
