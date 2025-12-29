import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading mx-auto">
            My professional journey building AI systems and automation solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] md:left-[19px] top-12 bottom-0 w-px bg-border" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-2 top-1">
                <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-primary" />
                </div>
              </div>

              {/* Content Card */}
              <div className="glass-card p-6 md:p-8 ml-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">
                      {exp.company}{' '}
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground ml-2">
                        {exp.type}
                      </span>
                    </p>
                  </div>
                  <span className="text-sm text-primary font-medium whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
