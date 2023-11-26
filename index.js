function openMenu() {
  document.getElementById("side-menu").style.right = "0";
}

function closeMenu() {
  document.getElementById("side-menu").style.right = "-200px";
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
