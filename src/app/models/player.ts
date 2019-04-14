import { BattingRecord } from './battingscorecard';
import { BowlingRecord } from './bowlingscorecard';

export interface Players{
    name: string;
    gender:("M" | "F")
    battingRecord: BattingRecord[];
    bowlingRecord: BowlingRecord[];
    teamName: string;
    team_id: string
}
