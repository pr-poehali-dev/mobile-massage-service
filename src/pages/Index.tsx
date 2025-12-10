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
    { title: "Классический массаж", price: "1200 ₽", duration: "45 мин" },
    { title: "Антицеллюлитный массаж", price: "1500 ₽", duration: "45 мин" },
    { title: "Лимфодренажный массаж", price: "1500 ₽", duration: "45 мин" },
    { title: "Спортивный массаж", price: "1200 ₽", duration: "45 мин" },
    { title: "Расслабляющий массаж", price: "1200 ₽", duration: "45 мин" },
    { title: "Массаж лица", price: "1000 ₽", duration: "30 мин" },
    { title: "Медовый массаж", price: "1500 ₽", duration: "45 мин" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Icon name="Hand" size={36} className="text-primary" />
                <h1 className="text-3xl md:text-5xl font-bold">Массаж на дом</h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Избавьтесь от болей в спине, усталости и напряжения, не выходя из дома
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                <Button size="lg" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Записаться
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  WhatsApp
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="border-primary/20">
                  <CardContent className="pt-4 pb-4 text-center">
                    <Icon name="Home" size={28} className="text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Выезд со столом</p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-4 pb-4 text-center">
                    <Icon name="Gift" size={28} className="text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Первый выезд бесплатно</p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-4 pb-4 text-center">
                    <Icon name="Award" size={28} className="text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Профессионально</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Виды массажа и цены</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="pt-4 pb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                      <span className="font-bold text-lg text-primary">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="border-primary bg-accent/30">
              <CardContent className="pt-4 pb-4 flex items-center gap-3">
                <Icon name="Gift" size={28} className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">На первый массаж выезд бесплатно!</p>
                  <p className="text-sm text-muted-foreground">Выезд мастера со столом — 300 ₽</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Обо мне</h2>
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Я профессиональный массажист с многолетним опытом работы. Моя главная цель — 
                  помочь вам избавиться от болей, напряжения и стресса, подарить ощущение легкости 
                  и комфорта.
                </p>
                <p className="text-muted-foreground mb-6">
                  Использую только качественные профессиональные масла и косметику. Каждый сеанс 
                  подбирается индивидуально с учетом ваших потребностей и пожеланий.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Индивидуальный подход</p>
                      <p className="text-xs text-muted-foreground">Подбор техники под ваши запросы</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Профессиональное оборудование</p>
                      <p className="text-xs text-muted-foreground">Свой массажный стол и качественные масла</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Удобство для вас</p>
                      <p className="text-xs text-muted-foreground">Выезд в удобное для вас время</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Гарантия качества</p>
                      <p className="text-xs text-muted-foreground">Результат после первого сеанса</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Контакты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Свяжитесь со мной</h3>
                  <div className="space-y-3">
                    <a href="tel:+79000000000" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Телефон</div>
                        <div className="font-semibold text-sm">+7 (900) 000-00-00</div>
                      </div>
                    </a>
                    
                    <a href="https://wa.me/79000000000" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="MessageCircle" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">WhatsApp</div>
                        <div className="font-semibold text-sm">Написать в мессенджер</div>
                      </div>
                    </a>
                    
                    <a href="https://t.me/username" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Send" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Telegram</div>
                        <div className="font-semibold text-sm">@username</div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Форма обратной связи</h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <Input 
                        placeholder="+7 (900) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Ваши пожелания"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={3}
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
        </section>
      </main>

      <footer className="bg-foreground text-background py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Hand" size={20} />
            <span className="font-semibold">Массаж на дом</span>
          </div>
          <p className="text-xs opacity-80">
            Профессиональный массаж с выездом на дом
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
