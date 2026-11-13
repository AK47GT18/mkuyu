export interface BlogPost {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  author: string
  authorRole: string
  image: string
  imageAlt: string
  excerpt: string
  featured?: boolean
  content: {
    intro: string
    sections: {
      heading: string
      body: string
      quote?: string
    }[]
    takeaways: string[]
  }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'plains-zebra-census',
    title: 'The Plains Zebra: 27 Resident Herds and Their Seasonal Grazing Across 332.15 Hectares',
    category: 'Wildlife & Tracking',
    date: 'November 2025',
    readTime: '5 min read',
    author: 'Head Ranger Chimwemwe',
    authorRole: 'Lead FGASA Guide & Ecologist',
    image: '/images/lodge-21.jpg',
    imageAlt: 'Plains Zebras grazing on the savanna at Mkuyu Game Lodge',
    excerpt:
      'With their striking monochrome patterns against the golden Malawian grass, the 27 Plains Zebras of Mkuyu are our most photographed residents. Here is how our rangers track their morning movements across the open pans.',
    featured: true,
    content: {
      intro:
        'At first light across the 332.15-hectare reserve, the savanna is veiled in a cool morning mist. As the sun crests the acacia woodland, the iconic black-and-white silhouettes of our 27 Plains Zebras (Equus quagga) emerge on the western pan. For our ranger team, each morning starts with locating the family stallions and assessing herd well-being.',
      sections: [
        {
          heading: 'Patterns in the Savanna',
          body:
            'No two zebras possess identical stripes. Our tracking team recognizes specific individuals by unique stripe junctions on their flanks and facial markings. The resident herd has flourished within our predator-balanced, fully protected boundaries, establishing reliable daily grazing corridors between the central waterholes and the shaded marula groves.',
          quote:
            'Watching a zebra foal take its first gallop across the open plains at sunrise is a reminder of why community-based conservation in Salima matters.',
        },
        {
          heading: 'Social Structure and Sentinel Behavior',
          body:
            'Plains zebras operate in tight family harems led by a dominant stallion, accompanied by several mares and their offspring. During the midday heat, zebras stand head-to-tail in pairs, swatting flies from each other’s faces while maintaining a 360-degree watch for any unusual movement in the long grass.',
        },
        {
          heading: 'Tracking Their Movements on Game Drives',
          body:
            'During our morning Buck Pursuit and afternoon Dusk Expedition drives, our open 4x4 vehicles follow low-impact sand tracks that respect the herd’s natural flight distance. Guests frequently observe intimate grooming rituals, dust bathing, and vocal contact calls as the herd moves together toward evening resting grounds.',
        },
      ],
      takeaways: [
        'Total census: 27 healthy resident Plains Zebras protected on 332.15 ha',
        'Key sightings occur daily on the morning (06:00) and dusk (16:30) safari drives',
        'Zebras share grazing grounds symbiotically with 27 waterbucks and 21 nyalas',
        '100% off-grid monitoring contributes to regional Malawian biodiversity censuses',
      ],
    },
  },
  {
    id: 'art-of-tracking-fgasa',
    title: 'Mastering the Art of Tracking in Central Malawi with Certified FGASA Rangers',
    category: 'Wildlife & Tracking',
    date: 'October 2025',
    readTime: '4 min read',
    author: 'Mkuyu Ranger Team',
    authorRole: 'FGASA Guiding Team',
    image: '/images/lodge-52.jpg',
    imageAlt: 'Mkuyu rangers tracking wildlife tracks in the bush',
    excerpt:
      'From interpreting faint hoofprints in dry sand to reading the sudden alarm calls of guinea fowl, discover how ancient bush wisdom brings guests face-to-face with elusive wildlife.',
    featured: false,
    content: {
      intro:
        'Tracking is often called the oldest science in human history. In the dense woodlands and sandy clearings of Mkuyu, our rangers combine generations of Malawian bush wisdom with globally certified FGASA guiding standards to read the savanna like an open book.',
      sections: [
        {
          heading: 'Reading the Ground: Spoor and Sign',
          body:
            'A single print in the red earth holds a multitude of clues: the depth of the hoof impression reveals speed, the softness of the sand edges indicates elapsed time, and the direction tells a story of intent. In our guided bush walks, guests learn how to differentiate the sharp, cloven prints of a bushbuck from the heavier splayed tread of a waterbuck.',
          quote:
            'The ground retains memories that the human eye usually ignores. Once you learn to read spoor, the bush reveals itself in complete clarity.',
        },
        {
          heading: 'Listening to the Savanna Telegraph',
          body:
            'Rangers rarely rely on visual cues alone. The abrupt chattering alarm call of a Grey Go-away-bird, the explosive flight of Crested Guineafowl, or the high-pitched snort of an impala instantly alerts the tracking team that wildlife is nearby or on the move.',
        },
        {
          heading: 'Walking Ancient Trails with Respect',
          body:
            'Guided walks on foot offer a humble perspective impossible to replicate from a vehicle. Moving downwind in single file, guests experience the tactile scents of crushed wild sage, examine medicinal bark uses, and approach wildlife on equal terms without disturbing their habitat.',
        },
      ],
      takeaways: [
        'All walking trails are led by certified FGASA guides with first-aid certification',
        'Trails cover ancient marula groves, termite mound ecosystems, and seasonal pans',
        'Learn indigenous plant lore, traditional herbal medicine, and bird call identification',
        'Available daily at dawn (06:30) for both overnight residents and day visitors',
      ],
    },
  },
  {
    id: 'eco-beam-architecture',
    title: '100% Off-Grid Architecture: How Eco-Beam Technology & Solar Power Protect the Savanna',
    category: 'Conservation & Eco',
    date: 'September 2025',
    readTime: '6 min read',
    author: 'Conservation Desk',
    authorRole: 'Eco-Architecture & Operations',
    image: '/images/lodge-14.jpg',
    imageAlt: 'Eco-beam sustainable sanctuary nestled in indigenous woodland',
    excerpt:
      'Handcrafted using sustainably sourced timber from neighbouring villages, our 5 boutique sanctuaries tread lightly upon the earth with standalone solar energy and 100% greywater recycling.',
    featured: false,
    content: {
      intro:
        'When designing Mkuyu Game Lodge, the primary mandate was zero disruption to the delicate soils and indigenous root systems of the Salima savanna. Rather than clearing ground for heavy concrete foundations, we pioneered eco-beam timber engineering that leaves the land virtually untouched.',
      sections: [
        {
          heading: 'Eco-Beam Engineering: Treading Lightly',
          body:
            'Our five boutique sanctuaries are elevated above ground on specialized eco-beam timber pilings. This ensures that natural ground drainage, root networks of century-old marula trees, and burrowing wildlife continue undisturbed beneath every room.',
          quote:
            'True luxury does not conquer nature; it builds around it with reverence and restraint.',
        },
        {
          heading: 'Harvesting the Malawian Sun',
          body:
            'Central Malawi enjoys over 300 days of sunshine each year. We harnessed this natural gift by installing a standalone solar photovoltaic array backed by lithium battery storage. There is no grid power line running through our wilderness, and no noisy diesel generators interrupting the tranquil nighttime silence.',
        },
        {
          heading: 'Closed-Loop Greywater & Artisan Furnishings',
          body:
            'Every drop of water from guest showers and hand basins is filtered through reed beds and gravity sand filters before returning to nourish our indigenous gardens and tree saplings. Every bed, desk, and lounge chair was crafted by carpenters from neighbouring Salima villages using responsibly harvested local timber.',
        },
      ],
      takeaways: [
        'Zero concrete slab footprint on the natural savanna soil',
        '100% off-grid clean solar electricity and solar thermal water heating',
        '100% of bathroom greywater recycled for botanical irrigation',
        'Over 85% of interior woodwork and furnishings created by local artisans',
      ],
    },
  },
  {
    id: 'sunset-watchtower-experience',
    title: 'Sunset from the Landmark Watchtower: An Amber View Over the Salima Savanna',
    category: 'Safari Guides',
    date: 'August 2025',
    readTime: '3 min read',
    author: 'Lodge Hospitality',
    authorRole: 'Guest Experience & Bar',
    image: '/images/lodge-79.jpg',
    imageAlt: 'The Watchtower overlooking the golden canopy of Mkuyu Game Lodge',
    excerpt:
      'Climb above the indigenous acacia canopy for unbroken 360-degree vistas. Why golden-hour on the watchtower has become the hallmark ritual of an authentic Mkuyu day trip.',
    featured: false,
    content: {
      intro:
        'As late afternoon descends, the Malawian sky transforms into layers of ochre, crimson, and burnt amber. Rising above the acacia crowns stands the landmark Mkuyu Watchtower—a structure designed to give guests an elevated, uninterrupted perspective across 332.15 hectares of pristine bush.',
      sections: [
        {
          heading: 'A 360-Degree Bush Panorama',
          body:
            'From the timber observation platform, the entire expanse of the reserve unfolds. To the east, the low hills toward Senga Bay catch the evening light; to the west, open grasslands reveal herds of zebras, waterbucks, and impalas moving peacefully toward water pans.',
          quote:
            'Up on the watchtower, you hear the savanna breathe: the distant call of a fish eagle, the wind in the acacia needles, and the soft steps of animals below.',
        },
        {
          heading: 'The Sundowner Ritual',
          body:
            'No African safari day is complete without the traditional sundowner. Our team prepares chilled Malawian gin and tonics, cold Kuche Kuche beers, and local snack platters served directly on the timber deck as the sun dips below the horizon.',
        },
      ],
      takeaways: [
        'Elevated platform offering 360° views across the entire reserve',
        'Premier spot for wildlife photographers seeking golden-hour light',
        'Complimentary access for both day visitors and overnight sanctuary guests',
        'Sunset sundowner drink service available daily from 17:00 to 18:30',
      ],
    },
  },
  {
    id: 'lake-malawi-day-trip-itinerary',
    title: 'Bush-to-Beach: The Ultimate Day Safari Itinerary from Lake Malawi & Senga Bay',
    category: 'Safari Guides',
    date: 'July 2025',
    readTime: '5 min read',
    author: 'Guest Relations',
    authorRole: 'Safari Operations',
    image: '/images/lodge-80.jpg',
    imageAlt: 'Open-air safari drive through the woodlands of Salima',
    excerpt:
      'Just a 25-minute drive inland from Senga Bay’s sandy shores, Mkuyu offers the ideal combined bush getaway. Here is how to plan a morning game drive, poolside lunch, and sunset watchtower visit.',
    featured: false,
    content: {
      intro:
        'Malawi is famed as the "Warm Heart of Africa" for its friendly people and the breathtaking waters of Lake Malawi. But just a 25-minute scenic drive inland from Senga Bay lies an authentic wildlife wilderness where savanna antelopes, zebras, and raptors roam undisturbed.',
      sections: [
        {
          heading: 'Morning: Arrival & The Buck Pursuit Drive',
          body:
            'Depart your Senga Bay resort after an early coffee and arrive at our landmark green-roof gate by 08:30. Board our specially modified open 4x4 vehicles for the morning Buck Pursuit drive, tracking active herds through the cool morning air with certified guides.',
        },
        {
          heading: 'Midday: Poolside Relaxation & Fresh Bush Dining',
          body:
            'Escape the midday sun by our crystal-clear swimming pool, framed by native shade trees. Follow your swim with freshly prepared lunch at the open-air pavilion, enjoying seasonal farm-to-table vegetables, fresh Lake Malawi chambo, or light stone-baked snacks.',
        },
        {
          heading: 'Late Afternoon: Watchtower Sundowners & Lake Return',
          body:
            'Climb the watchtower at 16:30 for golden-hour views and a sundowner drink as the reserve transitions to dusk. By 18:30, you can make the short 25-minute drive back to your beach resort for dinner under the stars.',
        },
      ],
      takeaways: [
        'Only 25 minutes from Senga Bay beaches; 90 minutes from Lilongwe on tarred roads',
        'Day visitor hours: 08:30 to 18:30 daily with full vehicle parking and reception',
        'Package includes game drive options, swimming pool access, and restaurant dining',
        'Advance booking recommended for weekend game drive seats',
      ],
    },
  },
  {
    id: 'boma-nights-malawian-braai',
    title: 'Boma Nights & Firepit Braai: Traditional Malawian Bush Dining Under the Stars',
    category: 'Bush Dining',
    date: 'June 2025',
    readTime: '4 min read',
    author: 'Chef Tiyanjane',
    authorRole: 'Head Safari Chef',
    image: '/images/lodge-29.jpg',
    imageAlt: 'Open-air bush dining and boma firepit setup at Mkuyu',
    excerpt:
      'When dusk falls over the reserve, the open-air boma fire comes alive with sizzling local braai, chilled Malawian Kuche Kuche beers, and timeless campfire storytelling.',
    featured: false,
    content: {
      intro:
        'There is a quiet magic that settles over Mkuyu when the sun sets. The nocturnal symphony of crickets, nightjars, and distant owl calls begins. In the center of the lodge clearing, the crackling flames of our boma firepit draw guests together for an authentic Malawian fireside braai.',
      sections: [
        {
          heading: 'Flavours of Central Malawi',
          body:
            'Our kitchen believes in honoring regional ingredients. Dinners feature locally reared cuts marinated in wild bush herbs, flame-grilled over indigenous hardwood embers. Accompaniments include roasted local squash, sweet potato mash, fresh tomato relish, and warm artisan breads.',
          quote:
            'Sharing food around an open fire beneath the African constellation of the Southern Cross is an ancient ritual that unites every traveler.',
        },
        {
          heading: 'Stories Around the Embers',
          body:
            'The boma is more than a restaurant; it is a storytelling circle. Rangers share legends of the Chewa culture, explain the constellations visible in the dark sky, and recount unforgettable animal tracking encounters from the day.',
        },
      ],
      takeaways: [
        'Open-air boma braai held under unpolluted, star-filled southern skies',
        'Locally sourced farm produce paired with chilled Malawian beers and wines',
        'Warm fireside seating with blankets and storytelling with our rangers',
        'Available for overnight guests and by prior reservation for evening dinner visitors',
      ],
    },
  },
]

