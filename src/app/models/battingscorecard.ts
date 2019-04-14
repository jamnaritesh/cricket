export interface BattingRecord{
    player: string
    R: number;
    B: number;
    "4s": number;
    "6s": number;
    "S/R": number;
    wicket: string;
}

export interface BattingScorecard{
    records: BattingRecord[];
    extras: number
}