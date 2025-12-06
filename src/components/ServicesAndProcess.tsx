import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServiceCategory {
  title: string;
  icon: string;
  description: string;
  metrics: {
    cases: string;
    accuracy: string;
  };
}

interface TimelineItem {
  step: string;
  title: string;
  desc: string;
}

interface ServicesAndProcessProps {
  serviceCategories: ServiceCategory[];
  timeline: TimelineItem[];
}

const ServicesAndProcess = ({ serviceCategories, timeline }: ServicesAndProcessProps) => {
  return (
    <>
      <section id="services" className="py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm tracking-widest uppercase">Services</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">КАТЕГОРИИ УСЛУГ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для корпоративной безопасности и расследований
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center group-hover:neon-border transition-all duration-500">
                      <Icon name={service.icon as any} size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-2xl font-bold neon-text">{service.metrics.cases}</div>
                      <div className="text-xs text-muted-foreground uppercase">Кейсов</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold neon-text">{service.metrics.accuracy}</div>
                      <div className="text-xs text-muted-foreground uppercase">Точность</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-secondary/30 wet-surface">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm tracking-widest uppercase">Process</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">ПРОЦЕСС РАБОТЫ</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2" />
            {timeline.map((item, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto border-2 border-primary flex items-center justify-center neon-border bg-background relative z-10">
                    <span className="text-4xl font-black neon-text">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAndProcess;
