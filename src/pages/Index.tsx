import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesAndProcess from '@/components/ServicesAndProcess';
import CasesAndContact from '@/components/CasesAndContact';

const Index = () => {
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
      
      <Header services={services} />
      <HeroSection />
      <ServicesAndProcess serviceCategories={serviceCategories} timeline={timeline} />
      <CasesAndContact cases={cases} testimonials={testimonials} />
    </div>
  );
};

export default Index;
