import { MatchScoreCard } from './matchScorecard';

export interface Match{
    _id: string
    team1Name: string
    team2Name: string
    team1: string;
    team2: string;
    team1Bets: number;
    team2Bets: number;
    date: Date;
    won: string;
    live: boolean;
    matchScorecard: MatchScoreCard
}