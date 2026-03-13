export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  commonProblems: string[];
}

export const services: Service[] = [
  {
    slug: "washer-repair",
    name: "Washer Repair",
    shortDescription:
      "Expert washing machine repair for all major brands. We fix leaks, spin issues, drainage problems, and more.",
    description: `When your washing machine breaks down, laundry piles up fast. A Plus Appliance Repair provides prompt, professional washer repair services throughout Bradenton, Sarasota, and the surrounding communities. Our technicians have over 20 years of experience diagnosing and repairing all types of washing machines, from traditional top-loaders to modern high-efficiency front-load units. As an LG Authorized Repair Center, we carry factory-certified parts and have specialized training on LG washer systems.

We service all major washer brands including LG, Samsung, Whirlpool, Maytag, GE, Frigidaire, KitchenAid, and Sears. Whether your washer is leaking water onto the floor, refusing to spin or drain, making loud banging noises during the cycle, or displaying an error code, our team can pinpoint the issue and complete the repair efficiently. We stock commonly needed parts on our service vehicles so many repairs can be finished in a single visit.

Don't let a broken washer disrupt your household routine. We offer same-day and next-day appointments with upfront pricing and no hidden fees. Our technicians arrive on time, explain the problem clearly, and provide a written estimate before starting any work. Every repair is backed by our parts and labor warranty, giving you confidence that your washer will run reliably for years to come.`,
    icon: "🫧",
    metaTitle: "Washer Repair Bradenton & Sarasota FL | A Plus Appliance Repair",
    metaDescription:
      "Professional washer repair in Bradenton & Sarasota FL. All brands serviced, same-day appointments. 20+ years experience. Call (941) 527-2206 today!",
    keywords: [
      "washer repair Bradenton",
      "washing machine repair Sarasota",
      "washer repair near me",
      "LG washer repair Bradenton",
      "Samsung washer repair",
      "front load washer repair",
      "washing machine not spinning",
      "washer leaking water",
    ],
    commonProblems: [
      "Washer won't spin or agitate",
      "Water leaking from the washer",
      "Washer won't drain properly",
      "Loud banging or vibrating during cycles",
      "Washer won't start or turn on",
      "Error codes displayed on control panel",
    ],
  },
  {
    slug: "dryer-repair",
    name: "Dryer Repair",
    shortDescription:
      "Fast dryer repair service for gas and electric models. We fix heating issues, tumbling problems, and unusual noises.",
    description: `A dryer that won't heat or takes forever to dry your clothes wastes both your time and energy. A Plus Appliance Repair specializes in dryer repair for homeowners across Bradenton, Sarasota, Lakewood Ranch, and the entire Gulf Coast region. Our experienced technicians work on both gas and electric dryers from every major manufacturer, including LG, Samsung, Whirlpool, Maytag, GE, and Frigidaire. We understand the urgency of a broken dryer and prioritize fast turnaround times.

The most common dryer problems we encounter include units that run but produce no heat, drums that won't tumble, excessive noise during operation, and dryers that shut off before the cycle completes. These issues are often caused by worn heating elements, faulty thermostats, broken belts, or defective drum rollers. Our technicians use professional diagnostic tools to identify the root cause quickly and carry a wide selection of replacement parts to complete most repairs on the spot.

If your dryer is underperforming, running too hot, or making unusual sounds, don't ignore it. A malfunctioning dryer can be a fire hazard, especially if lint has accumulated in the exhaust system. We also offer dryer vent cleaning services to ensure your entire drying system operates safely and efficiently. Contact us today for reliable dryer repair service with transparent pricing and a satisfaction guarantee.`,
    icon: "🔥",
    metaTitle: "Dryer Repair Bradenton & Sarasota FL | A Plus Appliance Repair",
    metaDescription:
      "Expert dryer repair in Bradenton & Sarasota FL. Gas and electric models. Same-day service, all brands. Call (941) 527-2206 for fast repair!",
    keywords: [
      "dryer repair Bradenton",
      "dryer repair Sarasota",
      "gas dryer repair near me",
      "electric dryer repair",
      "dryer not heating",
      "LG dryer repair",
      "Samsung dryer repair",
      "dryer making noise",
    ],
    commonProblems: [
      "Dryer runs but won't produce heat",
      "Drum not tumbling or spinning",
      "Dryer takes too long to dry clothes",
      "Unusual squeaking or grinding noises",
      "Dryer shuts off mid-cycle",
      "Dryer won't start at all",
    ],
  },
  {
    slug: "refrigerator-repair",
    name: "Refrigerator Repair",
    shortDescription:
      "Reliable refrigerator repair to keep your food fresh. We service all types including French door, side-by-side, and built-in models.",
    description: `A malfunctioning refrigerator puts hundreds of dollars worth of food at risk and demands immediate attention. A Plus Appliance Repair delivers fast, dependable refrigerator repair throughout Bradenton, Sarasota, Palmetto, and the wider Manatee and Sarasota County area. With over 20 years of hands-on experience, our technicians are skilled at repairing every style of refrigerator, including French door, side-by-side, top-freezer, bottom-freezer, and built-in units from brands like LG, Samsung, GE, Whirlpool, KitchenAid, and Frigidaire.

Refrigerator problems can range from minor inconveniences to critical failures. Common issues we diagnose and repair include units that aren't cooling properly, ice makers that stop producing ice, water dispensers that won't work, excessive frost buildup in the freezer, unusual noises from the compressor or fans, and water leaking onto the floor. In Florida's warm climate, a refrigerator that loses cooling capacity can lead to spoiled food in just a few hours, which is why we offer same-day emergency repair appointments.

Our technicians arrive with the tools, diagnostic equipment, and commonly needed parts to resolve most refrigerator issues in a single visit. We provide a clear diagnosis, upfront pricing, and a written estimate before any work begins. As an LG Authorized Repair Center, we have direct access to genuine LG parts and specialized training on LG refrigerator systems, including their popular InstaView and Craft Ice models.`,
    icon: "❄️",
    metaTitle:
      "Refrigerator Repair Bradenton & Sarasota FL | A Plus Appliance Repair",
    metaDescription:
      "Fast refrigerator repair in Bradenton & Sarasota FL. French door, side-by-side & more. 4.9 stars, 416 reviews. Call (941) 527-2206 now!",
    keywords: [
      "refrigerator repair Bradenton",
      "fridge repair Sarasota",
      "refrigerator not cooling",
      "ice maker repair",
      "LG refrigerator repair",
      "Samsung fridge repair",
      "French door refrigerator repair",
      "freezer repair Bradenton",
    ],
    commonProblems: [
      "Refrigerator not cooling or maintaining temperature",
      "Ice maker not producing ice",
      "Water dispenser not working",
      "Excessive frost buildup in freezer",
      "Water leaking onto the floor",
      "Compressor running constantly or making loud noise",
    ],
  },
  {
    slug: "dishwasher-repair",
    name: "Dishwasher Repair",
    shortDescription:
      "Professional dishwasher repair for all brands. We fix drainage issues, cleaning problems, leaks, and error codes.",
    description: `A broken dishwasher means washing every dish, pot, and pan by hand, a chore nobody looks forward to. A Plus Appliance Repair offers fast, affordable dishwasher repair throughout Bradenton, Sarasota, Lakewood Ranch, Venice, and the surrounding areas. Our factory-trained technicians have the expertise to repair dishwashers from all major manufacturers, including LG, Samsung, Whirlpool, Maytag, KitchenAid, GE, and Frigidaire, whether you have a built-in, portable, or drawer-style model.

Dishwasher problems often start small and grow worse over time. You might notice your dishes coming out dirty, water pooling at the bottom of the tub, a foul odor after cycles, or the unit refusing to start altogether. These symptoms can point to clogged spray arms, a faulty drain pump, a broken door latch, worn wash motor, or issues with the control board. Our technicians systematically diagnose the issue using professional testing equipment to ensure the correct repair is performed the first time.

We understand the importance of a properly functioning dishwasher in your daily routine, which is why we offer flexible scheduling with same-day and next-day appointments available. Our service comes with upfront pricing, and we always explain the repair options before starting work. Parts and labor are covered by our warranty, so you can trust that the fix will last. Call us today or book online to get your dishwasher back in working order quickly.`,
    icon: "🍽️",
    metaTitle:
      "Dishwasher Repair Bradenton & Sarasota FL | A Plus Appliance Repair",
    metaDescription:
      "Dishwasher repair in Bradenton & Sarasota FL. All major brands, same-day service available. Upfront pricing. Call (941) 527-2206 to schedule!",
    keywords: [
      "dishwasher repair Bradenton",
      "dishwasher repair Sarasota",
      "dishwasher not draining",
      "dishwasher not cleaning",
      "KitchenAid dishwasher repair",
      "Whirlpool dishwasher repair",
      "dishwasher leaking",
      "dishwasher repair near me",
    ],
    commonProblems: [
      "Dishwasher not draining water",
      "Dishes coming out dirty or spotty",
      "Water leaking from the door or underneath",
      "Dishwasher won't start or respond to controls",
      "Unusual noise during the wash cycle",
      "Dishwasher not filling with water",
    ],
  },
  {
    slug: "oven-range-repair",
    name: "Oven & Range Repair",
    shortDescription:
      "Expert oven and range repair for gas and electric models. We fix heating elements, igniters, thermostats, and more.",
    description: `Whether you rely on your oven for family dinners or use your range daily for meal prep, a malfunctioning cooking appliance disrupts your entire kitchen routine. A Plus Appliance Repair provides expert oven and range repair services across Bradenton, Sarasota, Palmetto, Ellenton, and throughout Manatee and Sarasota counties. We work on all types of cooking appliances, including gas ranges, electric ranges, wall ovens, double ovens, cooktops, and combination units from every major brand.

Common oven and range problems include burners that won't ignite, uneven heating or temperature inaccuracies, a self-cleaning cycle that won't activate, broken door hinges or seals, faulty igniters, and error codes on digital displays. Gas appliances require particular expertise due to the safety considerations involved, and our technicians are fully trained to work on gas lines, igniters, and safety valves. For electric models, we handle everything from heating element replacement to control board diagnostics.

We service all leading brands, including LG, Samsung, GE, Whirlpool, Frigidaire, Maytag, and KitchenAid. Our technicians carry the specialized tools needed for oven calibration and gas system testing, and we stock common parts like igniter assemblies, bake elements, and temperature sensors on our service vehicles. If your oven isn't heating to the right temperature or your stovetop burner won't light, call us for prompt, professional service backed by our satisfaction guarantee.`,
    icon: "🍳",
    metaTitle:
      "Oven & Range Repair Bradenton & Sarasota FL | A Plus Appliance Repair",
    metaDescription:
      "Oven & range repair in Bradenton & Sarasota FL. Gas and electric, all brands. Expert technicians, same-day service. Call (941) 527-2206!",
    keywords: [
      "oven repair Bradenton",
      "range repair Sarasota",
      "gas stove repair near me",
      "electric oven repair",
      "oven not heating",
      "stove burner not lighting",
      "GE oven repair",
      "wall oven repair Bradenton",
    ],
    commonProblems: [
      "Oven not heating to the correct temperature",
      "Gas burner won't ignite or stay lit",
      "Electric element not heating",
      "Oven temperature is uneven or inconsistent",
      "Self-cleaning cycle not working",
      "Oven door won't close or seal properly",
    ],
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    shortDescription:
      "Professional dryer vent cleaning to improve efficiency and prevent house fires. Recommended annually for every home.",
    description: `Clogged dryer vents are one of the leading causes of house fires in the United States, responsible for thousands of incidents every year. A Plus Appliance Repair provides thorough, professional dryer vent cleaning for homeowners throughout Bradenton, Sarasota, Lakewood Ranch, Venice, Palmetto, and surrounding communities. Our technicians use commercial-grade rotary brush systems and high-powered vacuum equipment to remove lint, debris, and blockages from your entire dryer vent line, from the dryer connection all the way to the exterior exhaust cap.

Over time, lint accumulates inside your dryer vent duct, restricting airflow and forcing your dryer to work harder and run longer to dry clothes. This not only increases your energy bills but also creates a serious fire hazard, since lint is highly flammable. Warning signs that your vent needs cleaning include clothes taking more than one cycle to dry, the dryer exterior feeling excessively hot, a burning smell during operation, or visible lint accumulating around the dryer hose connection. The Consumer Product Safety Commission recommends professional dryer vent cleaning at least once per year.

Our dryer vent cleaning service includes a full inspection of your venting system, removal of all accumulated lint and debris, verification of proper airflow, and a check of the exterior vent cap for damage or obstruction. We also inspect the dryer's internal lint trap housing for buildup that regular cleaning misses. After service, you will notice shorter drying times, lower energy costs, and the peace of mind that comes from knowing your home is protected. Schedule your dryer vent cleaning today.`,
    icon: "🌬️",
    metaTitle:
      "Dryer Vent Cleaning Bradenton & Sarasota FL | A Plus Appliance Repair",
    metaDescription:
      "Professional dryer vent cleaning in Bradenton & Sarasota FL. Prevent fires, improve efficiency. Annual service recommended. Call (941) 527-2206!",
    keywords: [
      "dryer vent cleaning Bradenton",
      "dryer vent cleaning Sarasota",
      "dryer vent cleaning near me",
      "lint removal service",
      "dryer fire prevention",
      "dryer vent inspection",
      "clogged dryer vent",
      "dryer vent maintenance",
    ],
    commonProblems: [
      "Clothes taking multiple cycles to dry",
      "Dryer exterior feels excessively hot during use",
      "Burning smell when the dryer is running",
      "Lint visible around the dryer hose or vent cap",
      "Dryer shutting off due to overheating",
      "Increased energy bills from inefficient drying",
    ],
  },
];
