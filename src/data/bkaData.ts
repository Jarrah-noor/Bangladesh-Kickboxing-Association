export interface Discipline {
  id: string;
  index: string;
  name: string;
  arenaType: 'Tatami Sports' | 'Ring Sports';
  contactLevel: string;
  targetZones: string;
  summary: string;
  technicalFocus: string;
}

export interface Milestone {
  year: string;
  title: string;
  detail: string;
}

export interface TournamentRecord {
  id: string;
  category: 'International' | 'Domestic';
  year: string;
  title: string;
  location: string;
  outcome: string;
  notes: string;
}

export interface UpcomingEvent {
  id: string;
  year: string;
  title: string;
  hostNation: string;
  scope: string;
  disciplinesIncluded: string;
  preparationStatus: string;
}

export interface Leader {
  name: string;
  role: string;
  tenureNote: string;
  initials: string;
  photo: string;
  photoAlt: string;
  bio: string;
}

export interface RuleDocument {
  id: string;
  category: '2026 Rule Updates' | 'Core Rulebooks' | 'Medical & Anti-Doping';
  title: string;
  code: string;
  effectiveLabel: string;
  pages: string;
  summary: string;
  pdfPath: string;
}

export const ASSOCIATION_FACTS = {
  name: 'Official Bangladesh Kickboxing Association',
  shortName: 'BKA',
  logo: '/assets/aistudio/WhatsApp_Image_2026-11-18_at_21.26.11_e4ff14d2.jpeg',
  heritagePhoto:
    '/assets/aistudio/WhatsApp_Image_2026-11-21_at_12.49.10_7f1f6787.jpeg',
  heritagePhotoAlt:
    'Shihan Mostafizur Rahman Mostafiz shaking hands and receiving an international kickboxing recognition award',
  foundedYear: 1993,
  founder: 'Shihan Mostafizur Rahman Mostafiz',
  nscRecognitionYear: 2010,
  nscBody: 'National Sports Council (NSC)',
  headquarters:
    'Room #264, Maulana Bhashani Hockey Stadium, Gulistan Road, Dhaka-1000, Bangladesh',
  contactPhone: '8801857843854',
  contactEmail: 'home.nirnij@gmail.com',
  nationalTournamentsHosted: 14,
  bestOfBestHosted: 1,
  puneYear: 2012,
  puneParticipants: 7,
  puneMedalists: 6,
};

export const HERITAGE_MILESTONES: Milestone[] = [
  {
    year: '1993',
    title: 'Association Founded in Bangladesh',
    detail:
      'Established by Shihan Mostafizur Rahman Mostafiz to formalize structured kickboxing training, athlete safety standards, and competitive rules across the country.',
  },
  {
    year: '2010',
    title: 'National Sports Council (NSC) Recognition',
    detail:
      'Formally recognised by the National Sports Council (NSC) of Bangladesh, cementing the association as the official National Committee for the sport.',
  },
  {
    year: '2012',
    title: 'Pune Asian Championship Breakthrough',
    detail:
      'A 7-member Bangladesh national squad competed at the Asian Championship in Pune, with 6 athletes returning with international medals.',
  },
  {
    year: '18 September',
    title: 'National Kickboxing Training Camp Held',
    detail:
      'On 18 September, the National Kickboxing Training Camp was held for national athletes and coaches, advancing tactical conditioning and WAKO rule preparation.',
  },
  {
    year: '2026–2027',
    title: 'Continental & World Cup Cycle',
    detail:
      'Building on 14 National Kickboxing Tournaments and the Best Of Best National Kickboxing Tournament, national squads are preparing for Cambodia 2026 and Thailand 2027 under current WAKO 2026–2027 technical regulations.',
  },
];

export const DISCIPLINES: Discipline[] = [
  {
    id: 'point-fight',
    index: '01',
    name: 'Point Fight',
    arenaType: 'Tatami Sports',
    contactLevel: 'Semi-Contact · Stop-and-Score',
    targetZones: 'Head (front, forehead, back & side), Torso (front & side), Foot Sweeps',
    summary:
      'A high-speed tactical discipline where athletes focus on distance control, timing, and clean technical strikes. The central referee halts the bout immediately after each valid scoring technique.',
    technicalFocus:
      'Explosive blitz footwork, side kicks, backfists, and rapid defensive evasions under strict control.',
  },
  {
    id: 'light-contact',
    index: '02',
    name: 'Light Contact',
    arenaType: 'Tatami Sports',
    contactLevel: 'Continuous · Controlled Power',
    targetZones: 'Head (front, forehead & side), Torso (front & side), Foot Sweeps',
    summary:
      'Continuous technical kickboxing fought on 7m × 7m tatami mats without stoppage after every point. Three judges score clean combinations, ring generalship, and sustained pace without excessive force.',
    technicalFocus:
      'Fluid multi-strike boxing-to-kick combinations, stamina, and continuous angle shifting.',
  },
  {
    id: 'kick-light',
    index: '03',
    name: 'Kick Light',
    arenaType: 'Tatami Sports',
    contactLevel: 'Continuous · Controlled Low Kicks',
    targetZones: 'Head (front & side), Torso (front & side), Thighs (inside & outside), Foot Sweeps',
    summary:
      'An intermediate continuous tatami discipline bridging Light Contact and ring-style low kicking. Athletes combine disciplined hand strikes and above-the-waist kicks with controlled low kicks to the thighs.',
    technicalFocus:
      'Quick thigh-kick counters, crisp boxing entries, shin checking, and non-stop tatami mobility.',
  },
  {
    id: 'full-contact',
    index: '04',
    name: 'Full Contact',
    arenaType: 'Ring Sports',
    contactLevel: 'Full Power · Ring Combat',
    targetZones: 'Head & Torso above the waist, Ankle-Level Foot Sweeps',
    summary:
      'Classic ring kickboxing where athletes deliver full-power punches and kicks exclusively above the waist. Each fighter is required to execute a minimum of 6 kicks per round (18 per 3-round bout).',
    technicalFocus:
      'High roundhouse, axe, and spinning hook kicks paired with disciplined boxing defense in the ropes.',
  },
  {
    id: 'low-kick',
    index: '05',
    name: 'Low Kick',
    arenaType: 'Ring Sports',
    contactLevel: 'Full Power · Thigh Low Kicks',
    targetZones: 'Head (front & side), Torso (front & side), Thighs (outer & inner), Ankle Foot Sweeps',
    summary:
      'Full-contact ring kickboxing that permits heavy punches and kicks to the head and torso alongside full-power roundhouse low kicks targeting the opponent’s inner and outer thighs (without knee or elbow strikes).',
    technicalFocus:
      'Heavy boxing-to-thigh combinations, leg-kick checking, ring cutting, and sustained durability.',
  },
  {
    id: 'k1',
    index: '06',
    name: 'K1',
    arenaType: 'Ring Sports',
    contactLevel: 'Full Power · Low Kicks & Knees',
    targetZones: 'Head (front & side), Torso (front & side), Legs (all parts including joints)',
    summary:
      'The premier stand-up ring format permitting boxing punches, spinning backfists, high and low kicks to the legs, ankle-level foot sweeps, and knee strikes. Under the 2026 WAKO Board update (effective Jan 1, 2027), clinching, holding, and grabbing are prohibited, and knee techniques may be executed without limitation.',
    technicalFocus:
      'Heavy low-kick conditioning, tight high guard, and dynamic non-clinch knee combinations.',
  },
  {
    id: 'musical-form',
    index: '07',
    name: 'Musical Form',
    arenaType: 'Tatami Sports',
    contactLevel: 'Non-Contact · Choreographed Kata',
    targetZones: 'Basics, Balance, Difficulty, Music Synchronization & Showmanship (7.0–10.0 Scale)',
    summary:
      'An expressive technical discipline on a 10m × 10m tatami combining Hard Style Open Hand or Weapons martial arts techniques synchronized precisely to the athlete’s chosen music.',
    technicalFocus:
      'Aerial spinning kicks, crisp stances, martial rhythm (max 5 gymnastic moves), and zero-error balance.',
  },
];

export const TOURNAMENT_RECORDS: TournamentRecord[] = [
  {
    id: 'pune-2012',
    category: 'International',
    year: '2012',
    title: 'Pune Asian Kickboxing Championship',
    location: 'Pune, India',
    outcome: '6 Medalists from 7 Athletes (85.7% Podium Rate)',
    notes:
      'Historic international breakthrough for Bangladesh kickboxing, demonstrating competitive parity across Asian divisions.',
  },
  {
    id: 'national-series',
    category: 'Domestic',
    year: '1993–Present',
    title: '14 National Kickboxing Tournaments',
    location: 'Dhaka & National Venues, Bangladesh',
    outcome: '14 Completed Editions',
    notes:
      'Flagship annual national championships identifying senior and junior division champions across all seven official events.',
  },
  {
    id: 'best-of-best',
    category: 'Domestic',
    year: 'Special Edition',
    title: 'Best Of Best National Kickboxing Tournament',
    location: 'Bangladesh',
    outcome: '1 Invitational Edition Hosted',
    notes:
      'Elite showcase matching top-ranked national division champions to determine premier pound-for-pound contenders.',
  },
  {
    id: 'training-camp-sep18',
    category: 'Domestic',
    year: '18 September',
    title: 'National Kickboxing Training Camp',
    location: 'Bangladesh',
    outcome: 'National Camp Held',
    notes:
      'National Kickboxing Training Camp held on 18 September focusing on tactical preparation, athlete conditioning, and official technical standards.',
  },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: 'cambodia-2026',
    year: '2026',
    title: 'Cambodia Asian Kickboxing Championship 2026',
    hostNation: 'Cambodia',
    scope: 'Continental Championship',
    disciplinesIncluded:
      'Point Fight · Light Contact · Kick Light · Full Contact · Low Kick · K1 · Musical Form',
    preparationStatus: 'National Squad Selection & Camp Evaluation',
  },
  {
    id: 'thailand-2027',
    year: '2027',
    title: '3rd Thailand Kickboxing World Cup 2027',
    hostNation: 'Thailand',
    scope: 'World Cup Competition',
    disciplinesIncluded: 'All Senior & Junior Official Ring and Tatami Divisions',
    preparationStatus: 'Long-Term High-Performance Conditioning Cycle',
  },
];

export const LEADERSHIP: Leader[] = [
  {
    name: 'Ishtiaque Abedin',
    role: 'President',
    tenureNote: 'Current Officeholder · Executive Governance',
    initials: 'IA',
    photo: '/assets/aistudio/ishtiaque-sir-2025_updated_4d1bac13.webp',
    photoAlt: 'Ishtiaque Abedin, President of Official Bangladesh Kickboxing Association',
    bio: 'Leads institutional governance, National Sports Council (NSC) coordination, and international delegation strategy for the Official Bangladesh Kickboxing Association.',
  },
  {
    name: 'Shihan Mostafizur Rahman Mostafiz',
    role: 'Founder, General Secretary &  National Chief Coach',
    tenureNote: 'Founded Association in 1993 · Recognized by WAKO',
    initials: 'MR',
    photo: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_11.53.29_770813c7.jpeg',
    photoAlt:
      'Shihan Mostafizur Rahman Mostafiz, Founder, General Secretary, and WAKO-recognized National Chief Coach of Official Bangladesh Kickboxing Association',
    bio: 'Pioneer of kickboxing in Bangladesh who founded the association in 1993 and guided it to National Sports Council (NSC) recognition in 2010. Serving as General Secretary and WAKO-recognized Chief Coach, he directs national squad training, technical standards, and championship pathways.',
  },
];

export const RULE_DOCUMENTS: RuleDocument[] = [
  {
    id: 'wako-changes-2026-explanations',
    category: '2026 Rule Updates',
    title: '2026 WAKO Rule Changes — Executive Circular & Explanations',
    code: 'WAKO IF Board · Mar 20, 2026',
    effectiveLabel: 'Effective 2026 / Jan 1, 2027',
    pages: '1 page',
    summary:
      'Official summary of the 8 urgent WAKO IF Board decisions covering K1 Style clinch ban, IOC-aligned gender rules, national team nationality rules, dissident organization restrictions, seeding points, and veteran tatami age limits (max 45).',
    pdfPath: '/assets/aistudio/Change_of_rules_2026_-_Explanations_9e49fe0d.pdf',
  },
  {
    id: 'wako-k1-2026',
    category: '2026 Rule Updates',
    title: '2026 Rule Change — K1 Style Technical Regulations',
    code: 'K1 Style · Updated Rules',
    effectiveLabel: 'Effective Jan 1, 2027',
    pages: '3 pages',
    summary:
      'Updates K1 Style Article 4.3 and Article 5: clinching, holding, and supporting over an opponent are no longer permitted at any time, while knee techniques may now be executed without numerical limitation.',
    pdfPath: '/assets/aistudio/Changes_of_rules_2026_-_K1_Style_51242ed4.pdf',
  },
  {
    id: 'wako-gender-2026',
    category: '2026 Rule Updates',
    title: '2026 Rule Change — Gender Equality & Category Protection',
    code: 'Article 2.1.2 · IOC Alignment',
    effectiveLabel: 'Effective Immediately',
    pages: '3 pages',
    summary:
      'Establishes Article 2.1.2 harmonizing WAKO rules with the IOC Policy on the Protection of the Female Category, defining biological sex eligibility and mixed team exceptions exclusively for Musical Forms.',
    pdfPath: '/assets/aistudio/Changes_of_rules_2026_-_Gender_407ce9d9.pdf',
  },
  {
    id: 'wako-nationality-2026',
    category: '2026 Rule Updates',
    title: '2026 Rule Change — Nationality of Members & National Teams',
    code: 'Article 2.1.1 · RSportZ',
    effectiveLabel: 'Effective Immediately',
    pages: '3 pages',
    summary:
      'Defines passport-verified citizenship requirements for World & Continental Championships and multi-sport games under IOC Charter Rule 41, alongside RSportZ club registration rules for foreign residents.',
    pdfPath: '/assets/aistudio/Changes_of_rules_2026_-_Nationality_of_member_e86b58ad.pdf',
  },
  {
    id: 'wako-seeding-2026',
    category: '2026 Rule Updates',
    title: '2026 Rule Change — Drawing, Seeding & Ranking Lists',
    code: 'Article 3.8 · SportData',
    effectiveLabel: 'Effective Jan 1, 2026',
    pages: '3 pages',
    summary:
      'Details 2-year rolling ranking accumulation (100 pts World Champion, 70 pts Continental Champion, 4 pts per Championship win, 2 pts per International Open win) and Continental ranking list seeding.',
    pdfPath: '/assets/aistudio/Changes_of_rules_2026_-_Seeding_and_ranking_lists_2918bd32.pdf',
  },
  {
    id: 'wako-dissident-2026',
    category: '2026 Rule Updates',
    title: '2026 Rule Change — Participation & Third-Party Authorization',
    code: 'Article 5.2 · Governance',
    effectiveLabel: 'Effective Immediately',
    pages: '4 pages',
    summary:
      'Sets out WAKO sanctioning authority, prohibition of participation in unapproved dissident organizations, and transparent criteria for third-party event authorization and CAS dispute resolution.',
    pdfPath: '/assets/aistudio/Change_of_rules_2026_-_Participation_of_WAKO_members_in_other_dissident_organizations_07ea3db5.pdf',
  },
  {
    id: 'wako-master-rules',
    category: 'Core Rulebooks',
    title: 'WAKO Kickboxing Rules — Master Rulebook (Chapters 1–10 & Appendices)',
    code: 'Revision 3 · Master Text',
    effectiveLabel: 'Official Compendium',
    pages: '190 pages',
    summary:
      'Complete official rulebook covering General Rules, Tatami Rules, Point Fighting, Light Contact, Kick Light, Forms, Ring Rules, Full Contact, Low Kick, K1 Style, equipment dimensions, and official forms.',
    pdfPath: '/assets/aistudio/WAKO-Rules-25.10.2022.-revision-3__1__a9d1ce04.pdf',
  },
  {
    id: 'wako-parakickboxing',
    category: 'Core Rulebooks',
    title: 'Chapter 11 — Parakickboxing Rules & Classification Guide',
    code: 'Chapter 11 · Rev 0',
    effectiveLabel: 'Nov 29, 2024',
    pages: '14 pages',
    summary:
      'Official inclusive kickboxing framework governing athlete evaluation, sport classes (P1–P5, DI1–DI2, SDI1–SDI2, A1, V1–V2, M1–M2), and Pads competition scoring on 10m × 10m tatami.',
    pdfPath: '/assets/aistudio/Parakickboxing_rules_-_rev_0_b00fe8a0.pdf',
  },
  {
    id: 'wako-referee-rules',
    category: 'Core Rulebooks',
    title: 'WAKO Referee Rules & Official Hand Signals',
    code: 'Officiating Standards',
    effectiveLabel: 'Official Manual',
    pages: '50 pages',
    summary:
      'Comprehensive officiating regulations: Central Referee and Judge duties, neutrality protocols, electronic scoring systems, 15-minute protest procedure, A/B/C licensing grades, and visual hand signals.',
    pdfPath: '/assets/aistudio/WAKO-Referee-Rules-05.11.2020-1__1__fb0f4544.pdf',
  },
  {
    id: 'wako-board-presentation',
    category: 'Core Rulebooks',
    title: 'WAKO IF Board — New Rules Concept & Overview Presentation',
    code: 'Technical Director Deck',
    effectiveLabel: 'Reference Guide',
    pages: '16 slides',
    summary:
      'Visual structural guide summarizing unified warning scales (1 caution, 1 verbal warning, 4 official warnings), 2-minute medical stop limits, knock-down rules in tatami, and chapter organization.',
    pdfPath: '/assets/aistudio/WAKO-IF-Board-NEW-WAKO-RULES-presentation-RD-1__1__339fd65a.pdf',
  },
  {
    id: 'wako-medical-rules',
    category: 'Medical & Anti-Doping',
    title: 'WAKO Medical Rules & Mandatory Suspension Protocols',
    code: 'Version 3 · Medical',
    effectiveLabel: 'Medical Standards',
    pages: '23 pages',
    summary:
      'Pre-participation ECG and screening requirements, ringside ambulance and doctor staffing, KO/head-injury minimum suspension periods (30/90/180 days & 12 months), and medical clearance forms.',
    pdfPath: '/assets/aistudio/WAKO-Medical-Rules-v3-30012021-1__1__d07eaba5.pdf',
  },
  {
    id: 'wako-antidoping-rules',
    category: 'Medical & Anti-Doping',
    title: 'WAKO Anti-Doping Rules (WADA Code Compliant)',
    code: 'WADA Code · Clean Sport',
    effectiveLabel: 'In Force',
    pages: '81 pages',
    summary:
      'Full WADA-aligned anti-doping regulations governing Prohibited List compliance, Therapeutic Use Exemptions (TUEs), Registered Testing Pool whereabouts, sample analysis, and CAS appeals.',
    pdfPath: '/assets/aistudio/WAKO_Anti-Doping-Rules_v006-3__1__410b470b.pdf',
  },
];
