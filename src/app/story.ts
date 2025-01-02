export interface Story {
  title: string;
  /** original story point */
  orgSp: number;
  /** story point for the scale */
  sp?: number;
  link?: string;
  y?: number;
}
