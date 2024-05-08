import { Component, OnInit,Output,Input, EventEmitter} from '@angular/core';
import { WishItem } from'src/shared/models/withitems';   

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit {
  @Output() addWish= new EventEmitter<WishItem>();

  constructor(){}

  ngOnInit(): void{

  }

  newWishText : string ='';
  
  addNewWish(){
    //add wish to items array
    //clear the text box
    this.addWish.emit(new WishItem(this.newWishText)); 
    this.newWishText='';
  }
}
