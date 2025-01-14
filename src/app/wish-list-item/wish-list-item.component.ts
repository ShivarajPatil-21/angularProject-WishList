import { Component,Input,Output,EventEmitter} from '@angular/core';
import { WishItem } from 'src/shared/models/withitems';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']

})
export class WishListItemComponent {
  @Input() wishText!:string;

  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  toggleFullfilled(){
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }

  get cssClasses(){
    return {'strikeout text-muted': this.fullfilled};
  }
}
