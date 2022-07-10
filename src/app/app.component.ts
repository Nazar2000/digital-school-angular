import {Component} from '@angular/core';
import {GlobalService} from "./core/services/global/global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digital-school-angular';

  constructor(public globalServices: GlobalService) {
    // this.globalServices.createUser().subscribe(res => {
    //   console.log(res);
    // });
    this.globalServices.getUsers().subscribe(res => {
      console.log(res);
    })
  }
}
