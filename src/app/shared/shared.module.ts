import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {SliderComponent} from './slider/slider.component';
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        HeaderComponent,
        SliderComponent,
        FooterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        HeaderComponent,
        MatIconModule,
        MatButtonModule,
        SliderComponent,
        FooterComponent,
    ]
})
export class SharedModule {
}
