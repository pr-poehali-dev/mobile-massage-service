import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      title: "Классический массаж",
      description: "Общий, спины, шейно-воротниковой зоны",
      icon: "Hand",
      duration: "45 мин",
      price: "1200 ₽"
    },
    {
      title: "Антицеллюлитный массаж",
      description: "Эффективная борьба с целлюлитом",
      icon: "Sparkles",
      duration: "45 мин",
      price: "1500 ₽"
    },
    {
      title: "Лимфодренажный массаж",
      description: "Выведение лишней жидкости",
      icon: "Droplets",
      duration: "45 мин",
      price: "1500 ₽"
    },
    {
      title: "Спортивный массаж",
      description: "Восстановление после тренировок",
      icon: "Zap",
      duration: "45 мин",
      price: "1200 ₽"
    },
    {
      title: "Расслабляющий массаж",
      description: "Снятие стресса и напряжения",
      icon: "Flower2",
      duration: "45 мин",
      price: "1200 ₽"
    },
    {
      title: "Массаж лица",
      description: "Омоложение и тонус кожи",
      icon: "Smile",
      duration: "30 мин",
      price: "1000 ₽"
    },
    {
      title: "Медовый массаж",
      description: "Детоксикация и оздоровление",
      icon: "Hexagon",
      duration: "45 мин",
      price: "1500 ₽"
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/2c9ec443-1fe7-4e93-bdaf-875dad229c5d/files/5c505c64-d5b2-4e07-8b11-f95d8dae8f66.jpg",
      alt: "Массажный кабинет"
    },
    {
      url: "https://cdn.poehali.dev/projects/2c9ec443-1fe7-4e93-bdaf-875dad229c5d/files/54dd6992-812c-4d78-a297-83b9a4590e3d.jpg",
      alt: "Процесс массажа"
    },
    {
      url: "https://cdn.poehali.dev/projects/2c9ec443-1fe7-4e93-bdaf-875dad229c5d/files/04073eb1-0b11-4c3b-a7eb-b70dbbffc7b2.jpg",
      alt: "Массажные принадлежности"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Hand" size={28} className="text-primary" />
              <span className="text-xl font-semibold">Массаж на дом</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#price" className="hover:text-primary transition-colors">Прайс</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm">Записаться</Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Профессиональный массаж<br />с выездом на дом
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Избавьтесь от болей в спине, усталости и напряжения, не выходя из дома. 
                Индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Записаться на массаж
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <Card className="animate-scale-in border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Home" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Выезд со столом</h3>
                    <p className="text-sm text-muted-foreground">Привожу профессиональный массажный стол</p>
                  </CardContent>
                </Card>
                
                <Card className="animate-scale-in border-primary/20" style={{ animationDelay: '0.1s' }}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Gift" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Первый выезд бесплатно</h3>
                    <p className="text-sm text-muted-foreground">При первом сеансе выезд в подарок</p>
                  </CardContent>
                </Card>
                
                <Card className="animate-scale-in border-primary/20" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Профессионально</h3>
                    <p className="text-sm text-muted-foreground">Опыт работы и качественные масла</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Виды массажа</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Широкий спектр массажных техник для вашего здоровья и расслабления
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={service.icon} size={24} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-sm text-muted-foreground">{service.duration}</span>
                        <span className="font-semibold text-primary text-lg">{service.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="price" className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Прайс-лист</h2>
                <p className="text-muted-foreground">Доступные цены и прозрачные условия</p>
              </div>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start pb-4 border-b">
                      <div>
                        <h3 className="font-semibold mb-1">Массаж зоны на выбор</h3>
                        <p className="text-sm text-muted-foreground">Классический, расслабляющий, выжимающий, восточные техники</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-primary">1200 ₽</div>
                        <div className="text-sm text-muted-foreground">45 мин</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start pb-4 border-b">
                      <div>
                        <h3 className="font-semibold mb-1">Массаж медовый</h3>
                        <p className="text-sm text-muted-foreground">Детоксикация и оздоровление организма</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-primary">1500 ₽</div>
                        <div className="text-sm text-muted-foreground">45 мин</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start pb-4 border-b">
                      <div>
                        <h3 className="font-semibold mb-1">Антицеллюлитный массаж</h3>
                        <p className="text-sm text-muted-foreground">Коррекция фигуры и борьба с целлюлитом</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-primary">1500 ₽</div>
                        <div className="text-sm text-muted-foreground">45 мин</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start pb-4">
                      <div>
                        <h3 className="font-semibold mb-1">Выезд мастера</h3>
                        <p className="text-sm text-muted-foreground">Со своим профессиональным столом</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl">300 ₽</div>
                      </div>
                    </div>
                    
                    <div className="bg-accent/50 rounded-lg p-6 flex items-center gap-4">
                      <Icon name="Gift" size={32} className="text-primary" />
                      <div>
                        <h3 className="font-semibold mb-1">На первый массаж выезд бесплатно!</h3>
                        <p className="text-sm text-muted-foreground">Попробуйте наши услуги без дополнительных затрат</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Галерея</h2>
                <p className="text-muted-foreground">Атмосфера и процесс работы</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative overflow-hidden rounded-xl aspect-square group"
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground mb-4">
                      Я профессиональный массажист с многолетним опытом работы. Моя главная цель — 
                      помочь вам избавиться от болей, напряжения и стресса, подарить ощущение легкости 
                      и комфорта.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Использую только качественные профессиональные масла и косметику. Каждый сеанс 
                      подбирается индивидуально с учетом ваших потребностей и пожеланий.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex gap-4">
                        <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">Индивидуальный подход</h3>
                          <p className="text-sm text-muted-foreground">Подбор техники под ваши запросы</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">Профессиональное оборудование</h3>
                          <p className="text-sm text-muted-foreground">Свой массажный стол и качественные масла</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">Удобство для вас</h3>
                          <p className="text-sm text-muted-foreground">Выезд в удобное для вас время</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">Гарантия качества</h3>
                          <p className="text-sm text-muted-foreground">Результат после первого сеанса</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты и запись</h2>
                <p className="text-muted-foreground">Свяжитесь со мной удобным способом</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-6">Свяжитесь со мной</h3>
                    <div className="space-y-4">
                      <a href="tel:+79000000000" className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="Phone" size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Телефон</div>
                          <div className="font-semibold">+7 (900) 000-00-00</div>
                        </div>
                      </a>
                      
                      <a href="https://wa.me/79000000000" className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="MessageCircle" size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">WhatsApp</div>
                          <div className="font-semibold">Написать в мессенджер</div>
                        </div>
                      </a>
                      
                      <a href="https://t.me/username" className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="Send" size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Telegram</div>
                          <div className="font-semibold">@username</div>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-6">Форма обратной связи</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                        <Input 
                          placeholder="Введите ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон</label>
                        <Input 
                          placeholder="+7 (900) 000-00-00"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <Textarea 
                          placeholder="Расскажите о ваших пожеланиях"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={4}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Hand" size={24} />
              <span className="font-semibold text-lg">Массаж на дом</span>
            </div>
            <p className="text-sm opacity-80">
              Профессиональный массаж с выездом на дом. Здоровье и комфорт для вас.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
