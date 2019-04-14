import { BattingScorecard } from './battingscorecard';
import { BowlingScorecard } from './bowlingscorecard';

export interface Scorecard{
    batting: BattingScorecard;
    bowling: BowlingScorecard
}