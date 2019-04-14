export interface BowlingRecord{
    O: number;
    M: number;
    R: number;
    W: number;
    Econ: number;
    player: string
}

export interface BowlingScorecard{
    records: BowlingRecord[];
}