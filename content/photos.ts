/**
 * Stock photography from Unsplash (free Unsplash License — commercial use allowed;
 * attribution not required, but credited in the footer). Served from Unsplash's CDN,
 * resized per device by lib/image-loader.ts.
 *
 * Selection rules:
 *  - Anything paired with suicide-prevention / Mind Before Marks copy shows no identifiable
 *    child's face (backs, wide shots only).
 *  - No tight close-ups of children.
 *  - Replace with commissioned photography (with written consent) before launch where possible.
 */

export type Photo = { id: string; alt: string; author: string };

export const unsplash = (p: Photo, w = 1600) =>
  `https://images.unsplash.com/photo-${p.id}?auto=format&fit=crop&w=${w}&q=75`;

export const PHOTOS = {
  wellbeing: { id: "1593442808882-775dfcd90699", alt: "Students seen from behind, facing their teacher at a chalkboard", author: "Greg Schneider" },
  chalkboard: { id: "1522661067900-ab829854a57f", alt: "A student writing on a chalkboard, seen from behind", author: "Nikhita S" },
  classroomWide: { id: "1709290749293-c6152a187b14", alt: "A full classroom of students at their desks", author: "CIMT HOOGHLY" },
  coaching: { id: "1719159381916-062fa9f435a6", alt: "Rows of students at desks in a classroom", author: "Haseeb Modi" },
  deskBoys: { id: "1692269725827-699e04a11cdf", alt: "Two students reading at a shared desk", author: "Swastik Arora" },
  studyBoys: { id: "1692269726060-9c604e06f63b", alt: "Two students working with books at a table", author: "Swastik Arora" },
  studyPair: { id: "1692269725911-87697c558be1", alt: "Two students working at a desk in class", author: "Swastik Arora" },
  classroomKids: { id: "1692269725836-fbd72e98883f", alt: "Young students seated in a classroom", author: "Swastik Arora" },
  tableGroup: { id: "1692269725976-2bebd4622fd4", alt: "A group of students around a table", author: "Swastik Arora" },
  groupSmiling: { id: "1524069290683-0457abfe42c3", alt: "A group of students gathered together, smiling", author: "Church of the King" },
  fiveKids: { id: "1497486751825-1233686d5d80", alt: "Five children smiling together outdoors", author: "LJ" },
  rural: { id: "1765994898026-4fa84ade4a61", alt: "A village school at golden hour, children in the courtyard", author: "Ravi Sharma" },
  ruralAerial: { id: "1761998892650-2dbe15c9c26e", alt: "Aerial view of a village among green fields and trees", author: "Toza Productions" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;

/** Photo per program (keyed by slug). Mind Before Marks uses a no-faces image. */
export const PROGRAM_PHOTOS: Record<string, Photo> = {
  "mind-before-marks": PHOTOS.wellbeing,
  "informed-choice": PHOTOS.coaching,
  compass: PHOTOS.chalkboard,
  "cognitive-skills": PHOTOS.studyPair,
  "founders-bootcamp": PHOTOS.groupSmiling,
};

export const PHOTO_CREDITS = Array.from(new Set(Object.values(PHOTOS).map((p) => p.author)));
