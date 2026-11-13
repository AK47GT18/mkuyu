export type ImageCategory =
  | 'hero'
  | 'wildlife'
  | 'accommodation'
  | 'dining'
  | 'activities'
  | 'pool'
  | 'campsite'
  | 'landscape'
  | 'facilities'

export interface LodgeImage {
  src: string
  alt: string
  category: ImageCategory
  width: number
  height: number
}

// Helper to build alt text from image number and category
function img(
  num: number,
  category: ImageCategory,
  width: number,
  height: number,
): LodgeImage {
  const padded = String(num).padStart(2, '0')
  const altMap: Record<ImageCategory, string> = {
    hero: 'Mkuyu Game Lodge',
    wildlife: 'Wildlife at Mkuyu Game Lodge',
    accommodation: 'Accommodation at Mkuyu Game Lodge',
    dining: 'Dining at Mkuyu Game Lodge',
    activities: 'Activities at Mkuyu Game Lodge',
    pool: 'Swimming pool at Mkuyu Game Lodge',
    campsite: 'Campsite at Mkuyu Game Lodge',
    landscape: 'Landscape at Mkuyu Game Lodge',
    facilities: 'Facilities at Mkuyu Game Lodge',
  }
  return {
    src: `/images/lodge-${padded}.jpg`,
    alt: `${altMap[category]} — lodge-${padded}`,
    category,
    width,
    height,
  }
}

// Dimensions key:
// landscape: 1070x713
// portrait:  750x1000
// square:    1070x1070

export const lodgeImages: LodgeImage[] = [
  // hero: lodge-03 to lodge-07
  img(3, 'hero', 1070, 713),
  img(4, 'hero', 1070, 713),
  img(5, 'hero', 1070, 713),
  img(6, 'hero', 1070, 713),
  img(7, 'hero', 1070, 713),

  // landscape: lodge-08
  img(8, 'landscape', 1070, 713),

  // wildlife: lodge-09 to lodge-11
  img(9, 'wildlife', 1070, 713),
  img(10, 'wildlife', 1070, 713),
  img(11, 'wildlife', 1070, 713),

  // facilities: lodge-13, lodge-15
  img(13, 'facilities', 1070, 713),
  img(15, 'facilities', 1070, 713),

  // accommodation: lodge-14, lodge-16
  img(14, 'accommodation', 750, 1000),
  img(16, 'accommodation', 1070, 713),

  // activities: lodge-17
  img(17, 'activities', 1070, 713),

  // pool: lodge-18
  img(18, 'pool', 1070, 713),

  // wildlife: lodge-21 to lodge-25
  img(21, 'wildlife', 1070, 713),
  img(22, 'wildlife', 1070, 713),
  img(23, 'wildlife', 1070, 713),
  img(24, 'wildlife', 1070, 713),
  img(25, 'wildlife', 1070, 713),

  // accommodation: lodge-26
  img(26, 'accommodation', 1070, 713),

  // dining: lodge-27 to lodge-31
  img(27, 'dining', 1070, 713),
  img(28, 'dining', 1070, 713),
  img(29, 'dining', 1070, 713),
  img(30, 'dining', 1070, 713),
  img(31, 'dining', 1070, 713),

  // accommodation: lodge-32
  img(32, 'accommodation', 750, 1000),

  // pool: lodge-33
  img(33, 'pool', 1070, 713),

  // accommodation: lodge-35, lodge-36
  img(35, 'accommodation', 1070, 713),
  img(36, 'accommodation', 1070, 713),

  // activities: lodge-37
  img(37, 'activities', 1070, 713),

  // accommodation: lodge-38
  img(38, 'accommodation', 750, 1000),

  // activities: lodge-40 to lodge-43
  img(40, 'activities', 1070, 713),
  img(41, 'activities', 1070, 713),
  img(42, 'activities', 1070, 713),
  img(43, 'activities', 1070, 713),

  // accommodation: lodge-45, lodge-47, lodge-48, lodge-50
  img(45, 'accommodation', 1070, 713),
  img(47, 'accommodation', 750, 1000),
  img(48, 'accommodation', 1070, 713),
  img(50, 'accommodation', 1070, 713),

  // accommodation: lodge-53
  img(53, 'accommodation', 750, 1000),

  // accommodation: lodge-60
  img(60, 'accommodation', 1070, 713),

  // campsite: lodge-61
  img(61, 'campsite', 1070, 713),

  // pool: lodge-65
  img(65, 'pool', 1070, 713),

  // landscape: lodge-69, lodge-70, lodge-71
  img(69, 'landscape', 1070, 713),
  img(70, 'landscape', 1070, 713),
  img(71, 'landscape', 1070, 713),
]

export function getImagesByCategory(cat: ImageCategory): LodgeImage[] {
  return lodgeImages.filter((i) => i.category === cat)
}
