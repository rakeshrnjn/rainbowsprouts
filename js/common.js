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

  const footerHTML = `
    <footer class="footer">
      <div class="social-links">
        <a href="https://www.instagram.com/p/DS8LZtJDIlN/" target="_blank" rel="noopener">
          <img src="icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://youtube.com/@rainbowsproutsofficial?si=FSM4mRhvCygzp18d" target="_blank" rel="noopener">
          <img src="icons/youtube.svg" alt="YouTube" />
        </a>
      </div>
      <p>&copy; 2026 Rainbow Sprouts. All rights reserved.</p>
    </footer>
  `;

  const footerMount = document.getElementById("footer-mount");
  if (footerMount) footerMount.innerHTML = footerHTML;
});