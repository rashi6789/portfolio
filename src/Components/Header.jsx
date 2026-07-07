import heroImg from "../assets/hero.jpg";

function Header() {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-tag">Hello, I'm</p>
          <h1>Rashi Verma</h1>
          <h3>Full Stack Developer</h3>
          <p className="hero-description">
            I design and build modern web experiences with a strong focus on
            clean UI, smooth performance, and user-friendly functionality.
          </p>

          <nav className="hero-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="hero-image-wrap">
          <img src={heroImg} alt="Rashi Verma" className="hero-image" />
        </div>
      </div>
    </header>
  );
}

export default Header;