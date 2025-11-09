export const translations = {
  es: {
    // Navigation
    home: "Inicio",
    about: "Sobre Mí",
    services: "Servicios",
    cases: "Casos",
    reviews: "Opiniones",
    contact: "Contacto",

    // Common
    bookAppointment: "Reservar Cita",
    learnMore: "Saber Más",
    contactUs: "Contáctanos",
    readMore: "Leer Más",
    viewAll: "Ver Todas",

    // Home page
    heroTitle: "Dra. Eugenia Vila García",
    heroSubtitle: "Más de 30 años de experiencia en odontología",
    heroDescription:
      "Especialista en implantes dentales, cirugía oral y alineadores. Dentista de confianza en Málaga con materiales de la más alta calidad y precios competitivos.",

    // Services
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Atención dental integral con tecnología de vanguardia",
    dentalImplants: "Implantes Dentales",
    dentalImplantsDesc:
      "Rehabilitaciones completas con implantes utilizando flujo de trabajo digital con imágenes CBCT y escaneo intraoral.",
    oralSurgery: "Cirugía Oral",
    oralSurgeryDesc:
      "Extracciones, injertos óseos, elevaciones de seno y procedimientos quirúrgicos avanzados.",
    aligners: "Alineadores",
    alignersDesc:
      "Tratamiento con alineadores transparentes para corrección de sonrisa sin brackets tradicionales.",
    cosmeticDentistry: "Odontología Estética",
    cosmeticDentistryDesc:
      "Carillas de porcelana, blanqueamiento dental y correcciones estéticas para tu sonrisa perfecta.",
    prosthetics: "Prótesis",
    prostheticsDesc:
      "Coronas, puentes y restauraciones protésicas completas con planificación digital.",
    bonding: "Bonding",
    bondingDesc:
      "Composite estético y reconstrucciones de dientes con materiales de la más alta calidad.",

    // About
    aboutTitle: "Sobre la Dra. Eugenia Vila",
    aboutSubtitle: "Experiencia, Dedicación y Excelencia",
    experience: "Experiencia",
    yearsExperience: "30+ años",
    patients: "Pacientes Tratados",
    patientsCount: "20,000+",
    award: "Dentista del Año",
    awardYear: "2024",

    // Reviews
    reviewsTitle: "Lo Que Dicen Nuestros Pacientes",
    reviewsSubtitle: "Más de 60 opiniones de 5 estrellas",
    showMore: "Mostrar Más",

    // Contact
    contactTitle: "Contacto",
    contactSubtitle: "Estamos aquí para ayudarte",
    location: "Ubicación",
    locationText: "El Palo, Málaga, España",
    phone: "Teléfono",
    email: "Correo Electrónico",
    schedule: "Horario",
    scheduleText: "1 fin de semana al mes",
    scheduleNote:
      "La clínica está abierta esporádicamente cuando esté en Málaga. Por favor, contacta por WhatsApp para coordinar tu cita.",

    // Before/After
    beforeAfterTitle: "Casos Antes y Después",
    beforeAfterSubtitle: "Resultados reales de nuestros tratamientos",
    before: "Antes",
    after: "Después",

    // Footer
    allRightsReserved: "Todos los derechos reservados",
    gdcRegistration: "Registro GDC",

    // Forms
    name: "Nombre",
    message: "Mensaje",
    send: "Enviar",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    cases: "Cases",
    reviews: "Reviews",
    contact: "Contact",

    // Common
    bookAppointment: "Book Appointment",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    readMore: "Read More",
    viewAll: "View All",

    // Home page
    heroTitle: "Dr. Eugenia Vila García",
    heroSubtitle: "Over 30 years of experience in dentistry",
    heroDescription:
      "Specialist in dental implants, oral surgery, and aligners. Trusted dentist in Málaga with the highest quality materials and competitive pricing.",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive dental care with cutting-edge technology",
    dentalImplants: "Dental Implants",
    dentalImplantsDesc:
      "Full-mouth rehabilitations with implants using digital workflow with CBCT imaging and intraoral scanning.",
    oralSurgery: "Oral Surgery",
    oralSurgeryDesc:
      "Extractions, bone grafts, sinus lifts, and advanced surgical procedures.",
    aligners: "Aligners",
    alignersDesc:
      "Clear aligner treatment for smile correction without traditional braces.",
    cosmeticDentistry: "Cosmetic Dentistry",
    cosmeticDentistryDesc:
      "Porcelain veneers, teeth whitening, and aesthetic corrections for your perfect smile.",
    prosthetics: "Prosthetics",
    prostheticsDesc:
      "Crowns, bridges, and full prosthetic restorations with digital planning.",
    bonding: "Bonding",
    bondingDesc:
      "Cosmetic composite and tooth reconstructions with the highest quality materials.",

    // About
    aboutTitle: "About Dr. Eugenia Vila",
    aboutSubtitle: "Experience, Dedication, and Excellence",
    experience: "Experience",
    yearsExperience: "30+ years",
    patients: "Patients Treated",
    patientsCount: "20,000+",
    award: "Dentist of the Year",
    awardYear: "2024",

    // Reviews
    reviewsTitle: "What Our Patients Say",
    reviewsSubtitle: "Over 60 five-star reviews",
    showMore: "Show More",

    // Contact
    contactTitle: "Contact",
    contactSubtitle: "We're here to help",
    location: "Location",
    locationText: "El Palo, Málaga, Spain",
    phone: "Phone",
    email: "Email",
    schedule: "Schedule",
    scheduleText: "1 weekend per month",
    scheduleNote:
      "The clinic is open sporadically when in Málaga. Please contact via WhatsApp to arrange your appointment.",

    // Before/After
    beforeAfterTitle: "Before & After Cases",
    beforeAfterSubtitle: "Real results from our treatments",
    before: "Before",
    after: "After",

    // Footer
    allRightsReserved: "All rights reserved",
    gdcRegistration: "GDC Registration",

    // Forms
    name: "Name",
    message: "Message",
    send: "Send",
  },
};

export type Language = "es" | "en";

export function t(lang: Language, key: keyof typeof translations.es): string {
  return translations[lang][key] || translations.es[key];
}

export function getBrowserLanguage(): Language {
  if (typeof window === "undefined") return "es";

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("es")) return "es";
  return "en";
}

export function getAlternatePath(
  currentPath: string,
  targetLang: Language,
): string {
  const pathMap: Record<string, Record<Language, string>> = {
    "/": { es: "/es/", en: "/en/" },
    "/es/": { es: "/es/", en: "/en/" },
    "/en/": { es: "/es/", en: "/en/" },
    "/es/sobre-mi/": { es: "/es/sobre-mi/", en: "/en/about/" },
    "/en/about/": { es: "/es/sobre-mi/", en: "/en/about/" },
    "/es/servicios/": { es: "/es/servicios/", en: "/en/services/" },
    "/en/services/": { es: "/es/servicios/", en: "/en/services/" },
    "/es/casos/": { es: "/es/casos/", en: "/en/cases/" },
    "/en/cases/": { es: "/es/casos/", en: "/en/cases/" },
    "/es/opiniones/": { es: "/es/opiniones/", en: "/en/reviews/" },
    "/en/reviews/": { es: "/es/opiniones/", en: "/en/reviews/" },
    "/es/contacto/": { es: "/es/contacto/", en: "/en/contact/" },
    "/en/contact/": { es: "/es/contacto/", en: "/en/contact/" },
  };

  return (
    pathMap[currentPath]?.[targetLang] ||
    (targetLang === "es" ? "/es/" : "/en/")
  );
}
