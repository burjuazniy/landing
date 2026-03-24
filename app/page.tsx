const NAV_LINKS = [
  { href: "#about", label: "Про проєкт" },
  { href: "#features", label: "Можливості" },
  { href: "#technology", label: "Технології" },
];

const FEATURES = [
  {
    title: "Структуроване проєктування",
    description:
      "Побудова навчальних курсів за моделлю ADDIE та іншими методологіями Instructional Design.",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Управління контентом",
    description:
      "Зручний редактор для створення та організації навчальних матеріалів: текст, відео, тести.",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Цілі навчання",
    description:
      "Визначення вимірюваних навчальних цілей відповідно до таксономії Блума для кожного модуля.",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Гнучка структура курсу",
    description:
      "Модульна архітектура з розподілом на розділи, теми та підтеми з довільним порядком.",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "REST API інтеграція",
    description:
      "Відкритий API на базі Ruby on Rails для інтеграції з будь-якими зовнішніми системами.",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Сучасний інтерфейс",
    description:
      "Адаптивний React-інтерфейс, що забезпечує зручну роботу на будь-яких пристроях.",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
];

const TECH_STACK = [
  {
    name: "React",
    description: "Клієнтська частина побудована на React — декларативна UI-бібліотека для побудови інтерактивних інтерфейсів.",
    role: "Frontend",
    color: "bg-sky-50 border-sky-200 text-sky-700",
    badge: "bg-sky-100 text-sky-800",
  },
  {
    name: "Ruby on Rails",
    description: "Серверна частина реалізована як REST API на Ruby on Rails — продуктивний веб-фреймворк із конвенцією над конфігурацією.",
    role: "Backend / REST API",
    color: "bg-red-50 border-red-200 text-red-700",
    badge: "bg-red-100 text-red-800",
  },
];

export default function Home() {
  return (
    <>
      {/* Skip navigation link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:outline-none"
      >
        Перейти до основного вмісту
      </a>

      {/* ===== HEADER ===== */}
      <header role="banner" className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="/"
              aria-label="Course Designer — на головну"
              className="flex items-center gap-2 font-semibold text-lg text-indigo-700 hover:text-indigo-600 transition-colors"
            >
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Course Designer
            </a>

            <nav aria-label="Основна навігація">
              <ul role="list" className="flex items-center gap-1 sm:gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main id="main-content" role="main" tabIndex={-1}>

        {/* Hero */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-24 sm:py-32"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent"
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
              Бакалаврська робота
            </p>
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6"
            >
              Course{" "}
              <span className="text-indigo-600">Designer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-zinc-600 leading-relaxed mb-10">
              Платформа для створення та управління навчальними курсами на основі
              принципів&nbsp;
              <strong className="text-zinc-800 font-semibold">Instructional Design</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Дізнатися більше
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-indigo-700 bg-white hover:bg-indigo-50 border border-indigo-200 rounded-xl shadow-sm transition-all"
              >
                Можливості
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-20 sm:py-28 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2
                  id="about-heading"
                  className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6"
                >
                  Про проєкт
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-5">
                  <strong className="text-zinc-800">Instructional Design</strong> — це системний
                  підхід до розроблення навчальних матеріалів, що ґрунтується на дидактичних
                  принципах, аналізі потреб аудиторії та вимірюваних результатах навчання.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed mb-5">
                  <strong className="text-zinc-800">Course Designer</strong> — це вебзастосунок,
                  що автоматизує процес проєктування курсів: від визначення цілей і структури
                  до публікації навчального контенту.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Проєкт реалізований як бакалаврська робота і поєднує сучасні технології
                  веброзробки з педагогічними методологіями.
                </p>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list" aria-label="Ключові характеристики проєкту">
                {[
                  { label: "Модель", value: "ADDIE", sub: "аналіз → дизайн → розробка → впровадження → оцінка" },
                  { label: "Таксономія", value: "Блум", sub: "визначення вимірюваних навчальних цілей" },
                  { label: "Архітектура", value: "REST API", sub: "бекенд + React клієнт" },
                  { label: "Тип", value: "SPA + API", sub: "односторінковий застосунок" },
                ].map((item) => (
                  <article
                    key={item.label}
                    role="listitem"
                    className="p-5 rounded-xl border border-zinc-100 bg-zinc-50 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors"
                  >
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-2xl font-bold text-indigo-700 mb-1">{item.value}</p>
                    <p className="text-sm text-zinc-500">{item.sub}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="py-20 sm:py-28 bg-zinc-50"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2
                id="features-heading"
                className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4"
              >
                Можливості
              </h2>
              <p className="max-w-xl mx-auto text-lg text-zinc-500">
                Усе необхідне для проєктування якісного навчального курсу в одному місці
              </p>
            </header>

            <ul
              role="list"
              aria-label="Список можливостей"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {FEATURES.map((feature) => (
                <li key={feature.title} role="listitem">
                  <article className="h-full p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
                    <div
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-50 text-indigo-600"
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technology */}
        <section
          id="technology"
          aria-labelledby="technology-heading"
          className="py-20 sm:py-28 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2
                id="technology-heading"
                className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4"
              >
                Технологічний стек
              </h2>
              <p className="max-w-xl mx-auto text-lg text-zinc-500">
                Сучасні та перевірені технології для надійної та масштабованої платформи
              </p>
            </header>

            <ul
              role="list"
              aria-label="Технологічний стек"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            >
              {TECH_STACK.map((tech) => (
                <li key={tech.name} role="listitem">
                  <article
                    className={`h-full p-8 rounded-2xl border-2 ${tech.color}`}
                    aria-label={`${tech.name} — ${tech.role}`}
                  >
                    <span
                      className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full mb-4 ${tech.badge}`}
                    >
                      {tech.role}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{tech.name}</h3>
                    <p className="text-sm leading-relaxed opacity-80">
                      {tech.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>

            {/* Architecture diagram (text-based) */}
            <div
              role="img"
              aria-label="Схема взаємодії: React клієнт → HTTP REST API → Ruby on Rails сервер"
              className="mt-12 max-w-lg mx-auto"
            >
              <div className="flex items-center justify-center gap-3 flex-wrap text-sm font-medium text-zinc-600">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-sky-50 border border-sky-200 rounded-xl text-sky-700">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                  React (SPA)
                </div>
                <div className="flex items-center gap-1 text-zinc-400">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span className="text-xs text-zinc-400">HTTP / REST</span>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" opacity=".2"/><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/></svg>
                  Rails API
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer
        role="contentinfo"
        className="bg-zinc-900 text-zinc-400 mt-auto"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white font-semibold">
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Course Designer
            </div>
            <p className="text-sm text-center">
              Бакалаврська робота &mdash; розробка навчальної платформи на основі Instructional Design
            </p>
            <p className="text-sm">
              <time dateTime="2026">2026</time>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
