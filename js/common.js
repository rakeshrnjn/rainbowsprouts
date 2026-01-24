// js/common.js
document.addEventListener("DOMContentLoaded", () => {
	const navHTML = `
    <header class="top-nav">
      <div class="logo">
        <a href="index.html"> 
          <img src="images/RainbowSproutsLogo.png" alt="Rainbow Sprouts Logo" />
          </a>
      </div>
      <nav>
        <a href="index.html">Home</a>
        <a href="mission.html">Our Mission</a>
        <a href="who-we-are.html">Who we are</a>
        <a href="sources.html">Research</a>
        <a href="careers.html">Career</a>
      </nav>
    </header>
  `;

	const mount = document.getElementById("nav-mount");
	if (mount) mount.innerHTML = navHTML;
});