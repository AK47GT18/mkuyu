export const LODGE_FACTS = {
  hectares: 332.15,
  animals: 145,
  rooms: 5,
  maxGuests: 12,
  phone: '+265 996 210 391',
  email: 'mkuyugamelodge@gmail.com',
  location: 'Salima District, Central Region, Malawi',
  address: 'T358, Salima, Malawi',
  hours: 'Monday to Sunday, 08:30 to 18:30',
  coordinates: { lat: -13.7804, lng: 34.4587 },
}

export const ADMISSION_FEES = {
  gateEntrance: {
    title: 'Reserve Gate Entrance',
    adult: 'MK 10,000',
    children: 'MK 5,000',
    adultNum: 10000,
    childrenNum: 5000,
    description: 'Day-visitor reserve pass covering grounds, swimming pool, kids adventure park, watchtower, and dining pavilion.',
  },
  gameDrive: {
    title: 'Safari Game Drive',
    adult: 'MK 40,000',
    children: 'MK 20,000',
    adultNum: 40000,
    childrenNum: 20000,
    description: 'Open 4x4 guided morning Buck Pursuit or golden-hour Dusk Expedition with certified FGASA trackers.',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'The Reserve', href: '/reserve' },
  { label: 'Stay & Dine', href: '/accommodation' },
  { label: 'Activities', href: '/activities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const WILDLIFE_CENSUS = [
  { name: 'Plains Zebra', scientific: 'Equus quagga', count: 27, desc: 'Striking patterns against the golden savanna' },
  { name: 'Waterbuck', scientific: 'Kobus ellipsiprymnus', count: 27, desc: 'Graceful antelopes grazing along grassy pans' },
  { name: 'Nyala', scientific: 'Tragelaphus angasii', count: 21, desc: 'Spiral-horned browsers in marula groves' },
  { name: 'Bushbuck', scientific: 'Tragelaphus scriptus', count: 19, desc: 'Elusive woodland inhabitants near dense cover' },
  { name: 'Impala', scientific: 'Aepyceros melampus', count: 14, desc: 'Agile herds roaming open acacia woodlands' },
  { name: 'Sable Antelope', scientific: 'Hippotragus niger', count: 11, desc: 'Majestic scimitar horns & regal presence' },
  { name: 'Desert Ostrich', scientific: 'Struthio camelus', count: 10, desc: 'Towering sentinels of the open plains' },
  { name: 'Duiker', scientific: 'Sylvicapra grimmia', count: 10, desc: 'Compact solitary browsers among the scrub' },
  { name: 'Emus', scientific: 'Dromaius novaehollandiae', count: 6, desc: 'Distinctive resident flock on the reserve' },
]

export const FLEET_DETAILS = [
  {
    title: 'Open-Air Design',
    desc: '360-degree unobstructed views for optimal photography and wildlife spotting, featuring tiered seating.',
    badge: 'Tiered Seating',
  },
  {
    title: 'All-Terrain Power',
    desc: '4x4 heavy-duty suspension modified for deep sand and rocky outcrops without compromising on smooth travel.',
    badge: 'Heavy-Duty 4x4',
  },
  {
    title: 'Onboard Comfort',
    desc: 'Equipped with cold refreshments, field wildlife guides, and waterproof ponchos for unpredictable weather.',
    badge: 'Full Amenities',
  },
]

export const SERVICES = [
  {
    id: 'game-drives',
    title: 'Safari Game Drives',
    subtitle: 'Buck Pursuit & Dusk Expedition',
    description:
      'Open 4x4 morning Buck Pursuit and golden-hour Dusk Expedition drives through 330 hectares of wild savanna with expert trackers.',
    icon: 'GiJeep',
  },
  {
    id: 'bush-walks',
    title: 'Guided Bush Walks',
    subtitle: 'Tracking, flora and birding on foot',
    description:
      'Guided walking trails through indigenous marula and acacia groves to discover wildlife tracks, flora, and birdlife up close.',
    icon: 'GiFootprint',
  },
  {
    id: 'watchtower',
    title: 'The Watchtower',
    subtitle: 'Panoramic views across the bush',
    description:
      'An elevated lookout tower delivering 360° panoramic vistas across the reserve—the ultimate spot for sunrise and sunset views.',
    icon: 'GiWatchtower',
  },
  {
    id: 'birdwatching',
    title: 'Birdwatching',
    subtitle: 'Over 100 recorded species',
    description:
      'Over 100 recorded bird species across woodland and savanna, from raptors and eagles to vibrant rollers.',
    icon: 'GiBirdTwitter',
  },
  {
    id: 'accommodation',
    title: 'Eco Sanctuaries',
    subtitle: 'Five intimate en-suite retreats',
    description:
      'Five handcrafted eco-sanctuaries featuring private sun decks, solar-heated showers, and local artisan timber craftsmanship.',
    icon: 'GiWoodCabin',
  },
  {
    id: 'dining',
    title: 'Bush Dining',
    subtitle: 'Local and continental cuisine',
    description:
      'Freshly prepared local and continental cuisine, open-air restaurant dining, chilled drinks, and evening fireside boma dinners.',
    icon: 'GiCampfire',
  },
  {
    id: 'pool',
    title: 'Swimming Pool',
    subtitle: 'Surrounded by indigenous trees',
    description:
      'Crystal-clear pool framed by indigenous trees and sun loungers for refreshing dips between morning and afternoon safaris.',
    icon: 'GiWaterPolo',
  },
  {
    id: 'camping',
    title: 'Campsite',
    subtitle: 'Sleep under a canopy of stars',
    description:
      'Immersive wilderness camping under dark star-filled skies, complete with clean ablution blocks and firepit access.',
    icon: 'GiCampingTent',
  },
]

export const SUSTAINABILITY_POINTS = [
  {
    title: '100% Off-Grid Solar',
    description:
      'The entire lodge runs on a standalone solar power system — no grid connection, no generator noise.',
  },
  {
    title: 'Solar Water Heating',
    description:
      'All hot water across guest rooms and facilities is heated entirely by solar energy.',
  },
  {
    title: 'Greywater Recycling',
    description:
      '100% of wastewater is treated and recycled to irrigate indigenous trees and lodge gardens.',
  },
  {
    title: 'Plastic-Free Environment',
    description:
      'Single-use plastics are banned across the property. We use refillable glass, filtered water and compostable materials.',
  },
  {
    title: 'Community Craft',
    description:
      "Every room's furniture is hand-crafted by artisans from neighbouring villages using locally sourced timber.",
  },
  {
    title: 'Wildlife Protection',
    description:
      'The 330-hectare reserve is a protected sanctuary — hunting, trapping and poaching are strictly prohibited.',
  },
]

export const ACCOMMODATION_TYPES = [
  {
    id: 'garden-sanctuary',
    name: 'Garden Sanctuary',
    type: 'Double Room',
    description:
      'A private retreat overlooking the indigenous flora and marula grove. Features a private sun deck, solar-heated en-suite, organic linens, and direct views into the bush.',
  },
  {
    id: 'family-sanctuary',
    name: 'Family Sanctuary',
    type: 'Family Room',
    description:
      'Spacious and filled with light, the Family Sanctuary features floor-to-ceiling glass that dissolves the boundary between room and wilderness. Sleeps up to four guests.',
  },
  {
    id: 'executive-sanctuary',
    name: 'Executive Sanctuary',
    type: 'Executive Suite',
    description:
      'Positioned in the most secluded corner of the property, the Executive Sanctuary offers the ultimate in privacy, space and bush immersion. Ideal for honeymooners and couples.',
  },
  {
    id: 'campsite',
    name: 'Campsite',
    type: 'Camping',
    description:
      'A dedicated campsite area for overlanders and outdoor enthusiasts, with clean ablution blocks, showers, flushing toilets and direct access to the reserve trails.',
  },
]

export const STATS = [
  { value: '330', unit: 'Hectares', label: 'Protected Reserve' },
  { value: '145', unit: 'Animals', label: 'On the Reserve' },
  { value: '5', unit: 'Sanctuaries', label: 'Eco Rooms' },
  { value: '100%', unit: 'Solar', label: 'Off-Grid Energy' },
]
