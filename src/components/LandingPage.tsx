import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Share2, Mail, Phone } from "lucide-react";

const GlitchEffect = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden">
        {/* Полосы искажения */}
        <div className="absolute inset-0 opacity-50">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="h-1 bg-orange-500"
              style={{
                transform: `translateX(${Math.sin(i) * 10}px) skewX(${Math.cos(i) * 20}deg)`,
                opacity: 0.1 + (i / 10) * 0.5,
                marginTop: `${i * 10}px`,
              }}
            />
          ))}
        </div>

        {/* Смещенные копии контента */}
        <div
          className="absolute top-0 left-0 w-full text-orange-500 opacity-70"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
            transform: "translate(-2px, -2px)",
            textShadow: "2px 0 #ff8a00",
          }}
        >
          {children}
        </div>
        <div
          className="absolute top-0 left-0 w-full text-black opacity-70"
          style={{
            clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)",
            transform: "translate(2px, 2px)",
            textShadow: "-2px 0 #000",
          }}
        >
          {children}
        </div>

        {/* Основной контент */}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

const GlitchImage = ({ className }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div
      className="absolute inset-0 bg-gradient-to-r from-black via-orange-500 to-black"
      style={{
        clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
        animation: "glitch 4s infinite",
      }}
    />
    <div
      className="absolute inset-0 bg-gradient-to-l from-black via-orange-600 to-black opacity-50"
      style={{
        clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0 100%)",
        animation: "glitch 4s infinite reverse",
      }}
    />
  </div>
);

const DecorativeLines = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute h-px bg-orange-500"
        style={{
          width: "200%",
          left: "-50%",
          top: `${(i / 20) * 100}%`,
          transform: `rotate(${Math.sin(i) * 5}deg)`,
          opacity: 0.1,
        }}
      />
    ))}
  </div>
);

const LandingPage = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7f5] to-[#e8e6e2] font-['Roboto']">
      {/* Header с глитч-эффектами */}
      <header className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-orange-500 to-black opacity-20" />
          <DecorativeLines />
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl">
            <GlitchEffect className="text-6xl font-black tracking-tight mb-8 leading-none">
              <div>ГЕНЕРАТИВ</div>
              <div>НЫЕ</div>
              <div>СТРАННОСТИ:</div>
              <div className="text-orange-500">ПОГРУЖЕНИЕ</div>
              <div>В МИР</div>
              <div>ОШИБОК И</div>
              <div>ВОЗМОЖНОС</div>
              <div>ТЕЙ</div>
            </GlitchEffect>

            <div className="absolute top-8 right-8 rotate-90 origin-top-right">
              <span className="text-orange-500 font-bold">соУЧАСТНИК</span>
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-xl">
                <Calendar className="w-6 h-6 text-orange-500" />
                <span>30 декабря</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <Clock className="w-6 h-6 text-orange-500" />
                <span>17:00</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <MapPin className="w-6 h-6 text-orange-500" />
                <span>ДК «Розмарин»</span>
              </div>
            </div>

            <div className="flex items-center gap-8 mt-8">
              <button className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-400 text-white px-8 py-3 text-lg font-bold transition-all transform hover:scale-105">
                <div className="relative z-10">РЕГИСТРАЦИЯ</div>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity" />
              </button>

              <div className="w-24 h-24 relative overflow-hidden">
                <div className="absolute inset-0 border-2 border-dashed border-orange-500 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center text-orange-500">
                  ЛОГО
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* О мероприятии */}
      <section className="py-24 bg-[#f8f7f5] relative overflow-hidden">
        <DecorativeLines />
        <div className="container mx-auto px-4 relative">
          <GlitchEffect className="text-4xl font-black mb-12">
            О МЕРОПРИЯТИИ
          </GlitchEffect>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                Приглашаем на ежегодную встречу, посвященную исследованию и
                обсуждению генеративных технологий в дизайне. В этом году мы
                погрузимся в мир генеративных странностей, где ошибки и
                неожиданные результаты открывают новые возможности для
                творчества и инноваций.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Расширение круга знакомств",
                "Уникальный мерч",
                "Встреча с единомышленниками",
                "Вдохновение каждому",
              ].map((value) => (
                <div
                  key={value}
                  className="relative overflow-hidden p-4 border-2 border-orange-500 group"
                >
                  <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                  <h3 className="font-bold text-orange-500">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Программа */}
      <section className="py-24 bg-[#e8e6e2] relative overflow-hidden">
        <DecorativeLines />
        <div className="container mx-auto px-4 relative">
          <GlitchEffect className="text-4xl font-black mb-12">
            ПРОГРАММА
          </GlitchEffect>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Блоки программы */}
            <div className="bg-[#f8f7f5] p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
              <h3 className="font-bold text-2xl mb-4 text-orange-500">
                17:00 – 17:30 | Сбор гостей
              </h3>
            </div>

            {/* Лекционная сессия */}
            <div className="bg-[#f8f7f5] p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-5" />
              <h3 className="font-bold text-2xl mb-6 text-orange-500">
                17:30 – 19:00 | Лекционная сессия
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title:
                      "Сюрреализм алгоритмов: как AI меняет правила игры в дизайне",
                    points: [
                      "Обсуждение того, как нейросети не просто помогают дизайнерам, но и создают совершенно новые направления в искусстве.",
                      "Тренды в генеративном дизайне: от экспрессивных абстракций до коммерческой графики.",
                      "Кейсы, где алгоритмы стали полноценными соавторами творческих проектов.",
                    ],
                  },
                  {
                    title:
                      "От глюка к шедевру: магия ошибок и их креативный потенциал",
                    points: [
                      "Как работать с артефактами нейросетей: много пальцев, странные текстуры, неправильные шрифты – и как это превращается в искусство.",
                      "Примеры проектов, в которых нестандартные решения, предложенные AI, стали главным визуальным акцентом.",
                      "Почему непредсказуемость AI может вдохновлять больше, чем идеальная точность.",
                    ],
                  },
                  {
                    title:
                      "Генеративная эволюция: дизайн на стыке человека и машины",
                    points: [
                      "Как AI становится продолжением креативного мышления дизайнеров, помогая расширять границы возможного.",
                      "Исследование гибридного процесса создания: кто ведёт за собой – человек или алгоритм?",
                      "Примеры коллабораций дизайнера и AI, где результат превосходит ожидания.",
                    ],
                  },
                ].map((lecture, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-orange-500 pl-6 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />
                    <h4 className="font-bold text-xl mb-4">{lecture.title}</h4>
                    <ul className="space-y-3 text-gray-700">
                      {lecture.points.map((point, i) => (
                        <li key={i} className="relative pl-4">
                          <span className="absolute left-0 top-2 w-2 h-2 bg-orange-500 rounded-full" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Зоны активности */}
            <div className="bg-[#f8f7f5] p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-5" />
              <h3 className="font-bold text-2xl mb-6 text-orange-500">
                Зоны активности
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Выставка "Генеративные галлюцинации"',
                    description:
                      'Работы студентов и преподавателей, созданные с помощью AI. Экспозиции, посвящённые "нейро-сбоям" и их художественному потенциалу. Интерактивная часть: посетители могут голосовать за понравившиеся работы.',
                  },
                  {
                    title: "Зона тестирования AI-инструментов",
                    description:
                      "Попробуйте свои силы в работе с современными инструментами для генеративного дизайна: MidJourney, Stable Diffusion, Runway, Figma AI Plugins. Кураторы помогут разобраться с настройками и покажут, как получить нестандартные результаты.",
                  },
                  {
                    title: "Зона общения",
                    description:
                      'Уютное пространство для общения, закусок и напитков. Коктейли в стиле AI (например, "Генеративная мимоза"). Возможность обсудить увиденное с коллегами в неформальной обстановке.',
                  },
                ].map((zone, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />
                    <h4 className="font-bold text-xl mb-4">{zone.title}</h4>
                    <p className="text-gray-700">{zone.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Закрытие */}
            <div className="bg-[#f8f7f5] p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-5" />
              <h3 className="font-bold text-2xl mb-4 text-orange-500">
                21:00 – 22:00 | Закрытие мероприятия
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-orange-500 rounded-full" />
                  Итоги дня, благодарности участникам и партнёрам.
                </li>
                <li className="relative pl-4">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-orange-500 rounded-full" />
                  Фотозона с AI-генерированным арт-дизайном.
                </li>
                <li className="relative pl-4">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-orange-500 rounded-full" />
                  Призы для авторов лучших работ, представленных на выставке.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Медиа с прошлой встречи */}
      <section className="py-24 bg-[#f8f7f5] relative overflow-hidden">
        <DecorativeLines />
        <div className="container mx-auto px-4 relative">
          <GlitchEffect className="text-4xl font-black mb-12">
            КАК ЭТО БЫЛО В ПРОШЛЫЙ РАЗ
          </GlitchEffect>

          {/* Слайдер с фотографиями */}
          <div className="relative mb-16">
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {[1, 2, 3, 4, 5, 6, 7].map((photo) => (
                <div key={photo} className="flex-none w-72 h-48 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                  <img
                    src={`/${photo}.png`}
                    alt={`Фото ${photo} с прошлой встречи`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Видео */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />

            <video className="w-full aspect-video object-cover">
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Форма регистрации */}
      <section className="py-24 bg-[#e8e6e2] relative overflow-hidden">
        <DecorativeLines />
        <div className="container mx-auto px-4 relative">
          <GlitchEffect className="text-4xl font-black mb-12">
            РЕГИСТРАЦИЯ
          </GlitchEffect>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />
              <input
                type="text"
                placeholder="ИМЯ И ФАМИЛИЯ"
                className="w-full p-4 bg-[#f8f7f5] border-2 border-orange-500 focus:border-orange-600 outline-none"
              />
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full p-4 bg-[#f8f7f5] border-2 border-orange-500 focus:border-orange-600 outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="partner"
                className="w-6 h-6 accent-orange-500"
              />
              <label htmlFor="partner" className="text-xl">
                Я приду с партнером
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-orange-400 text-white p-4 font-bold text-xl hover:from-orange-500 hover:to-orange-300 transition-all relative group"
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative z-10">ЗАРЕГИСТРИРОВАТЬСЯ</span>
            </button>
          </form>
        </div>
      </section>

      {/* Команда */}
      <section className="py-24 bg-[#f8f7f5] relative overflow-hidden">
        <DecorativeLines />
        <div className="container mx-auto px-4 relative">
          <GlitchEffect className="text-4xl font-black mb-12">
            КОМАНДА
          </GlitchEffect>
          <div className="flex justify-center items-center gap-12">
            {["Ксения", "Наташа", "Стефания", "Ильдар"].map((name) => (
              <div key={name} className="text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 mb-4"></div>
                <h3 className="font-bold">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Партнеры */}
      <section className="py-24 bg-[#e8e6e2] relative overflow-hidden">
        <DecorativeLines />
        <div className="container mx-auto px-4 relative">
          <GlitchEffect className="text-4xl font-black mb-12">
            ПАРТНЕРЫ
          </GlitchEffect>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {["Яндекс.Практикум", "OpenAI", "Midjourney", "Leonardo"].map(
              (partner) => (
                <div key={partner} className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="bg-[#f8f7f5] p-6">
                    <div className="h-16 bg-gradient-to-r from-orange-500 to-transparent opacity-10 mb-4"></div>
                    <p className="font-bold text-center">{partner}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 bg-[#f8f7f5] relative overflow-hidden">
        <DecorativeLines />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-orange-500" />
                <span>contact@event.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-orange-500" />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold hover:from-orange-500 hover:to-orange-300 transition-all relative group">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="relative z-10">РЕГИСТРАЦИЯ</span>
              </button>
              <button className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                ПОДЕЛИТЬСЯ
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add Roboto font
const style = document.createElement("link");
style.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap";
style.rel = "stylesheet";
document.head.appendChild(style);

export default LandingPage;
