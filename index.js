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