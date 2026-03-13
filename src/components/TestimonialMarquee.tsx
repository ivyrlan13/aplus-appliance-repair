import TestimonialCard, { TestimonialAuthor } from "./TestimonialCard";

const testimonials: { author: TestimonialAuthor; text: string }[] = [
  {
    author: { name: "Maria S.", rating: 5, timeAgo: "2 weeks ago" },
    text: "Called them when my refrigerator stopped cooling on a Saturday. They came out the same day and had it fixed within an hour. Incredibly fast and professional service!",
  },
  {
    author: { name: "James R.", rating: 5, timeAgo: "1 month ago" },
    text: "Best appliance repair in Bradenton. They've fixed our washer and dishwasher over the years. Always on time, always fair pricing. Highly recommend A Plus!",
  },
  {
    author: { name: "Linda T.", rating: 5, timeAgo: "3 weeks ago" },
    text: "Our LG dryer was making a terrible noise. As an LG authorized repair center, they knew exactly what the issue was. Fixed it quickly and the price was very reasonable.",
  },
  {
    author: { name: "Robert K.", rating: 5, timeAgo: "2 months ago" },
    text: "Had them come out to clean our dryer vent. They showed us how clogged it was — definitely a fire hazard. Great service and very thorough. Will use them again.",
  },
  {
    author: { name: "Patricia M.", rating: 5, timeAgo: "1 month ago" },
    text: "My oven stopped heating right before Thanksgiving. They squeezed me in the next morning and saved the holiday! Can't thank A Plus enough. True professionals.",
  },
  {
    author: { name: "David H.", rating: 5, timeAgo: "3 weeks ago" },
    text: "Honest and reliable. They diagnosed my Samsung washer issue and gave me an upfront quote. No hidden fees, no surprises. This is how every repair company should operate.",
  },
  {
    author: { name: "Susan W.", rating: 5, timeAgo: "1 week ago" },
    text: "We've used A Plus for over 5 years now. They service all our kitchen appliances. Always professional, always fair. They're the only repair company we trust in Sarasota.",
  },
  {
    author: { name: "Michael B.", rating: 5, timeAgo: "2 weeks ago" },
    text: "Fantastic experience from start to finish. Called in the morning, technician was at my door by 2pm. Fixed my Whirlpool dishwasher on the spot. Five stars all the way!",
  },
];

export default function TestimonialMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <div className="group flex overflow-hidden [--gap:1rem] [gap:var(--gap)] flex-row">
        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee [--duration:80s] flex-row group-hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, setIndex) =>
            testimonials.map((testimonial, i) => (
              <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
            ))
          )}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/6 bg-gradient-to-r from-gray-900 sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/6 bg-gradient-to-l from-gray-900 sm:block" />
    </div>
  );
}
