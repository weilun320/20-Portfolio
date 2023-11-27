function openMenu() {
  document.getElementById("side-menu").style.right = "0";
}

function closeMenu() {
  document.getElementById("side-menu").style.right = "-300px";
}

function openTab(tabTitle) {  
  const tabContent = document.getElementById(tabTitle);

  document.querySelectorAll(".title").forEach(title => {
    if (title.classList.contains("title-active")) {
      title.classList.remove("title-active");
    }
  });

  document.querySelectorAll(".tab-content").forEach(content => {
    if (content.classList.contains("content-active")) {
      content.classList.remove("content-active");
    }
  });

  event.currentTarget.classList.add("title-active");
  tabContent.classList.add("content-active");
}

document.getElementById("year").innerHTML = new Date().getFullYear();

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  }
  else {
    document.getElementById("navbar").style.top = "-108px";
  }

  prevScrollPos = currentScrollPos;
}

const scriptURL = "https://script.google.com/macros/s/AKfycbwuvRbvu2rNKwHQTSErmZdotrMvUVudK-EPufqkrXuzapB1WrQ-zJJHL6jc5AaQw2_i/exec";
const form = document.forms["submit-to-google-sheet"];
const responseMessage = document.getElementById("contact-response-message");

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form)})
    .then(response => {
      responseMessage.innerHTML = "Message sent successfully."

      setTimeout(() => {
        responseMessage.innerHTML = "";
      }, 5000);

      form.reset();
    })
    .catch(error => console.error("Error!", error.message));
});