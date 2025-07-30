import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Server" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Selectel</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-success border-success/20 bg-success/5">
              Онлайн
            </Badge>
            <Button variant="outline" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-fade-in bg-gradient-to-br from-primary to-blue-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Всего серверов</p>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <Icon name="Server" size={32} className="text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in bg-gradient-to-br from-success to-emerald-600 text-white border-0" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Активных</p>
                  <p className="text-3xl font-bold">18</p>
                </div>
                <Icon name="Activity" size={32} className="text-emerald-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in bg-gradient-to-br from-orange-500 to-red-500 text-white border-0" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Нагрузка CPU</p>
                  <p className="text-3xl font-bold">73%</p>
                </div>
                <Icon name="Cpu" size={32} className="text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0" style={{animationDelay: '0.3s'}}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Баланс</p>
                  <p className="text-3xl font-bold">₽24,580</p>
                </div>
                <Icon name="CreditCard" size={32} className="text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dedicated Servers */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Server" size={20} className="mr-2 text-primary" />
                Выделенные серверы
              </CardTitle>
              <CardDescription>Управление физическими серверами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium">srv-prod-01</p>
                      <p className="text-sm text-slate-500">Intel Xeon E5-2630, 32GB RAM</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-success border-success/20">Активен</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium">srv-db-02</p>
                      <p className="text-sm text-slate-500">Intel Xeon Gold 6248, 128GB RAM</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-success border-success/20">Активен</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                    <div>
                      <p className="font-medium">srv-backup-03</p>
                      <p className="text-sm text-slate-500">Intel Core i7-9700, 16GB RAM</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-slate-500 border-slate-300">Выключен</Badge>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={16} className="mr-2" />
                Заказать сервер
              </Button>
            </CardContent>
          </Card>

          {/* Cloud Servers */}
          <Card className="animate-scale-in" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Cloud" size={20} className="mr-2 text-primary" />
                Облачные серверы
              </CardTitle>
              <CardDescription>Виртуальные машины в облаке</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium">web-app-01</p>
                      <p className="text-sm text-slate-500">2 vCPU, 4GB RAM, 50GB SSD</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-success border-success/20">Активен</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium">api-gateway</p>
                      <p className="text-sm text-slate-500">4 vCPU, 8GB RAM, 100GB SSD</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-success border-success/20">Активен</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium">test-server</p>
                      <p className="text-sm text-slate-500">1 vCPU, 2GB RAM, 25GB SSD</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-orange-500 border-orange-300">Нагрузка</Badge>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={16} className="mr-2" />
                Создать сервер
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Mushroom Farm Section */}
        <Card className="mt-8 mb-8 animate-fade-in bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
          <CardHeader>
            <CardTitle className="flex items-center text-emerald-800">
              <Icon name="TreePine" size={24} className="mr-3 text-emerald-600" />
              Грибная ферма "Зеленый мицелий"
            </CardTitle>
            <CardDescription className="text-emerald-700">
              Автоматизированное управление грибным производством
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-600 text-sm font-medium">Теплицы активны</p>
                    <p className="text-2xl font-bold text-emerald-800">12/15</p>
                  </div>
                  <Icon name="Home" size={24} className="text-emerald-500" />
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-600 text-sm font-medium">Урожай (кг)</p>
                    <p className="text-2xl font-bold text-emerald-800">1,247</p>
                  </div>
                  <Icon name="Package" size={24} className="text-emerald-500" />
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-600 text-sm font-medium">Температура</p>
                    <p className="text-2xl font-bold text-emerald-800">18.5°C</p>
                  </div>
                  <Icon name="Thermometer" size={24} className="text-emerald-500" />
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-600 text-sm font-medium">Влажность</p>
                    <p className="text-2xl font-bold text-emerald-800">85%</p>
                  </div>
                  <Icon name="Droplets" size={24} className="text-emerald-500" />
                </div>
              </div>
            </div>
            
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Перейти к детальной аналитике
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Climate Control */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Gauge" size={20} className="mr-2 text-blue-600" />
                Климат-контроль
              </CardTitle>
              <CardDescription>Мониторинг микроклимата теплиц</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <Icon name="Thermometer" size={16} className="text-blue-600" />
                    <div>
                      <p className="font-medium text-sm">Теплица А1</p>
                      <p className="text-xs text-slate-600">18.2°C, 87% влажность</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-300 bg-blue-50">Норма</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertTriangle" size={16} className="text-orange-600" />
                    <div>
                      <p className="font-medium text-sm">Теплица Б3</p>
                      <p className="text-xs text-slate-600">21.8°C, 92% влажность</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50">Высокая T°</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-green-600" />
                    <div>
                      <p className="font-medium text-sm">Теплица В2</p>
                      <p className="text-xs text-slate-600">17.9°C, 83% влажность</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">Отлично</Badge>
                </div>
              </div>
              
              <Button size="sm" className="w-full">
                <Icon name="Settings" size={16} className="mr-2" />
                Настроить автоматику
              </Button>
            </CardContent>
          </Card>

          {/* Growing Cycles */}
          <Card className="animate-scale-in" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="RotateCcw" size={20} className="mr-2 text-purple-600" />
                Циклы выращивания
              </CardTitle>
              <CardDescription>Управление производственными циклами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Шампиньоны - Партия #47</span>
                    <Badge variant="outline" className="text-green-600 border-green-300">День 18/25</Badge>
                  </div>
                  <Progress value={72} className="h-2 mb-2" />
                  <p className="text-xs text-slate-600">Ожидаемый сбор: 145 кг</p>
                </div>
                
                <div className="p-3 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Вешенки - Партия #23</span>
                    <Badge variant="outline" className="text-blue-600 border-blue-300">День 12/21</Badge>
                  </div>
                  <Progress value={57} className="h-2 mb-2" />
                  <p className="text-xs text-slate-600">Ожидаемый сбор: 89 кг</p>
                </div>
                
                <div className="p-3 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Опята - Партия #15</span>
                    <Badge variant="outline" className="text-orange-600 border-orange-300">Подготовка</Badge>
                  </div>
                  <Progress value={5} className="h-2 mb-2" />
                  <p className="text-xs text-slate-600">Старт цикла: завтра</p>
                </div>
              </div>
              
              <Button size="sm" className="w-full">
                <Icon name="Plus" size={16} className="mr-2" />
                Запустить новый цикл
              </Button>
            </CardContent>
          </Card>

          {/* Sales Analytics */}
          <Card className="animate-scale-in" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="TrendingUp" size={20} className="mr-2 text-green-600" />
                Продажи и аналитика
              </CardTitle>
              <CardDescription>Финансовые показатели фермы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <p className="font-medium text-sm">Выручка за месяц</p>
                    <p className="text-xl font-bold text-green-700">₽347,650</p>
                  </div>
                  <Icon name="TrendingUp" size={20} className="text-green-600" />
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Шампиньоны (850 кг)</span>
                    <span className="font-medium">₽187,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Вешенки (420 кг)</span>
                    <span className="font-medium">₽98,400</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Опята (210 кг)</span>
                    <span className="font-medium">₽62,250</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center font-medium">
                      <span>Расходы</span>
                      <span className="text-red-600">-₽89,420</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-green-700">
                      <span>Прибыль</span>
                      <span>₽258,230</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button size="sm" className="w-full">
                <Icon name="FileBarChart" size={16} className="mr-2" />
                Подробный отчет
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Billing Section */}
        <Card className="mt-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="CreditCard" size={20} className="mr-2 text-primary" />
              Тарифы и биллинг
            </CardTitle>
            <CardDescription>Управление платежами и балансом аккаунта</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Текущий баланс</span>
                  <span className="text-2xl font-bold text-success">₽24,580</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-sm text-slate-500">Хватит на 45 дней при текущем потреблении</p>
                <Button size="sm" className="w-full">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Пополнить баланс
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Расходы за месяц</span>
                  <span className="text-2xl font-bold">₽18,450</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Выделенные серверы</span>
                    <span>₽12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Облачные серверы</span>
                    <span>₽4,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Трафик</span>
                    <span>₽2,250</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Активные тарифы</span>
                  <Badge variant="outline" className="text-primary border-primary/20">3 тарифа</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Dedicated Pro</span>
                    <Badge variant="outline" size="sm">₽8,000/мес</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Cloud Standard</span>
                    <Badge variant="outline" size="sm">₽3,200/мес</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Traffic Plus</span>
                    <Badge variant="outline" size="sm">₽1,500/мес</Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Управление тарифами
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;