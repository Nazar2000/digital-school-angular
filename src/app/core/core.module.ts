import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

/**
 *
 * [CoreModule]:
 * - global/HTTP services (only one instance of those services will be created across the entire app)
 * - important single use components/classes
 * - export any third party module that is required in the HomeModule
 *
 * Important note:
 * Import CoreModule ONLY in the main HomeModule, not in the Feature Modules.
 */

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  providers: [],
  exports: [
    BrowserAnimationsModule,
    RouterModule,
  ]
})
export class CoreModule {
}
