import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CaseItem {
  title: string;
  type: string;
  roi: string;
  duration: string;
  success: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface CasesAndContactProps {
  cases: CaseItem[];
  testimonials: Testimonial[];
}

const CasesAndContact = ({ cases, testimonials }: CasesAndContactProps) => {
  return (
    <>
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
    </>
  );
};

export default CasesAndContact;
