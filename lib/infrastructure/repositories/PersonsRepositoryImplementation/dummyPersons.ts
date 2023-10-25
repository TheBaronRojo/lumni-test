import IPersonDbm from "@infrastructure/cosmosDbModels/IPersonDbm";

export const dummyPersons: IPersonDbm[] = [
  {
    id: "j7mVewRM1nnjuYPy48sCaQ",
    createdAt: 1594754636944,
    updatedAt: 1594754636944,
    employmentInfo: {
      id: "j7mVewRM1nnjuYPy48sCaQ",
      createdAt: 1651772974573,
      updatedAt: 1651773038764,
      complementaryTraining: [
        "bootcamp",
        "universitaria"
      ],
      idioms: [
        {
          idiom: {
            id: "qyfTGH5GoNnqrP5jBNCPLr",
            isoCode: "ES",
            isSelectableForEmploymentProfile: true,
            name: "Español"
          },
          level: "native"
        },
        {
          idiom: {
            id: "kkDSwVfSPa2j1iRoVouF9V",
            isoCode: "EN",
            isSelectableForEmploymentProfile: true,
            name: "Inglés"
          },
          level: "basic"
        }
      ],
      isAvailableToTravel: true,
      isAvailableToChangeResidence: false,
      monthsOfCertifiableExperience: 12,
      skills: [
        {
          id: "hwaH2N7b2FxrJt79rS875f",
          normalizedName: "ADAPTABILITY",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Adaptabilidad"
        },
        {
          id: "mz5M4aTDcYjKF1WWBXSorN",
          normalizedName: "CREATIVITY",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Creatividad"
        },
        {
          id: "tkUiouf285DDrxJFpVZc7X",
          normalizedName: "INNOVATION",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Innovación"
        },
        {
          id: "j8K89PsC1ZPDMknmQ1r6xr",
          normalizedName: "PROBLEM_RESOLUTION",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Resolución de problemas"
        }
      ],
      sectorsOfLaboralExperience: [
        {
          id: "eJkSyTt4uJeR8gpsoiQwSs",
          normalizedName: "WEB_DEVELOPMENT_AND_PROGRAMMING",
          isSelectableForEmploymentProfile: true,
          name: "Desarrollo web y programación"
        }
      ],
      sectorsOfInterestForEmployment: [
        {
          id: "eJkSyTt4uJeR8gpsoiQwSs",
          normalizedName: "WEB_DEVELOPMENT_AND_PROGRAMMING",
          isSelectableForEmploymentProfile: true,
          name: "Desarrollo web y programación"
        },
        {
          id: "sj18ys6KpeA7Xw2j9DiwPp",
          normalizedName: "INFORMATION_AND_COMMUNICATION",
          isSelectableForEmploymentProfile: true,
          name: "Información y comunicaciones"
        }
      ],
      remunerationRequirement: {
        currency: {
          id: "pjGGpYuXks9BfkV6NBtaXj",
          isoCode: "COP",
          isSelectableForEmploymentProfile: true,
          name: "Pesos colombianos"
        },
        rangeStart: 1800000,
        rangeTop: 3000000
      },
      techSkills: [
        "html",
        "css",
        "js"
      ],
      linkedInUrl: null,
      githubUrl: null,
      portfolioUrl: null,
      preferredTypeOfOffice: "remote",
      keyWords: "espanol ingles adaptabilidad creatividad innovacion resolucion problemas desarrollo web programacion desarrollo web programacion informacion comunicaciones bootcamp universitaria html css js remoto"
    },
    identificationInfo: {
      personId: "j7mVewRM1nnjuYPy48sCaQ",
      createdAt: 1594754636944,
      updatedAt: 1652234108817,
      firstName: "Diego",
      middleName: "Prueba",
      lastName: "Lumni Company",
      identificationNumber: "12321313"
    }
  },
  {
    id: "hvxTiaJkQNGFdAG7aJBGdg",
    createdAt: 1563541967835,
    updatedAt: 1563541967835,
    employmentInfo: {
      id: "hvxTiaJkQNGFdAG7aJBGdg",
      createdAt: 1651779019526,
      updatedAt: 1653412800490,
      complementaryTraining: [
        "TECNICO EN SISTEMAS",
        "DIPLOMADO EN GESTION DE RECURSOS HUMANOS"
      ],
      idioms: [
        {
          idiom: {
            id: "qyfTGH5GoNnqrP5jBNCPLr",
            isoCode: "ES",
            isSelectableForEmploymentProfile: true,
            name: "Español"
          },
          level: "native"
        }
      ],
      isAvailableToTravel: true,
      isAvailableToChangeResidence: true,
      monthsOfCertifiableExperience: 24,
      skills: [
        {
          id: "dTBsig4NMVbvg5onizX9AS",
          normalizedName: "ATTENTION_TO_DETAIL",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Atención al detalle"
        },
        {
          id: "vpdeQBXxFTapHeuKp3zgDY",
          normalizedName: "PROJECTS_MANAGEMENT",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Gestión de proyectos"
        },
        {
          id: "2px7mC9PCHWMZ7e8MrBUw6",
          normalizedName: "LEADERSHIP",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Liderazgo"
        },
        {
          id: "3bUFqiWVzvhfS8gQfNkeLP",
          normalizedName: "TEAM_WORK",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Trabajo en equipo"
        },
        {
          id: "c14BhxvswPCe6CiCiXnnHt",
          normalizedName: "DECISION_MAKING",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Toma de decisiones"
        }
      ],
      sectorsOfLaboralExperience: [
        {
          id: "gTBMwJYdQpPrhynRYmSrSh",
          normalizedName: "HUMAN_HEALTH_CARE_AND_SOCIAL_ASSISTANCE",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de atención de la salud humana y de asistencia social"
        },
        {
          id: "h9rarJymqXF7em9uos7Tes",
          normalizedName: "ADMINISTRATIVE_AND_SUPPORT",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de servicios administrativos y de apoyo"
        },
        {
          id: "atSbbQ6sfmGsU37xjVsRSo",
          normalizedName: "COMPULSORY_AFFILIATION_SOCIAL_SECURITY_PLANS",
          isSelectableForEmploymentProfile: true,
          name: "Planes de seguridad social de afiliación obligatoria"
        },
        {
          id: "hdiz5c86XFfovAkMc94DhF",
          normalizedName: "TRANSPORT_AND_STORAGE",
          isSelectableForEmploymentProfile: true,
          name: "Transporte y almacenamiento"
        }
      ],
      sectorsOfInterestForEmployment: [
        {
          id: "gTBMwJYdQpPrhynRYmSrSh",
          normalizedName: "HUMAN_HEALTH_CARE_AND_SOCIAL_ASSISTANCE",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de atención de la salud humana y de asistencia social"
        },
        {
          id: "w9wwheQEX4UoDSGaEnU1pa",
          normalizedName: "INDIVIDUAL_HOUSE_HOLDS_AS_EMPLOYER",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de los hogares individuales en calidad de empleadores"
        },
        {
          id: "kK5T2fMhLexqpGL5eZxJL5",
          normalizedName: "EXTRATERRITORIAL_ENTITIES",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de organizaciones y entidades extraterritoriales"
        },
        {
          id: "9dFa2AgPLsHNf4mxk9gTWr",
          normalizedName: "PUBLIC_ADMINISTRATION_AND_DEFENSE",
          isSelectableForEmploymentProfile: true,
          name: "Administración pública y defensa"
        },
        {
          id: "dNYF3YndNaqzVwdL1FwyRw",
          normalizedName: "EXPLOTATION_OF_MINES_AND_QUARRIES",
          isSelectableForEmploymentProfile: true,
          name: "Explotación de minas y canteras"
        }
      ],
      remunerationRequirement: {
        currency: {
          id: "pjGGpYuXks9BfkV6NBtaXj",
          isoCode: "COP",
          isSelectableForEmploymentProfile: true,
          name: "Pesos colombianos"
        },
        rangeStart: 3,
        rangeTop: 5
      },
      techSkills: [
        "EXCEL AVANZADO ",
        "MODELO CAMBAZ",
        "PHVA"
      ],
      linkedInUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      githubUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      portfolioUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      preferredTypeOfOffice: "presential",
      keyWords: "espanol atencion detalle gestion proyectos liderazgo equipo toma decisiones actividades atencion salud humana asistencia social actividades servicios administrativos apoyo planes seguridad social afiliacion obligatoria transporte almacenamiento actividades atencion salud humana asistencia social actividades hogares individuales calidad empleadores actividades organizaciones entidades extraterritoriales administracion publica defensa explotacion minas canteras tecnico sistemas diplomado gestion recursos humanos excel avanzado modelo cambaz phva presencial"
    },
    identificationInfo: {
      personId: "hvxTiaJkQNGFdAG7aJBGdg",
      createdAt: 1563541967835,
      updatedAt: 1652396050931,
      firstName: "Jhurliet ",
      middleName: "Prueba",
      lastName: "Lumni Company",
      identificationNumber: "131313132"
    }
  },
  {
    id: "nt1BeGeFeeiS1VZzgFrj3N",
    createdAt: 1563343753524,
    updatedAt: 1563343753524,
    employmentInfo: {
      id: "nt1BeGeFeeiS1VZzgFrj3N",
      createdAt: 1668031422224,
      updatedAt: 1668031452664,
      complementaryTraining: [
        "no tengo ninguna aún. "
      ],
      idioms: [
        {
          idiom: {
            id: "qyfTGH5GoNnqrP5jBNCPLr",
            isoCode: "ES",
            isSelectableForEmploymentProfile: true,
            name: "Español",
          },
          level: "native"
        }
      ],
      isAvailableToTravel: false,
      isAvailableToChangeResidence: false,
      monthsOfCertifiableExperience: 18,
      skills: [
        {
          id: "hwaH2N7b2FxrJt79rS875f",
          normalizedName: "ADAPTABILITY",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Adaptabilidad",
        },
        {
          id: "umPfgtkaKvXGezospLzZQq",
          normalizedName: "TIME_MANAGEMENT",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Manejo efectivo del tiempo",
        },
        {
          id: "7HWapG6FXeFMLN6ww8aisL",
          normalizedName: "CRITICAL_THINKING",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Pensamiento crítico",
        },
        {
          id: "1FaBAJ6CqbHTUvxzGjhNCZ",
          normalizedName: "PROACTIVITY",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Proactividad",
        },
        {
          id: "j8K89PsC1ZPDMknmQ1r6xr",
          normalizedName: "PROBLEM_RESOLUTION",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Resolución de problemas",
        }
      ],
      sectorsOfLaboralExperience: [
        {
          id: "aYZ1aCtKnsahSyiM6RTHXZ",
          normalizedName: "PROFESSIONAL_SCIENTIFIC_AND_TECHNICAL",
          isSelectableForEmploymentProfile: true,
          name: "Actividades profesionales, científicas y técnicas"
        }
      ],
      sectorsOfInterestForEmployment: [
        {
          id: "aYZ1aCtKnsahSyiM6RTHXZ",
          normalizedName: "PROFESSIONAL_SCIENTIFIC_AND_TECHNICAL",
          isSelectableForEmploymentProfile: true,
          name: "Actividades profesionales, científicas y técnicas"
        }
      ],
      remunerationRequirement: {
        currency: {
          id: "pjGGpYuXks9BfkV6NBtaXj",
          isoCode: "COP",
          isSelectableForEmploymentProfile: true,
          name: "Pesos colombianos",
        },
        rangeStart: 2000000,
        rangeTop: 3500000
      },
      techSkills: [
        "excel"
      ],
      linkedInUrl: null,
      githubUrl: null,
      portfolioUrl: null,
      preferredTypeOfOffice: "hybrid",
      keyWords: "espanol adaptabilidad manejo efectivo pensamiento critico proactividad resolucion problemas actividades profesionales cientificas tecnicas actividades profesionales cientificas tecnicas excel hibrido"
    },
    identificationInfo: {
      personId: "nt1BeGeFeeiS1VZzgFrj3N",
      createdAt: 1563343753524,
      updatedAt: 1652229580265,
      firstName: "Sandra",
      middleName: "Prueba",
      lastName: "Lumni Company",
      identificationNumber: "1313131312"
    }
  },
  {
    id: "8Csvg9rkVvG7pVWWoyBM8V",
    createdAt: 1563361360631,
    updatedAt: 1563361360631,
    employmentInfo: {
      id: "8Csvg9rkVvG7pVWWoyBM8V",
      createdAt: 1652286767163,
      updatedAt: 1652286803369,
      complementaryTraining: [
        "FUNDAMENTOS PARA LA POTABILIZACIÓN DE AGUA",
        "OPERACIÓN DE SISTEMAS DE VERTIMIENTOS LÍQUIDOS",
        "GESTIÓN DE PROYECTOS",
        "EXCEL AVANZADO PARA EXPERTOS",
        "SISTEMA DE GESTIÓN ISO 9001-2015"
      ],
      idioms: [
        {
          idiom: {
            id: "kkDSwVfSPa2j1iRoVouF9V",
            isoCode: "EN",
            isSelectableForEmploymentProfile: true,
            name: "Inglés"
          },
          level: "basic"
        },
        {
          idiom: {
            id: "7skrWaMGpnyL5kLxBy4Smq",
            isoCode: "PT",
            isSelectableForEmploymentProfile: true,
            name: "Portugués"
          },
          level: "intermediate"
        }
      ],
      isAvailableToTravel: true,
      isAvailableToChangeResidence: true,
      monthsOfCertifiableExperience: 12,
      skills: [
        {
          id: "mz5M4aTDcYjKF1WWBXSorN",
          normalizedName: "CREATIVITY",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Creatividad"
        },
        {
          id: "vpdeQBXxFTapHeuKp3zgDY",
          normalizedName: "PROJECTS_MANAGEMENT",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Gestión de proyectos"
        },
        {
          id: "2px7mC9PCHWMZ7e8MrBUw6",
          normalizedName: "LEADERSHIP",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Liderazgo"
        },
        {
          id: "7HWapG6FXeFMLN6ww8aisL",
          normalizedName: "CRITICAL_THINKING",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Pensamiento crítico"
        },
        {
          id: "j8K89PsC1ZPDMknmQ1r6xr",
          normalizedName: "PROBLEM_RESOLUTION",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Resolución de problemas"
        }
      ],
      sectorsOfLaboralExperience: [
        {
          id: "aYZ1aCtKnsahSyiM6RTHXZ",
          normalizedName: "PROFESSIONAL_SCIENTIFIC_AND_TECHNICAL",
          isSelectableForEmploymentProfile: true,
          name: "Actividades profesionales, científicas y técnicas"
        },
        {
          id: "2mokChqKVo2xWxzJ2R3iJB",
          normalizedName: "WATER_DISTRIBUTION",
          isSelectableForEmploymentProfile: true,
          name: "Distribución de agua"
        },
        {
          id: "dTXc4yzwpsNQY11qhsxaHL",
          normalizedName: "TREATMENT_OF_WASTEWATER_AND_ENVIRONMENTAL_SANITATION",
          isSelectableForEmploymentProfile: true,
          name: "Evacuación y tratamiento de aguas residuales, gestión de desechos y actividades de saneamiento ambiental"
        }
      ],
      sectorsOfInterestForEmployment: [
        {
          id: "h9rarJymqXF7em9uos7Tes",
          normalizedName: "ADMINISTRATIVE_AND_SUPPORT",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de servicios administrativos y de apoyo"
        },
        {
          id: "aYZ1aCtKnsahSyiM6RTHXZ",
          normalizedName: "PROFESSIONAL_SCIENTIFIC_AND_TECHNICAL",
          isSelectableForEmploymentProfile: true,
          name: "Actividades profesionales, científicas y técnicas"
        },
        {
          id: "2mokChqKVo2xWxzJ2R3iJB",
          normalizedName: "WATER_DISTRIBUTION",
          isSelectableForEmploymentProfile: true,
          name: "Distribución de agua"
        },
        {
          id: "eE7rP7iNARZ6MnJ8oB6j1e",
          normalizedName: "EDUCATION",
          isSelectableForEmploymentProfile: true,
          name: "Educación"
        },
        {
          id: "dTXc4yzwpsNQY11qhsxaHL",
          normalizedName: "TREATMENT_OF_WASTEWATER_AND_ENVIRONMENTAL_SANITATION",
          isSelectableForEmploymentProfile: true,
          name: "Evacuación y tratamiento de aguas residuales, gestión de desechos y actividades de saneamiento ambiental"
        }
      ],
      remunerationRequirement: {
        currency: {
          id: "pjGGpYuXks9BfkV6NBtaXj",
          isoCode: "COP",
          isSelectableForEmploymentProfile: true,
          name: "Pesos colombianos"
        },
        rangeStart: 2200000,
        rangeTop: 3500000
      },
      techSkills: [
        "Excel Avanzado",
        "ArcGIS básico",
        "HTML",
        "Canva",
        "Word Avanzado"
      ],
      linkedInUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      githubUrl: null,
      portfolioUrl: null,
      preferredTypeOfOffice: "hybrid",
      keyWords: "ingles portugues creatividad gestion proyectos liderazgo pensamiento critico resolucion problemas actividades profesionales cientificas tecnicas distribucion agua evacuacion tratamiento aguas residuales gestion desechos actividades saneamiento ambiental actividades servicios administrativos apoyo actividades profesionales cientificas tecnicas distribucion agua educacion evacuacion tratamiento aguas residuales gestion desechos actividades saneamiento ambiental fundamentos potabilizacion agua operacion sistemas vertimientos liquidos gestion proyectos excel avanzado expertos sistema gestion iso 9001 2015 excel avanzado arcgis basico html canva word avanzado hibrido"
    },
    identificationInfo: {
      personId: "8Csvg9rkVvG7pVWWoyBM8V",
      createdAt: 1563361360631,
      updatedAt: 1652068116680,
      firstName: "Armando ",
      middleName: "Prueba",
      lastName: "Lumni Company",
      identificationNumber: "9786969709809"
    }
  },
  {
    id: "tzhn8c5YH1v6vAdCYVgCXa",
    createdAt: 1563546263972,
    updatedAt: 1563546263972,
    employmentInfo: {
      id: "tzhn8c5YH1v6vAdCYVgCXa",
      createdAt: 1652364171122,
      updatedAt: 1652364201061,
      complementaryTraining: [
        "Facebook e instagram Ads: Campañas desde cero",
        "SEO para redactores",
        "Branding emocional: Crea una marca inspiradora",
        "Copywriting para plataformas digitales",
        "Liderazgo comunicacional: Motiva a tu equipo"
      ],
      idioms: [
        {
          idiom: {
            id: "kkDSwVfSPa2j1iRoVouF9V",
            isoCode: "EN",
            isSelectableForEmploymentProfile: true,
            name: "Inglés"
          },
          level: "intermediate"
        },
        {
          idiom: {
            id: "qyfTGH5GoNnqrP5jBNCPLr",
            isoCode: "ES",
            isSelectableForEmploymentProfile: true,
            name: "Español"
          },
          level: "native"
        }
      ],
      isAvailableToTravel: true,
      isAvailableToChangeResidence: false,
      monthsOfCertifiableExperience: 3,
      skills: [
        {
          id: "hwaH2N7b2FxrJt79rS875f",
          normalizedName: "ADAPTABILITY",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Adaptabilidad"
        },
        {
          id: "mz5M4aTDcYjKF1WWBXSorN",
          normalizedName: "CREATIVITY",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Creatividad"
        },
        {
          id: "2px7mC9PCHWMZ7e8MrBUw6",
          normalizedName: "LEADERSHIP",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Liderazgo"
        },
        {
          id: "umPfgtkaKvXGezospLzZQq",
          normalizedName: "TIME_MANAGEMENT",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Manejo efectivo del tiempo"
        },
        {
          id: "7HWapG6FXeFMLN6ww8aisL",
          normalizedName: "CRITICAL_THINKING",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Pensamiento crítico"
        }
      ],
      sectorsOfLaboralExperience: [
        {
          id: "h9rarJymqXF7em9uos7Tes",
          normalizedName: "ADMINISTRATIVE_AND_SUPPORT",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de servicios administrativos y de apoyo"
        },
        {
          id: "sj18ys6KpeA7Xw2j9DiwPp",
          normalizedName: "INFORMATION_AND_COMMUNICATION",
          isSelectableForEmploymentProfile: true,
          name: "Información y comunicaciones"
        },
        {
          id: "a7t2mnFpGGTdyPVzm5ovS6",
          normalizedName: "OTHER_SERVICE_ACTIVITIES",
          isSelectableForEmploymentProfile: true,
          name: "Otras actividades de servicios"
        }
      ],
      sectorsOfInterestForEmployment: [
        {
          id: "h9rarJymqXF7em9uos7Tes",
          normalizedName: "ADMINISTRATIVE_AND_SUPPORT",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de servicios administrativos y de apoyo"
        },
        {
          id: "eE7rP7iNARZ6MnJ8oB6j1e",
          normalizedName: "EDUCATION",
          isSelectableForEmploymentProfile: true,
          name: "Educación"
        },
        {
          id: "sj18ys6KpeA7Xw2j9DiwPp",
          normalizedName: "INFORMATION_AND_COMMUNICATION",
          isSelectableForEmploymentProfile: true,
          name: "Información y comunicaciones"
        }
      ],
      remunerationRequirement: {
        currency: {
          id: "pjGGpYuXks9BfkV6NBtaXj",
          isoCode: "COP",
          isSelectableForEmploymentProfile: true,
          name: "Pesos colombianos"
        },
        rangeStart: 1500000,
        rangeTop: 2500000
      },
      techSkills: [
        "You tube",
        "Drive",
        "KineMaster",
        "Snapseed",
        "Excel alto",
        "Power Point Avanzado",
        "Word Avanzado",
        "Ads manager"
      ],
      linkedInUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      githubUrl: null,
      portfolioUrl: null,
      preferredTypeOfOffice: "hybrid",
      keyWords: "ingles espanol adaptabilidad creatividad liderazgo manejo efectivo pensamiento critico actividades servicios administrativos apoyo informacion comunicaciones actividades servicios actividades servicios administrativos apoyo educacion informacion comunicaciones facebook e instagram ads campanas cero seo redactores branding emocional crea marca inspiradora copywriting plataformas digitales liderazgo comunicacional motiva a equipo you tube drive kinemaster snapseed excel alto power point avanzado word avanzado ads manager hibrido"
    },
    identificationInfo: {
      personId: "tzhn8c5YH1v6vAdCYVgCXa",
      createdAt: 1563546263972,
      updatedAt: 1652393126962,
      firstName: "Yeison",
      middleName: "",
      lastName: "Lumni Company",
      identificationNumber: "1002619311"
    }
  },
  {
    id: "eLMNfbD7HVQVofUs1EYEFR",
    createdAt: 1563343373419,
    updatedAt: 1563343373419,
    employmentInfo: {
      id: "eLMNfbD7HVQVofUs1EYEFR",
      createdAt: 1677338599469,
      updatedAt: 1677338672148,
      complementaryTraining: [
        " análisis sensorial de productos de búfala"
      ],
      idioms: [
        {
          idiom: {
            id: "qyfTGH5GoNnqrP5jBNCPLr",
            isoCode: "ES",
            isSelectableForEmploymentProfile: true,
            name: "Español",
          },
          level: "native"
        }
      ],
      isAvailableToTravel: false,
      isAvailableToChangeResidence: true,
      monthsOfCertifiableExperience: 25,
      skills: [
        {
          id: "dTBsig4NMVbvg5onizX9AS",
          normalizedName: "ATTENTION_TO_DETAIL",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Atención al detalle",
        },
        {
          id: "umPfgtkaKvXGezospLzZQq",
          normalizedName: "TIME_MANAGEMENT",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Manejo efectivo del tiempo",
        },
        {
          id: "7HWapG6FXeFMLN6ww8aisL",
          normalizedName: "CRITICAL_THINKING",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Pensamiento crítico",
        },
        {
          id: "j8K89PsC1ZPDMknmQ1r6xr",
          normalizedName: "PROBLEM_RESOLUTION",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Resolución de problemas",
        },
        {
          id: "3bUFqiWVzvhfS8gQfNkeLP",
          normalizedName: "TEAM_WORK",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Trabajo en equipo",
        }
      ],
      sectorsOfLaboralExperience: [
        {
          id: "aYZ1aCtKnsahSyiM6RTHXZ",
          normalizedName: "PROFESSIONAL_SCIENTIFIC_AND_TECHNICAL",
          isSelectableForEmploymentProfile: true,
          name: "Actividades profesionales, científicas y técnicas"
        }
      ],
      sectorsOfInterestForEmployment: [
        {
          id: "jfxz8w5kwJ1HSmyGLP9ax2",
          normalizedName: "ACCOMMODATION_AND_FOOD",
          isSelectableForEmploymentProfile: true,
          name: "Alojamiento y servicios de comida"
        },
        {
          id: "4h31T4eTsxuYVGqJaJxXyV",
          normalizedName: "WHOLESALE_AND_RETAIL",
          isSelectableForEmploymentProfile: true,
          name: "Comercio al por mayor y al por menor"
        },
        {
          id: "2mokChqKVo2xWxzJ2R3iJB",
          normalizedName: "WATER_DISTRIBUTION",
          isSelectableForEmploymentProfile: true,
          name: "Distribución de agua"
        },
        {
          id: "jT6fZ49QpzowJS4SA9X94V",
          normalizedName: "MANUFACTURING_INDUSTRIES",
          isSelectableForEmploymentProfile: true,
          name: "Industrias manufactureras"
        },
        {
          id: "a7t2mnFpGGTdyPVzm5ovS6",
          normalizedName: "OTHER_SERVICE_ACTIVITIES",
          isSelectableForEmploymentProfile: true,
          name: "Otras actividades de servicios"
        }
      ],
      remunerationRequirement: {
        currency: {
          id: "pjGGpYuXks9BfkV6NBtaXj",
          isoCode: "COP",
          isSelectableForEmploymentProfile: true,
          name: "Pesos colombianos",
        },
        rangeStart: 2000000,
        rangeTop: 2800000
      },
      techSkills: [
        "Excel básico y programas "
      ],
      linkedInUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      githubUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      portfolioUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      preferredTypeOfOffice: "presential",
      keyWords: "espanol atencion detalle manejo efectivo pensamiento critico resolucion problemas equipo actividades profesionales cientificas tecnicas alojamiento servicios comida comercio mayor menor distribucion agua industrias manufactureras actividades servicios analisis sensorial productos bufala excel basico programas presencial"
    },
    identificationInfo: {
      personId: "eLMNfbD7HVQVofUs1EYEFR",
      createdAt: 1563343373419,
      updatedAt: 1652216402391,
      firstName: "Cristian",
      middleName: "Prueba",
      lastName: "Lumni Company",
      identificationNumber: "113123132147"
    }
  },
  {
    id: "4vh5RWvQ7B8fGXygUXUDhN",
    createdAt: 1563523244980,
    updatedAt: 1685022679056,
    employmentInfo: {
      id: "4vh5RWvQ7B8fGXygUXUDhN",
      createdAt: 1652403813846,
      updatedAt: 1685022679056,
      complementaryTraining: [
        "Profesional en Contaduría Publica ",
        "Diplomado en tributos "
      ],
      idioms: [
        {
          idiom: {
            id: "qyfTGH5GoNnqrP5jBNCPLr",
            isoCode: "ES",
            isSelectableForEmploymentProfile: true,
            name: "Español",
          },
          level: "native"
        }
      ],
      isAvailableToTravel: true,
      isAvailableToChangeResidence: true,
      monthsOfCertifiableExperience: 12,
      skills: [
        {
          id: "hwaH2N7b2FxrJt79rS875f",
          normalizedName: "ADAPTABILITY",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Adaptabilidad",
        },
        {
          id: "2px7mC9PCHWMZ7e8MrBUw6",
          normalizedName: "LEADERSHIP",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Liderazgo",
        },
        {
          id: "7HWapG6FXeFMLN6ww8aisL",
          normalizedName: "CRITICAL_THINKING",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Pensamiento crítico",
        },
        {
          id: "j8K89PsC1ZPDMknmQ1r6xr",
          normalizedName: "PROBLEM_RESOLUTION",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Resolución de problemas",
        },
        {
          id: "3bUFqiWVzvhfS8gQfNkeLP",
          normalizedName: "TEAM_WORK",
          isSelectableForEmploymentProfile: true,
          type: "soft",
          name: "Trabajo en equipo",
        }
      ],
      sectorsOfLaboralExperience: [
        {
          id: "h9rarJymqXF7em9uos7Tes",
          normalizedName: "ADMINISTRATIVE_AND_SUPPORT",
          isSelectableForEmploymentProfile: true,
          name: "Actividades de servicios administrativos y de apoyo"
        },
        {
          id: "aq3DztQB9BNBbTjwgNQyE9",
          normalizedName: "FINANCIAL_AND_INSURANCE",
          isSelectableForEmploymentProfile: true,
          name: "Actividades financieras y de seguros"
        }
      ],
      sectorsOfInterestForEmployment: [
        {
          id: "aq3DztQB9BNBbTjwgNQyE9",
          normalizedName: "FINANCIAL_AND_INSURANCE",
          isSelectableForEmploymentProfile: true,
          name: "Actividades financieras y de seguros"
        }
      ],
      remunerationRequirement: {
        currency: {
          id: "pjGGpYuXks9BfkV6NBtaXj",
          isoCode: "COP",
          isSelectableForEmploymentProfile: true,
          name: "Pesos colombianos",
        },
        rangeStart: 1000000,
        rangeTop: 1200000
      },
      techSkills: [
        "Excel avanzado",
        "Word Avanzado",
        "Manejo de inventario",
        "Manejo de facturación",
        "Conciliaciones bancarias ",
        "Manejo de Nomina "
      ],
      linkedInUrl: "https://www.linkedin.com/jobs/search/?geoId=&keywords=&location=",
      githubUrl: null,
      portfolioUrl: null,
      preferredTypeOfOffice: "presential",
      keyWords: "espanol adaptabilidad liderazgo pensamiento critico resolucion problemas equipo actividades servicios administrativos apoyo actividades financieras seguros actividades financieras seguros profesional contaduria publica diplomado tributos excel avanzado word avanzado manejo inventario manejo facturacion conciliaciones bancarias manejo nomina presencial"
    },
    identificationInfo: {
      personId: "4vh5RWvQ7B8fGXygUXUDhN",
      createdAt: 1563523244980,
      updatedAt: 1652231678276,
      firstName: "Jesus",
      middleName: "Manuel",
      lastName: "Lumni Company",
      identificationNumber: "1321313212"
    }
  }
];
