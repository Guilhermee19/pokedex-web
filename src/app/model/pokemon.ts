export interface IPokemon {
  id: string;
  formId: string;
  dexNr: number;
  generation: number;
  names: Names;
  stats: Stats;
  primaryType: PrimaryType;
  secondaryType: SecondaryType | undefined;
  pokemonClass: any;
  quickMoves: QuickMoves;
  cinematicMoves: CinematicMoves;
  eliteQuickMoves: any[];
  eliteCinematicMoves: any[];
  assets: Assets;
  regionForms: any[];
  evolutions: Evolutions[];
  hasMegaEvolution: boolean;
  megaEvolutions: any[];
  assetForms: AssetForms[];
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Stats {
  stamina: number;
  attack: number;
  defense: number;
}

export interface PrimaryType {
  type: string;
  names: Names;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface SecondaryType {
  type: string;
  names: Names;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface QuickMoves {
  VINE_WHIP_FAST: VINE_WHIP_FAST;
  TACKLE_FAST: TACKLE_FAST;
}

export interface VINE_WHIP_FAST {
  id: string;
  power: number;
  energy: number;
  durationMs: number;
  type: Type;
  names: Names;
  combat: Combat;
}

export interface Type {
  type: string;
  names: Names;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Combat {
  energy: number;
  power: number;
  turns: number;
  buffs: any;
}

export interface TACKLE_FAST {
  id: string;
  power: number;
  energy: number;
  durationMs: number;
  type: Type;
  names: Names;
  combat: Combat;
}

export interface Type {
  type: string;
  names: Names;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Combat {
  energy: number;
  power: number;
  turns: number;
  buffs: any;
}

export interface CinematicMoves {
  SLUDGE_BOMB: SLUDGE_BOMB;
  SEED_BOMB: SEED_BOMB;
  POWER_WHIP: POWER_WHIP;
}

export interface SLUDGE_BOMB {
  id: string;
  power: number;
  energy: number;
  durationMs: number;
  type: Type;
  names: Names;
  combat: Combat;
}

export interface Type {
  type: string;
  names: Names;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Combat {
  energy: number;
  power: number;
  turns: number;
  buffs: any;
}

export interface SEED_BOMB {
  id: string;
  power: number;
  energy: number;
  durationMs: number;
  type: Type;
  names: Names;
  combat: Combat;
}

export interface Type {
  type: string;
  names: Names;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Combat {
  energy: number;
  power: number;
  turns: number;
  buffs: any;
}

export interface POWER_WHIP {
  id: string;
  power: number;
  energy: number;
  durationMs: number;
  type: Type;
  names: Names;
  combat: Combat;
}

export interface Type {
  type: string;
  names: Names;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Names {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}

export interface Combat {
  energy: number;
  power: number;
  turns: number;
  buffs: any;
}

export interface Assets {
  image: string;
  shinyImage: string;
}

export interface Evolutions {
  id: string;
  formId: string;
  candies: number;
  item: any;
  quests: any[];
}

export interface AssetForms {
  form: any;
  costume: string;
  isFemale: boolean;
  image: string;
  shinyImage: string;
}
