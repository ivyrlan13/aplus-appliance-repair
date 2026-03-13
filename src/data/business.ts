export const business = {
  name: "A Plus Appliance Repair",
  legalName: "A Plus Appliance Repair LLC",
  phone: "(941) 527-2206",
  phoneRaw: "+19415272206",
  email: "aplusrepairsrq@gmail.com",
  url: "https://aplusappliancerepairbradenton.com",

  address: {
    street: "6003 43rd Ct E",
    city: "Bradenton",
    state: "FL",
    zip: "34203",
    country: "US",
    full: "6003 43rd Ct E, Bradenton, FL 34203",
  },

  geo: {
    latitude: 27.4467,
    longitude: -82.5151,
  },

  hours: {
    label: "Open 24 Hours",
    structured: "Mo-Su 00:00-23:59",
    daysOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },

  tagline: "Bradenton's Trusted Appliance Repair Experts",
  description:
    "A Plus Appliance Repair provides fast, reliable appliance repair services throughout Bradenton, Sarasota, and surrounding areas. With over 20 years of experience and as an LG Authorized Repair Center, we service all major brands including LG, Samsung, GE, Whirlpool, and more. Available 24/7 for emergency repairs.",

  yearsInBusiness: 20,
  foundedYear: 2006,
  rating: 4.9,
  reviewCount: 416,
  reviewPlatform: "Google",

  certifications: ["LG Authorized Repair Center"],
  isLGAuthorized: true,

  brands: [
    "LG",
    "GE",
    "Samsung",
    "Frigidaire",
    "Whirlpool",
    "Maytag",
    "Sears",
    "KitchenAid",
  ],

  serviceArea: {
    description: "Bradenton, Sarasota, and surrounding areas in Manatee and Sarasota counties",
    radius: {
      value: 30,
      unit: "miles",
    },
    counties: ["Manatee County", "Sarasota County"],
  },

  social: {
    google: "https://g.co/kgs/aplusappliancerepair",
  },
} as const;

export type Business = typeof business;
