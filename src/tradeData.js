// TradeIQ PRO — 20 Trade Scenarios Dataset
// Used by EconBot to provide context-aware responses without flooding tokens

export const TRADE_SCENARIOS = {
  cacao: {
    product: "Fine-Aroma Cacao",
    keywords: ["cacao", "cocoa", "chocolate", "kakao"],
    bestMarket: "Germany",
    score: 94,
    origin: "Ecuador",
    situation: "Ecuadorian cooperative produces 300 MT/year of certified fine-aroma cacao (less than 8% of global supply). Currently sells to domestic trader at $2,800/MT commodity pricing.",
    question: "Which market offers highest long-term revenue for Ecuadorian fine-aroma cacao at premium pricing?",
    options: ["USA (bulk brokers)", "Germany (specialty chocolate manufacturers)", "China (emerging market)", "Brazil (regional market)"],
    analysis: {
      bestMarket: "Germany",
      score: 94,
      demand: "Growing +12%/year in specialty segment",
      competition: "Medium — Ecuador holds differentiated position through origin and flavor profile",
      logistics: "Moderate — 21-day sea transit Guayaquil to Hamburg",
      tariffs: "EU: 0% duty on raw cacao beans; 8% on processed chocolate"
    },
    keyPrices: {
      commodity: "$2,800/MT",
      germanySpecialty: "$7,000–$9,500/MT",
      usaSpecialty: "$4,500–$6,000/MT",
      premiumMultiplier: "3.3x over commodity"
    },
    insights: [
      "Germany: 200+ premium artisan chocolate manufacturers paying $7,000–9,500/MT",
      "EU specialty chocolate segment grew 11.8% CAGR 2018–2023",
      "HCP certification ($3,200) enables $8,500–9,500/MT pricing tier",
      "China: <3% fine-chocolate penetration, needs 3–5 years brand development",
      "Brazil is a major producer itself — no origin premiums for Ecuadorian cacao"
    ],
    dashboardData: {
      cards: [
        { label: "Market Score", value: "94", unit: "/100", color: "blue" },
        { label: "Premium Price", value: "$8,400", unit: "/MT", color: "cyan" },
        { label: "Demand Growth", value: "+12", unit: "%/yr", color: "green" },
        { label: "Logistics Risk", value: "Medium", unit: "", color: "purple" }
      ],
      barChart: {
        title: "Cacao Price by Market (USD/MT)",
        data: [
          { name: "Germany", value: 8400 },
          { name: "Belgium", value: 7800 },
          { name: "USA", value: 5200 },
          { name: "Japan", value: 6100 },
          { name: "Commodity", value: 2800 }
        ],
        color: "#00d4ff"
      },
      lineChart: {
        title: "EU Specialty Cacao Growth Trend",
        data: [
          { year: "2019", value: 62 },
          { year: "2020", value: 68 },
          { year: "2021", value: 76 },
          { year: "2022", value: 85 },
          { year: "2023", value: 95 },
          { year: "2024", value: 107 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "Germany Market Risk Analysis",
        labels: ["Demand", "Logistics", "Regulation", "Competition", "Growth"],
        values: [94, 72, 85, 65, 90]
      }
    },
    decision: "Germany is the primary export market. Obtain HCP certification, establish direct relationships at ISM Cologne, and export under single-origin branding."
  },

  shrimp: {
    product: "White Shrimp (Litopenaeus vannamei)",
    keywords: ["shrimp", "camarón", "camarones", "prawn", "vannamei"],
    bestMarket: "United States",
    score: 88,
    origin: "Ecuador",
    situation: "Ecuadorian shrimp company with 1,200 ha ponds producing 8,000 MT/year. Currently exports to Asia at commodity prices. Seeks to diversify into higher-value markets.",
    analysis: {
      bestMarket: "United States",
      score: 88,
      demand: "Stable to growing +5%/year; strong post-pandemic foodservice recovery",
      competition: "High — India, Vietnam, Indonesia established; Ecuador differentiates on quality and biosecurity",
      logistics: "Moderate — 18-day sea transit Guayaquil to Miami",
      tariffs: "US: 0% tariff under GSP; FDA facility registration required"
    },
    keyPrices: {
      usaWholesale: "$4.80–5.20/kg",
      asianCommodity: "$3.20–3.60/kg",
      premiumMultiplier: "45–50% premium over Asia",
      china: "$2.80–3.10/kg"
    },
    insights: [
      "USA: world's largest per-capita shrimp consumer, imports $3.2B annually",
      "Ecuador holds 18% share of US shrimp imports — 2nd largest supplier after India",
      "WhiteGold certification and biosecurity record commands quality premium",
      "EU requires ASC certification (12–18 months, $45,000) — viable as second phase",
      "China acts as price-depressor due to domestic production"
    ],
    dashboardData: {
      cards: [
        { label: "Market Score", value: "88", unit: "/100", color: "blue" },
        { label: "US Price", value: "$5.00", unit: "/kg", color: "cyan" },
        { label: "Asia Price", value: "$3.40", unit: "/kg", color: "purple" },
        { label: "Premium", value: "+47", unit: "%", color: "green" }
      ],
      barChart: {
        title: "Shrimp Import Price by Market (USD/kg)",
        data: [
          { name: "USA", value: 5.0 },
          { name: "EU", value: 4.6 },
          { name: "Japan", value: 4.8 },
          { name: "China", value: 2.95 },
          { name: "Brazil", value: 3.1 }
        ],
        color: "#06ffa5"
      },
      lineChart: {
        title: "Ecuador Shrimp Export Revenue (USD M)",
        data: [
          { year: "2018", value: 2100 },
          { year: "2019", value: 2400 },
          { year: "2020", value: 2200 },
          { year: "2021", value: 2800 },
          { year: "2022", value: 3100 },
          { year: "2023", value: 3400 }
        ],
        color: "#00d4ff"
      },
      radarChart: {
        title: "USA Market Risk Profile",
        labels: ["Demand", "Logistics", "Regulation", "Competition", "Growth"],
        values: [88, 78, 82, 55, 75]
      }
    },
    decision: "United States is primary target. Pursue SIMP compliance and target foodservice distributors in Miami and Houston as entry channels."
  },

  banana: {
    product: "Bananas (Cavendish / Certified)",
    keywords: ["banana", "banano", "bananas", "plátano"],
    bestMarket: "Germany (EU — retain and invest)",
    score: 91,
    origin: "Ecuador",
    situation: "Ecuador's largest independent banana exporter ships 2.4M boxes/week to EU. German retail chain (38% of EU revenue) requires Rainforest Alliance certification within 12 months.",
    analysis: {
      bestMarket: "Germany (EU)",
      score: 91,
      demand: "Stable +2%/year in EU; German consumers pay 15–20% premium for certified bananas",
      competition: "High — Colombia and Philippines already RA-certified",
      logistics: "Well-established — Guayaquil to Rotterdam/Hamburg, 21-day transit",
      tariffs: "EU: EUR 114/MT reduced tariff for GSP beneficiaries; Ecuador qualifies"
    },
    keyPrices: {
      euCertified: "$1.40–1.60/box",
      china: "$0.78/box",
      middleEast: "$0.80–0.85/box",
      certificationCost: "$45,000 (12 months)"
    },
    insights: [
      "Ecuador is world's #1 banana exporter — $3.8B annual export revenue",
      "EU absorbs ~40% of Ecuador's banana exports — most critical market",
      "RA certification ROI: 8.4x over 3 years based on retained contracts + premium",
      "China: bananas growing +18%/yr but price $0.78/box vs $1.50 in EU certified",
      "USA dominated by Chiquita/Dole/Fresh Del Monte — high barriers for independents"
    ],
    dashboardData: {
      cards: [
        { label: "Market Score", value: "91", unit: "/100", color: "blue" },
        { label: "EU Cert. Price", value: "$1.50", unit: "/box", color: "cyan" },
        { label: "China Price", value: "$0.78", unit: "/box", color: "purple" },
        { label: "RA Cert. ROI", value: "8.4x", unit: "", color: "green" }
      ],
      barChart: {
        title: "Banana Export Price by Market (USD/box)",
        data: [
          { name: "EU Certified", value: 1.50 },
          { name: "EU Uncertified", value: 1.20 },
          { name: "USA", value: 1.10 },
          { name: "Middle East", value: 0.83 },
          { name: "China", value: 0.78 }
        ],
        color: "#f59e0b"
      },
      lineChart: {
        title: "RA Certification ROI (USD M cumulative)",
        data: [
          { year: "M0", value: -45 },
          { year: "M6", value: -20 },
          { year: "M12", value: 0 },
          { year: "M18", value: 120 },
          { year: "M24", value: 260 },
          { year: "M36", value: 378 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "EU Market Analysis",
        labels: ["Revenue", "Stability", "Logistics", "Compliance", "Growth"],
        values: [91, 85, 88, 70, 72]
      }
    },
    decision: "Invest immediately in Rainforest Alliance certification to retain EU contracts. Redirect 15–20% of spot volume to UAE/Saudi Arabia as revenue bridge during 12-month certification window."
  },

  avocado: {
    product: "Avocado (Hass)",
    keywords: ["avocado", "aguacate", "palta", "hass"],
    bestMarket: "Germany",
    score: 87,
    origin: "Mexico",
    situation: "Mexican avocado exporter producing 12,000 MT/year from Michoacan. Depends on US for 78% of revenue. USDA inspection bottlenecks causing recurring shipment delays.",
    analysis: {
      bestMarket: "Germany",
      score: 87,
      demand: "Growing +22%/year in EU; avocado consumption in Germany tripled 2016–2023",
      competition: "Medium — Peru and South Africa dominate; Mexico has strong origin recognition",
      logistics: "Complex — 18-day sea transit; requires cold chain at 5–7°C",
      tariffs: "EU: 4% tariff on avocados; no quota restrictions for Mexican origin"
    },
    keyPrices: {
      germanyLanded: "EUR 2.20–2.80/kg",
      germanyOrganic: "EUR 3.50–4.20/kg",
      usaWholesale: "approx. EUR 1.60/kg equivalent",
      premium: "35% over US wholesale"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "87", unit: "/100", color: "blue" },
        { label: "Germany Price", value: "€2.50", unit: "/kg", color: "cyan" },
        { label: "EU Growth", value: "+22", unit: "%/yr", color: "green" },
        { label: "Organic Premium", value: "+55", unit: "%", color: "purple" }
      ],
      barChart: {
        title: "Avocado Price by Market (USD/kg)",
        data: [
          { name: "Germany Organic", value: 3.85 },
          { name: "Germany Conv.", value: 2.50 },
          { name: "USA Wholesale", value: 1.85 },
          { name: "China", value: 2.10 },
          { name: "Brazil", value: 1.20 }
        ],
        color: "#06ffa5"
      },
      lineChart: {
        title: "EU Avocado Import Volume (000 MT)",
        data: [
          { year: "2017", value: 380 },
          { year: "2018", value: 460 },
          { year: "2019", value: 540 },
          { year: "2020", value: 610 },
          { year: "2021", value: 720 },
          { year: "2022", value: 870 },
          { year: "2023", value: 1050 }
        ],
        color: "#00d4ff"
      },
      radarChart: {
        title: "Germany Market Factors",
        labels: ["Demand", "Price", "Logistics", "Competition", "Growth"],
        values: [87, 82, 70, 68, 91]
      }
    },
    decision: "Germany as primary diversification target. Establish relationship with REWE Group or Edeka wholesale in Year 1. Pursue EU organic certification for Year 3 premium tier."
  },

  coffee: {
    product: "Specialty Coffee (Single-Origin Arabica)",
    keywords: ["coffee", "café", "arabica", "specialty coffee", "single origin"],
    bestMarket: "Germany",
    score: 90,
    origin: "Colombia",
    situation: "Colombian cooperative from Huila produces 450 MT/year of specialty-grade Arabica (86–92 SCA points). Currently sells through broker at $4.20/lb, well below direct-to-roaster prices.",
    analysis: {
      bestMarket: "Germany",
      score: 90,
      demand: "Growing +12%/year in EU specialty segment; German specialty coffee imports EUR 380M in 2023",
      competition: "High — Ethiopia, Kenya, Guatemala, Panama all target EU specialty buyers",
      logistics: "Moderate — 28-day sea transit Buenaventura/Cartagena to Hamburg",
      tariffs: "EU: 0% tariff on green (unroasted) coffee; 7.5% on roasted — green export advantageous"
    },
    keyPrices: {
      brokerPrice: "$4.20/lb",
      germanyDirectRoaster: "$6.50–$9.00/lb",
      usaSpecialty: "$5.80–$7.50/lb",
      improvement: "55–115% price improvement over broker"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "90", unit: "/100", color: "blue" },
        { label: "Direct Price", value: "$7.75", unit: "/lb", color: "cyan" },
        { label: "Broker Price", value: "$4.20", unit: "/lb", color: "purple" },
        { label: "Improvement", value: "+85", unit: "%", color: "green" }
      ],
      barChart: {
        title: "Coffee Price by Channel (USD/lb)",
        data: [
          { name: "Germany Direct", value: 7.75 },
          { name: "USA Specialty", value: 6.65 },
          { name: "Japan", value: 7.20 },
          { name: "Broker", value: 4.20 },
          { name: "Commodity", value: 2.10 }
        ],
        color: "#a855f7"
      },
      lineChart: {
        title: "EU Specialty Coffee Market (EUR M)",
        data: [
          { year: "2018", value: 240 },
          { year: "2019", value: 268 },
          { year: "2020", value: 290 },
          { year: "2021", value: 320 },
          { year: "2022", value: 352 },
          { year: "2023", value: 380 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "Coffee Market Risk Profile",
        labels: ["Price", "Volume", "Logistics", "Regulation", "Growth"],
        values: [90, 75, 70, 88, 85]
      }
    },
    decision: "Exit broker relationship within 18 months. Establish 4–6 direct roaster partnerships in Germany and Austria targeting 5–20 MT lots. Projects $6.80–7.20/lb vs current $4.20/lb."
  },

  quinoa: {
    product: "Quinoa (Royal Bolivian)",
    keywords: ["quinoa", "quinua"],
    bestMarket: "United States",
    score: 85,
    origin: "Bolivia",
    situation: "Bolivian producer association representing 2,800 smallholder farmers producing 18,000 MT/year of Royal Quinoa. Currently exports through single aggregator at commodity pricing.",
    keyPrices: {
      commodityExport: "$1.80–2.20/kg",
      usaNaturalRetail: "$3.80–4.40/kg (wholesale)",
      usaRetailShelf: "$6.50–14.00/kg",
      valueMuliplier: "4–7x commodity"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "85", unit: "/100", color: "blue" },
        { label: "US Wholesale", value: "$4.10", unit: "/kg", color: "cyan" },
        { label: "Commodity", value: "$2.00", unit: "/kg", color: "purple" },
        { label: "Value Gain", value: "+105", unit: "%", color: "green" }
      ],
      barChart: {
        title: "Quinoa Price by Channel (USD/kg)",
        data: [
          { name: "US Retail", value: 10.25 },
          { name: "US Wholesale", value: 4.10 },
          { name: "EU Organic", value: 3.75 },
          { name: "China Health", value: 2.80 },
          { name: "Commodity", value: 2.00 }
        ],
        color: "#00d4ff"
      },
      lineChart: {
        title: "US Quinoa Import Volume (000 MT)",
        data: [
          { year: "2016", value: 18 },
          { year: "2018", value: 28 },
          { year: "2019", value: 34 },
          { year: "2021", value: 38 },
          { year: "2022", value: 41 },
          { year: "2023", value: 44 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "USA Quinoa Market Factors",
        labels: ["Demand", "Price", "Access", "Competition", "Growth"],
        values: [85, 80, 78, 65, 72]
      }
    },
    decision: "USA as optimal primary market. Invest $120,000 in brand development and FDA registration. Participate in Expo West. Target 3,500 MT Year 1 through natural food distributors."
  },

  flowers: {
    product: "Cut Flowers (Roses)",
    keywords: ["flowers", "flores", "roses", "rosas", "floriculture", "floricultura"],
    bestMarket: "Germany",
    score: 86,
    origin: "Kenya",
    situation: "Kenyan floriculture company with 180 ha of rose production, 420M stems/year. Sells 70% through FloraHolland auction (12–15% commission). Wants direct market relationships.",
    keyPrices: {
      floraHollandAuction: "EUR 0.18–0.22/stem",
      germanyDirect: "EUR 0.28–0.42/stem",
      commissionSaving: "12–15% elimination",
      revenueImprovement: "EUR 8.4M annually"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "86", unit: "/100", color: "blue" },
        { label: "Direct Price", value: "€0.32", unit: "/stem", color: "cyan" },
        { label: "Auction Price", value: "€0.20", unit: "/stem", color: "purple" },
        { label: "Commission", value: "-13", unit: "%", color: "green" }
      ],
      barChart: {
        title: "Rose Price by Channel (EUR/stem)",
        data: [
          { name: "Germany Direct", value: 0.32 },
          { name: "UK Direct", value: 0.29 },
          { name: "Auction", value: 0.20 },
          { name: "USA", value: 0.25 },
          { name: "China", value: 0.13 }
        ],
        color: "#f472b6"
      },
      lineChart: {
        title: "EU Cut Flower Demand (Index 2018=100)",
        data: [
          { year: "2018", value: 100 },
          { year: "2019", value: 103 },
          { year: "2020", value: 95 },
          { year: "2021", value: 108 },
          { year: "2022", value: 112 },
          { year: "2023", value: 116 }
        ],
        color: "#00d4ff"
      },
      radarChart: {
        title: "Germany Direct Channel Factors",
        labels: ["Price", "Volume", "Access", "Logistics", "Stability"],
        values: [86, 82, 75, 70, 88]
      }
    },
    decision: "Allocate 40% of production to direct German retail chain supply within 24 months. Target 3 German supermarket floristry buyers at EUR 0.32/stem average."
  },

  lithium: {
    product: "Lithium Carbonate",
    keywords: ["lithium", "litio", "lithium carbonate", "LCE", "rare minerals", "battery minerals"],
    bestMarket: "United States",
    score: 92,
    origin: "Chile",
    situation: "Chilean mining company producing 22,000 MT LCE/year from Atacama Desert. Currently sells 100% to Chinese battery manufacturers at commodity pricing. EV boom accelerating demand.",
    keyPrices: {
      chineseCommodity: "$16,000–18,000/MT",
      usaIRAQualified: "$24,000–32,000/MT",
      batteryGradeHydroxide: "+$8,000–14,000/MT premium",
      euLongTerm: "EUR 28,000–35,000/MT"
    },
    insights: [
      "IRA mandates domestic or FTA-partner content — Chilean lithium qualifies; Chinese sourcing excluded",
      "US battery manufacturers (Panasonic, LG, Samsung SDI) signing long-term agreements at $24,000–32,000/MT",
      "Processing to battery-grade hydroxide adds $8,000–14,000/MT on top",
      "German gigafactories (CATL Erfurt, Tesla Brandenburg, VW PowerCo) offer EUR 28,000–35,000/MT",
      "China pays commodity pricing and has used export controls as geopolitical leverage"
    ],
    dashboardData: {
      cards: [
        { label: "Market Score", value: "92", unit: "/100", color: "blue" },
        { label: "US IRA Price", value: "$28K", unit: "/MT", color: "cyan" },
        { label: "China Spot", value: "$17K", unit: "/MT", color: "purple" },
        { label: "EV Growth", value: "+45", unit: "%/yr", color: "green" }
      ],
      barChart: {
        title: "Lithium Price by Market (USD/MT)",
        data: [
          { name: "US IRA Offtake", value: 28000 },
          { name: "EU Long-Term", value: 31500 },
          { name: "Battery-Grade", value: 35000 },
          { name: "China Spot", value: 17000 },
          { name: "Commodity", value: 16000 }
        ],
        color: "#06ffa5"
      },
      lineChart: {
        title: "Global EV Sales (M units)",
        data: [
          { year: "2018", value: 2.0 },
          { year: "2019", value: 2.2 },
          { year: "2020", value: 3.1 },
          { year: "2021", value: 6.5 },
          { year: "2022", value: 10.5 },
          { year: "2023", value: 14.2 }
        ],
        color: "#00d4ff"
      },
      radarChart: {
        title: "Lithium Market Strategic Factors",
        labels: ["Price", "Volume", "Stability", "Growth", "Strategic Value"],
        values: [92, 80, 85, 95, 98]
      }
    },
    decision: "USA as highest-value market. Negotiate 7-year offtake agreement at $28,000/MT for 8,000 MT annually. Invest $340M in lithium hydroxide conversion plant for 3.2x revenue growth by 2028."
  },

  tuna: {
    product: "Canned Tuna",
    keywords: ["tuna", "atún", "atun", "canned tuna", "canned fish", "seafood"],
    bestMarket: "Germany",
    score: 83,
    origin: "Ecuador",
    situation: "Ecuadorian tuna cannery producing 45,000 MT/year. Sells 60% to EU private-label buyers and 40% to US foodservice at commodity canning prices. Seeks to access premium branded channels.",
    keyPrices: {
      privateLabelConventional: "EUR 1.80–2.40 per 160g can",
      mscCertifiedEU: "EUR 3.20–4.80 per 160g can",
      certificationCost: "$280,000 (18 months)",
      additionalMarginPotential: "EUR 6.2M annually on 20% of volume"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "83", unit: "/100", color: "blue" },
        { label: "MSC Price", value: "€4.00", unit: "/can", color: "cyan" },
        { label: "Private Label", value: "€2.10", unit: "/can", color: "purple" },
        { label: "MSC Premium", value: "+90", unit: "%", color: "green" }
      ],
      barChart: {
        title: "Canned Tuna Price by Segment (EUR/case 24u)",
        data: [
          { name: "EU MSC Certified", value: 96 },
          { name: "EU Organic", value: 115 },
          { name: "US Branded", value: 88 },
          { name: "EU Private Label", value: 50 },
          { name: "China", value: 38 }
        ],
        color: "#00d4ff"
      },
      lineChart: {
        title: "EU MSC-Certified Seafood Market Share (%)",
        data: [
          { year: "2016", value: 12 },
          { year: "2018", value: 18 },
          { year: "2019", value: 22 },
          { year: "2021", value: 27 },
          { year: "2022", value: 29 },
          { year: "2023", value: 31 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "EU Premium Tuna Market",
        labels: ["Price", "Volume", "Certification", "Logistics", "Growth"],
        values: [83, 78, 90, 85, 72]
      }
    },
    decision: "Germany (EU) as primary market for premium-certified strategy. Commission MSC certification immediately (18 months). Target 9,000 MT annually to German food retail at EUR 4.20/can average."
  },

  blueberry: {
    product: "Organic Blueberries (Fresh)",
    keywords: ["blueberry", "blueberries", "arándano", "arandano", "arándanos"],
    bestMarket: "Germany",
    score: 88,
    origin: "Peru",
    situation: "Peruvian blueberry exporter producing 8,500 MT/year of organic blueberries. Exports October–January (Northern Hemisphere off-season). Currently 55% USA, 45% EU.",
    keyPrices: {
      germany: "EUR 4.80–6.20/kg",
      usa: "$5.80/kg",
      seasonalPremium: "+EUR 0.60–0.80/kg",
      airFreightCost: "$2.10–2.40/kg"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "88", unit: "/100", color: "blue" },
        { label: "Germany Price", value: "€5.50", unit: "/kg", color: "cyan" },
        { label: "USA Price", value: "$5.80", unit: "/kg", color: "purple" },
        { label: "Seasonal Bonus", value: "+€0.70", unit: "/kg", color: "green" }
      ],
      barChart: {
        title: "Organic Blueberry Price by Market (USD/kg)",
        data: [
          { name: "Germany Peak", value: 7.20 },
          { name: "Germany Main", value: 5.50 },
          { name: "USA", value: 5.80 },
          { name: "UK", value: 6.10 },
          { name: "China", value: 4.20 }
        ],
        color: "#a855f7"
      },
      lineChart: {
        title: "EU Organic Fresh Fruit Growth (Index)",
        data: [
          { year: "2018", value: 100 },
          { year: "2019", value: 115 },
          { year: "2020", value: 128 },
          { year: "2021", value: 148 },
          { year: "2022", value: 165 },
          { year: "2023", value: 185 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "Germany Organic Blueberry Market",
        labels: ["Price", "Demand", "Seasonality", "Logistics", "Growth"],
        values: [88, 85, 95, 70, 88]
      }
    },
    decision: "Increase EU allocation from 45% to 65% within two seasons. Air-freight October–November lots (EUR 7.00–7.80/kg). Sea freight for January volume (EUR 4.80–5.20/kg). +$4.2M annual revenue."
  },

  palmoil: {
    product: "Palm Oil (Certified Sustainable RSPO/EUDR)",
    keywords: ["palm oil", "aceite de palma", "RSPO", "EUDR", "sustainable palm"],
    bestMarket: "Germany",
    score: 89,
    origin: "Indonesia",
    situation: "Indonesian palm oil processor producing 180,000 MT/year. Has RSPO certification for 60% of output. EU Deforestation Regulation (EUDR) takes full effect December 2024.",
    keyPrices: {
      euCompliantPrice: "EUR 1,040–1,120/MT",
      commoditySpot: "EUR 820–860/MT",
      compliancePremium: "EUR 45–85/MT over commodity",
      additionalRevenue: "EUR 26M annually at full certification"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "89", unit: "/100", color: "blue" },
        { label: "EUDR Price", value: "€1,080", unit: "/MT", color: "cyan" },
        { label: "Commodity", value: "€840", unit: "/MT", color: "purple" },
        { label: "Compliance Premium", value: "+€65", unit: "/MT", color: "green" }
      ],
      barChart: {
        title: "Palm Oil Price by Segment (EUR/MT)",
        data: [
          { name: "EU EUDR Compliant", value: 1080 },
          { name: "USA RSPO", value: 920 },
          { name: "Commodity Spot", value: 840 },
          { name: "China", value: 870 },
          { name: "Middle East", value: 855 }
        ],
        color: "#06ffa5"
      },
      lineChart: {
        title: "EU RSPO Certified Palm Oil Premium (EUR/MT)",
        data: [
          { year: "2020", value: 20 },
          { year: "2021", value: 28 },
          { year: "2022", value: 38 },
          { year: "2023", value: 55 },
          { year: "2024", value: 65 }
        ],
        color: "#00d4ff"
      },
      radarChart: {
        title: "EU Palm Oil Market Compliance Value",
        labels: ["Compliance", "Price", "Volume", "Stability", "Growth"],
        values: [89, 82, 78, 85, 75]
      }
    },
    decision: "Allocate 100% of RSPO-certified EUDR-compliant volume (108,000 MT) to EU buyers at EUR 1,080/MT. Full certification roadmap over 24 months generates EUR 26M additional annual revenue."
  },

  textiles: {
    product: "Technical Performance Fabrics (Sustainable)",
    keywords: ["textiles", "fabric", "tela", "ropa", "clothing", "apparel", "GOTS", "GRS", "sustainable fashion"],
    bestMarket: "United States",
    score: 84,
    origin: "Bangladesh",
    keyPrices: {
      premiumAthletic: "$3.80–6.20/meter",
      fastFashion: "$1.20–1.80/meter",
      gcsCertifiedPremium: "+$0.60–0.80/meter",
      targetRevenue: "$4.20/meter average for premium US buyers"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "84", unit: "/100", color: "blue" },
        { label: "Premium Price", value: "$5.00", unit: "/meter", color: "cyan" },
        { label: "Fast Fashion", value: "$1.50", unit: "/meter", color: "purple" },
        { label: "Cert. Premium", value: "+$0.70", unit: "/meter", color: "green" }
      ],
      barChart: {
        title: "Technical Fabric Price by Segment (USD/meter)",
        data: [
          { name: "US Premium Athletic", value: 5.00 },
          { name: "EU Sustainable", value: 4.20 },
          { name: "US Mid-tier", value: 2.80 },
          { name: "Fast Fashion", value: 1.50 },
          { name: "China OEM", value: 1.20 }
        ],
        color: "#00d4ff"
      },
      lineChart: {
        title: "US Sustainable Athletic Apparel Market (USD B)",
        data: [
          { year: "2017", value: 28 },
          { year: "2019", value: 33 },
          { year: "2020", value: 35 },
          { year: "2021", value: 38 },
          { year: "2022", value: 40 },
          { year: "2023", value: 42 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "US Premium Textile Market",
        labels: ["Price", "Volume", "Certification", "Access", "Growth"],
        values: [84, 78, 92, 70, 82]
      }
    },
    decision: "Establish dedicated GRS-certified production lines. Appoint LA-based agent. Set up bonded warehouse ($380K/year) to reduce lead time from 28 to 8 days. Target 4M meters annually at $4.20/meter."
  },

  cacaobutter: {
    product: "Organic Cacao Butter (Cosmetics-Grade)",
    keywords: ["cacao butter", "manteca de cacao", "cocoa butter", "cosmetic ingredients"],
    bestMarket: "Germany",
    score: 86,
    origin: "Peru",
    keyPrices: {
      cosmeticsGrade: "EUR 3,200–4,800/MT",
      foodGrade: "EUR 2,100–2,600/MT",
      premium: "40–85% over food grade",
      targetRevenue: "EUR 5.04M vs EUR 3.12M food-grade on same volume"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "86", unit: "/100", color: "blue" },
        { label: "Cosmetic Grade", value: "€4,200", unit: "/MT", color: "cyan" },
        { label: "Food Grade", value: "€2,350", unit: "/MT", color: "purple" },
        { label: "Grade Premium", value: "+79", unit: "%", color: "green" }
      ],
      barChart: {
        title: "Cacao Butter Price by Grade/Market (EUR/MT)",
        data: [
          { name: "EU Cosmetic", value: 4200 },
          { name: "US Cosmetic", value: 3900 },
          { name: "Japan Cosmetic", value: 4500 },
          { name: "EU Food", value: 2350 },
          { name: "Asia Food", value: 1900 }
        ],
        color: "#f472b6"
      },
      lineChart: {
        title: "EU Natural Cosmetics Market Growth (%)",
        data: [
          { year: "2018", value: 8 },
          { year: "2019", value: 10 },
          { year: "2020", value: 11 },
          { year: "2021", value: 13 },
          { year: "2022", value: 14 },
          { year: "2023", value: 14 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "Cosmetics Ingredient Market Factors",
        labels: ["Price", "Demand", "Regulation", "Competition", "Growth"],
        values: [86, 80, 85, 65, 82]
      }
    },
    decision: "Invest $85,000 in cosmetics-grade specification documentation (ISO 22716, CoA, IFRA compliance). Approach 6 German cosmetics ingredient brokers through in-Cosmetics Global trade fair."
  },

  pineapple: {
    product: "Pineapples (Fresh and Processed)",
    keywords: ["pineapple", "piña", "pina", "ananas", "pineapple juice", "IQF pineapple"],
    bestMarket: "USA (fresh), Germany (processed)",
    score: 87,
    origin: "Costa Rica",
    keyPrices: {
      usaFreshWholesale: "$0.62–0.78/kg",
      euFreshWholesale: "$0.38–0.45/kg (after tariff)",
      euIQF: "EUR 0.95–1.20/kg",
      juiceConcentrateEU: "EUR 420–520/MT Brix-equivalent"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "87", unit: "/100", color: "blue" },
        { label: "USA Fresh", value: "$0.70", unit: "/kg", color: "cyan" },
        { label: "EU IQF", value: "€1.08", unit: "/kg", color: "purple" },
        { label: "Revenue Gain", value: "+30", unit: "%", color: "green" }
      ],
      barChart: {
        title: "Pineapple Price by Format/Market (USD/kg)",
        data: [
          { name: "USA Fresh", value: 0.70 },
          { name: "EU IQF", value: 1.08 },
          { name: "EU Concentrate", value: 0.47 },
          { name: "China", value: 0.45 },
          { name: "Brazil", value: 0.30 }
        ],
        color: "#f59e0b"
      },
      lineChart: {
        title: "Pineapple Export Value by Format (USD M)",
        data: [
          { year: "2018", value: 10.2 },
          { year: "2019", value: 11.4 },
          { year: "2020", value: 11.0 },
          { year: "2021", value: 12.5 },
          { year: "2022", value: 13.4 },
          { year: "2023", value: 14.1 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "Split Market Strategy",
        labels: ["Fresh USA", "IQF EU", "Concentrate", "Logistics", "Revenue"],
        values: [87, 83, 75, 72, 87]
      }
    },
    decision: "Split-market strategy: USA for fresh whole (Score 87/100); Germany for IQF and juice concentrate (Score 83/100). Combined revenue projection $18.4M vs $14.1M current."
  },

  soybean: {
    product: "Soybeans",
    keywords: ["soybean", "soya", "soja", "soybeans", "grain", "oilseed"],
    bestMarket: "China (optimized) + EU secondary",
    score: 80,
    origin: "Brazil",
    keyPrices: {
      chinaDirectSOE: "$4–6/MT savings over broker",
      euNonGMOPremium: "EUR 25–40/MT premium",
      braNonGMOCertification: "$1.50–2.50/MT overhead",
      additionalRevenue: "$9.5M annually on 315,000 MT EU non-GMO"
    },
    dashboardData: {
      cards: [
        { label: "Strategy Score", value: "80", unit: "/100", color: "blue" },
        { label: "China Direct", value: "+$5", unit: "/MT vs broker", color: "cyan" },
        { label: "EU Non-GMO", value: "+€32", unit: "/MT premium", color: "purple" },
        { label: "BRL Advantage", value: "-12", unit: "% cost in USD", color: "green" }
      ],
      barChart: {
        title: "Soybean Price by Market/Channel (USD/MT)",
        data: [
          { name: "EU Non-GMO", value: 430 },
          { name: "China Direct", value: 398 },
          { name: "China Broker", value: 392 },
          { name: "EU Conventional", value: 398 },
          { name: "Brazil Domestic", value: 360 }
        ],
        color: "#06ffa5"
      },
      lineChart: {
        title: "Brazil Soybean Exports to China (M MT)",
        data: [
          { year: "2015", value: 45 },
          { year: "2017", value: 52 },
          { year: "2018", value: 66 },
          { year: "2020", value: 72 },
          { year: "2022", value: 79 },
          { year: "2023", value: 88 }
        ],
        color: "#00d4ff"
      },
      radarChart: {
        title: "Dual Market Strategy Factors",
        labels: ["China Volume", "EU Premium", "Logistics", "Risk", "FX Hedge"],
        values: [80, 75, 72, 70, 65]
      }
    },
    decision: "Optimize China via direct SOE contracts (eliminating broker). Build EU IP non-GMO volume to 15% of production in 3 years. Dual strategy generates $9.5M additional annually."
  },

  tilapia: {
    product: "Tilapia (Frozen Fillets)",
    keywords: ["tilapia", "frozen fish", "frozen fillets", "pescado congelado", "aquaculture"],
    bestMarket: "United States",
    score: 82,
    origin: "China",
    keyPrices: {
      usCommodityFillet: "$2.80–3.20/kg",
      ascCertifiedUSA: "$3.80–4.40/kg",
      valueAddedRetail: "$5.20–6.80/kg",
      premiumImpact: "+$8.4M annually"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "82", unit: "/100", color: "blue" },
        { label: "ASC Certified", value: "$4.10", unit: "/kg", color: "cyan" },
        { label: "Commodity", value: "$3.00", unit: "/kg", color: "purple" },
        { label: "Value-Added", value: "$6.00", unit: "/kg", color: "green" }
      ],
      barChart: {
        title: "Tilapia Fillet Price by Segment (USD/kg)",
        data: [
          { name: "US Value-Added", value: 6.00 },
          { name: "US ASC Certified", value: 4.10 },
          { name: "US Commodity", value: 3.00 },
          { name: "EU", value: 2.80 },
          { name: "China Domestic", value: 2.10 }
        ],
        color: "#00d4ff"
      },
      lineChart: {
        title: "US Tilapia Import Volume (000 MT)",
        data: [
          { year: "2016", value: 220 },
          { year: "2018", value: 210 },
          { year: "2019", value: 195 },
          { year: "2021", value: 185 },
          { year: "2022", value: 182 },
          { year: "2023", value: 180 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "US Tilapia Market Factors",
        labels: ["Volume", "Price", "Certification", "Competition", "Access"],
        values: [82, 75, 85, 60, 80]
      }
    },
    decision: "USA primary market. Dual strategy: commodity foodservice (80%) + ASC+BAP certified retail (20%). Premium retail segment (7,000 MT at $4.20/kg) generates $29.4M vs $21M commodity."
  },

  herbs: {
    product: "Medicinal Herbs (Organic Dried — Ashwagandha, Turmeric, Moringa)",
    keywords: ["herbs", "ashwagandha", "turmeric", "cúrcuma", "curcuma", "moringa", "adaptogen", "nutraceutical", "supplement"],
    bestMarket: "United States",
    score: 91,
    origin: "India",
    keyPrices: {
      ashwagandhaExtract: "$28–65/kg (standardized)",
      turmericExtract: "$14–22/kg (95% curcuminoids)",
      driedCommodity: "$1.80–2.40/kg",
      valueMuliplier: "12–22x for standardized extracts"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "91", unit: "/100", color: "blue" },
        { label: "Extract Price", value: "$46", unit: "/kg avg", color: "cyan" },
        { label: "Commodity", value: "$2.10", unit: "/kg", color: "purple" },
        { label: "Ashwagandha Growth", value: "+47", unit: "%/yr", color: "green" }
      ],
      barChart: {
        title: "Herb Price by Form/Market (USD/kg)",
        data: [
          { name: "US KSM-66 Extract", value: 46 },
          { name: "EU Standardized", value: 38 },
          { name: "US Turmeric 95%", value: 18 },
          { name: "EU Dried Organic", value: 6.50 },
          { name: "Commodity Dried", value: 2.10 }
        ],
        color: "#a855f7"
      },
      lineChart: {
        title: "US Herbal Supplement Market (USD B)",
        data: [
          { year: "2018", value: 8.8 },
          { year: "2019", value: 9.4 },
          { year: "2020", value: 10.2 },
          { year: "2021", value: 11.0 },
          { year: "2022", value: 11.4 },
          { year: "2023", value: 11.8 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "US Nutraceutical Market Factors",
        labels: ["Price", "Demand", "Regulation", "Competition", "Growth"],
        values: [91, 88, 82, 65, 95]
      }
    },
    decision: "USA primary market. Invest $280,000 in extraction standardization. Register under FDA DSHEA. Present at SupplySide West. Target 300 MT standardized extract at $35/kg = $10.5M vs $2.16M commodity."
  },

  mango: {
    product: "Mango (Alphonso / Fresh and Processed Pulp)",
    keywords: ["mango", "alphonso", "hapus", "mango pulp", "mango juice"],
    bestMarket: "USA (fresh Alphonso), Germany (pulp)",
    score: 85,
    origin: "India",
    keyPrices: {
      usaDiasporaRetail: "$18–32/box (Alphonso season)",
      usFreshMarket: "$3,200–4,800/MT",
      euAlphonsoPulp: "EUR 2,800–3,600/MT",
      genericPulp: "$1,400–1,800/MT"
    },
    dashboardData: {
      cards: [
        { label: "Market Score", value: "85", unit: "/100", color: "blue" },
        { label: "US Diaspora", value: "$25", unit: "/box", color: "cyan" },
        { label: "EU Pulp", value: "€3,200", unit: "/MT", color: "purple" },
        { label: "Generic Pulp", value: "$1,600", unit: "/MT", color: "pink" }
      ],
      barChart: {
        title: "Mango Price by Market/Format (USD/kg)",
        data: [
          { name: "US Alphonso Retail", value: 5.60 },
          { name: "EU Alphonso Pulp", value: 3.40 },
          { name: "EU Fresh", value: 1.50 },
          { name: "Middle East", value: 2.20 },
          { name: "Generic Pulp", value: 1.60 }
        ],
        color: "#f59e0b"
      },
      lineChart: {
        title: "Indian Mango Export Revenue (USD M)",
        data: [
          { year: "2017", value: 42 },
          { year: "2018", value: 48 },
          { year: "2019", value: 52 },
          { year: "2020", value: 44 },
          { year: "2021", value: 58 },
          { year: "2022", value: 65 },
          { year: "2023", value: 72 }
        ],
        color: "#06ffa5"
      },
      radarChart: {
        title: "Mango Dual Market Strategy",
        labels: ["US Fresh", "EU Pulp", "Logistics", "Certification", "Revenue"],
        values: [85, 81, 72, 78, 85]
      }
    },
    decision: "Dual-market: USA for fresh Alphonso (VHT investment $240,000) + Germany for GI-certified pulp. Total export revenue $22.8M vs $9.6M current undifferentiated commodity pricing."
  },

  rareearths: {
    product: "Rare Earth Elements (Separated Oxides — NdPr, Dy, Tb)",
    keywords: ["rare earth", "rare earths", "neodymium", "dysprosium", "terbium", "NdPr", "REE", "critical minerals", "magnets"],
    bestMarket: "United States",
    score: 93,
    origin: "Vietnam",
    keyPrices: {
      ndprSpot: "$55–68/kg",
      usaDoDBid: "$74–88/kg",
      dysprosiumSpot: "$320–420/kg",
      dysprosiumDefense: "$380–480/kg (non-Chinese origin)"
    },
    insights: [
      "IRA + Executive Order 14017: DoD pays 15–30% above spot for non-Chinese rare earth supply",
      "China controls 85% of global separation capacity — Vietnamese supply commands geopolitical premium",
      "NdPr: critical for EV traction motors and wind turbines (+38%/yr demand)",
      "EU Critical Raw Materials Act (CRMA): EU targets 10% domestic/allied sourcing by 2030",
      "China has used rare earth export controls as geopolitical lever multiple times (2010, 2023)"
    ],
    dashboardData: {
      cards: [
        { label: "Strategic Score", value: "93", unit: "/100", color: "blue" },
        { label: "DoD Offtake", value: "$81", unit: "/kg NdPr", color: "cyan" },
        { label: "Spot Price", value: "$61", unit: "/kg NdPr", color: "purple" },
        { label: "Demand Growth", value: "+38", unit: "%/yr", color: "green" }
      ],
      barChart: {
        title: "Rare Earth Oxide Price by Market (USD/kg NdPr)",
        data: [
          { name: "US DoD Procurement", value: 81 },
          { name: "EU CRMA Contract", value: 76 },
          { name: "Japan OEM", value: 74 },
          { name: "Spot Market", value: 61 },
          { name: "China Domestic", value: 52 }
        ],
        color: "#06ffa5"
      },
      lineChart: {
        title: "Global NdFeB Magnet Demand (000 MT)",
        data: [
          { year: "2018", value: 145 },
          { year: "2019", value: 158 },
          { year: "2020", value: 162 },
          { year: "2021", value: 195 },
          { year: "2022", value: 228 },
          { year: "2023", value: 265 }
        ],
        color: "#00d4ff"
      },
      radarChart: {
        title: "Rare Earth Strategic Market Factors",
        labels: ["Price", "Geopolitical Value", "Volume", "Stability", "Growth"],
        values: [93, 98, 80, 85, 95]
      }
    },
    decision: "USA as highest-value strategic market (Score 93/100). Engage DoE Loan Programs Office. Negotiate 5-year offtake with US magnet manufacturer. Join Minerals Security Partnership. $180–210M revenue vs $95M China commodity."
  }
};

// Keyword matching function — finds the right scenario for a user query
export function findScenario(query) {
  const q = query.toLowerCase();
  for (const [key, scenario] of Object.entries(TRADE_SCENARIOS)) {
    if (scenario.keywords.some(kw => q.includes(kw.toLowerCase()))) {
      return scenario;
    }
  }
  return null;
}

// Get a compact summary of all scenarios for general trade queries
export function getAllScenariosSummary() {
  return Object.values(TRADE_SCENARIOS).map(s =>
    `${s.product} (origin: ${s.origin || 'various'}) — Best Market: ${s.bestMarket || s.analysis?.bestMarket} — Score: ${s.score}/100`
  ).join('\n');
}