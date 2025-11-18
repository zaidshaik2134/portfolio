// Nayi file: Skills.jsx

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}