const skillGroups = [
  {
    category: "OutSystems",
    items: [
      "OutSystems 11 (Traditional Web, Reactive Web, Mobile)",
      "ODC",
      "Service Studio",
      "Service Center",
      "Integration Studio",
      "Lifetime",
      "AI Mentor Studio",
      "Agentic AI",
    ],
  },
  {
    category: "Programming",
    items: ["HTML", "CSS", "JavaScript", "VB.NET", "Python"],
  },
  {
    category: "Database",
    items: ["SQL", "Oracle", "MySQL", "Database Design", "Entity Modeling", "Performance Tuning"],
  },
  {
    category: "Integration & APIs",
    items: ["REST", "SOAP", "SAP", "JSON", "Postman", "SoapUI"],
  },
  {
    category: "Development & Architecture",
    items: [
      "Application Development",
      "Application Enhancement",
      "Software Architecture",
      "Performance Optimization",
      "Unit Testing",
      "Code Reviews",
      "Production Support",
      "Development Best Practices",
    ],
  },
  {
    category: "Tools & Methodologies",
    items: ["Jira", "SharePoint", "Generative AI", "Visual Studio Code", "AWS", "Google Cloud", "Agile", "Waterfall"],
  },
  {
    category: "Soft Skills",
    items: ["Problem-Solving", "Analytical Thinking", "Communication", "Teamwork & Collaboration", "Adaptability", "Leadership"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
      <h2 className="font-heading text-3xl font-semibold mb-10">Skills</h2>
      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-sm text-muted mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-md bg-surface border border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}