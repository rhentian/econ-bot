// TradeIQ BOT DATA — Global Trade Intelligence
// Commodities, markets, and trade data (no game scenarios)
// Used by TradeChatBot for economics and market analysis

export const COMMODITIES = {
  cacao: {
    name: "Fine-Aroma Cacao",
    keywords: ["cacao", "cocoa", "chocolate", "kakao", "cacao"],
    origin: ["Ecuador", "Peru", "Colombia"],
    uses: "Chocolate manufacturing, specialty confectionery, beverages",
    
    market: {
      currentPrice: {
        value: "$9,001",
        unit: "per MT",
        source: "IMF May 2025",
        trend: "+2.1% YoY"
      },
      priceBySegment: {
        commodity: "$2,800/MT",
        specialtyEU: "$7,000–$9,500/MT",
        premiumMultiplier: "3.3x over commodity"
      },
      demandGrowth: "+12% CAGR (specialty segment 2018–2023)",
      volume: "~4.7M MT global production",
      topImporters: ["Germany", "Belgium", "Netherlands", "USA", "China"]
    },

    logistics: {
      mainPort: "Guayaquil, Ecuador",
      mainDestination: "Hamburg, Rotterdam, Amsterdam",
      transitTime: "21 days (sea freight)",
      containerCost: "~$2,200–2,600 per 40ft"
    },

    tariffs: {
      EU: "0% duty on raw cacao beans; 8% on processed chocolate",
      USA: "3.5% on raw cacao; 5% on chocolate",
      global: "Generally low tariffs; specialty certifications more valuable"
    },

    certifications: ["Fairtrade", "Rainforest Alliance", "UTZ", "Organic", "HCP (High Conservation Priority)"],
    
    certValue: {
      certificationCost: "$3,200–8,000",
      priceLifting: "$1,500–2,000/MT premium",
      roi: "6–12 months for established exporters"
    },

    marketInsights: [
      "Germany processes ~1M tons of chocolate annually — largest EU specialty market",
      "EU specialty chocolate segment grew 11.8% CAGR 2018–2023",
      "China specialty chocolate penetration <3% — nascent demand but long-term potential",
      "Fine-aroma cacao (Ecuador, Peru, Colombia) commands 3–3.5x premium over commodity",
      "Direct-to-roaster relationships eliminate middleman margins (15–20% savings)"
    ],

    competitors: {
      Ecuador: "63% of global fine-aroma; quality advantage",
      Ivory_Coast: "44% of global commodity cacao; cost advantage",
      Ghana: "Growing specialty segment; FDI in processing",
      Peru: "Fine-aroma competitor; premium positioning"
    }
  },

  shrimp: {
    name: "White Shrimp (Vannamei)",
    keywords: ["shrimp", "camarón", "camarones", "prawn", "shrimp tariff"],
    origin: ["Ecuador", "Vietnam", "India", "Indonesia", "Thailand"],
    uses: "Foodservice, retail, frozen export, aquaculture",
    
    market: {
      currentPrice: {
        value: "$4.20",
        unit: "per kg",
        source: "US market 2025",
        trend: "+0.6% YoY"
      },
      priceByOrigin: {
        Ecuador: "$5.25/kg FOB",
        Vietnam: "$3.80/kg FOB",
        India: "$3.50/kg FOB"
      },
      demandGrowth: "+5% YoY (post-pandemic recovery)",
      volume: "~7.4M MT global production",
      topImporters: ["USA", "China", "Japan", "EU", "Canada"]
    },

    logistics: {
      mainPort: "Guayaquil, Ecuador",
      mainDestination: "Miami, Los Angeles, Singapore",
      transitTime: "18 days (sea freight to USA)",
      containerCost: "~$1,800–2,200 per 40ft"
    },

    tariffs: {
      USA: "0% under GSP (Generalized System of Preferences); tariff increase risk",
      EU: "12.5% standard tariff; 0% for LDC beneficiaries",
      China: "5% standard rate"
    },

    certifications: ["ASC (Aquaculture Stewardship Council)", "BAP (Best Aquaculture Practices)", "Organic"],

    marketInsights: [
      "USA is world's largest per-capita shrimp consumer (1.6 kg/capita/year)",
      "Vietnam and India dominate commodity shrimp market (cost leadership)",
      "Ecuador premium shrimp (P. vannamei quality) commands 20–35% premium",
      "Tariff exposure: 25% increase = +$52,500/month for medium exporter",
      "Blended sourcing (60% Vietnam + 40% Ecuador) reduces cost exposure while maintaining quality"
    ],

    competitors: {
      Vietnam: "Largest exporter; cost advantage; feed formulation excellence",
      India: "Cost leadership; commodity focus",
      Indonesia: "Strong regional supplier; growing export capacity",
      Ecuador: "Premium quality positioning; sustainability focus"
    }
  },

  banana: {
    name: "Bananas (Cavendish Export)",
    keywords: ["banana", "banano", "bananas", "plátano", "certification"],
    origin: ["Ecuador", "Philippines", "Guatemala", "Colombia", "India"],
    uses: "Fresh export, domestic consumption, processing",
    
    market: {
      currentPrice: {
        value: "$1,100",
        unit: "per MT",
        source: "World Bank 2025",
        trend: "+2.8% YoY"
      },
      priceByDestination: {
        euCertified: "$1.40–1.60/box",
        euUncertified: "$1.20/box",
        middleEast: "$0.80–0.85/box",
        China: "$0.78/box"
      },
      demandGrowth: "+2% YoY (mature markets); +8% emerging markets",
      volume: "~120M MT global production",
      topImporters: ["USA", "China", "Japan", "Germany", "Belgium"]
    },

    logistics: {
      mainPort: "Guayaquil, Ecuador",
      mainDestination: "Rotterdam, Hamburg, Antwerp",
      transitTime: "21 days (sea freight)",
      containerCost: "~$2,000–2,400 per 40ft"
    },

    tariffs: {
      EU: "EUR 114/MT reduced tariff for GSP beneficiaries",
      USA: "0%",
      China: "12%"
    },

    certifications: ["Rainforest Alliance", "Fair Trade", "Organic", "GlobalGAP"],

    certValue: {
      rainforestAllianceCost: "$30–70K for certification",
      timeToComplete: "12–18 months",
      pricePremium: "20–40% price increase",
      roi: "8.4x over 3 years"
    },

    marketInsights: [
      "Ecuador is world's #1 banana exporter — $3.8B annual revenue",
      "EU absorbs ~40% of Ecuador's banana exports — most critical market",
      "Rainforest Alliance certification opens EU premium channels",
      "Philippines and Guatemala already widely certified — competitive pressure",
      "Middle East market provides cash flow alternative (no certification barrier)"
    ],

    competitors: {
      Ecuador: "Largest exporter; scale advantage; commodity focus",
      Philippines: "Widely certified; established EU relationships",
      Guatemala: "Cost advantage; growing certification adoption",
      Colombia: "Premium positioning; organic focus"
    }
  },

  blueberry: {
    name: "Blueberries (Fresh Export)",
    keywords: ["blueberry", "blueberries", "arándano", "arandano", "peru berries"],
    origin: ["Peru", "Chile", "Mexico", "Argentina", "South Africa"],
    uses: "Fresh export, frozen processing, fresh retail",
    
    market: {
      currentPrice: {
        value: "$6.50",
        unit: "per kg (EU wholesale)",
        source: "2025",
        trend: "+3.5% YoY"
      },
      netRevenueByRoute: {
        euSeaFreight: "$7.40/kg net",
        euAirFreight: "$5.70/kg net",
        usaAirFreight: "$4.10/kg net"
      },
      demandGrowth: "+22% CAGR (EU segment 2016–2024)",
      volume: "~1.2M MT global production",
      topImporters: ["USA", "EU", "UK", "Canada", "Japan"]
    },

    logistics: {
      mainPort: "Callao, Peru",
      peakSeason: "October–March (Southern Hemisphere)",
      shelfLife: "21–25 days refrigerated",
      mainRoute: "Peru → EU (21-day sea freight)",
      airFreightOption: "8-day air freight to EU"
    },

    tariffs: {
      EU: "4% tariff; no quota restrictions",
      USA: "0%",
      UK: "0% post-Brexit"
    },

    certifications: ["Organic", "GlobalGAP", "Fair Trade"],

    marketInsights: [
      "EU blueberry demand growing 22% CAGR — fastest-growing berry segment",
      "Germany and Netherlands are primary importers",
      "Premium segment (organic, certified) commands 40–60% price premium",
      "Shelf life constraint: 21–25 days matches EU sea transit time perfectly",
      "Peak season (Oct–Jan) = 50% higher prices due to scarcity in Northern Hemisphere"
    ],

    competitors: {
      Peru: "Largest Southern Hemisphere exporter; quality advantage",
      Chile: "Similar advantage; competing on freshness and certification",
      Mexico: "Northern Hemisphere alternative; counter-seasonal supply",
      South_Africa: "Long-haul competitor; lower prices"
    }
  },

  flowers: {
    name: "Cut Flowers (Roses & Bouquets)",
    keywords: ["flowers", "flores", "roses", "rosas", "floriculture", "kenya flowers"],
    origin: ["Kenya", "Ethiopia", "Colombia", "Ecuador", "Netherlands"],
    uses: "Fresh cut flower export, retail, special occasions",
    
    market: {
      currentPrice: {
        value: "$0.22",
        unit: "per stem (rose)",
        source: "FloraHolland auction average",
        trend: "+1.2% YoY"
      },
      peakDemand: {
        valentine: "180% of baseline demand",
        mothersDay: "165% of baseline demand",
        christmas: "140% of baseline demand"
      },
      demandGrowth: "+4% YoY (mature markets); +12% emerging",
      volume: "~1.8M MT global production",
      topImporters: ["Germany", "Netherlands", "Japan", "USA", "UK"]
    },

    logistics: {
      mainPort: "Nairobi, Kenya",
      mainDestination: "Amsterdam, Hamburg",
      transitTime: "2 days (air freight)",
      preBookingRequired: "21 days in advance for peak season",
      shelfLife: "7–14 days from harvest"
    },

    tariffs: {
      EU: "0% on cut flowers",
      USA: "0%",
      Japan: "0%"
    },

    certifications: ["GlobalGAP", "Kenya Florists Association", "Fairtrade"],

    freightCosts: {
      standardRate: "$0.08–0.12/stem",
      spotRateVsStandard: "2.5–3x multiplier during peak",
      preBookedSavings: "$0.08–0.12/stem per flower"
    },

    marketInsights: [
      "Kenya supplies 40% of Germany's roses — dominant market position",
      "Valentine's Day freight pre-booking happens 60 days in advance",
      "AI demand forecasting outperforms human intuition by 25–35% on seasonal patterns",
      "Peak season spot rates 2.5–3x standard — pre-booking essential",
      "Red Sea crisis (2024) increased freight costs +250%, reduced Suez transit viability"
    ],

    competitors: {
      Kenya: "Dominant supplier to EU; quality and cost advantage",
      Ethiopia: "Growing market share; lower costs",
      Colombia: "Carnation specialist; longer shelf life",
      Ecuador: "Premium roses; organic positioning"
    }
  },

  coffee: {
    name: "Specialty Coffee (Arabica)",
    keywords: ["coffee", "café", "arabica", "specialty coffee", "colombia coffee"],
    origin: ["Colombia", "Ethiopia", "Kenya", "Guatemala", "Peru"],
    uses: "Specialty roasting, direct-to-consumer, commercial blending",
    
    market: {
      currentPrice: {
        value: "$8,470",
        unit: "per MT",
        source: "World Bank 2025 (+51% YoY)",
        trend: "+51% YoY"
      },
      priceByChannel: {
        japanSpecialty: "$7.20/lb",
        germanyDirect: "$6.80/lb",
        usaBroker: "$4.20/lb",
        commodityFloor: "$2.10/lb"
      },
      demandGrowth: "+12% CAGR (specialty segment 2018–2024)",
      volume: "~170M bags global production (60kg/bag)",
      topImporters: ["USA", "Germany", "Italy", "France", "Japan"]
    },

    logistics: {
      mainOrigins: ["Colombia", "Ethiopia", "Kenya"],
      mainDestination: "Hamburg (Germany), New York (USA)",
      transitTime: "28 days (sea freight)"
    },

    tariffs: {
      EU: "0% on green coffee; 7.5% on roasted",
      USA: "0% on green coffee; 2.5% on roasted",
      Japan: "0%"
    },

    certifications: ["Specialty Coffee Association (SCA Score 80+)", "Fair Trade", "Organic", "Direct Trade"],

    marketInsights: [
      "Specialty coffee (86–92 SCA cupping score) commands 62% premium over commodity",
      "Germany is Europe's largest specialty coffee market",
      "Direct roaster relationships eliminate broker margins (15–20%)",
      "2025: Arabica supply crisis (+51% price increase) driven by frost in Brazil",
      "D2C (Direct-to-Consumer) channels attractive but volatile — 3-month commitment too fragile"
    ],

    competitors: {
      Colombia: "Leading specialty exporter; washed process excellence",
      Ethiopia: "Origin reputation; natural process innovation",
      Kenya: "SCA scores consistently high; specialty niche",
      Guatemala: "Altitude advantage; niche positioning"
    }
  },

  lithium: {
    name: "Lithium (Carbonate & Hydroxide)",
    keywords: ["lithium", "litio", "chile lithium", "battery", "ev", "value chain"],
    origin: ["Chile", "Australia", "Argentina", "China", "DRC"],
    uses: "Lithium-ion batteries, EV manufacturing, energy storage",
    
    market: {
      currentPrice: {
        carbonate: "$21.30/kg",
        hydroxide: "$35–45/kg",
        source: "NE Asia May 2026",
        trend: "+17% MoM"
      },
      priceByGrade: {
        rawCarbonate: "$21.30/kg NE Asia",
        batteryGradeHydroxide: "$35–45/kg",
        premiumMultiplier: "2–4x over raw"
      },
      demandGrowth: "+38% YoY (EV segment)",
      volume: "~1.3M MT global production",
      reserves: "Chile holds ~26% of global reserves"
    },

    logistics: {
      mainPort: "Antofagasta, Chile",
      mainDestination: "Shanghai, South Korea, Japan, USA",
      transitTime: "25 days (sea freight)"
    },

    tariffs: {
      USA: "0% under IRA for FTA-qualified partners",
      EU: "0% on raw; 0% on processed (strategic material)",
      China: "5% standard rate"
    },

    valueChain: {
      stage1: "Raw Lithium Carbonate → $2,800/MT",
      stage2: "Processing → $6,500/MT (+132%)",
      stage3: "Battery Grade → $11,200/MT (+73%)",
      stage4: "EV Battery Pack → $18,500/MT (+65%)",
      totalMultiplier: "6.6x from raw to battery pack"
    },

    marketInsights: [
      "EV demand growing +38%/year — supply crisis emerging",
      "Major EV manufacturers signing 10-year supply agreements now — window is time-limited",
      "IRA (US Inflation Reduction Act) mandates FTA-partner content — Chile qualifies",
      "Battery-grade hydroxide commands 2–4x raw carbonate price",
      "Local processing via FDI (Foreign Direct Investment) unlocks value-add opportunities",
      "China dominates processing (cost advantage) — Latin America competing on raw exports"
    ],

    competitors: {
      Chile: "26% of global reserves; stable supply",
      Australia: "Spodumene alternative; similar reserves",
      Argentina: "Regional competitor; salt lake extraction",
      China: "Processing dominance; geopolitical leverage",
      DRC: "Cobalt co-mining; upstream supply pressure"
    }
  },

  chocolate: {
    name: "Chocolate (Processed & Branded)",
    keywords: ["chocolate", "cacao processing", "value added", "ecuador chocolate"],
    origin: ["Belgium", "Switzerland", "Germany", "Ecuador", "Netherlands"],
    uses: "Consumer retail, industrial applications, specialty products",
    
    market: {
      currentPrice: {
        value: "$9,001",
        unit: "raw cacao baseline",
        source: "IMF May 2025"
      },
      valueByStage: {
        rawCacao: "$2,800/MT",
        artisanChocolate: "$15,000/MT",
        premiumBranded: "$22,000/MT",
        luxuryBrand: "$35,000/MT"
      },
      processingMultiplier: "4.4x (raw → artisan level)",
      demandGrowth: "+8% CAGR (premium segment 2018–2024)",
      volume: "~7M MT global chocolate consumption",
      topConsumers: ["EU (Germany, Belgium, France)", "USA", "Japan", "China"]
    },

    logistics: {
      mainPort: "Guayaquil (Ecuador) or Rotterdam (EU processing hubs)",
      factoryCapacity: "$2–4M investment for 500MT/yr",
      laborCostAdvantage: "Ecuador 35–45% cheaper than EU"
    },

    tariffs: {
      EU: "8% on processed chocolate",
      USA: "5% on chocolate products",
      advantage: "Raw cacao: 0% vs processed: 5–8%"
    },

    certifications: ["Fair Trade", "Organic", "Bean-to-Bar", "Single-Origin"],

    marketInsights: [
      "Premium chocolate segment grew 11.8% CAGR 2018–2023",
      "Vertical integration (raw → chocolate) captures 4.4x value multiplier",
      "Ecuador has natural advantage: fine-aroma cacao + labor cost advantage",
      "EU import duty on processed chocolate (8%) still economical with labor savings",
      "Direct-to-brand relationships (B2B2C) command higher margins than bulk commodity"
    ],

    competitors: {
      Belgium: "Luxury chocolate tradition; brand equity",
      Switzerland: "Premium positioning; high labor costs",
      Germany: "Production scale; technical excellence",
      Ecuador: "Raw material advantage; emerging processing capability"
    }
  },

  quinoa: {
    name: "Quinoa (Superfood Grain)",
    keywords: ["quinoa", "quinua", "bolivia quinoa", "gi", "geographic indication"],
    origin: ["Bolivia", "Peru", "Ecuador", "Argentina"],
    uses: "Health food export, organic premium segment, functional foods",
    
    market: {
      currentPrice: {
        commodityFob: "$2,000/MT",
        giCertified: "$6.50/kg (EU retail)",
        source: "2025"
      },
      priceByOrigin: {
        boliviaGi: "$12.50/kg",
        peruStandard: "$9.80/kg",
        ecuadorStandard: "$9.50/kg",
        giPremium: "+28% vs commodity"
      },
      demandGrowth: "+12% CAGR (EU health food segment)",
      volume: "~380K MT global production",
      topImporters: ["USA", "EU (Germany, France)", "Japan", "Canada"]
    },

    logistics: {
      mainPort: "La Paz, Bolivia (landlocked — requires 2-step logistics)",
      routeViaChile: "La Paz → Antofagasta → Rotterdam",
      transitTime: "35–40 days (includes land transport)",
      shelfLife: "18+ months (dried grain)"
    },

    tariffs: {
      EU: "0% on quinoa imports",
      USA: "0%",
      Japan: "0%"
    },

    certifications: ["Geographic Indication (GI)", "Organic", "Fair Trade", "Kosher"],

    giValue: {
      registrationCost: "$30–50K (one-time)",
      annualMaintenance: "$6–12K/year",
      priceLifting: "30–60% premium over commodity",
      roiMultiple: "Payback in 1–2 years"
    },

    marketInsights: [
      "Geographic Indication legally differentiates Bolivian Royal Quinoa",
      "EU consumers pay 30–60% premium for certified origin",
      "Peru and Ecuador lack geographic origin claims — cannot match Bolivian brand",
      "Bolivia's landlocked position makes shipping slower (35–40 days) but dried grain tolerates delay",
      "EU health food market growing +12%/yr — driven by premium positioning + wellness trend"
    ],

    competitors: {
      Bolivia: "GI certification; origin reputation; quality premium",
      Peru: "Largest producer; cost leadership; commodity focus",
      Ecuador: "Growing export volume; no GI protection",
      Argentina: "Emerging competitor; Andean positioning"
    }
  }
};

// Market data by region
export const MARKET_INSIGHTS = {
  germany: {
    name: "Germany",
    role: "EU's largest importer of specialty agriculture",
    imports: ["cacao", "coffee", "flowers", "spices", "blueberries"],
    characteristics: "Premium quality focus, certification-driven, strong processing industry",
    opportunities: "Direct supplier relationships, artisan chocolate, organic premium"
  },
  
  usa: {
    name: "USA",
    role: "World's largest commodity buyer",
    imports: ["shrimp", "coffee", "tropical fruits", "chocolate"],
    characteristics: "Volume-focused, price-sensitive, tariff-vulnerable",
    opportunities: "FDI-backed processing, tariff mitigation, regional trade agreements"
  },

  eu: {
    name: "European Union",
    role: "Largest specialty & certified product market",
    imports: ["cacao", "coffee", "flowers", "organic berries", "quinoa"],
    characteristics: "Certification mandatory, sustainability-driven, premium pricing",
    opportunities: "GI registration, organic certification, direct relationships, brand building"
  },

  middleEast: {
    name: "Middle East",
    role: "Growing emerging market with less certification barriers",
    imports: ["banana", "dates", "spices"],
    characteristics: "No certification requirements, growing middle class, cash-on-delivery",
    opportunities: "Quick revenue channel, bridge market during certification period"
  },

  asia: {
    name: "Asia (China, Japan, Vietnam)",
    role: "Rapidly growing specialty segment (Japan); commodity dominance (China)",
    imports: ["lithium", "specialty coffee", "flowers", "cocoa processing"],
    characteristics: "Japan = premium; China = commodity; Vietnam = processing hub",
    opportunities: "Premium positioning in Japan, processing FDI in China/Vietnam"
  }
};

// Trade theory references (minimal — just keywords for bot context)
export const TRADE_CONCEPTS = {
  comparativeAdvantage: "Ricardo's principle: countries specialize in products with lower opportunity cost",
  factorEndowments: "Heckscher-Ohlin: countries export factor-intensive goods where they have abundance",
  valueChain: "Disaggregated production: countries can specialize in specific production stages",
  certification: "Non-tariff barrier that signals quality and opens premium market access",
  tariff: "Import tax that increases domestic price; affects quantity & producer surplus",
  fdi: "Foreign Direct Investment: capital inflow that funds local production/processing capacity",
  logistics: "Critical constraint on perishable goods; determines product viability in far markets"
};

// Scenario finder — matches user query to relevant commodity/market data
export function findCommodity(query) {
  const q = query.toLowerCase();
  for (const [key, commodity] of Object.entries(COMMODITIES)) {
    if (commodity.keywords.some(kw => q.includes(kw.toLowerCase()))) {
      return { key, data: commodity };
    }
  }
  return null;
}

// Get all commodities summary
export function getAllCommoditiesSummary() {
  return Object.entries(COMMODITIES)
    .map(([key, c]) => `${c.name} — Origins: ${c.origin.join(", ")} — Current Price: ${c.market.currentPrice.value}`)
    .join("\n");
}

// Build rich context for Groq — includes market data without spoiling game scenarios
export function buildBotContext(query) {
  const commodity = findCommodity(query);
  if (!commodity) {
    return `\nAvailable commodities for analysis: ${Object.keys(COMMODITIES).join(", ")}\nUse "dashboard: [commodity]" to visualize market data.`;
  }

  const c = commodity.data;
  return `\n\nCOMMODITY MARKET DATA: ${c.name}
Origins: ${c.origin.join(", ")}
Current Price: ${c.market.currentPrice.value} (${c.market.currentPrice.source}) — ${c.market.currentPrice.trend}
Main Uses: ${c.uses}
Global Demand Growth: ${c.market.demandGrowth}
Global Volume: ${c.market.volume}
Top Importers: ${c.market.topImporters.join(", ")}

Price Segmentation:
${Object.entries(c.market.priceBySegment || c.market.priceByDestination || c.market.priceByChannel || c.market.priceByOrigin || {})
  .map(([k, v]) => `  ${k}: ${v}`)
  .join("\n")}

Logistics: ${c.logistics.mainPort || "N/A"} → ${c.logistics.mainDestination || "N/A"} (${c.logistics.transitTime || "N/A"})

Tariffs:
${Object.entries(c.tariffs).map(([region, rate]) => `  ${region}: ${rate}`).join("\n")}

Key Market Insights:
${c.marketInsights.slice(0, 5).map(i => `  • ${i}`).join("\n")}

Competitors & Positioning:
${Object.entries(c.competitors || {}).map(([country, position]) => `  ${country}: ${position}`).join("\n")}

When user asks for analytics, build a dashboard with the price data and insights above.`;
}

export const GROQ_MODEL = "llama-3.3-70b-versatile";
export const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";