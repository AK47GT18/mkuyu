export const LODGE_FACTS = {
  hectares: 330,
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

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'The Reserve', href: '/reserve' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'Activities', href: '/activities' },
  { label: 'Dining', href: '/dining' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'game-drives',
    title: 'Safari Game Drives',
    subtitle: 'Buck Pursuit & Dusk Expedition',
    description:
      'Board our open-sided 4x4 safari vehicles and venture deep into 330 hectares of protected Malawian bush. Our experienced trackers guide you through encounters with zebra, nyala, waterbuck, ostrich and a rich tapestry of birdlife. Choose the morning Buck Pursuit as the savanna awakens, or the golden-hour Dusk Expedition as the reserve settles into night.',
    icon: 'GiJeep',
  },
  {
    id: 'bush-walks',
    title: 'Guided Bush Walks',
    subtitle: 'Tracking, flora and birding on foot',
    description:
      'Slow down and connect with the land on a guided walking trail through indigenous acacia and marula groves. Learn animal tracking, medicinal plant lore, and spot over 100 bird species with our naturalist guides.',
    icon: 'GiFootprint',
  },
  {
    id: 'watchtower',
    title: 'The Watchtower',
    subtitle: 'Panoramic views across the Malawian bush',
    description:
      "Climb the reserve's landmark watchtower for unbroken 360-degree views stretching across the savanna. Best experienced at sunrise or sunset, when the landscape is bathed in amber and the reserve comes alive.",
    icon: 'GiWatchtower',
  },
  {
    id: 'birdwatching',
    title: 'Birdwatching',
    subtitle: 'Over 100 recorded species',
    description:
      "The ranch's diverse mix of acacia woodland, marula groves and open grassland makes it a premier birding destination. From the Lilac-breasted Roller to the Bateleur Eagle, every walk reveals something remarkable.",
    icon: 'GiBirdTwitter',
  },
  {
    id: 'accommodation',
    title: 'Eco Sanctuaries',
    subtitle: 'Five intimate en-suite retreats',
    description:
      'Each of our five eco-sanctuaries is handcrafted using eco-beam technology and timber sourced and shaped by local village artisans. Private sun decks overlook marula groves, solar-heated showers refresh after game drives, and organic linens ensure deep rest in the heart of the Malawian bush.',
    icon: 'GiWoodCabin',
  },
  {
    id: 'dining',
    title: 'Bush Dining',
    subtitle: 'Local and continental cuisine',
    description:
      'Our open-air restaurant serves freshly prepared breakfasts, lunches and dinners drawing on locally sourced seasonal produce and traditional Malawian flavours. The bar stocks a carefully chosen selection of local beers, wines, and spirits — best enjoyed at the firepit as the sun goes down.',
    icon: 'GiCampfire',
  },
  {
    id: 'pool',
    title: 'Swimming Pool',
    subtitle: 'Surrounded by indigenous trees',
    description:
      'A crystal clear pool fringed by indigenous trees and sun loungers gives guests a tranquil space to unwind between safaris. Day visitors are welcome to combine a game drive with an afternoon swim and lunch.',
    icon: 'GiWaterPolo',
  },
  {
    id: 'camping',
    title: 'Campsite',
    subtitle: 'Sleep under a canopy of stars',
    description:
      "For those who want a more immersive experience, our dedicated campsite provides clean ablution facilities, a firepit area, and direct access to the reserve's trails. Wake up to birdsong and the sounds of the African bush.",
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
