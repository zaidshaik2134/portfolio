

export default function Projects() {
  const projects = [
    { title: "E-commerce grocery website", desc: "online grocery store using React.", link: "https://github.com/zaidshaik2134/grocery_store" },
    { title: "Portfolio", desc: "Personal portfolio built using React", link: "#" },
    { title: "E-commerce UI", desc: "Responsive e-commerce frontend design.", link: "#" },
     { title: "Portfolio Website", desc: "Personal portfolio built using React.", link: "#" },
    { title: "Weather App", desc: "Fetches real-time weather data.", link: "#" },
    { title: "E-commerce UI", desc: "Responsive e-commerce frontend design.", link: "#" },
    { title: "Weather App", desc: "Fetches real-time weather data.", link: "#" },
    { title: "E-commerce UI", desc: "Responsive e-commerce frontend design.", link: "#" }
 
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}
