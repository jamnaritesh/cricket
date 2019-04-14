import { Players } from './player';

export interface Team {
    _id: string
    players: Players
    played: number;
    won: number;
    lost: number;
    draw: number
}