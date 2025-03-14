/**
 * Mapping of CIN prefixes to regions
 */
export const REGION_PREFIXES: { [key: string]: string } = {
  // Rabat-Salé-Kénitra Region
  A: 'Rabat',
  AA: 'Rabat',
  AG: 'Rabat',
  AC: 'Rabat',
  AJ: 'Rabat',
  AB: 'Salé',
  AE: 'Salé',
  AY: 'Salé',
  AS: 'Salé',
  AD: 'Témara',
  G: 'Kénitra',
  GA: 'Sidi Slimane',
  GB: 'Souk El Arbâa du Gharb',
  GK: 'Sidi Kacem',
  GM: 'Ouezzane',
  GN: 'Mechraa Belqsiri',
  GJ: 'Jorf El Melha',

  // Casablanca-Settat Region
  B: 'Casablanca',
  BA: 'Casablanca',
  BB: 'Casablanca',
  BE: 'Casablanca',
  BH: 'Casablanca',
  BJ: 'Casablanca',
  BK: 'Casablanca',
  BL: 'Casablanca',
  BM: 'Casablanca',
  BF: 'Casablanca',
  BV: 'Casablanca',
  BW: 'Casablanca',
  T: 'Mohammedia',
  TA: 'Benslimane',
  TK: 'Benslimane',
  W: 'Settat',
  WA: 'Berrechid',
  WB: 'Ben Ahmed',

  // Fès-Meknès Region
  C: 'Fès',
  CC: 'Fès',
  CD: 'Fès',
  CB: 'Sefrou',
  CN: 'Boulemane',
  D: 'Meknès',
  DN: 'Meknès',
  DA: 'Azrou',
  DB: 'Ifrane',
  DC: 'Moulay Driss Zerhoun',
  DJ: 'Ain Taoujdate',
  DO: 'Ouislane',

  // Marrakech-Safi Region
  E: 'Marrakech',
  EE: 'Marrakech',
  EA: 'Ben Guerir',
  H: 'Safi',
  HH: 'Safi',
  HA: 'Youssoufia',
  Y: 'El Kelâa des Sraghna',

  // Tanger-Tétouan-Al Hoceïma Region
  K: 'Tanger',
  KB: 'Tanger',
  KA: 'Assilah',
  L: 'Tétouan',
  LA: 'Larache',
  LB: 'Ksar El Kebir',
  LC: 'Chefchaouen',
  LE: 'Martil',
  LF: 'Fnideq',
  LG: 'Mdiq',
  R: 'Al Hoceima',
  RB: 'Imzouren',
  RC: 'Targuist',
  RX: 'Beni Bouayach',

  // L'Oriental Region
  F: 'Oujda',
  FA: 'Berkane',
  FB: 'Taourirt',
  FD: 'Aïn Beni Mathar',
  FE: 'Saïdia',
  FG: 'Figuig',
  FH: 'Jerada',
  FJ: 'Ahfir',
  FK: 'Touissit',
  FL: 'Bouârfa',

  // Souss-Massa Region
  J: 'Agadir',
  JK: 'Agadir',
  JB: 'Inzegane',
  JC: 'Taroudant',
  JE: 'Tiznit',
  JH: 'Chtouka Aït Baha',
  JM: 'Ait Melloul',
  JT: 'Ouled Teima',

  // Béni Mellal-Khénifra Region
  I: 'Beni Mellal',
  IA: 'Kasba Tadla',
  IB: 'Fqih Ben Saleh',
  IC: 'Azilal',
  ID: 'Souk Sebt',
  IE: 'Demnate',
  V: 'Khenifra',
  VA: 'Midelt',
  VM: "M'rirt",

  // Other Regions
  M: 'El Jadida',
  MA: 'Azemmour',
  MC: 'Sidi Bennour',
  MD: 'Zemamra',
  N: 'Essaouira',
  O: 'Dakhla',
  OD: 'Dakhla',
  P: 'Ouarzazate',
  PA: 'Tinghir',
  PB: 'Zagora',
  Q: 'Khouribga',
  QA: 'Oued Zem',
  QB: 'Bejaâd',
  S: 'Nador',
  SA: 'Nador',
  SB: 'Zegangan',
  SH: 'Lâayoune',
  SJ: 'Smara',
  SK: 'Tarfaya',
  SL: 'Boujdour',
  U: 'Errachidia',
  UA: 'Goulmima',
  UB: 'Rich',
  UC: 'Erfoud',
  UD: 'Rissani',
  X: 'Khemisset',
  XA: 'Tiflet',
  Z: 'Taza',
  ZG: 'Guercif',
  ZH: 'Karia Ba Mohamed',
  ZT: 'Taounate',

  // MRE (Marocains Résidents à l'Étranger)
  BX: 'MRE',
  DF: 'MRE',
  PK: 'MRE',
  PP: 'MRE',
  PS: 'MRE',
  PH: 'MRE',
  PY: 'MRE',
  ES: 'MRE',

  // Additional/Updated entries
  FC: 'El Aioun Sidi Mellouk',
  JA: 'Guelmim',
  JD: 'Sidi Ifni',
  JF: 'Tan-Tan',
  JY: 'Tata',
  JZ: 'Assa-Zag',
};

export type CINRegionPrefix = keyof typeof REGION_PREFIXES;
