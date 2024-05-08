import { Component,OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/withitems';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items:WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Cofee',true),
    new WishItem('Find Grass that cuts itself')
  ];
  ngOnInit(): void {
    console.log(this.filtar);
  }
  filtar:any =()=>{};

  //we're using get instead of normal variable 'cause we're modifying the incoming 
  //variable and then using it, so using get lets us use it as a variable
  
}
