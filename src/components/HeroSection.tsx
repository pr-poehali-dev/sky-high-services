import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <>
      <section id="home" className="pt-40 pb-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center space-x-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm tracking-widest uppercase">Corporate Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
              <span className="glitch" data-text="РАСКРЫВАЕМ">РАСКРЫВАЕМ</span>
              <br />
              <span className="neon-text">ИСТИНУ</span>
              <br />
              В ТЕМНОТЕ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
              Корпоративные расследования, технический аудит и стратегический консалтинг 
              для компаний, которым нужны ответы.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border text-lg px-8">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать Whitepaper
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с консультантом
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/50 wet-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Раскрытых кейсов' },
              { value: '98%', label: 'Точность расследований' },
              { value: '$45M+', label: 'Сохраненных средств' },
              { value: '24/7', label: 'Доступность' },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-black neon-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
