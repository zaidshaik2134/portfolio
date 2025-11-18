import zaid2 from "./assets/zaid2.png";

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-content">
        <img 
          src={zaid2} 
          alt="profile" 
          className="profile-image"
        />

        <p>
          I’m a passionate web developer specializing in React and UI/UX. My expertise lies in building clean, responsive, and user-friendly websites that look and feel great on all devices. I enjoy the challenge of solving real-world problems through code and am dedicated to turning complex ideas into beautiful, efficient interfaces. 
          I'm always eager to learn and grow, constantly exploring new technologies to enhance my skills.Frontend Developer • Designer • Creator
            As a Full-Stack Developer, I enjoy creating complete web 
            solutions—from crafting intuitive user interfaces to developing strong backend logic. I focus on writing clean, maintainable code while ensuring every project delivers great performance and a seamless user experience. I’m always learning, improving, and building things that truly make a difference
          
        </p>
      </div>
    </section>
  );
}
