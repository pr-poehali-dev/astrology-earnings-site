import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-astro-navy text-white py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Star" className="text-astro-gold" size={32} />
            <h1 className="text-3xl font-display font-bold">Astro Guide</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="hover:text-astro-gold transition-colors"
            >
              Услуги
            </a>
            <a
              href="#horoscopes"
              className="hover:text-astro-gold transition-colors"
            >
              Гороскопы
            </a>
            <a
              href="#compatibility"
              className="hover:text-astro-gold transition-colors"
            >
              Совместимость
            </a>
            <a
              href="#learning"
              className="hover:text-astro-gold transition-colors"
            >
              Обучение
            </a>
          </nav>
          <Button className="bg-astro-gold hover:bg-astro-gold/90 text-astro-navy font-semibold">
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-astro-navy via-astro-dark to-astro-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-float">
            <Icon
              name="Moon"
              className="text-astro-gold mx-auto mb-4"
              size={80}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Познай свое <span className="text-astro-gold">предназначение</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Астрологические расчеты, натальные карты, гороскопы и персональные
            консультации для вашего успеха
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-astro-gold hover:bg-astro-gold/90 text-astro-navy font-semibold text-lg px-8 py-4"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Персональный гороскоп
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-astro-navy text-lg px-8 py-4"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Совместимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-astro-navy mb-4">
              Астрологические услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональные астрологические расчеты и консультации для важных
              решений в жизни
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Sun" className="text-astro-gold mb-3" size={40} />
                <CardTitle className="font-display text-astro-navy">
                  Натальная карта
                </CardTitle>
                <CardDescription>
                  Полный анализ вашей личности и жизненного пути
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Расчет планет и домов
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Анализ аспектов
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Прогнозы на год
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-astro-gold/20 text-astro-dark">
                    от 5000 ₽
                  </Badge>
                  <Button className="bg-astro-purple hover:bg-astro-purple/90">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Heart" className="text-astro-gold mb-3" size={40} />
                <CardTitle className="font-display text-astro-navy">
                  Совместимость
                </CardTitle>
                <CardDescription>
                  Анализ отношений и совместимости партнеров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Синастрия карт
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Композит отношений
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Рекомендации
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-astro-gold/20 text-astro-dark">
                    от 3500 ₽
                  </Badge>
                  <Button className="bg-astro-purple hover:bg-astro-purple/90">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon
                  name="TrendingUp"
                  className="text-astro-gold mb-3"
                  size={40}
                />
                <CardTitle className="font-display text-astro-navy">
                  Прогнозы
                </CardTitle>
                <CardDescription>
                  Персональные прогнозы на любой период
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Транзиты планет
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Прогрессии
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-500"
                      size={16}
                    />
                    Лунный календарь
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-astro-gold/20 text-astro-dark">
                    от 2500 ₽
                  </Badge>
                  <Button className="bg-astro-purple hover:bg-astro-purple/90">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Horoscopes Section */}
      <section id="horoscopes" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-astro-navy mb-4">
              Гороскопы
            </h2>
            <p className="text-lg text-gray-600">
              Ежедневные, еженедельные и месячные прогнозы для всех знаков
              зодиака
            </p>
          </div>

          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="daily">Сегодня</TabsTrigger>
              <TabsTrigger value="weekly">Неделя</TabsTrigger>
              <TabsTrigger value="monthly">Месяц</TabsTrigger>
            </TabsList>

            <TabsContent value="daily" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { sign: "Овен", icon: "Zap", period: "21 марта - 19 апреля" },
                  {
                    sign: "Телец",
                    icon: "Mountain",
                    period: "20 апреля - 20 мая",
                  },
                  {
                    sign: "Близнецы",
                    icon: "Users",
                    period: "21 мая - 20 июня",
                  },
                  { sign: "Рак", icon: "Home", period: "21 июня - 22 июля" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Icon
                          name={item.icon as any}
                          className="text-astro-gold"
                          size={24}
                        />
                        <Badge variant="secondary" className="text-xs">
                          {item.period}
                        </Badge>
                      </div>
                      <CardTitle className="font-display text-lg">
                        {item.sign}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        Сегодня благоприятный день для новых начинаний. Звезды
                        советуют...
                      </p>
                      <Button
                        variant="ghost"
                        className="mt-2 p-0 h-auto text-astro-purple hover:text-astro-purple/80"
                      >
                        Читать полностью →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="text-center py-8">
              <p className="text-gray-600">
                Еженедельные гороскопы обновляются каждый понедельник
              </p>
            </TabsContent>

            <TabsContent value="monthly" className="text-center py-8">
              <p className="text-gray-600">
                Месячные прогнозы публикуются в начале каждого месяца
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compatibility Section */}
      <section id="compatibility" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-astro-navy mb-4">
              Совместимость знаков
            </h2>
            <p className="text-lg text-gray-600">
              Узнайте, насколько вы подходите друг другу по звездам
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-astro-purple/10 to-astro-gold/10 border-astro-purple/20">
              <CardHeader className="text-center">
                <CardTitle className="font-display text-2xl text-astro-navy">
                  Калькулятор совместимости
                </CardTitle>
                <CardDescription className="text-lg">
                  Выберите знаки зодиака и получите детальный анализ
                  совместимости
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-astro-navy">
                      Ваш знак зодиака
                    </label>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="User" className="mr-2" size={16} />
                      Выберите знак
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-astro-navy">
                      Знак партнера
                    </label>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Heart" className="mr-2" size={16} />
                      Выберите знак
                    </Button>
                  </div>
                </div>
                <Button className="w-full bg-astro-gold hover:bg-astro-gold/90 text-astro-navy font-semibold text-lg py-6">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать совместимость
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learning" className="py-20 px-4 bg-astro-navy text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Обучение астрологии
            </h2>
            <p className="text-lg text-white/90">
              Изучайте астрологию с профессиональными астrologами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon
                  name="BookOpen"
                  className="text-astro-gold mb-3"
                  size={40}
                />
                <CardTitle className="font-display">Базовый курс</CardTitle>
                <CardDescription className="text-white/70">
                  Основы астрологии для начинающих
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Icon
                      name="Clock"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    8 недель обучения
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="Users"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    Групповые занятия
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="Award"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    Сертификат
                  </div>
                </div>
                <Button className="w-full bg-astro-gold hover:bg-astro-gold/90 text-astro-navy">
                  25 000 ₽
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon name="Star" className="text-astro-gold mb-3" size={40} />
                <CardTitle className="font-display">Продвинутый курс</CardTitle>
                <CardDescription className="text-white/70">
                  Углубленное изучение техник
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Icon
                      name="Clock"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    12 недель обучения
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="Users"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    Малые группы
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="Award"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    Диплом
                  </div>
                </div>
                <Button className="w-full bg-astro-gold hover:bg-astro-gold/90 text-astro-navy">
                  45 000 ₽
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon name="Crown" className="text-astro-gold mb-3" size={40} />
                <CardTitle className="font-display">Мастер-класс</CardTitle>
                <CardDescription className="text-white/70">
                  Индивидуальное обучение
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Icon
                      name="Clock"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    Гибкий график
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="User"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    Персональный подход
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="Award"
                      className="mr-2 text-astro-gold"
                      size={16}
                    />
                    Мастер-диплом
                  </div>
                </div>
                <Button className="w-full bg-astro-gold hover:bg-astro-gold/90 text-astro-navy">
                  от 75 000 ₽
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-astro-dark text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Star" className="text-astro-gold" size={24} />
                <span className="text-xl font-display font-bold">
                  Astro Guide
                </span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональная астрология для жизни и бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-astro-gold">
                    Натальные карты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-astro-gold">
                    Совместимость
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-astro-gold">
                    Прогнозы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-astro-gold">
                    Консультации
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-astro-gold">
                    Базовый курс
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-astro-gold">
                    Продвинутый
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-astro-gold">
                    Мастер-класс
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-astro-gold">
                    Вебинары
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center">
                  <Icon
                    name="Mail"
                    className="mr-2 text-astro-gold"
                    size={16}
                  />
                  info@astroguide.ru
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="mr-2 text-astro-gold"
                    size={16}
                  />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="mr-2 text-astro-gold"
                    size={16}
                  />
                  Москва, Россия
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2024 Astro Guide. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
