import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BlockColor } from '../blockcolor';

@Component({
  selector: 'block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {

  @HostBinding('style.background-color') colorCode?: string;

  @Input() blockId!: string;
  @Input() color!: BlockColor;
  @Input() number!: number;

}
