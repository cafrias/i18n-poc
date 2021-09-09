import { Locale, LocalePost, Post } from "../../../models/models";

export function getPosts(locale: Locale): Post[] {
  return posts.map((p) => postWithLocale(locale, p))
}

export function postWithLocale(locale: Locale, post: LocalePost): Post {
  return {
    ...post,
    title: post.title[locale],
    body: post.body[locale]
  }
}

export const posts: LocalePost[] = [
  {
    userId: "1",
    id: "1",
    title: {
      'de': "Afrika bekommt 25 Prozent weniger Impfstoffe als geplant",
      'en': "Africa is getting 25 percent fewer vaccines than planned",
      'es': "África recibe un 25 por ciento menos de vacunas de las previstas",
    },
    body: {
      'de': "Afrika wird bis Ende des Jahres 25 Prozent weniger Corona-Impfstoffdosen erhalten als geplant. Das sagte die Regionaldirektorin der Weltgesundheitsorganisation WHO, Matshidiso Moeti, heute. Die internationale Hilfsinitiative Covax habe ihre prognostizierten Lieferzahlen für 2021 um ein Viertel nach unten korrigieren müssen. Grund dafür sei unter anderem die Einführung von Auffrischimpfungen und das Horten von Impfstoffdosen in einigen Ländern sowie die Priorisierung bilateraler Abkommen vor internationaler Solidarität, so Moeti.",
      'en': "Africa will receive 25 percent fewer corona vaccine doses than planned by the end of the year. That said the Regional Director of the World Health Organization WHO, Matshidiso Moeti, today. The international aid initiative Covax had to correct its forecast delivery figures for 2021 down by a quarter. The reasons for this include the introduction of booster vaccinations and the hoarding of vaccine doses in some countries as well as the prioritization of bilateral agreements over international solidarity, according to Moeti.",
      'es': "África recibirá un 25 por ciento menos de dosis de vacuna corona de lo previsto para finales de año. Eso dijo el Director Regional de la Organización Mundial de la Salud OMS, Matshidiso Moeti, hoy. La iniciativa de ayuda internacional Covax tuvo que corregir en una cuarta parte sus cifras de entrega previstas para 2021. Las razones de esto incluyen la introducción de vacunas de refuerzo y el acaparamiento de dosis de vacunas en algunos países, así como la priorización de los acuerdos bilaterales sobre la solidaridad internacional, según Moeti."
    },
  },
  {
    userId: "1",
    id: "2",
    title: {
      'de': "HH: Impfangebote in Moschee-Gemeinden werden gut angenommen",
      'en': "HH: Vaccination offers in mosque communities are well received",
      'es': "HH: Las ofertas de vacunación en las comunidades de mezquitas son bien recibidas",
    },
    body: {
      de: 'Die mobilen Corona-Impfangebote der Stadt Hamburg werden nach Angaben der Schura von den islamischen Gemeinden gut angenommen. "Der Erfolg der Impfangebote in den Moschee-Gemeinden hat uns sehr gefreut. In einigen Gemeinden haben sich bis zu 280 Bürger*innen impfen lassen", erklärte der Rat der Islamischen Gemeinschaften. In den vergangenen drei Wochen hätten neun Gemeinden an der Impfaktion teilgenommen. Weitere vier warteten auf einen Termin, sagte der Co-Vorsitzende der Schura, Fatih Yildiz. Zum Rat der Islamischen Gemeinschaften gehören nach eigenen Angaben 39 Gemeinden. "Es gibt eine sehr gute Zusammenarbeit mit der Sozialbehörde, und wir danken auch dem DRK dafür, dass es unbürokratisch, schnell und niedrigschwellig diese Impfangebote in den Moscheegemeinden ermöglicht", so Yildiz.',
      en: 'According to the Shura, the mobile corona vaccination offers of the city of Hamburg are well received by the Islamic communities. "We are very pleased with the success of the vaccination offers in the mosque communities. In some communities, up to 280 citizens have been vaccinated," said the Council of Islamic Communities. In the past three weeks, nine communities took part in the vaccination campaign. Another four were waiting for an appointment, said Shura co-chair Fatih Yildiz. According to its own statements, 39 parishes belong to the Council of Islamic Communities. "There is very good cooperation with the social welfare authorities, and we also thank the DRK for making these vaccination offers in the mosque communities unbureaucratic, quick and easy," said Yildiz. ',
      es: 'Según la Shura, las ofertas móviles de vacunación corona de la ciudad de Hamburgo son bien recibidas por las comunidades islámicas. "Estamos muy contentos con el éxito de las ofertas de vacunación en las comunidades de las mezquitas. En algunas comunidades, se han vacunado hasta 280 ciudadanos", dijo el Consejo de Comunidades Islámicas. En las últimas tres semanas, nueve comunidades participaron en la campaña de vacunación. Otros cuatro esperaban una cita, dijo el copresidente de Shura, Fatih Yildiz. Según sus propias declaraciones, 39 parroquias pertenecen al Consejo de Comunidades Islámicas. "Existe una muy buena cooperación con las autoridades de bienestar social, y también agradecemos a la República Democrática del Congo por hacer que estas ofertas de vacunación en las comunidades de las mezquitas no sean burocráticas, rápidas y fáciles", dijo Yildiz.' 
    },
  },
  {
    userId: "1",
    id: "3",
    title: {
      de: "129 neue Corona-Fälle im Land Bremen registriert",
      en: "129 new corona cases registered in the state of Bremen",
      es: "129 nuevos casos de corona registrados en el estado de Bremen"
    },
    body: {
      de: "Das Gesundheitsressort hat heute 129 neue Corona-Fälle im Land Bremen gemeldet. In Bremen wurden 102 Neuinfektionen registriert (Vorwoche: 82). Aus Bremerhaven wurden 27 neue Fälle gemeldet (Vorwoche: 36). Damit steigt die Sieben-Tage-Inzidenz in Bremen von 101,6 auf 105,4. So hoch war der Wert zuletzt Anfang Mai. In Bremerhaven fällt der Wert für Neuinfektionen pro 100.000 Einwohner binnen sieben Tagen von 223,5 auf 216,5.",
      en: "The health department reported 129 new corona cases in the state of Bremen today. 102 new infections were registered in Bremen (previous week: 82). 27 new cases were reported from Bremerhaven (previous week: 36). This increases the seven-day incidence in Bremen from 101.6 to 105.4. The value was last at the beginning of May. In Bremerhaven, the value for new infections per 100,000 inhabitants falls from 223.5 to 216.5 within seven days. ",
      es: "El departamento de salud informó hoy 129 nuevos casos de corona en el estado de Bremen. Se registraron 102 nuevas infecciones en Bremen (semana anterior: 82). Se notificaron 27 nuevos casos de Bremerhaven (semana anterior: 36). Esto aumenta el incidencia en Bremen de 101,6 a 105,4. El último valor fue a principios de mayo. En Bremerhaven, el valor de nuevas infecciones por 100.000 habitantes cae de 223,5 a 216,5 en siete días ",
    },
  },
];
