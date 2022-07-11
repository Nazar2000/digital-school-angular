import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    sliderList = [{
        title: 'Електронний журнал',
        description: 'Електронний журнал - це цифровий та зручний спосіб оцінювання учнів для вчителів, які хочуть спростити робочі будні',
    }, {
        title: 'Розклад занять',
        description: 'Розклад занять - це можливість тримати список зянять постійно "під рукою", не тільки для вчителів, а й для батьків.',
    }, {
        title: 'Електронний щоденник',
        description: 'Електронний щоденник - це оцифрована та інноваційна можливість ... ',
    }]

    constructor() {
    }

    ngOnInit(): void {
    }


}
