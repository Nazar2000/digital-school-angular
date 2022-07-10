import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges {
    @Input() inputSliderList: { title: string, description: string }[] = [];

    activeIndex = 0;
    sliderList: { title: string, description: string }[] = [];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.inputSliderList) {
            this.sliderList = this.inputSliderList;
        }
    }

    prevSlide(): void {
        this.activeIndex != 0 ? this.activeIndex-- : false;
    }

    nextSlide(): void {
        this.activeIndex != this.sliderList.length - 1 ? this.activeIndex++ : false;
    }
}
