import zaidImage from "./assets/zaid.jpg";


export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="text">
          <h2>
            Hello, I'm <span>ZaidShaikh</span>
          </h2>
          <p>Frontend Developer • Designer • Creator
            </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>

        <div className="hero-image">
        <img src={zaidImage} alt="Zaid Shaikh" width="400" />

        </div>
      </div>
    </section>
  );
}
