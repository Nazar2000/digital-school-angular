import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {SliderComponent} from './slider/slider.component';
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
        HeaderComponent,
        SliderComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [],
    exports: [
        HeaderComponent,
        MatIconModule,
        MatButtonModule,
        SliderComponent,
    ]
})
export class SharedModule {
}
