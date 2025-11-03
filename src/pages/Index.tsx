import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'Высотные работы',
      description: 'Профессиональные услуги промышленных альпинистов для объектов любой сложности',
      icon: 'Mountain',
      details: ['Монтаж конструкций', 'Герметизация швов', 'Установка рекламы', 'Техническое обслуживание']
    },
    {
      title: 'Ремонт фасада',
      description: 'Комплексный ремонт и реставрация фасадов зданий с гарантией качества',
      icon: 'Building2',
      details: ['Штукатурка', 'Покраска', 'Облицовка', 'Утепление']
    },
    {
      title: 'Мойка окон',
      description: 'Профессиональная очистка окон и витрин на любой высоте',
      icon: 'Droplet',
      details: ['Стеклопакеты', 'Витражи', 'Витрины', 'Панорамные окна']
    }
  ];

  const stats = [
    { value: '500+', label: 'Выполненных проектов' },
    { value: '15', label: 'Лет опыта' },
    { value: '50+', label: 'Специалистов' },
    { value: '99%', label: 'Довольных клиентов' }
  ];

  const projects = [
    { name: 'ТЦ "Европа"', type: 'Ремонт фасада', area: '5000 м²' },
    { name: 'БЦ "Технопарк"', type: 'Мойка окон', area: '3200 м²' },
    { name: 'ЖК "Высота"', type: 'Высотные работы', area: '8000 м²' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" size={32} className="text-primary" />
              <span className="text-2xl font-bold">AltitudeWorks</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
              <Button className="bg-primary hover:bg-primary/90">Оставить заявку</Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <a href="#services" className="block hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="block hover:text-primary transition-colors">О компании</a>
              <a href="#projects" className="block hover:text-primary transition-colors">Проекты</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Контакты</a>
              <Button className="w-full bg-primary hover:bg-primary/90">Оставить заявку</Button>
            </div>
          )}
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Высотные работы
                <span className="text-primary block">любой сложности</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональные услуги промышленного альпинизма. Безопасность, качество и оперативность на высоте.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
                alt="Промышленный альпинизм"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные решения для работы на высоте</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-primary mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  AltitudeWorks — лидер в области промышленного альпинизма с 15-летним опытом работы на российском рынке.
                </p>
                <p>
                  Мы предоставляем полный спектр высотных работ для коммерческих и жилых объектов. Наша команда состоит из сертифицированных специалистов с многолетним опытом.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="space-y-2">
                    <Icon name="Shield" size={32} className="text-primary" />
                    <h4 className="font-semibold text-foreground">Безопасность</h4>
                    <p className="text-sm">Сертифицированное оборудование</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Award" size={32} className="text-primary" />
                    <h4 className="font-semibold text-foreground">Качество</h4>
                    <p className="text-sm">Гарантия на все работы</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Clock" size={32} className="text-primary" />
                    <h4 className="font-semibold text-foreground">Оперативность</h4>
                    <p className="text-sm">Выполнение в срок</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Users" size={32} className="text-primary" />
                    <h4 className="font-semibold text-foreground">Профессионализм</h4>
                    <p className="text-sm">Опытные специалисты</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                alt="Команда"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground">Примеры наших работ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1486406146456 + index * 1000}-ef90e4f1af33?w=600`}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="Ruler" size={16} className="mr-2" />
                    <span>Площадь: {project.area}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и получите консультацию специалиста</p>
          </div>

          <Card className="p-8 bg-card border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (999) 999-99-99" className="bg-background border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  className="bg-background border-border min-h-[120px]"
                />
              </div>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-2">
              <Icon name="Phone" size={32} className="text-primary mx-auto" />
              <h4 className="font-semibold">Телефон</h4>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center space-y-2">
              <Icon name="Mail" size={32} className="text-primary mx-auto" />
              <h4 className="font-semibold">Email</h4>
              <p className="text-muted-foreground">info@altitudeworks.ru</p>
            </div>
            <div className="text-center space-y-2">
              <Icon name="MapPin" size={32} className="text-primary mx-auto" />
              <h4 className="font-semibold">Адрес</h4>
              <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Mountain" size={28} className="text-primary" />
                <span className="text-xl font-bold">AltitudeWorks</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные высотные работы любой сложности
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Высотные работы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ремонт фасада</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мойка окон</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AltitudeWorks. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
