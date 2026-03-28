import {
  Destination,
  TourPackage,
  Testimonial,
  BlogPost,
  TeamMember,
  StatItem,
  CategoryInfo,
  NavLink,
} from "@/types";

export const COMPANY_INFO = {
  name: "Devbhumi Travels",
  tagline: "Your Gateway to the Divine Land of Uttarakhand",
  phone: "+91-9876543210",
  whatsapp: "919876543210",
  email: "info@devbhumitravels.com",
  address: "Mall Road, Near Clock Tower, Dehradun, Uttarakhand 248001",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  social: {
    facebook: "https://facebook.com/devbhumitravels",
    instagram: "https://instagram.com/devbhumitravels",
    twitter: "https://twitter.com/devbhumitravels",
    youtube: "https://youtube.com/devbhumitravels",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats: StatItem[] = [
  { label: "Happy Travelers", value: 15000, suffix: "+" },
  { label: "Destinations", value: 50, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
];

export const categories: CategoryInfo[] = [
  {
    id: "pilgrimage",
    name: "Pilgrimage Tours",
    description: "Visit sacred shrines of Char Dham, Haridwar, and Rishikesh for a divine spiritual journey.",
    icon: "🙏",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
  },
  {
    id: "adventure",
    name: "Adventure & Treks",
    description: "Conquer Himalayan peaks, go river rafting in Rishikesh, or trek through pristine alpine meadows.",
    icon: "🏔️",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
  },
  {
    id: "nature",
    name: "Nature & Scenic",
    description: "Explore lush valleys, serene lakes, and breathtaking hill stations nestled in the Himalayas.",
    icon: "🌿",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
  {
    id: "wellness",
    name: "Yoga & Wellness",
    description: "Rejuvenate your mind and body with yoga retreats and wellness programs in Rishikesh.",
    icon: "🧘",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    id: "wildlife",
    name: "Wildlife Safari",
    description: "Spot Royal Bengal Tigers and exotic birds at Jim Corbett and Rajaji National Parks.",
    icon: "🐅",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80",
  },
  {
    id: "honeymoon",
    name: "Honeymoon Specials",
    description: "Romantic getaways to Mussoorie, Nainital, and Auli with customized luxury experiences.",
    icon: "💑",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
];

export const destinations: Destination[] = [
  {
    id: "rishikesh",
    name: "Rishikesh",
    slug: "rishikesh",
    tagline: "Yoga Capital of the World",
    description:
      "Nestled in the foothills of the Himalayas along the banks of the holy Ganges, Rishikesh is a paradise for spiritual seekers and adventure enthusiasts alike. From white-water rafting to yoga ashrams, it offers a perfect blend of thrill and tranquility.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80",
    altitude: "372 m",
    bestTime: "September - November",
    category: ["adventure", "wellness", "pilgrimage"],
  },
  {
    id: "haridwar",
    name: "Haridwar",
    slug: "haridwar",
    tagline: "Gateway to the Gods",
    description:
      "One of the seven holiest cities in Hinduism, Haridwar is famous for the mesmerizing Ganga Aarti at Har Ki Pauri. The city is a spiritual hub that attracts millions of devotees seeking blessings of the holy Ganges.",
    image: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=800&q=80",
    altitude: "314 m",
    bestTime: "October - March",
    category: ["pilgrimage"],
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    slug: "mussoorie",
    tagline: "Queen of the Hills",
    description:
      "Perched at an elevation of 2,005 meters, Mussoorie offers stunning views of the Shivalik ranges and the Doon Valley. Known for its colonial charm, waterfalls, and pleasant weather, it is a beloved hill station for families and couples.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    altitude: "2,005 m",
    bestTime: "March - June, September - November",
    category: ["nature", "honeymoon"],
  },
  {
    id: "nainital",
    name: "Nainital",
    slug: "nainital",
    tagline: "City of Lakes",
    description:
      "Wrapped around the emerald Naini Lake, this charming hill station is surrounded by seven hills and offers boating, trekking, and stunning sunset views from Tiffin Top and Snow View Point.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    altitude: "1,938 m",
    bestTime: "March - June, September - November",
    category: ["nature", "honeymoon"],
  },
  {
    id: "auli",
    name: "Auli",
    slug: "auli",
    tagline: "Skiing Paradise of India",
    description:
      "Auli is a premier skiing destination surrounded by oak and conifer forests with panoramic views of Nanda Devi and other Himalayan peaks. In summer, its lush meadows are perfect for trekking and camping.",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
    altitude: "2,800 m",
    bestTime: "November - March (Skiing), April - June (Trekking)",
    category: ["adventure", "nature"],
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    slug: "kedarnath",
    tagline: "Sacred Abode of Lord Shiva",
    description:
      "Situated at 3,583 meters near the Mandakini river, Kedarnath Temple is one of the twelve Jyotirlingas and a key pilgrimage in the Char Dham circuit. The trek through breathtaking mountain scenery is an experience of a lifetime.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    altitude: "3,583 m",
    bestTime: "May - June, September - October",
    category: ["pilgrimage", "adventure"],
  },
  {
    id: "badrinath",
    name: "Badrinath",
    slug: "badrinath",
    tagline: "Land of Lord Vishnu",
    description:
      "Set between the Nar and Narayana mountain ranges, Badrinath is one of the most sacred Hindu temples and part of the Char Dham pilgrimage. The natural hot springs at Tapt Kund add to its spiritual allure.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    altitude: "3,133 m",
    bestTime: "May - June, September - October",
    category: ["pilgrimage"],
  },
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    slug: "valley-of-flowers",
    tagline: "UNESCO World Heritage Wonder",
    description:
      "A UNESCO World Heritage Site, the Valley of Flowers is a spectacular high-altitude meadow adorned with over 600 species of wildflowers. This enchanting valley in the Chamoli district is a botanist's dream and a trekker's paradise.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
    altitude: "3,658 m",
    bestTime: "July - September",
    category: ["nature", "adventure"],
  },
  {
    id: "jim-corbett",
    name: "Jim Corbett National Park",
    slug: "jim-corbett",
    tagline: "India's Oldest National Park",
    description:
      "Established in 1936, Jim Corbett is India's first and oldest national park, home to the Royal Bengal Tiger and over 600 bird species. Jeep safaris and elephant rides offer unforgettable wildlife encounters.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    altitude: "1,300 m",
    bestTime: "November - June",
    category: ["wildlife", "nature"],
  },
  {
    id: "chopta",
    name: "Chopta",
    slug: "chopta",
    tagline: "Mini Switzerland of India",
    description:
      "Chopta is a pristine hamlet known for its evergreen forests and stunning views of the Himalayan ranges. It serves as the base for the popular Tungnath-Chandrashila trek, which leads to the highest Shiva temple in the world.",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    altitude: "2,680 m",
    bestTime: "March - June, September - November",
    category: ["adventure", "nature"],
  },
];

export const tourPackages: TourPackage[] = [
  {
    id: "char-dham-yatra",
    name: "Char Dham Yatra",
    slug: "char-dham-yatra",
    description:
      "Complete pilgrimage to all four sacred shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath. A spiritually enriching journey through the heart of the Himalayas.",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&q=80",
    duration: "11 Days / 10 Nights",
    price: 24999,
    originalPrice: 32999,
    destinations: ["yamunotri", "gangotri", "kedarnath", "badrinath"],
    highlights: [
      "All 4 Dham darshan included",
      "AC Tempo Traveller transport",
      "Meals & accommodation included",
      "Experienced local guide",
    ],
    category: "char-dham",
    featured: true,
  },
  {
    id: "do-dham-yatra",
    name: "Do Dham Yatra",
    slug: "do-dham-yatra",
    description:
      "Visit the two most revered shrines — Kedarnath and Badrinath — in a compact yet deeply fulfilling pilgrimage tour.",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
    duration: "6 Days / 5 Nights",
    price: 13999,
    originalPrice: 17999,
    destinations: ["kedarnath", "badrinath"],
    highlights: [
      "Kedarnath & Badrinath darshan",
      "Helicopter option available",
      "Comfortable hotel stays",
      "All meals included",
    ],
    category: "pilgrimage",
    featured: false,
  },
  {
    id: "mussoorie-nainital-weekend",
    name: "Mussoorie & Nainital Weekend",
    slug: "mussoorie-nainital-weekend",
    description:
      "Escape to the queen of hills and the city of lakes for a refreshing weekend getaway filled with scenic beauty and charm.",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
    duration: "4 Days / 3 Nights",
    price: 8999,
    originalPrice: 11999,
    destinations: ["mussoorie", "nainital"],
    highlights: [
      "Mall Road & Kempty Falls",
      "Naini Lake boating",
      "Snow View Point cable car",
      "Deluxe hotel accommodation",
    ],
    category: "weekend-getaway",
    featured: true,
  },
  {
    id: "auli-skiing-adventure",
    name: "Auli Skiing Adventure",
    slug: "auli-skiing-adventure",
    description:
      "Experience the thrill of skiing on India's best slopes in Auli, with panoramic views of Nanda Devi and surrounding Himalayan peaks.",
    image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800&q=80",
    duration: "5 Days / 4 Nights",
    price: 14999,
    originalPrice: 18999,
    destinations: ["auli"],
    highlights: [
      "Professional skiing training",
      "Cable car ride to Auli",
      "Camping under the stars",
      "All equipment provided",
    ],
    category: "adventure-trek",
    featured: false,
  },
  {
    id: "valley-of-flowers-trek",
    name: "Valley of Flowers Trek",
    slug: "valley-of-flowers-trek",
    description:
      "Trek through the UNESCO World Heritage Site and witness the spectacular bloom of hundreds of wildflower species in a stunning alpine meadow.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    duration: "6 Days / 5 Nights",
    price: 11999,
    originalPrice: 15999,
    destinations: ["valley-of-flowers"],
    highlights: [
      "UNESCO Heritage Site trek",
      "Hemkund Sahib visit",
      "Professional trek guide",
      "Camping & meals included",
    ],
    category: "adventure-trek",
    featured: true,
  },
  {
    id: "mussoorie-honeymoon",
    name: "Romantic Mussoorie Getaway",
    slug: "mussoorie-honeymoon",
    description:
      "A romantic escape to the Queen of Hills with luxurious stays, candlelight dinners, and breathtaking views of the Doon Valley.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    duration: "3 Days / 2 Nights",
    price: 9999,
    originalPrice: 13999,
    destinations: ["mussoorie"],
    highlights: [
      "Luxury resort accommodation",
      "Candlelight dinner included",
      "Kempty Falls & Company Garden",
      "Private cab for sightseeing",
    ],
    category: "honeymoon",
    featured: false,
  },
  {
    id: "jim-corbett-safari",
    name: "Jim Corbett Wildlife Safari",
    slug: "jim-corbett-safari",
    description:
      "Experience the wild side of Uttarakhand with jeep safaris in Jim Corbett National Park, home to the majestic Royal Bengal Tiger.",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&q=80",
    duration: "3 Days / 2 Nights",
    price: 7999,
    originalPrice: 9999,
    destinations: ["jim-corbett"],
    highlights: [
      "2 Jeep safaris included",
      "Tiger spotting zones",
      "Riverside resort stay",
      "Nature walks & birding",
    ],
    category: "family",
    featured: false,
  },
  {
    id: "chopta-tungnath-trek",
    name: "Chopta Tungnath Trek",
    slug: "chopta-tungnath-trek",
    description:
      "Trek to the world's highest Shiva temple at Tungnath and continue to Chandrashila peak for a 360-degree panoramic view of the Himalayas.",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    duration: "4 Days / 3 Nights",
    price: 6999,
    originalPrice: 8999,
    destinations: ["chopta"],
    highlights: [
      "Tungnath Temple darshan",
      "Chandrashila summit climb",
      "Camping in alpine meadows",
      "Experienced mountain guide",
    ],
    category: "adventure-trek",
    featured: false,
  },
  {
    id: "rishikesh-adventure",
    name: "Rishikesh Adventure Camp",
    slug: "rishikesh-adventure",
    description:
      "An adrenaline-packed adventure in Rishikesh featuring river rafting, bungee jumping, cliff jumping, and beach camping by the Ganges.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&q=80",
    duration: "2 Days / 1 Night",
    price: 3999,
    originalPrice: 5999,
    destinations: ["rishikesh"],
    highlights: [
      "16 km river rafting",
      "Bungee jumping (optional)",
      "Beach camping by Ganges",
      "Bonfire & live music",
    ],
    category: "adventure-trek",
    featured: false,
  },
  {
    id: "family-hill-station",
    name: "Family Hill Station Tour",
    slug: "family-hill-station",
    description:
      "A fun-filled family vacation covering Mussoorie, Nainital, and Corbett — hill stations, lakes, and wildlife all in one trip.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    duration: "7 Days / 6 Nights",
    price: 19999,
    originalPrice: 25999,
    destinations: ["mussoorie", "nainital", "jim-corbett"],
    highlights: [
      "3 destinations in one trip",
      "Family-friendly activities",
      "Corbett jeep safari",
      "Premium hotel stays",
    ],
    category: "family",
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    location: "Delhi",
    avatar: "RK",
    rating: 5,
    text: "Our Char Dham Yatra was perfectly organized by Devbhumi Travels. The hotels, transport, and guide were all excellent. It was a deeply spiritual experience that our entire family will cherish forever.",
    packageName: "Char Dham Yatra",
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "PS",
    rating: 5,
    text: "The Mussoorie honeymoon package exceeded our expectations! The luxury resort, candlelight dinner, and the breathtaking valley views made our trip truly magical. Thank you Devbhumi Travels!",
    packageName: "Romantic Mussoorie Getaway",
  },
  {
    id: "3",
    name: "Amit Verma",
    location: "Bangalore",
    avatar: "AV",
    rating: 5,
    text: "River rafting in Rishikesh was the highlight of our adventure camp! The camping setup by the Ganges with bonfire and music was incredible. Highly recommend for all adventure lovers!",
    packageName: "Rishikesh Adventure Camp",
  },
  {
    id: "4",
    name: "Sunita Patel",
    location: "Ahmedabad",
    avatar: "SP",
    rating: 4,
    text: "We took the family hill station tour and every day was a new adventure. From boating in Nainital to wildlife safari in Corbett, our kids loved every moment. Great value for money!",
    packageName: "Family Hill Station Tour",
  },
  {
    id: "5",
    name: "Vikram Singh",
    location: "Jaipur",
    avatar: "VS",
    rating: 5,
    text: "The Valley of Flowers trek was a life-changing experience. The guide was knowledgeable, the camping arrangements were comfortable, and the flowers in bloom were simply breathtaking!",
    packageName: "Valley of Flowers Trek",
  },
  {
    id: "6",
    name: "Neha Gupta",
    location: "Lucknow",
    avatar: "NG",
    rating: 5,
    text: "Skiing in Auli was a dream come true! Devbhumi Travels arranged everything from equipment to training. The views of Nanda Devi from the slopes were absolutely magnificent.",
    packageName: "Auli Skiing Adventure",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Vikrant Rawat",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "A Uttarakhand native with 15+ years in tourism, Vikrant founded Devbhumi Travels with a vision to showcase the beauty and culture of his homeland to travelers worldwide.",
  },
  {
    name: "Anita Bisht",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "With a decade of experience in hospitality management, Anita ensures every trip runs smoothly — from hotel bookings to transport logistics.",
  },
  {
    name: "Deepak Negi",
    role: "Senior Trek Guide",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "A certified mountaineer and trekking expert, Deepak has led over 500 treks across the Himalayas, ensuring safety and unforgettable experiences.",
  },
  {
    name: "Meera Joshi",
    role: "Travel Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Meera specializes in crafting personalized itineraries that match each traveler's interests, budget, and schedule for the perfect Uttarakhand experience.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-to-visit-uttarakhand",
    title: "Best Time to Visit Uttarakhand: A Complete Season Guide",
    excerpt:
      "Discover the ideal time to visit Uttarakhand based on your interests — from summer hill stations to winter skiing and monsoon valley treks.",
    content: `<h2>When Should You Visit Uttarakhand?</h2>
<p>Uttarakhand, the 'Land of Gods', offers year-round attractions that vary dramatically with the seasons. Whether you're planning a pilgrimage, adventure trek, or a peaceful retreat, timing your visit right can transform a good trip into an extraordinary one.</p>

<h3>Summer (March - June): Peak Tourist Season</h3>
<p>Summer is the most popular time to visit Uttarakhand. Hill stations like Mussoorie, Nainital, and Almora offer pleasant temperatures between 20-35°C while the plains sizzle. This is also when the Char Dham shrines open for pilgrimage after the winter closure.</p>
<ul>
<li>Hill stations are at their best with clear skies and green landscapes</li>
<li>Char Dham Yatra season begins in April/May</li>
<li>Adventure activities like rafting and trekking are in full swing</li>
<li>Expect crowds at popular destinations — book in advance</li>
</ul>

<h3>Monsoon (July - September): The Hidden Gem Season</h3>
<p>While most tourists avoid the monsoon, this is when the Valley of Flowers comes alive with hundreds of wildflower species. The lush greenery, waterfalls, and mist-covered mountains create a magical atmosphere.</p>
<ul>
<li>Valley of Flowers is accessible only during this season</li>
<li>Waterfalls are at their most spectacular</li>
<li>Lower prices and fewer crowds</li>
<li>Some roads may be affected by landslides</li>
</ul>

<h3>Autumn (October - November): The Golden Window</h3>
<p>Post-monsoon autumn brings crystal-clear skies and stunning views of snow-capped peaks. The temperatures are comfortable, the crowds thin, and the landscapes are painted in golden hues.</p>

<h3>Winter (December - February): Snow & Skiing</h3>
<p>Winter transforms Uttarakhand into a snowy wonderland. Auli becomes India's premier skiing destination, while lower altitude destinations like Rishikesh and Haridwar enjoy pleasant weather perfect for yoga and spiritual retreats.</p>`,
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&q=80",
    date: "2025-12-15",
    author: "Vikrant Rawat",
    tags: ["travel guide", "uttarakhand", "seasons", "planning"],
    readTime: "8 min read",
  },
  {
    slug: "char-dham-yatra-complete-guide",
    title: "Char Dham Yatra 2026: Complete Guide, Route & Tips",
    excerpt:
      "Everything you need to know about the sacred Char Dham pilgrimage — registration, routes, best time, packing list, and insider tips.",
    content: `<h2>The Sacred Char Dham Circuit</h2>
<p>The Char Dham Yatra is one of the most revered pilgrimages in Hinduism, taking devotees to four sacred shrines nestled in the Garhwal Himalayas — Yamunotri, Gangotri, Kedarnath, and Badrinath. This comprehensive guide covers everything you need to plan your journey.</p>

<h3>The Four Sacred Shrines</h3>
<p><strong>Yamunotri (3,293m)</strong> — The source of the Yamuna river and first stop on the traditional Char Dham route. The temple is dedicated to Goddess Yamuna.</p>
<p><strong>Gangotri (3,100m)</strong> — Origin of the holy Ganges. The Gangotri Temple sits on the banks of the Bhagirathi river amidst breathtaking mountain scenery.</p>
<p><strong>Kedarnath (3,583m)</strong> — Home to one of the twelve Jyotirlingas, this ancient Shiva temple requires a 16 km trek from Gaurikund (or a helicopter ride).</p>
<p><strong>Badrinath (3,133m)</strong> — Dedicated to Lord Vishnu, Badrinath is the final and most accessible Dham, reachable by road.</p>

<h3>Best Time for Char Dham Yatra</h3>
<p>The shrines open in April/May and close in October/November. The best months are May-June and September-October. Avoid July-August due to heavy monsoon rains.</p>

<h3>Registration & Permits</h3>
<p>Biometric registration is mandatory for all pilgrims. Register online through the official Uttarakhand government portal or at designated centers in Rishikesh, Haridwar, or Dehradun.</p>

<h3>Essential Packing Tips</h3>
<ul>
<li>Warm layered clothing (temperatures can drop below 0°C)</li>
<li>Sturdy trekking shoes with good grip</li>
<li>Rain gear and waterproof backpack cover</li>
<li>Basic medicines and first aid kit</li>
<li>Valid photo ID and registration documents</li>
</ul>`,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    date: "2025-11-20",
    author: "Vikrant Rawat",
    tags: ["char dham", "pilgrimage", "guide", "kedarnath", "badrinath"],
    readTime: "12 min read",
  },
  {
    slug: "top-treks-in-uttarakhand",
    title: "Top 10 Treks in Uttarakhand for Every Skill Level",
    excerpt:
      "From beginner-friendly nature walks to challenging Himalayan expeditions — discover the best treks Uttarakhand has to offer.",
    content: `<h2>Uttarakhand: A Trekker's Paradise</h2>
<p>With its diverse terrain ranging from subtropical forests to alpine meadows and glacial moraines, Uttarakhand offers some of India's finest trekking experiences. Here are the top 10 treks for every skill level.</p>

<h3>Beginner Treks</h3>
<p><strong>1. Chopta Tungnath Trek (3-4 days)</strong> — A gentle trek through rhododendron forests leading to the world's highest Shiva temple at Tungnath (3,680m). The summit of Chandrashila offers 360-degree Himalayan views.</p>
<p><strong>2. Kedarkantha Trek (4-5 days)</strong> — Perfect for first-time winter trekkers, this trail passes through snow-laden pine forests and offers stunning summit views at 3,800m.</p>
<p><strong>3. Nag Tibba Trek (2-3 days)</strong> — The highest peak in the lower Himalayas of Garhwal at 3,022m, ideal for a weekend trek from Delhi.</p>

<h3>Moderate Treks</h3>
<p><strong>4. Valley of Flowers Trek (5-6 days)</strong> — This UNESCO World Heritage trek showcases over 600 wildflower species in a stunning alpine meadow at 3,658m.</p>
<p><strong>5. Har Ki Dun Trek (7 days)</strong> — A cradle-shaped valley surrounded by ancient forests and snow-capped peaks, with rich cultural heritage of the Har Ki Dun village.</p>
<p><strong>6. Dayara Bugyal Trek (5-6 days)</strong> — One of the most beautiful alpine meadows in India, offering camping amidst vast grasslands with Himalayan panoramas.</p>

<h3>Challenging Treks</h3>
<p><strong>7. Roopkund Trek (7-8 days)</strong> — The famous 'Mystery Lake' trek leads to a glacial lake at 4,800m surrounded by scattered human skeletons dating back to the 9th century.</p>
<p><strong>8. Kuari Pass Trek (6 days)</strong> — Designed by Lord Curzon, this trail offers continuous views of Nanda Devi, Kamet, and Dronagiri peaks.</p>
<p><strong>9. Rupin Pass Trek (7-8 days)</strong> — A dramatic trek crossing a 4,650m pass with waterfalls, hanging villages, and diverse landscapes.</p>
<p><strong>10. Panchachuli Base Camp Trek (8-9 days)</strong> — A remote and challenging trek to the base of the five legendary Panchachuli peaks in the Darma Valley.</p>`,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    date: "2025-10-05",
    author: "Deepak Negi",
    tags: ["trekking", "adventure", "himalayas", "guide"],
    readTime: "10 min read",
  },
  {
    slug: "rishikesh-adventure-activities-guide",
    title: "Rishikesh Adventure Guide: Rafting, Bungee & Beyond",
    excerpt:
      "Plan your adrenaline-pumping Rishikesh trip with this complete guide to rafting, bungee jumping, camping, and more adventure activities.",
    content: `<h2>Rishikesh: Adventure Capital of India</h2>
<p>Once known primarily as a spiritual destination, Rishikesh has evolved into India's undisputed adventure capital. The confluence of the Ganges river, dramatic cliffs, and lush forests creates the perfect playground for thrill-seekers.</p>

<h3>White Water River Rafting</h3>
<p>Rafting on the Ganges is Rishikesh's signature adventure activity. Choose from three popular stretches:</p>
<ul>
<li><strong>Brahmapuri to Rishikesh (9 km)</strong> — Grade I-II rapids, perfect for beginners and families</li>
<li><strong>Shivpuri to Rishikesh (16 km)</strong> — Grade III-IV rapids, the most popular stretch with exciting rapids like 'Roller Coaster' and 'Golf Course'</li>
<li><strong>Marine Drive to Rishikesh (24 km)</strong> — Grade III-IV rapids, the longest stretch with the most thrilling experience</li>
</ul>

<h3>Bungee Jumping</h3>
<p>India's highest bungee jumping platform at Jumping Heights offers a 83-meter free fall over a rocky gorge. The facility also offers giant swing and flying fox activities.</p>

<h3>Beach Camping</h3>
<p>Nothing beats camping on the white sand beaches along the Ganges. Most camps offer packages including tents, bonfire, music, meals, and morning yoga sessions. Shivpuri and Byasi are the most popular camping zones.</p>

<h3>Other Activities</h3>
<ul>
<li>Cliff jumping at various points along the Ganges</li>
<li>Kayaking courses for beginners and advanced paddlers</li>
<li>Mountain biking trails through forest paths</li>
<li>Rock climbing and rappelling on natural rock faces</li>
</ul>`,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    date: "2025-09-10",
    author: "Deepak Negi",
    tags: ["rishikesh", "adventure", "rafting", "camping"],
    readTime: "9 min read",
  },
];
