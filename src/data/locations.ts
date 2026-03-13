export interface Location {
  slug: string;
  name: string;
  state: string;
  zipCodes: string[];
  neighborhoods: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const locations: Location[] = [
  {
    slug: "bradenton",
    name: "Bradenton",
    state: "FL",
    zipCodes: [
      "34201",
      "34202",
      "34203",
      "34205",
      "34207",
      "34208",
      "34209",
      "34210",
      "34211",
      "34212",
    ],
    neighborhoods: [
      "Palma Sola",
      "Village Green",
      "Bayshore Gardens",
      "Whitfield",
      "Braden River",
      "West Bradenton",
      "South Bradenton",
      "Trailer Estates",
      "Cortez",
      "Palma Sola Park",
      "Samoset",
      "Oneco",
      "Memphis",
      "Ward Lake",
      "Tara Preserve",
    ],
    description: `A Plus Appliance Repair is proud to call Bradenton home. Located at 6003 43rd Ct E, we have been serving Bradenton residents and businesses for over 20 years with professional appliance repair services. From the historic neighborhoods near downtown Bradenton to the growing communities along SR-70 and Lakewood Ranch, our technicians know this area inside and out. We service all major appliance brands and offer same-day appointments throughout every Bradenton zip code.

As Bradenton continues to grow, so does the demand for reliable home services. Whether you live in Palma Sola, Bayshore Gardens, Braden River, or anywhere else in the Bradenton area, you can count on A Plus Appliance Repair for fast, honest, and affordable service. We repair washers, dryers, refrigerators, dishwashers, ovens, and ranges, and we offer professional dryer vent cleaning to keep your home safe. With a 4.9-star rating from over 416 Google reviews, our commitment to quality workmanship and customer satisfaction speaks for itself.`,
    metaTitle: "Appliance Repair Bradenton FL | A Plus Appliance Repair",
    metaDescription:
      "Trusted appliance repair in Bradenton FL. All major brands, same-day service. 4.9 stars, 416 reviews, 20+ years experience. Call (941) 527-2206!",
    keywords: [
      "appliance repair Bradenton",
      "appliance repair Bradenton FL",
      "washer repair Bradenton",
      "dryer repair Bradenton",
      "refrigerator repair Bradenton",
      "dishwasher repair Bradenton",
      "appliance repair near me Bradenton",
      "LG repair Bradenton",
    ],
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    state: "FL",
    zipCodes: [
      "34230",
      "34231",
      "34232",
      "34233",
      "34234",
      "34235",
      "34236",
      "34237",
      "34238",
      "34239",
      "34240",
      "34241",
      "34242",
      "34243",
    ],
    neighborhoods: [
      "Downtown Sarasota",
      "Gulf Gate",
      "Siesta Key",
      "Bee Ridge",
      "Fruitville",
      "Southgate",
      "Indian Beach",
      "Sapphire Shores",
      "Lido Key",
      "St. Armands",
      "Longboat Key",
      "The Meadows",
      "Palmer Ranch",
      "Pinecraft",
      "Gillespie Park",
      "Newtown",
    ],
    description: `A Plus Appliance Repair provides fast, professional appliance repair services throughout the Sarasota area. From the beachside condominiums on Siesta Key and Lido Key to the established neighborhoods of Gulf Gate, Bee Ridge, and Palmer Ranch, our technicians serve every corner of Sarasota County. We understand that a broken appliance can be especially inconvenient in vacation rental properties and seasonal homes, and we offer flexible scheduling to accommodate both full-time residents and property managers.

Sarasota homeowners trust A Plus Appliance Repair for our expertise, reliability, and fair pricing. We service all major brands including LG, Samsung, GE, Whirlpool, Maytag, Frigidaire, and KitchenAid, handling everything from routine refrigerator repairs to emergency washer breakdowns. As an LG Authorized Repair Center with over 20 years of experience, we bring factory-level expertise to every service call. Our Sarasota customers benefit from the same prompt, courteous service and upfront pricing that has earned us a 4.9-star reputation across the region.`,
    metaTitle: "Appliance Repair Sarasota FL | A Plus Appliance Repair",
    metaDescription:
      "Professional appliance repair in Sarasota FL. All brands serviced, same-day available. LG Authorized. 20+ years experience. Call (941) 527-2206!",
    keywords: [
      "appliance repair Sarasota",
      "appliance repair Sarasota FL",
      "washer repair Sarasota",
      "dryer repair Sarasota",
      "refrigerator repair Sarasota",
      "dishwasher repair Sarasota",
      "appliance repair near me Sarasota",
      "Samsung repair Sarasota",
    ],
  },
  {
    slug: "venice",
    name: "Venice",
    state: "FL",
    zipCodes: ["34285", "34292", "34293"],
    neighborhoods: [
      "Venice Island",
      "South Venice",
      "Laurel",
      "Plantation",
      "Venetia Bay",
      "Venice Gardens",
      "The Woodlands",
      "Jacaranda West",
      "Bird Bay Village",
      "Pelican Pointe",
    ],
    description: `A Plus Appliance Repair extends full-service appliance repair coverage to Venice and the surrounding communities in southern Sarasota County. Whether you live on Venice Island, in the planned communities of South Venice, or in the neighborhoods along Jacaranda Boulevard and US-41, our technicians provide the same expert service that has made us the top-rated appliance repair company in the region. We handle all major appliance types and brands with same-day and next-day appointment availability.

Venice residents appreciate our straightforward approach to appliance repair. When you call A Plus Appliance Repair, you get an experienced technician who arrives on time, diagnoses the problem accurately, and explains your repair options with honest, upfront pricing. We service washers, dryers, refrigerators, dishwashers, ovens, ranges, and offer dryer vent cleaning for homes throughout Venice. Many of our Venice customers are retirees or seasonal residents who value trustworthy service providers, and our 4.9-star Google rating reflects the care and professionalism we bring to every job.`,
    metaTitle: "Appliance Repair Venice FL | A Plus Appliance Repair",
    metaDescription:
      "Reliable appliance repair in Venice FL. All major brands and appliances. Same-day service, honest pricing. Call (941) 527-2206 to book today!",
    keywords: [
      "appliance repair Venice FL",
      "washer repair Venice",
      "dryer repair Venice FL",
      "refrigerator repair Venice",
      "dishwasher repair Venice FL",
      "appliance repair near me Venice",
      "oven repair Venice FL",
      "appliance service Venice",
    ],
  },
  {
    slug: "palmetto",
    name: "Palmetto",
    state: "FL",
    zipCodes: ["34220", "34221"],
    neighborhoods: [
      "Downtown Palmetto",
      "Terra Ceia",
      "Rubonia",
      "Piney Point",
      "Palmetto Point",
      "Hammock Park",
      "Reserve at Crossing Creek",
      "Riviera Dunes",
    ],
    description: `A Plus Appliance Repair serves the Palmetto community with expert appliance repair services just a short drive from our Bradenton headquarters. Located across the Manatee River from Bradenton, Palmetto homeowners enjoy the same fast response times and quality workmanship that our Bradenton neighbors have relied on for over 20 years. From the waterfront homes along the Manatee River to the growing residential developments off US-301 and US-41, we cover every neighborhood in Palmetto.

Our Palmetto customers depend on us for reliable repair of all major household appliances. Whether your refrigerator has stopped cooling in the middle of a Florida summer or your washer is leaking all over the laundry room floor, our experienced technicians arrive equipped to diagnose and repair the issue quickly. We service all major brands and keep common parts on hand to complete most repairs in a single visit. Call A Plus Appliance Repair for prompt, professional service in Palmetto at fair, transparent prices.`,
    metaTitle: "Appliance Repair Palmetto FL | A Plus Appliance Repair",
    metaDescription:
      "Expert appliance repair in Palmetto FL. Fast response, all brands serviced. Trusted by local homeowners. Call (941) 527-2206 for same-day service!",
    keywords: [
      "appliance repair Palmetto FL",
      "washer repair Palmetto",
      "dryer repair Palmetto FL",
      "refrigerator repair Palmetto",
      "dishwasher repair Palmetto",
      "appliance repair near me Palmetto",
      "oven repair Palmetto FL",
      "appliance service Palmetto",
    ],
  },
  {
    slug: "lakewood-ranch",
    name: "Lakewood Ranch",
    state: "FL",
    zipCodes: ["34202", "34211", "34240"],
    neighborhoods: [
      "Country Club East",
      "Greenbrook",
      "Del Webb",
      "Harmony",
      "The Lake Club",
      "Lorraine Lakes",
      "Waterside",
      "Panther Ridge",
      "Summerfield",
      "River Club",
      "Central Park",
      "Lakewood National",
      "Savanna",
    ],
    description: `Lakewood Ranch is one of the fastest-growing master-planned communities in the United States, and A Plus Appliance Repair is proud to provide top-quality appliance repair services to its residents. Whether you live in Country Club East, Del Webb, Greenbrook, Harmony, or any of the other distinctive villages within Lakewood Ranch, our technicians deliver prompt, professional service for all your major appliance needs. The newer homes in Lakewood Ranch often feature premium appliance brands, and our factory-trained technicians have the expertise to service them all.

Many Lakewood Ranch homes are equipped with high-end appliances from brands like LG, Samsung, KitchenAid, and GE. As an LG Authorized Repair Center, we have specialized knowledge of the advanced features found in modern appliances, from smart refrigerators with Wi-Fi connectivity to steam washers and induction cooktops. Our Lakewood Ranch customers value punctuality, professionalism, and clean workmanship, which is exactly what we deliver on every service call. Contact us for reliable appliance repair in Lakewood Ranch with same-day appointments often available.`,
    metaTitle: "Appliance Repair Lakewood Ranch FL | A Plus Appliance Repair",
    metaDescription:
      "Premium appliance repair in Lakewood Ranch FL. LG Authorized, all major brands. Same-day appointments available. Call (941) 527-2206 today!",
    keywords: [
      "appliance repair Lakewood Ranch",
      "appliance repair Lakewood Ranch FL",
      "washer repair Lakewood Ranch",
      "dryer repair Lakewood Ranch",
      "refrigerator repair Lakewood Ranch",
      "LG repair Lakewood Ranch",
      "Samsung repair Lakewood Ranch",
      "appliance service Lakewood Ranch",
    ],
  },
  {
    slug: "ellenton",
    name: "Ellenton",
    state: "FL",
    zipCodes: ["34222"],
    neighborhoods: [
      "Ellenton Village",
      "Woodbrook",
      "Gamble Creek",
      "Terra Vista",
      "Riverdale",
      "Heritage Harbour",
    ],
    description: `A Plus Appliance Repair provides comprehensive appliance repair services to homeowners in Ellenton, conveniently located near the junction of I-75 and US-301 in northern Manatee County. Ellenton is home to a diverse mix of established neighborhoods and newer communities, all of which fall within our primary service area. Our technicians travel to Ellenton regularly and are familiar with the housing stock and appliance types common throughout the area.

From Heritage Harbour to the neighborhoods near Ellenton-Gillette Road, residents trust A Plus Appliance Repair for fast, reliable repairs on washers, dryers, refrigerators, dishwashers, ovens, and ranges. We also offer dryer vent cleaning, an especially important service for maintaining home safety. With over 20 years of experience and a commitment to honest, upfront pricing, we have built lasting relationships with Ellenton homeowners who know they can count on us whenever an appliance breaks down.`,
    metaTitle: "Appliance Repair Ellenton FL | A Plus Appliance Repair",
    metaDescription:
      "Dependable appliance repair in Ellenton FL. All major brands and appliances serviced. Fast scheduling. Call (941) 527-2206 for a repair today!",
    keywords: [
      "appliance repair Ellenton FL",
      "washer repair Ellenton",
      "dryer repair Ellenton",
      "refrigerator repair Ellenton FL",
      "dishwasher repair Ellenton",
      "appliance repair near me Ellenton",
      "oven repair Ellenton",
      "appliance service Ellenton FL",
    ],
  },
  {
    slug: "nokomis",
    name: "Nokomis",
    state: "FL",
    zipCodes: ["34274", "34275"],
    neighborhoods: [
      "Sorrento Shores",
      "Calusa Lakes",
      "Lyons Bay",
      "Eastwood",
      "Country Club Shores",
      "Nokomis Beach",
      "Gulf Shores",
      "Dona Bay",
    ],
    description: `A Plus Appliance Repair brings reliable, professional appliance repair services to the charming community of Nokomis, nestled between Venice and Osprey along Florida's Gulf Coast. Nokomis homeowners enjoy a quieter pace of life, and when an appliance breaks down, they want a repair service that is responsive, trustworthy, and gets the job done right the first time. That is exactly what A Plus Appliance Repair delivers, backed by over 20 years of experience and hundreds of five-star reviews.

Whether you live near Nokomis Beach, in Calusa Lakes, Sorrento Shores, or the communities along US-41, our service technicians are available for same-day and next-day repair appointments. We work on all major appliance brands and types, from refrigerators and dishwashers to washers, dryers, ovens, and ranges. Our dryer vent cleaning service is also popular among Nokomis homeowners looking to improve dryer efficiency and reduce fire risk. Call A Plus Appliance Repair for honest, affordable appliance service in Nokomis.`,
    metaTitle: "Appliance Repair Nokomis FL | A Plus Appliance Repair",
    metaDescription:
      "Trusted appliance repair in Nokomis FL. Washers, dryers, refrigerators & more. All brands, fast service. Call (941) 527-2206 to schedule!",
    keywords: [
      "appliance repair Nokomis FL",
      "washer repair Nokomis",
      "dryer repair Nokomis",
      "refrigerator repair Nokomis FL",
      "dishwasher repair Nokomis",
      "appliance repair near me Nokomis",
      "appliance service Nokomis",
      "oven repair Nokomis FL",
    ],
  },
  {
    slug: "osprey",
    name: "Osprey",
    state: "FL",
    zipCodes: ["34229"],
    neighborhoods: [
      "Oaks Bayside",
      "Bay Street Village",
      "The Landings",
      "Sorrento East",
      "Rivendell",
      "Shadow Wood Preserve",
      "Osprey Cove",
    ],
    description: `A Plus Appliance Repair provides full appliance repair coverage to the Osprey community, located along the scenic stretch of US-41 between Sarasota and Venice. Osprey is known for its natural beauty, excellent schools, and family-friendly neighborhoods like The Oaks, Rivendell, and Bay Street Village. When homeowners in these communities need appliance repair, they choose A Plus Appliance Repair for our reputation for quality work, punctual service, and transparent pricing.

Our technicians are experienced with the range of appliances found in Osprey homes, from standard models to the high-end units common in the area's upscale communities. We repair all major brands including LG, Samsung, GE, Whirlpool, KitchenAid, Maytag, and Frigidaire. Whether you need a quick fix for a dishwasher that won't drain or a full diagnosis of a refrigerator that isn't cooling, A Plus Appliance Repair has you covered. We serve Osprey with the same dedication and expertise that has made us the highest-rated appliance repair company in the Bradenton-Sarasota region.`,
    metaTitle: "Appliance Repair Osprey FL | A Plus Appliance Repair",
    metaDescription:
      "Quality appliance repair in Osprey FL. All major brands, expert technicians. Same-day available. Call (941) 527-2206 for reliable service!",
    keywords: [
      "appliance repair Osprey FL",
      "washer repair Osprey",
      "dryer repair Osprey",
      "refrigerator repair Osprey FL",
      "dishwasher repair Osprey",
      "appliance repair near me Osprey",
      "appliance service Osprey",
      "oven repair Osprey FL",
    ],
  },
  {
    slug: "parrish",
    name: "Parrish",
    state: "FL",
    zipCodes: ["34219"],
    neighborhoods: [
      "North River Ranch",
      "Gamble Creek Estates",
      "Harrison Ranch",
      "River Wilderness",
      "Foxbrook",
      "Parrish Plantation",
      "Twin Rivers",
      "Lexington",
    ],
    description: `Parrish is one of the fastest-growing communities in Manatee County, and A Plus Appliance Repair is ready to serve its expanding population with professional appliance repair services. New developments like North River Ranch, Harrison Ranch, and Foxbrook have brought thousands of new homes to the Parrish area, each equipped with modern appliances that occasionally need expert service. Our technicians travel to Parrish regularly and are just a short drive from our Bradenton base, ensuring fast response times for your repair needs.

Whether you are a longtime Parrish resident or recently moved to one of the area's new communities, you can count on A Plus Appliance Repair for honest, dependable appliance service. We repair washers, dryers, refrigerators, dishwashers, ovens, and ranges from all major brands, and we offer dryer vent cleaning to keep your home safe and efficient. Our Parrish customers appreciate that we show up on time, explain the problem clearly, and charge fair prices with no surprises. Contact us today for reliable appliance repair in Parrish.`,
    metaTitle: "Appliance Repair Parrish FL | A Plus Appliance Repair",
    metaDescription:
      "Fast appliance repair in Parrish FL. Serving North River Ranch, Harrison Ranch & more. All brands. Call (941) 527-2206 for same-day service!",
    keywords: [
      "appliance repair Parrish FL",
      "washer repair Parrish",
      "dryer repair Parrish",
      "refrigerator repair Parrish FL",
      "dishwasher repair Parrish",
      "appliance repair near me Parrish",
      "appliance service Parrish",
      "North River Ranch appliance repair",
    ],
  },
];
