import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { BlockColor } from '../blockcolor';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-fib-clock',
  templateUrl: './fib-clock.component.html',
  styleUrls: ['./fib-clock.component.css']
})
export class FibClockComponent implements OnInit, OnChanges {

  private _blocks: BlockComponent[] = [];

  constructor(private service: ClockService) { 
    this._blocks = [{
      blockId: 'block_1_up',
      color: BlockColor.WHITE,
      number: 1
    },{
      blockId: 'block_1_down',
      color: BlockColor.WHITE,
      number: 1
    },{
      blockId: 'block_2',
      color: BlockColor.WHITE,
      number: 2
    },{
      blockId: 'block_3',
      color: BlockColor.WHITE,
      number: 3
    },{
      blockId: 'block_5',
      color: BlockColor.WHITE,
      number: 5
    }];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['_blocks']) {
      
    }
  }

  ngOnInit(): void {
    this.setBlocks(this.service.calculateTime(this._blocks, new Date()));
    this._blocks.forEach(block => {
      block.colorCode = this.getColorCode(block);
    })
    console.error(this._blocks);
    
  }

  private getColorCode(block: BlockComponent): string {
    if (block.color == BlockColor.WHITE) {
      return '#fff';
    } else if (block.color == BlockColor.RED) {
      return '#F00';
    } else if (block.color == BlockColor.GREEN) {
      return '#000';
    }
    return '#FF0';
  }

  public getBlocks(): BlockComponent[] {
    return this._blocks;
  }

  public setBlocks(blocks: BlockComponent[]) {
    this._blocks = blocks;
  }

}
