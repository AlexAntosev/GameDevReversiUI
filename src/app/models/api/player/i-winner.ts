import { IPlayer } from 'src/app/models/api/player/i-player';

export interface IWinner {
  winner: IPlayer;
  isWinnerPresent: boolean;
}
