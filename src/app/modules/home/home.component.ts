import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    sliderList = [{
        title: 'Електронний журнал',
        description: '',
    }, {
        title: 'Розклад занять',
        description: '',
    }, {
        title: 'Електронний щоденник',
        description: '',
    }]

    constructor() {
    }

    ngOnInit(): void {
    }


}
