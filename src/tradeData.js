// TradeIQ DATA — Global Trade Intelligence & Commodity Markets
// Información de commodities para bot + teoría de comercio

// ─── COMMODITIES DATABASE ───
export const COMMODITIES = {
  cacao: {
    name: "Fine-Aroma Cacao",
    keywords: ["cacao", "cocoa", "chocolate", "kakao"],
    origin: ["Ecuador", "Peru", "Colombia"],
    uses: "Chocolate manufacturing, specialty confectionery, beverages",
    market: {
      currentPrice: { value: "$9,001", unit: "per MT", source: "IMF May 2025", trend: "+2.1% YoY" },
      priceBySegment: { commodity: "$2,800/MT", specialtyEU: "$7,000–$9,500/MT", premiumMultiplier: "3.3x" },
      demandGrowth: "+12% CAGR (specialty 2018–2023)",
      volume: "~4.7M MT global",
      topImporters: ["Germany", "Belgium", "Netherlands", "USA", "China"]
    },
    logistics: { mainPort: "Guayaquil, Ecuador", mainDestination: "Hamburg, Rotterdam", transitTime: "21 days" },
    tariffs: { EU: "0% raw; 8% processed", USA: "3.5% raw; 5% chocolate" },
    certifications: ["Fairtrade", "Rainforest Alliance", "UTZ", "Organic"],
    marketInsights: [
      "Germany processes ~1M tons chocolate annually",
      "EU specialty segment grew 11.8% CAGR 2018–2023",
      "Fine-aroma cacao commands 3–3.5x premium over commodity",
      "Direct relationships eliminate 15–20% middleman margins"
    ]
  },

  shrimp: {
    name: "White Shrimp (Vannamei)",
    keywords: ["shrimp", "camarón", "prawn", "tariff"],
    origin: ["Ecuador", "Vietnam", "India", "Indonesia"],
    uses: "Foodservice, retail, frozen export",
    market: {
      currentPrice: { value: "$4.20", unit: "per kg", source: "US 2025", trend: "+0.6% YoY" },
      priceByOrigin: { Ecuador: "$5.25/kg FOB", Vietnam: "$3.80/kg FOB", India: "$3.50/kg FOB" },
      demandGrowth: "+5% YoY",
      volume: "~7.4M MT global",
      topImporters: ["USA", "China", "Japan", "EU"]
    },
    logistics: { mainPort: "Guayaquil", mainDestination: "Miami, Los Angeles", transitTime: "18 days" },
    tariffs: { USA: "0% GSP", EU: "12.5% standard; 0% LDC" },
    certifications: ["ASC", "BAP", "Organic"],
    marketInsights: [
      "USA is world's largest per-capita shrimp consumer",
      "Vietnam dominates commodity market (cost leadership)",
      "Ecuador premium positioning: 20–35% premium",
      "Tariff exposure: 25% increase = +$52,500/month risk"
    ]
  },

  banana: {
    name: "Bananas (Cavendish Export)",
    keywords: ["banana", "banano", "certification"],
    origin: ["Ecuador", "Philippines", "Guatemala", "Colombia"],
    uses: "Fresh export, domestic consumption",
    market: {
      currentPrice: { value: "$1,100", unit: "per MT", source: "World Bank 2025", trend: "+2.8% YoY" },
      priceByDestination: { euCertified: "$1.40–1.60/box", euUncertified: "$1.20/box", middleEast: "$0.80–0.85/box" },
      demandGrowth: "+2% mature markets; +8% emerging",
      volume: "~120M MT global",
      topImporters: ["USA", "China", "Japan", "Germany"]
    },
    logistics: { mainPort: "Guayaquil", mainDestination: "Rotterdam, Hamburg", transitTime: "21 days" },
    tariffs: { EU: "EUR 114/MT reduced (GSP)" },
    certifications: ["Rainforest Alliance", "Fair Trade", "Organic"],
    certValue: { cost: "$30–70K", timeToComplete: "12–18 months", roi: "8.4x over 3 years" },
    marketInsights: [
      "Ecuador: world's #1 exporter ($3.8B revenue)",
      "EU absorbs 40% of Ecuador's banana exports",
      "Rainforest Alliance opens EU premium channels (20–40% premium)",
      "Middle East alternative (no cert barrier)"
    ]
  },

  blueberry: {
    name: "Blueberries (Fresh Export)",
    keywords: ["blueberry", "arándano", "peru berries"],
    origin: ["Peru", "Chile", "Mexico", "Argentina"],
    uses: "Fresh export, frozen, retail",
    market: {
      currentPrice: { value: "$6.50", unit: "per kg (EU)", source: "2025", trend: "+3.5% YoY" },
      netRevenueByRoute: { euSeaFreight: "$7.40/kg", euAirFreight: "$5.70/kg", usaAirFreight: "$4.10/kg" },
      demandGrowth: "+22% CAGR (EU 2016–2024)",
      volume: "~1.2M MT global",
      topImporters: ["USA", "EU", "UK", "Japan"]
    },
    logistics: { mainPort: "Callao, Peru", peakSeason: "Oct–Mar", shelfLife: "21–25 days", transitTime: "21 days sea" },
    tariffs: { EU: "4%", USA: "0%" },
    certifications: ["Organic", "GlobalGAP", "Fair Trade"],
    marketInsights: [
      "EU demand +22% CAGR — fastest-growing berry",
      "Shelf life (21–25 days) = EU sea transit time (perfect match)",
      "Peak season +50% higher prices",
      "Organic premium: 40–60% price increase"
    ]
  },

  flowers: {
    name: "Cut Flowers (Roses & Bouquets)",
    keywords: ["flowers", "flores", "roses", "kenya flowers"],
    origin: ["Kenya", "Ethiopia", "Colombia", "Ecuador"],
    uses: "Fresh export, retail, special occasions",
    market: {
      currentPrice: { value: "$0.22", unit: "per stem", source: "FloraHolland", trend: "+1.2% YoY" },
      peakDemand: { valentine: "180% baseline", mothersDay: "165% baseline", christmas: "140% baseline" },
      demandGrowth: "+4% mature; +12% emerging",
      volume: "~1.8M MT global",
      topImporters: ["Germany", "Netherlands", "Japan", "USA"]
    },
    logistics: { mainPort: "Nairobi", mainDestination: "Amsterdam, Hamburg", transitTime: "2 days air", preBooking: "21 days" },
    tariffs: { EU: "0%", USA: "0%" },
    certifications: ["GlobalGAP", "Fairtrade"],
    freightCosts: { standard: "$0.08–0.12/stem", spotVsStandard: "2.5–3x during peak" },
    marketInsights: [
      "Kenya supplies 40% of Germany's roses",
      "Valentine's Day pre-booking: 60 days advance",
      "AI forecasting outperforms intuition by 25–35%",
      "Red Sea crisis: freight +250%, viability challenges"
    ]
  },

  coffee: {
    name: "Specialty Coffee (Arabica)",
    keywords: ["coffee", "café", "arabica", "specialty coffee"],
    origin: ["Colombia", "Ethiopia", "Kenya", "Guatemala"],
    uses: "Specialty roasting, direct-to-consumer, blending",
    market: {
      currentPrice: { value: "$8,470", unit: "per MT", source: "World Bank 2025", trend: "+51% YoY" },
      priceByChannel: { japanSpecialty: "$7.20/lb", germanyDirect: "$6.80/lb", usaBroker: "$4.20/lb" },
      demandGrowth: "+12% CAGR specialty (2018–2024)",
      volume: "~170M bags global (60kg)",
      topImporters: ["USA", "Germany", "Italy", "Japan"]
    },
    logistics: { mainOrigins: "Colombia, Ethiopia, Kenya", mainDestination: "Hamburg, New York", transitTime: "28 days" },
    tariffs: { EU: "0% green; 7.5% roasted", USA: "0% green; 2.5% roasted" },
    certifications: ["SCA 80+ score", "Fair Trade", "Organic"],
    marketInsights: [
      "Specialty (86–92 SCA score) = 62% premium over commodity",
      "Germany: Europe's largest specialty market",
      "Direct roaster eliminates 15–20% broker margins",
      "2025: Arabica +51% (Brazil frost crisis)"
    ]
  },

  lithium: {
    name: "Lithium (Carbonate & Hydroxide)",
    keywords: ["lithium", "litio", "chile lithium", "battery", "ev"],
    origin: ["Chile", "Australia", "Argentina", "China"],
    uses: "Lithium-ion batteries, EV manufacturing",
    market: {
      currentPrice: { carbonate: "$21.30/kg", hydroxide: "$35–45/kg", source: "NE Asia May 2026", trend: "+17% MoM" },
      priceByGrade: { rawCarbonate: "$21.30/kg", batteryGrade: "$35–45/kg", premiumMultiplier: "2–4x" },
      demandGrowth: "+38% YoY (EV)",
      volume: "~1.3M MT global",
      reserves: "Chile: 26% of global"
    },
    logistics: { mainPort: "Antofagasta", mainDestination: "Shanghai, South Korea, USA", transitTime: "25 days" },
    tariffs: { USA: "0% IRA qualified", EU: "0% strategic" },
    valueChain: {
      stage1: "$2,800/MT raw",
      stage2: "$6,500/MT (+132%)",
      stage3: "$11,200/MT (+73%)",
      stage4: "$18,500/MT battery (+65%)",
      multiplier: "6.6x total"
    },
    marketInsights: [
      "EV demand +38%/year — supply crisis",
      "Major manufacturers signing 10-year contracts NOW",
      "IRA mandates FTA partner content — Chile qualifies",
      "Battery-grade hydroxide = 2–4x raw price",
      "Local processing = FDI opportunity"
    ]
  },

  chocolate: {
    name: "Chocolate (Processed & Branded)",
    keywords: ["chocolate", "cacao processing", "value added"],
    origin: ["Belgium", "Switzerland", "Germany", "Ecuador"],
    uses: "Retail, industrial, specialty",
    market: {
      currentPrice: { base: "$9,001", unit: "raw cacao baseline", source: "IMF May 2025" },
      valueByStage: {
        rawCacao: "$2,800/MT",
        artisanChocolate: "$15,000/MT",
        premiumBranded: "$22,000/MT",
        luxuryBrand: "$35,000/MT"
      },
      processingMultiplier: "4.4x (raw → artisan)",
      demandGrowth: "+8% CAGR premium (2018–2024)",
      volume: "~7M MT global"
    },
    logistics: { mainPort: "Guayaquil or EU hubs", factoryInvestment: "$2–4M for 500MT/yr", laborAdvantage: "35–45% vs EU" },
    tariffs: { EU: "8% processed", USA: "5%" },
    certifications: ["Fair Trade", "Organic", "Bean-to-Bar"],
    marketInsights: [
      "Premium chocolate +11.8% CAGR 2018–2023",
      "Vertical integration = 4.4x value multiplier",
      "Ecuador advantage: fine-aroma + labor cost",
      "EU duty 8% still profitable with labor savings"
    ]
  },

  quinoa: {
    name: "Quinoa (Superfood Grain)",
    keywords: ["quinoa", "quinua", "bolivia quinoa", "gi"],
    origin: ["Bolivia", "Peru", "Ecuador", "Argentina"],
    uses: "Health food export, organic premium",
    market: {
      currentPrice: { commodityFob: "$2,000/MT", giCertified: "$6.50/kg (EU retail)", source: "2025" },
      priceByOrigin: {
        boliviaGi: "$12.50/kg",
        peruStandard: "$9.80/kg",
        ecuadorStandard: "$9.50/kg",
        giPremium: "+28%"
      },
      demandGrowth: "+12% CAGR (EU health food)",
      volume: "~380K MT global",
      topImporters: ["USA", "EU", "Japan"]
    },
    logistics: { mainPort: "La Paz (landlocked)", route: "La Paz → Antofagasta → Rotterdam", transitTime: "35–40 days" },
    tariffs: { EU: "0%", USA: "0%" },
    certifications: ["Geographic Indication (GI)", "Organic", "Fair Trade"],
    giValue: { registrationCost: "$30–50K", maintenance: "$6–12K/yr", priceLifting: "30–60% premium" },
    marketInsights: [
      "GI legally differentiates Bolivian Royal Quinoa",
      "EU pays 30–60% premium for certified origin",
      "Peru & Ecuador lack GI protection",
      "EU health food market +12%/yr"
    ]
  }
};

// ─── TRADE SCENARIOS (for compatibility) ───
export const TRADE_SCENARIOS = {
  cacao: {
    product: "Fine-Aroma Cacao",
    keywords: ["cacao", "cocoa"],
    bestMarket: "Germany (EU)",
    score: 94,
    origin: "Ecuador",
    analysis: { demand: "+12%/yr specialty segment", competition: "Medium", logistics: "21-day transit" }
  },
  shrimp: {
    product: "White Shrimp",
    keywords: ["shrimp", "camarón"],
    bestMarket: "Mixed Strategy",
    score: 88,
    origin: "Ecuador",
    analysis: { demand: "Stable +5%", competition: "High", logistics: "18-day transit" }
  },
  banana: {
    product: "Bananas",
    keywords: ["banana", "banano"],
    bestMarket: "Germany (EU)",
    score: 91,
    origin: "Ecuador",
    analysis: { demand: "Stable +2%", competition: "High", logistics: "21-day transit" }
  },
  blueberry: {
    product: "Blueberries",
    keywords: ["blueberry", "arándano"],
    bestMarket: "Germany (EU)",
    score: 88,
    origin: "Peru",
    analysis: { demand: "+22% CAGR", competition: "Medium", logistics: "21-day transit" }
  },
  flowers: {
    product: "Cut Flowers",
    keywords: ["flowers", "flores", "roses"],
    bestMarket: "Germany",
    score: 86,
    origin: "Kenya",
    analysis: { demand: "+12%/yr EU", competition: "Medium", logistics: "2-day air freight" }
  },
  coffee: {
    product: "Specialty Coffee",
    keywords: ["coffee", "café", "arabica"],
    bestMarket: "Germany",
    score: 90,
    origin: "Colombia",
    analysis: { demand: "+12%/yr specialty", competition: "High", logistics: "28-day transit" }
  },
  lithium: {
    product: "Lithium",
    keywords: ["lithium", "litio", "battery"],
    bestMarket: "USA (IRA qualified)",
    score: 92,
    origin: "Chile",
    analysis: { demand: "+38%/yr EV", competition: "High", logistics: "25-day transit" }
  },
  chocolate: {
    product: "Chocolate",
    keywords: ["chocolate", "cacao processing"],
    bestMarket: "EU",
    score: 87,
    origin: "Ecuador",
    analysis: { demand: "+8% premium segment", competition: "High", logistics: "Variable" }
  },
  quinoa: {
    product: "Quinoa",
    keywords: ["quinoa", "quinua", "gi"],
    bestMarket: "EU",
    score: 88,
    origin: "Bolivia",
    analysis: { demand: "+12% health food", competition: "Medium", logistics: "35–40 days" }
  }
};

// ─── SEARCH FUNCTIONS ───
export function findCommodity(query) {
  const q = query.toLowerCase();
  for (const [key, commodity] of Object.entries(COMMODITIES)) {
    if (commodity.keywords.some(kw => q.includes(kw.toLowerCase()))) {
      return { key, data: commodity };
    }
  }
  return null;
}

export function findScenario(query) {
  const q = query.toLowerCase();
  for (const [key, scenario] of Object.entries(TRADE_SCENARIOS)) {
    if (scenario.keywords.some(kw => q.includes(kw.toLowerCase()))) {
      return scenario;
    }
  }
  return null;
}

export function getAllCommoditiesSummary() {
  return Object.entries(COMMODITIES)
    .map(([key, c]) => `${c.name} — Origins: ${c.origin.join(", ")} — Price: ${c.market.currentPrice.value}`)
    .join("\n");
}

export function getAllScenariosSummary() {
  return Object.values(TRADE_SCENARIOS)
    .map(s => `${s.product} (${s.origin}) — Best: ${s.bestMarket} — Score: ${s.score}/100`)
    .join("\n");
}

// ─── BOT CONTEXT BUILDER ───
export function buildBotContext(query) {
  const commodity = findCommodity(query);
  if (!commodity) return `Available commodities: ${Object.keys(COMMODITIES).map(k => COMMODITIES[k].name).join(", ")}`;

  const c = commodity.data;
  return `\n\nCOMMODITY: ${c.name}
Origins: ${c.origin.join(", ")}
Price: ${c.market.currentPrice.value} (${c.market.currentPrice.source})
Demand: ${c.market.demandGrowth}
Volume: ${c.market.volume}
Top Importers: ${c.market.topImporters.join(", ")}

Market Data:
${Object.entries(c.market.priceBySegment || c.market.priceByDestination || c.market.priceByChannel || c.market.priceByOrigin || {})
  .map(([k, v]) => `  ${k}: ${v}`)
  .join("\n")}

Logistics: ${c.logistics.mainPort} → ${c.logistics.mainDestination}
Transit: ${c.logistics.transitTime}

Tariffs: ${Object.entries(c.tariffs).map(([r, t]) => `${r}: ${t}`).join(" | ")}

Insights:
${c.marketInsights.slice(0, 5).map(i => `  • ${i}`).join("\n")}`;
}

// ─── GROQ CONFIG ───
export const GROQ_MODEL = "llama-3.3-70b-versatile";
export const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";