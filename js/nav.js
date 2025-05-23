document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navigation");
  if (!nav) return;

  nav.innerHTML = `
    <div class="nav-content-container">
      <div class="nav-header-container">
        <a href="./index.html" id="razia-title">Razia Sahi, Ph.D.</a>
        <i id="close-button" class="fa fa-close"></i>
      </div>
      <div class="nav-link-container">
        <a href="./index.html" class="nav-home">Home</a>
        <a href="./publications.html" class="nav-publications">Research</a>
        <a target="_blank" href="https://mfr.osf.io/render?url=https%3A%2F%2Fosf.io%2Fc3t8q%2Fdownload" class="nav-cv">CV</a>
      </div>
    </div>
  `;

  // Optional: Highlight current page
   const links = nav.querySelectorAll("a");
  links.forEach(link => {
    if (link.id === "razia-title") return;

    const linkHref = link.getAttribute("href").replace('./', '');
    if (window.location.pathname.includes(linkHref)) {
      link.id = "nav-selected";
    }
  });
});