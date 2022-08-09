export interface BodyInfo {
  eyesColor: EyesColor;
  measures?: Measure;
  heigth: number;
  bioType: string; // TODO: ADD BIOTYPE
  skin: string; // TODO: ADD SKIN TYPE
}

export interface Measure {
  tits: number;
  waist: number;
  butt: number;
}

export type EyesColor = 'Brown' | 'Blue' | 'Green' | 'Black';