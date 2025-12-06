import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  services: Array<{
    title: string;
    icon: string;
    href: string;
  }>;
}

const Header = ({ services }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Eye" size={32} className="text-primary neon-text" />
            <span className="text-2xl font-bold tracking-tight">NOIR<span className="neon-text">INTEL</span></span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <div 
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button className="hover:text-primary transition-colors flex items-center space-x-1">
                <span>Услуги</span>
                <Icon name="ChevronDown" size={16} />
              </button>
              {servicesMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-primary/20 neon-border animate-fade-in">
                  {services.map((service, idx) => (
                    <a
                      key={idx}
                      href={service.href}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-primary/10 transition-colors border-b border-border last:border-0"
                    >
                      <Icon name={service.icon as any} size={18} className="text-primary" />
                      <span className="text-sm">{service.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Расценки</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#publications" className="hover:text-primary transition-colors">Публикации</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border">
              Личный кабинет
            </Button>
          </div>

          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a href="#home" className="block hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="block hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="block hover:text-primary transition-colors">Кейсы</a>
            <a href="#pricing" className="block hover:text-primary transition-colors">Расценки</a>
            <a href="#about" className="block hover:text-primary transition-colors">О компании</a>
            <a href="#publications" className="block hover:text-primary transition-colors">Публикации</a>
            <a href="#contact" className="block hover:text-primary transition-colors">Контакты</a>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Личный кабинет
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
