import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const services = [
    { title: 'Консалтинг', icon: 'Briefcase', href: '#consulting' },
    { title: 'Аналитика', icon: 'BarChart3', href: '#analytics' },
    { title: 'Стратегия', icon: 'Target', href: '#strategy' },
    { title: 'Технологические решения', icon: 'Cpu', href: '#tech' },
    { title: 'Расследования / Аудит', icon: 'Search', href: '#investigations' },
    { title: 'Поддержка клиентов', icon: 'Headphones', href: '#support' },
  ];

  const serviceCategories = [
    {
      title: 'Финансовые расследования',
      icon: 'DollarSign',
      description: 'Экспертиза финансовых потоков и выявление мошенничества',
      metrics: { cases: '250+', accuracy: '98%' }
    },
    {
      title: 'Технический аудит',
      icon: 'Shield',
      description: 'Глубокий анализ IT-инфраструктуры и выявление уязвимостей',
      metrics: { cases: '180+', accuracy: '97%' }
    },
    {
      title: 'Юридические расследования',
      icon: 'Scale',
      description: 'Сбор доказательной базы и экспертная поддержка в судах',
      metrics: { cases: '320+', accuracy: '99%' }
    },
  ];

  const timeline = [
    { step: '01', title: 'Анализ', desc: 'Глубокое изучение ситуации и сбор данных' },
    { step: '02', title: 'Расследование', desc: 'Детальная проверка фактов и выдвижение гипотез' },
    { step: '03', title: 'Решение', desc: 'Разработка стратегии и плана действий' },
    { step: '04', title: 'Результат', desc: 'Достижение целей и документирование' },
  ];

  const cases = [
    {
      title: 'Раскрытие корпоративного мошенничества',
      type: 'Финансовое расследование',
      roi: '+$2.4M',
      duration: '3 месяца',
      success: '100%',
    },
    {
      title: 'Защита от киберугроз',
      type: 'Технический аудит',
      roi: '+$1.8M',
      duration: '2 месяца',
      success: '100%',
    },
    {
      title: 'Судебная экспертиза',
      type: 'Юридическое расследование',
      roi: '+$3.2M',
      duration: '4 месяца',
      success: '100%',
    },
  ];

  const testimonials = [
    {
      quote: 'Их команда раскрыла схему хищений, которую мы не замечали годами. Профессионализм на высшем уровне.',
      author: 'Андрей Волков',
      position: 'CEO, TechCorp',
    },
    {
      quote: 'Быстро, эффективно, конфиденциально. Именно то, что нужно для работы с деликатными вопросами.',
      author: 'Екатерина Смирнова',
      position: 'CFO, FinanceGroup',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="rain-overlay" />
      
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

      <section id="cases" className="py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm tracking-widest uppercase">Case Studies</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">УСПЕШНЫЕ КЕЙСЫ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные расследования с измеримыми результатами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBGRjg4IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-sm text-primary uppercase tracking-wider mb-1">{caseItem.type}</div>
                    <div className="text-3xl font-black neon-text">{caseItem.roi}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{caseItem.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase mb-1">Длительность</div>
                      <div className="font-bold">{caseItem.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase mb-1">Успешность</div>
                      <div className="font-bold text-primary">{caseItem.success}</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground">
                    Подробнее о кейсе
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-secondary/30 wet-surface">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm tracking-widest uppercase">Testimonials</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">ОТЗЫВЫ КЛИЕНТОВ</h2>
          </div>

          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-12 bg-card border-border hover:border-primary/50 transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <Icon name="Quote" size={48} className="text-primary/30 mb-6" />
                <p className="text-2xl md:text-3xl testimonial-text mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 border-2 border-primary neon-border flex items-center justify-center bg-background">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="h-px w-12 bg-primary mb-6" />
                <h2 className="text-5xl md:text-6xl font-black mb-6">СВЯЗАТЬСЯ<br />С НАМИ</h2>
                <p className="text-xl text-muted-foreground">
                  Конфиденциальная консультация по вашему вопросу
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-bold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 000-00-00</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-bold mb-1">Email</div>
                    <div className="text-muted-foreground">contact@noirintel.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-bold mb-1">Адрес</div>
                    <div className="text-muted-foreground">Москва, Кутузовский просп., 36</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-card border-primary/30 neon-border">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-bold uppercase tracking-wider mb-2 block">Имя</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border border-border focus:border-primary px-4 py-3 outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold uppercase tracking-wider mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-background border border-border focus:border-primary px-4 py-3 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold uppercase tracking-wider mb-2 block">Компания</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border border-border focus:border-primary px-4 py-3 outline-none transition-colors"
                    placeholder="Название компании"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold uppercase tracking-wider mb-2 block">Сообщение</label>
                  <textarea 
                    className="w-full bg-background border border-border focus:border-primary px-4 py-3 outline-none transition-colors min-h-[120px] resize-none"
                    placeholder="Опишите ваш вопрос..."
                  />
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-border">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Гарантируем полную конфиденциальность
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Eye" size={28} className="text-primary neon-text" />
                <span className="text-xl font-bold">NOIR<span className="neon-text">INTEL</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                Корпоративные расследования и стратегический консалтинг
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Консалтинг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аналитика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Расследования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Публикации</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider">Документы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Whitepapers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 NOIRINTEL. Все права защищены.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Мы в соцсетях:</span>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
