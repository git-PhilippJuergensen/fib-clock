import { Injectable } from '@angular/core';
import { min } from 'rxjs';
import { BlockComponent } from './block/block.component';
import { BlockColor } from './blockcolor';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private _combinations: Array<Array<any>> = [
      [[0],[1]],
      [[0,1],[2]],
      [[0,2],[1,2],[3]],
      [[0,1,2],[0,3],[1,3]],
      [[0,1,3],[2,3],[4]],
      [[0,2,3],[1,2,3],[0,4],[1,4]],
      [[0,1,2,3],[0,1,4],[2,4]],
      [[3,4],[0,2,4],[1,2,4]],
      [[0,3,4],[1,3,4]],
      [[2,3,4]],
      [[0,2,3,4],[1,2,3,4]],
      [[0,1,2,3,4]]
  ];

  constructor() { }

  public calculateTime(blocks: BlockComponent[], date: Date): BlockComponent[] {
    const hours = this.getHours(date.getHours());
    const minutes = this.getMinutes(date.getMinutes());

    this.getRandomCombination(hours).forEach((index) => {
      let block = blocks[index];
      blocks[index].color = this.getColorForBlock(block, true);
    });

    this.getRandomCombination(minutes).forEach((index) => {
      let block = blocks[index];
      blocks[index].color = this.getColorForBlock(block, false);
    });

    return blocks;
  }

  private getRandomCombination(time: number): Array<number> {
    const combinations = this._combinations[time];

    return combinations.length > 1 ? combinations[Math.floor(Math.random() * combinations.length)] : combinations[0];
  }

  private getHours(hours: number): number {
    console.error("hours", hours);
    return hours != 0 ? hours : 12;
  }

  private getMinutes(minutes: number): number {
    console.error("minutes", minutes);
    return Math.floor(minutes / 5);
  } 

  private getColorForBlock(block: BlockComponent, hoursTimeUnit: boolean): BlockColor {
    if (block.color == BlockColor.WHITE) {
      if (hoursTimeUnit) {
        return BlockColor.RED;
      }

      // minutes time unit
      return BlockColor.GREEN;
    } else {
      // color is red or green
      return BlockColor.BLUE;
    }
  }
}
