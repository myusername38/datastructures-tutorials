import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
    this.workHere();
  }
  /* Do your stuff heree */
  workHere() {
    let item = 0// <YOUR NUMBER>
    let itemArray = [1, 2, 3]// <YOUR NUMBER ARRAY>
    let itemArrayCopy = [...itemArray]; // a deep copy look this up if you don't know
    let itemMap = { a: 1, b: 2} //<YOUR MAP OF NUMBERS> -> { a: 1, b: 2 } like this
    this.changeItemValue(item);
    this.changeItemArray(itemArray);
    this.changeItemMap(itemMap);


    console.log({ item })
    console.log({ itemArray })
    console.log({ itemArrayCopy })
    console.log({ itemMap })
  }

  changeItemValue(item: number) {
    item += 1;
  }

  changeMessage(message: string) {
    message = message + ' there';
  }

  changeItemArray(items: number[])  {
    for (let i = 0; i < items.length; i++) {
      items[i] = items[i] + 1;
    }
  }

  changeItemMap(items: { [key: string]: number }) {
    Object.keys(items).forEach(item => {
      items[item] += 1; //looping through all the objects in the map and adding 1
    })
  }

  // after playing around this this watch this video
  // youtube.com/watch?v=hNR6fsksEu8
  // then play around with this
}
