"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Region = "pl" | "ru" | "ar"
export type Locale = "primary" | "en"

interface Translations {
  dir: "ltr" | "rtl"
  localeName: string
  nav: {
    products: string
    solutions: string
    customers: string
    analytics: string
    pricing: string
    login: string
    startFree: string
  }
  hero: {
    eyebrow: string
    title: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    proofLine: string
    proofLogos: string[]
  }
  logoBar: {
    label: string
    logos: string[]
  }
  stats: {
    s1: string
    s1Label: string
    s2: string
    s2Label: string
    s3: string
    s3Label: string
    s4: string
    s4Label: string
  }
  gdprCallout?: {
    title: string
    description: string
    cta: string
  }
  caseStudies: {
    eyebrow: string
    title: string
    subtitle: string
    cards: {
      tag: string
      stat: string
      statLabel: string
      quote: string
      author: string
    }[]
  }
  competitors: {
    title: string
    description: string
    cta: string
  }
  features: {
    eyebrow: string
    title: string
    subtitle: string
    items: { icon: string; title: string; description: string }[]
  }
  events: {
    eyebrow: string
    title: string
    subtitle: string
    register: string
    items: { month: string; day: string; type: string; name: string; location: string }[]
  }
  cta: { title: string; subtitle: string; primary: string; secondary: string }
  footer: { privacy: string; terms: string; compliance: string; docs: string; support: string; copyright: string }
  modal: { title: string; subtitle: string; firstName: string; lastName: string; email: string; company: string; submit: string; cancel: string; success: string; successMessage: string }
}

type RegionTranslations = { primary: Translations; en: Translations }

const allTranslations: Record<Region, RegionTranslations> = {
  // ── POLAND / CEE ─────────────────────────────────────────────
  pl: {
    primary: {
      dir: "ltr", localeName: "PL",
      nav: { products: "Produkty", solutions: "Rozwiazania", customers: "Klienci", analytics: "Analityka", pricing: "Cennik", login: "Zaloguj sie", startFree: "Zacznij za darmo" },
      hero: { eyebrow: "Dla rynkow Polski i Europy Srodkowo-Wschodniej", title: "Twoj produkt cyfrowy,", titleHighlight: "twoja przewaga", subtitle: "Amplitude pomaga polskim i srodkowoeuropejskim zespolom produktowym podejmowac decyzje oparte na danych, budowac lojalnosc uzytkownikow i wyprzedzac lokalna konkurencje.", ctaPrimary: "Zacznij za darmo", ctaSecondary: "Obejrzyj demo", proofLine: "Zaufaly nam wiodace firmy regionu", proofLogos: ["Allegro", "mBank", "OLX", "Booksy"] },
      logoBar: { label: "Wsrod naszych klientow w regionie", logos: ["Allegro", "mBank", "PKO BP", "InPost", "Empik", "Docplanner"] },
      stats: { s1: "GDPR", s1Label: "W pelni zgodny z RODO i europejskim prawem o ochronie danych", s2: "35%", s2Label: "wzrost retencji u klientow w Polsce i CEE", s3: "4,700+", s3Label: "klientow na calym swiecie", s4: "#1", s4Label: "G2 Winter 2026 - analityka produktowa" },
      gdprCallout: { title: "Zgodnosc z RODO - bez kompromisow", description: "Amplitude spelnia wymogi RODO, CCPA i EU Data Residency. Dane Twoich uzytkownikow pozostaja w UE. Nasze DPA jest dostepne od reki. Zadnych niespodzianek przy audycie.", cta: "Pobierz DPA" },
      caseStudies: { eyebrow: "Historie sukcesu", title: "Wyniki firm z Polski i CEE", subtitle: "Prawdziwe liczby od zespolow, ktore przestaly zgadywac i zaczely wiedziec.", cards: [{ tag: "E-commerce / Marketplace", stat: "+47%", statLabel: "powtorne zakupy kwartal do kwartalu", quote: "Amplitude dala nam wglad, ktorego Google Analytics 4 nigdy nie oferowalo. Rozumiemy zachowania kupujacych lepiej niz kiedykolwiek.", author: "VP Product, Polish Marketplace" }, { tag: "Fintech / Bankowosc cyfrowa", stat: "+62%", statLabel: "aktywacja nowych klientow", quote: "Piwik PRO swietnie radzi sobie z prywatnoscia. Amplitude radzi sobie z pytaniem: dlaczego uzytkownicy rezygnuja z produktu w trzecim tygodniu?", author: "CPO, Neobank CEE" }, { tag: "SaaS / HealthTech", stat: "3.1x", statLabel: "szybkosc eksperymentowania produktowego", quote: "Zanim wdrozylismy Amplitude, testy A/B trwaly miesiace. Teraz mamy wyniki w tygodnie i decyzje poparte danymi.", author: "Head of Growth, HealthTech PL" }] },
      competitors: { title: "Dlaczego polskie zespoly przechodza z Piwik PRO i GA4", description: "Piwik PRO to swietny wybor dla zgodnosci z RODO. GA4 jest darmowe. Amplitude odpowiada na pytanie, ktorego inne narzedzia nie zadaja: dlaczego uzytkownicy zachowuja sie tak, jak sie zachowuja - i co z tym zrobic.", cta: "Porownaj narzedzia" },
      features: { eyebrow: "Mozliwosci platformy", title: "Wszystko, czego potrzebuje zespol produktowy", subtitle: "Od pierwszego kontaktu do lojalnego uzytkownika - Amplitude pokazuje cala sciezke.", items: [{ icon: "funnel", title: "Lejki i konwersje", description: "Znajdz miejsca, w ktorych tracisz uzytkownikow. Segmentuj wedlug dowolnego kryterium. Dzialaj szybko." }, { icon: "group", title: "Analiza kohortowa", description: "Sledz zachowania grup uzytkownikow w czasie. Zrozum, co napedza retencje w Twoim produkcie." }, { icon: "science", title: "Testy A/B", description: "Uruchamiaj eksperymenty i analizuj wyniki bezposrednio w Amplitude - bez dodatkowych narzedzi." }, { icon: "verified_user", title: "Prywatnosc i zgodnosc", description: "Pelna zgodnosc z RODO. Data residency w UE. DPA dostepne natychmiast. Audyt bez stresu." }, { icon: "smart_toy", title: "AI Insights", description: "Amplitude AI automatycznie wykrywa anomalie i podpowiada, na co zwrocic uwage." }, { icon: "integration_instructions", title: "Integracje", description: "Polacz sie z Segment, Braze, BigQuery i 200+ narzedziami. Dane tam, gdzie pracujesz." }] },
      events: { eyebrow: "Wydarzenia", title: "Spotkaj nas w regionie", subtitle: "Konferencje, meetupy i webinaria dla zespolow produktowych w Polsce i CEE.", register: "Rejestracja", items: [{ month: "MAJ", day: "29", type: "Konferencja", name: "InfoShare 2025 - Gdansk", location: "Gdansk, Amber Expo" }, { month: "CZE", day: "11", type: "Webinar - Online", name: "Amplitude Live: Retencja w polskim e-commerce", location: "Zoom - po polsku" }, { month: "WRZ", day: "24", type: "Szczyt branzowy", name: "SaaS Mag Summit Warsaw 2025", location: "Warszawa, Warsaw Spire" }, { month: "PAZ", day: "16", type: "Meetup", name: "Amplitude Meetup Warsaw - Product Analytics Hardtalk", location: "Warszawa, Hub:raum" }] },
      cta: { title: "Zacznij za darmo juz dzis", subtitle: "Pelny dostep do platformy. Bez karty kredytowej. Zgodnosc z RODO w standardzie.", primary: "Wyprobuj za darmo", secondary: "Skontaktuj sie z nami" },
      footer: { privacy: "Polityka prywatnosci", terms: "Warunki korzystania", compliance: "Zgodnosc z RODO", docs: "Dokumentacja", support: "Wsparcie", copyright: "2025 Amplitude, Inc. Wszelkie prawa zastrzezone." },
      modal: { title: "Rejestracja na wydarzenie", subtitle: "Wypelnij formularz, aby zarezerwowac miejsce", firstName: "Imie", lastName: "Nazwisko", email: "Email sluzbowy", company: "Firma", submit: "Zarejestruj sie", cancel: "Anuluj", success: "Sukces!", successMessage: "Rejestracja zostala przeslana. Sprawdz swoja skrzynke email." },
    },
    en: {
      dir: "ltr", localeName: "EN",
      nav: { products: "Products", solutions: "Solutions", customers: "Customers", analytics: "Analytics", pricing: "Pricing", login: "Log in", startFree: "Start free" },
      hero: { eyebrow: "For Polish and Central & Eastern European markets", title: "Your digital product,", titleHighlight: "your advantage", subtitle: "Amplitude helps Polish and CEE product teams make data-driven decisions, build user loyalty, and stay ahead of local competition.", ctaPrimary: "Start free", ctaSecondary: "Watch demo", proofLine: "Trusted by leading companies in the region", proofLogos: ["Allegro", "mBank", "OLX", "Booksy"] },
      logoBar: { label: "Among our clients in the region", logos: ["Allegro", "mBank", "PKO BP", "InPost", "Empik", "Docplanner"] },
      stats: { s1: "GDPR", s1Label: "Fully compliant with GDPR and European data protection laws", s2: "35%", s2Label: "retention increase for clients in Poland and CEE", s3: "4,700+", s3Label: "customers worldwide", s4: "#1", s4Label: "G2 Winter 2026 - Product Analytics" },
      gdprCallout: { title: "GDPR compliance - no compromises", description: "Amplitude meets GDPR, CCPA, and EU Data Residency requirements. Your user data stays in the EU. Our DPA is available immediately. No audit surprises.", cta: "Download DPA" },
      caseStudies: { eyebrow: "Success stories", title: "Results from Poland and CEE companies", subtitle: "Real numbers from teams that stopped guessing and started knowing.", cards: [{ tag: "E-commerce / Marketplace", stat: "+47%", statLabel: "repeat purchases quarter over quarter", quote: "Amplitude gave us insights that Google Analytics 4 never offered. We understand buyer behavior better than ever.", author: "VP Product, Polish Marketplace" }, { tag: "Fintech / Digital Banking", stat: "+62%", statLabel: "new customer activation", quote: "Piwik PRO handles privacy well. Amplitude answers the question: why do users churn in week three?", author: "CPO, CEE Neobank" }, { tag: "SaaS / HealthTech", stat: "3.1x", statLabel: "product experimentation velocity", quote: "Before Amplitude, A/B tests took months. Now we get results in weeks with data-backed decisions.", author: "Head of Growth, HealthTech PL" }] },
      competitors: { title: "Why Polish teams switch from Piwik PRO and GA4", description: "Piwik PRO is great for GDPR compliance. GA4 is free. Amplitude answers the question others don't ask: why do users behave the way they do - and what to do about it.", cta: "Compare tools" },
      features: { eyebrow: "Platform capabilities", title: "Everything a product team needs", subtitle: "From first touch to loyal user - Amplitude shows the entire journey.", items: [{ icon: "funnel", title: "Funnels & Conversions", description: "Find where you lose users. Segment by any criteria. Act fast." }, { icon: "group", title: "Cohort Analysis", description: "Track user group behavior over time. Understand what drives retention in your product." }, { icon: "science", title: "A/B Testing", description: "Run experiments and analyze results directly in Amplitude - no additional tools needed." }, { icon: "verified_user", title: "Privacy & Compliance", description: "Full GDPR compliance. EU data residency. DPA available immediately. Stress-free audits." }, { icon: "smart_toy", title: "AI Insights", description: "Amplitude AI automatically detects anomalies and suggests what to pay attention to." }, { icon: "integration_instructions", title: "Integrations", description: "Connect with Segment, Braze, BigQuery, and 200+ tools. Data where you work." }] },
      events: { eyebrow: "Events", title: "Meet us in the region", subtitle: "Conferences, meetups, and webinars for product teams in Poland and CEE.", register: "Register", items: [{ month: "MAY", day: "29", type: "Conference", name: "InfoShare 2025 - Gdansk", location: "Gdansk, Amber Expo" }, { month: "JUN", day: "11", type: "Webinar - Online", name: "Amplitude Live: Retention in Polish e-commerce", location: "Zoom - in Polish" }, { month: "SEP", day: "24", type: "Industry Summit", name: "SaaS Mag Summit Warsaw 2025", location: "Warsaw, Warsaw Spire" }, { month: "OCT", day: "16", type: "Meetup", name: "Amplitude Meetup Warsaw - Product Analytics Hardtalk", location: "Warsaw, Hub:raum" }] },
      cta: { title: "Start free today", subtitle: "Full platform access. No credit card. GDPR compliance included.", primary: "Try for free", secondary: "Contact us" },
      footer: { privacy: "Privacy Policy", terms: "Terms of Service", compliance: "GDPR Compliance", docs: "Documentation", support: "Support", copyright: "2025 Amplitude, Inc. All rights reserved." },
      modal: { title: "Event Registration", subtitle: "Fill out the form to reserve your spot", firstName: "First Name", lastName: "Last Name", email: "Work Email", company: "Company", submit: "Register", cancel: "Cancel", success: "Success!", successMessage: "Registration submitted. Check your email inbox." },
    },
  },

  // ── RUSSIA / CIS ─────────────────────────────────────────────
  ru: {
    primary: {
      dir: "ltr", localeName: "RU",
      nav: { products: "Продукты", solutions: "Решения", customers: "Клиенты", analytics: "Аналитика", pricing: "Цены", login: "Войти", startFree: "Бесплатно попробовать" },
      hero: { eyebrow: "Для рынков России и СНГ", title: "Цифровой продукт —", titleHighlight: "ваше главное преимущество", subtitle: "Amplitude помогает командам в России и СНГ принимать решения на основе данных, быстрее выпускать продукты и удерживать пользователей в условиях конкуренции с локальными игроками.", ctaPrimary: "Начать бесплатно", ctaSecondary: "Смотреть демо", proofLine: "Доверяют ведущие компании региона", proofLogos: ["Wildberries", "Tinkoff", "HeadHunter", "Avito"] },
      logoBar: { label: "Среди наших клиентов в регионе", logos: ["Ozon", "Сбер", "Яндекс", "MTS Digital", "VK", "Kaspersky"] },
      stats: { s1: "3×", s1Label: "глубина анализа по сравнению с Яндекс Метрикой", s2: "40%", s2Label: "рост удержания пользователей у клиентов в СНГ", s3: "4,700+", s3Label: "клиентов по всему миру", s4: "#1", s4Label: "G2 Winter 2026 — продуктовая аналитика" },
      caseStudies: { eyebrow: "Истории успеха", title: "Результаты компаний из СНГ", subtitle: "Реальные цифры от команд, которые перестали гадать и начали знать.", cards: [{ tag: "Финтех / Банкинг", stat: "+58%", statLabel: "конверсия в онлайн-транзакции", quote: "Amplitude позволила нам понять пользовательский путь лучше, чем любой отечественный инструмент. Ключевые точки оттока закрыли за 6 недель.", author: "CPO, Digital Bank CIS" }, { tag: "E-commerce / Маркетплейс", stat: "+31%", statLabel: "повторные покупки за квартал", quote: "С Amplitude мы наконец поняли, почему пользователи уходят после первой покупки. Теперь наш retention в топе рынка.", author: "Head of Product, Marketplace RU" }, { tag: "EdTech / SaaS", stat: "2.4×", statLabel: "рост DAU за 4 месяца", quote: "myTracker давал нам цифры, но не давал понимания. С Amplitude появились инсайты, которые реально меняют продукт.", author: "VP Product, EdTech Scale-up" }] },
      competitors: { title: "Почему команды переходят с Яндекс Метрики и myTracker", description: "Яндекс Метрика и myTracker отлично считают трафик. Amplitude отвечает на вопрос «почему пользователи делают то, что делают» — и что с этим делать. Поведенческая аналитика, когорты, воронки, A/B тесты и AI-инсайты в одном инструменте.", cta: "Сравнить инструменты" },
      features: { eyebrow: "Возможности платформы", title: "Всё, что нужно продуктовой команде", subtitle: "От первого касания до лояльного пользователя — Amplitude показывает весь путь.", items: [{ icon: "funnel", title: "Воронки и конверсии", description: "Найдите, где теряются пользователи. Сегментируйте по любому признаку. Действуйте быстро." }, { icon: "group", title: "Когортный анализ", description: "Следите за поведением групп пользователей во времени. Поймите, что влияет на удержание." }, { icon: "science", title: "A/B тестирование", description: "Запускайте эксперименты и анализируйте результаты прямо в Amplitude — без дополнительных инструментов." }, { icon: "smart_toy", title: "AI-инсайты", description: "Amplitude AI автоматически выявляет аномалии и подсказывает, на что обратить внимание сегодня." }, { icon: "route", title: "Пути пользователей", description: "Визуализируйте реальные маршруты. Откройте неожиданные паттерны, которые не видно в обычных отчётах." }, { icon: "integration_instructions", title: "Интеграции", description: "Подключается к Segment, Braze, Salesforce, BigQuery и 200+ инструментам." }] },
      events: { eyebrow: "Мероприятия", title: "Встречайте нас в регионе", subtitle: "Конференции, митапы и вебинары для продуктовых команд России и СНГ.", register: "Регистрация", items: [{ month: "МАЙ", day: "22", type: "Конференция", name: "ProductSense 2025", location: "Москва, Крокус Экспо" }, { month: "ИЮН", day: "14", type: "Вебинар — Онлайн", name: "Amplitude Live: Retention для e-commerce в СНГ", location: "Zoom — на русском языке" }, { month: "СЕН", day: "19", type: "Конференция", name: "Saint HighLoad++ 2025", location: "Санкт-Петербург, Экспофорум" }, { month: "ОКТ", day: "08", type: "Митап", name: "Amplitude Meetup Moscow — Product Analytics Hardtalk", location: "Москва, офис партнёра" }] },
      cta: { title: "Начните бесплатно сегодня", subtitle: "Полный доступ к платформе. Без кредитной карты. Поддержка на русском языке.", primary: "Попробовать бесплатно", secondary: "Связаться с командой" },
      footer: { privacy: "Политика конфиденциальности", terms: "Условия использования", compliance: "GDPR / 152-ФЗ", docs: "Документация", support: "Поддержка", copyright: "2025 Amplitude, Inc. Все права защищены." },
      modal: { title: "Регистрация на мероприятие", subtitle: "Заполните форму, чтобы забронировать место", firstName: "Имя", lastName: "Фамилия", email: "Рабочий email", company: "Компания", submit: "Зарегистрироваться", cancel: "Отмена", success: "Готово!", successMessage: "Регистрация отправлена. Проверьте почту." },
    },
    en: {
      dir: "ltr", localeName: "EN",
      nav: { products: "Products", solutions: "Solutions", customers: "Customers", analytics: "Analytics", pricing: "Pricing", login: "Log in", startFree: "Start free" },
      hero: { eyebrow: "For Russia and CIS markets", title: "Your digital product,", titleHighlight: "your unfair advantage", subtitle: "Amplitude helps teams across Russia and CIS make data-driven decisions, ship faster, and retain users against fierce local competition.", ctaPrimary: "Start free", ctaSecondary: "Watch demo", proofLine: "Trusted by leading companies in the region", proofLogos: ["Wildberries", "Tinkoff", "HeadHunter", "Avito"] },
      logoBar: { label: "Among our clients in the region", logos: ["Ozon", "Sber", "Yandex", "MTS Digital", "VK", "Kaspersky"] },
      stats: { s1: "3×", s1Label: "deeper analysis vs Yandex Metrica", s2: "40%", s2Label: "retention increase for CIS clients", s3: "4,700+", s3Label: "customers worldwide", s4: "#1", s4Label: "G2 Winter 2026 - Product Analytics" },
      caseStudies: { eyebrow: "Success stories", title: "Results from CIS companies", subtitle: "Real numbers from teams that stopped guessing and started knowing.", cards: [{ tag: "Fintech / Banking", stat: "+58%", statLabel: "conversion to online transactions", quote: "Amplitude helped us understand the user journey better than any local tool. We closed key drop-off points in 6 weeks.", author: "CPO, Digital Bank CIS" }, { tag: "E-commerce / Marketplace", stat: "+31%", statLabel: "repeat purchases per quarter", quote: "With Amplitude we finally understood why users leave after the first purchase. Our retention is now top of market.", author: "Head of Product, Marketplace RU" }, { tag: "EdTech / SaaS", stat: "2.4×", statLabel: "DAU growth in 4 months", quote: "myTracker gave us numbers but not understanding. Amplitude gave us insights that actually change the product.", author: "VP Product, EdTech Scale-up" }] },
      competitors: { title: "Why teams switch from Yandex Metrica and myTracker", description: "Yandex Metrica and myTracker count traffic well. Amplitude answers the question they don't: why do users behave the way they do — and what to do about it. Behavioral analytics, cohorts, funnels, A/B testing, and AI insights in one tool.", cta: "Compare tools" },
      features: { eyebrow: "Platform capabilities", title: "Everything a product team needs", subtitle: "From first touch to loyal user — Amplitude shows the entire journey.", items: [{ icon: "funnel", title: "Funnels & Conversions", description: "Find where you lose users. Segment by any criteria. Act fast." }, { icon: "group", title: "Cohort Analysis", description: "Track user group behavior over time. Understand what drives retention." }, { icon: "science", title: "A/B Testing", description: "Run experiments and analyze results directly in Amplitude." }, { icon: "smart_toy", title: "AI Insights", description: "Amplitude AI automatically surfaces anomalies and tells you what to focus on today." }, { icon: "route", title: "User Journeys", description: "Visualize real paths. Discover unexpected patterns invisible in standard reports." }, { icon: "integration_instructions", title: "Integrations", description: "Connect to Segment, Braze, Salesforce, BigQuery, and 200+ tools." }] },
      events: { eyebrow: "Events", title: "Meet us in the region", subtitle: "Conferences, meetups, and webinars for product teams across Russia and CIS.", register: "Register", items: [{ month: "MAY", day: "22", type: "Conference", name: "ProductSense 2025", location: "Moscow, Crocus Expo" }, { month: "JUN", day: "14", type: "Webinar - Online", name: "Amplitude Live: Retention for CIS e-commerce", location: "Zoom - in Russian" }, { month: "SEP", day: "19", type: "Conference", name: "Saint HighLoad++ 2025", location: "St. Petersburg, ExpoForum" }, { month: "OCT", day: "08", type: "Meetup", name: "Amplitude Meetup Moscow - Product Analytics Hardtalk", location: "Moscow, partner office" }] },
      cta: { title: "Start free today", subtitle: "Full platform access. No credit card. Russian language support.", primary: "Try for free", secondary: "Contact our team" },
      footer: { privacy: "Privacy Policy", terms: "Terms of Service", compliance: "GDPR / FZ-152", docs: "Documentation", support: "Support", copyright: "2025 Amplitude, Inc. All rights reserved." },
      modal: { title: "Event Registration", subtitle: "Fill out the form to reserve your spot", firstName: "First Name", lastName: "Last Name", email: "Work Email", company: "Company", submit: "Register", cancel: "Cancel", success: "Done!", successMessage: "Registration submitted. Check your email inbox." },
    },
  },

  // ── ARABIA / MENA ─────────────────────────────────────────────
  ar: {
    primary: {
      dir: "rtl", localeName: "AR",
      nav: { products: "المنتجات", solutions: "الحلول", customers: "العملاء", analytics: "التحليلات", pricing: "الأسعار", login: "تسجيل الدخول", startFree: "ابدأ مجاناً" },
      hero: { eyebrow: "لأسواق الشرق الأوسط وشمال أفريقيا", title: "منتجك الرقمي،", titleHighlight: "ميزتك التنافسية", subtitle: "تساعد Amplitude فرق المنتجات في الإمارات والمملكة العربية السعودية ومصر وسائر منطقة الشرق الأوسط على اتخاذ قرارات مبنية على البيانات وتحسين تجربة المستخدم.", ctaPrimary: "ابدأ مجاناً", ctaSecondary: "شاهد العرض التوضيحي", proofLine: "تثق بنا الشركات الرائدة في المنطقة", proofLogos: ["Careem", "Noon", "Starzplay", "Tamara"] },
      logoBar: { label: "من بين عملائنا في المنطقة", logos: ["Careem", "Noon", "Anghami", "Fetchr", "Tabby", "STC Pay"] },
      stats: { s1: "2×", s1Label: "سرعة القرارات مقارنةً بـ Mixpanel", s2: "45%", s2Label: "نمو الاحتفاظ بالمستخدمين لدى عملاء المنطقة", s3: "4,700+", s3Label: "عميل حول العالم", s4: "#1", s4Label: "G2 Winter 2026 — تحليلات المنتج" },
      caseStudies: { eyebrow: "قصص النجاح", title: "نتائج شركات من المنطقة", subtitle: "أرقام حقيقية من فرق توقفت عن التخمين وبدأت في المعرفة.", cards: [{ tag: "تطبيقات فائقة / التنقل", stat: "+52%", statLabel: "معدل الاحتفاظ بالمستخدمين الجدد", quote: "أعطتنا Amplitude رؤى لم نتمكن من الحصول عليها من GA4 أو Mixpanel. فهمنا سلوك المستخدمين في المنطقة بعمق لم نتوقعه.", author: "CPO, Super-app MENA" }, { tag: "تجارة إلكترونية", stat: "+38%", statLabel: "معدل إتمام عمليات الشراء", quote: "فهمنا أخيراً لماذا يتخلى المستخدمون عن سلة المشتريات قبل الدفع، وحللنا المشكلة خلال أسبوعين فقط.", author: "Head of Product, E-commerce KSA" }, { tag: "فينتك / المدفوعات", stat: "2.8×", statLabel: "سرعة دورة التجريب والتطوير", quote: "كان الاختبار A/B يستغرق شهوراً. الآن نحصل على نتائج في أسابيع وقرارات مدعومة بالبيانات.", author: "VP Product, Fintech UAE" }] },
      competitors: { title: "لماذا تتحول فرق المنطقة من Mixpanel وGA4", description: "Mixpanel وGA4 أدوات جيدة لعدّ الأحداث. Amplitude تجيب على السؤال الأهم: لماذا يتصرف المستخدمون بهذه الطريقة، وكيف تؤثر في قراراتهم؟ تحليل المسارات، الفئات، التجارب، والتوقعات — كل شيء في مكان واحد.", cta: "قارن الأدوات" },
      features: { eyebrow: "إمكانيات المنصة", title: "كل ما يحتاجه فريق المنتج", subtitle: "من أول لمسة حتى المستخدم المخلص — Amplitude تُظهر لك المسار كاملاً.", items: [{ icon: "funnel", title: "مسارات التحويل", description: "اكتشف أين تخسر مستخدميك. قسّمهم بأي معيار. تصرف بسرعة." }, { icon: "group", title: "تحليل المجموعات", description: "تتبع سلوك مجموعات المستخدمين عبر الزمن. افهم ما يحدد الاحتفاظ في منتجك." }, { icon: "science", title: "اختبارات A/B", description: "شغّل التجارب وحلّل النتائج مباشرة في Amplitude — دون أدوات إضافية." }, { icon: "smart_toy", title: "رؤى الذكاء الاصطناعي", description: "يرصد Amplitude AI الشذوذات تلقائياً ويقترح ما يستحق انتباهك اليوم." }, { icon: "route", title: "مسارات المستخدمين", description: "صوّر المسارات الحقيقية. اكتشف الأنماط غير المتوقعة التي لا تظهر في التقارير العادية." }, { icon: "integration_instructions", title: "التكاملات", description: "يتصل بـ Segment وBraze وBigQuery و+200 أداة. بياناتك حيث تعمل." }] },
      events: { eyebrow: "الفعاليات", title: "التقِ بنا في المنطقة", subtitle: "مؤتمرات ولقاءات وندوات لفرق المنتجات في الشرق الأوسط وشمال أفريقيا.", register: "سجّل الآن", items: [{ month: "OCT", day: "13", type: "معرض عالمي", name: "GITEX Global 2025 — دبي", location: "مركز دبي التجاري العالمي" }, { month: "NOV", day: "05", type: "ندوة إلكترونية", name: "Amplitude Live: الاحتفاظ بالمستخدمين في تطبيقات MENA", location: "Zoom — باللغة العربية" }, { month: "FEB", day: "10", type: "مؤتمر تقني", name: "Saudi LEAP 2026 — الرياض", location: "مركز الرياض للمعارض والمؤتمرات" }, { month: "MAR", day: "18", type: "مؤتمر", name: "Step Conference 2026 — بيروت", location: "بيروت — منصة الشرق الأوسط للتكنولوجيا" }] },
      cta: { title: "ابدأ مجاناً اليوم", subtitle: "وصول كامل للمنصة. بدون بطاقة ائتمان. دعم باللغة العربية.", primary: "جرّب مجاناً", secondary: "تواصل مع فريقنا" },
      footer: { privacy: "سياسة الخصوصية", terms: "شروط الاستخدام", compliance: "الامتثال للوائح", docs: "التوثيق", support: "الدعم", copyright: "2025 Amplitude, Inc. جميع الحقوق محفوظة." },
      modal: { title: "تسجيل في الفعالية", subtitle: "أكمل النموذج لحجز مقعدك", firstName: "الاسم الأول", lastName: "اسم العائلة", email: "البريد الإلكتروني للعمل", company: "الشركة", submit: "سجّل الآن", cancel: "إلغاء", success: "تم بنجاح!", successMessage: "تم إرسال التسجيل. تحقق من بريدك الإلكتروني." },
    },
    en: {
      dir: "ltr", localeName: "EN",
      nav: { products: "Products", solutions: "Solutions", customers: "Customers", analytics: "Analytics", pricing: "Pricing", login: "Log in", startFree: "Start free" },
      hero: { eyebrow: "For Middle East and North Africa markets", title: "Your digital product,", titleHighlight: "your competitive edge", subtitle: "Amplitude helps product teams across UAE, Saudi Arabia, Egypt, and the broader MENA region make data-driven decisions and build products users love.", ctaPrimary: "Start free", ctaSecondary: "Watch demo", proofLine: "Trusted by leading companies in the region", proofLogos: ["Careem", "Noon", "Starzplay", "Tamara"] },
      logoBar: { label: "Among our clients in the region", logos: ["Careem", "Noon", "Anghami", "Fetchr", "Tabby", "STC Pay"] },
      stats: { s1: "2×", s1Label: "faster decisions vs Mixpanel", s2: "45%", s2Label: "retention growth for MENA clients", s3: "4,700+", s3Label: "customers worldwide", s4: "#1", s4Label: "G2 Winter 2026 - Product Analytics" },
      caseStudies: { eyebrow: "Success stories", title: "Results from MENA companies", subtitle: "Real numbers from teams that stopped guessing and started knowing.", cards: [{ tag: "Super-app / Mobility", stat: "+52%", statLabel: "new user retention rate", quote: "Amplitude gave us insights we couldn't get from GA4 or Mixpanel. We understand user behavior in the region at a depth we didn't expect.", author: "CPO, Super-app MENA" }, { tag: "E-commerce", stat: "+38%", statLabel: "purchase completion rate", quote: "We finally understood why users abandon their cart before checkout and fixed it in two weeks.", author: "Head of Product, E-commerce KSA" }, { tag: "Fintech / Payments", stat: "2.8×", statLabel: "experimentation velocity", quote: "A/B tests used to take months. Now we get results in weeks with data-backed decisions.", author: "VP Product, Fintech UAE" }] },
      competitors: { title: "Why MENA teams switch from Mixpanel and GA4", description: "Mixpanel and GA4 are good at counting events. Amplitude answers the more important question: why do users behave the way they do — and how do you influence their decisions? Journeys, cohorts, experiments, and predictions — all in one place.", cta: "Compare tools" },
      features: { eyebrow: "Platform capabilities", title: "Everything a product team needs", subtitle: "From first touch to loyal user — Amplitude shows the entire journey.", items: [{ icon: "funnel", title: "Funnels & Conversions", description: "Find where you lose users. Segment by any criteria. Act fast." }, { icon: "group", title: "Cohort Analysis", description: "Track user group behavior over time. Understand what drives retention." }, { icon: "science", title: "A/B Testing", description: "Run experiments and analyze results directly in Amplitude." }, { icon: "smart_toy", title: "AI Insights", description: "Amplitude AI automatically surfaces anomalies and tells you what to focus on." }, { icon: "route", title: "User Journeys", description: "Visualize real paths. Discover unexpected patterns invisible in standard reports." }, { icon: "integration_instructions", title: "Integrations", description: "Connect to Segment, Braze, BigQuery, and 200+ tools. Data where you work." }] },
      events: { eyebrow: "Events", title: "Meet us in the region", subtitle: "Conferences, meetups, and webinars for product teams across MENA.", register: "Register", items: [{ month: "OCT", day: "13", type: "Global Expo", name: "GITEX Global 2025 — Dubai", location: "Dubai World Trade Centre" }, { month: "NOV", day: "05", type: "Webinar - Online", name: "Amplitude Live: User Retention in MENA Apps", location: "Zoom - in Arabic" }, { month: "FEB", day: "10", type: "Tech Conference", name: "Saudi LEAP 2026 — Riyadh", location: "Riyadh Exhibition & Convention Center" }, { month: "MAR", day: "18", type: "Conference", name: "Step Conference 2026 — Beirut", location: "Beirut - MENA's Tech Platform" }] },
      cta: { title: "Start free today", subtitle: "Full platform access. No credit card. Arabic language support.", primary: "Try for free", secondary: "Contact our team" },
      footer: { privacy: "Privacy Policy", terms: "Terms of Service", compliance: "Regulatory Compliance", docs: "Documentation", support: "Support", copyright: "2025 Amplitude, Inc. All rights reserved." },
      modal: { title: "Event Registration", subtitle: "Fill out the form to reserve your spot", firstName: "First Name", lastName: "Last Name", email: "Work Email", company: "Company", submit: "Register", cancel: "Cancel", success: "Done!", successMessage: "Registration submitted. Check your email inbox." },
    },
  },
}

interface I18nContextType {
  region: Region
  setRegion: (region: Region) => void
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<Region>("pl")
  const [locale, setLocale] = useState<Locale>("primary")

  const handleSetRegion = (newRegion: Region) => {
    setRegion(newRegion)
    setLocale("primary")
  }

  return (
    <I18nContext.Provider value={{ region, setRegion: handleSetRegion, locale, setLocale, t: allTranslations[region][locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within an I18nProvider")
  return context
}
