import { Brain, Server, Database, Workflow, Cloud, LineChart, Code, Cpu } from 'lucide-react';
import { techStack } from '@/data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Server,
  Database,
  Workflow,
  Cloud,
  LineChart,
  Code,
  Cpu,
};

export const TechStackSection = () => {
  return (
    <section id="stack" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Stack</h2>
          <p className="section-subheading mx-auto">
            The technologies and tools I use to build intelligent systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techStack.map((category, index) => {
            const Icon = iconMap[category.icon] || Brain;
            return (
              <div
                key={category.title}
                className="glass-card p-6 hover:border-primary/30 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
