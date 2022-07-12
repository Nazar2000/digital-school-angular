import {NgModule} from '@angular/core';

import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
    declarations: [
        DashboardComponent,
        SidebarComponent,
        DashboardTableComponent
    ],
    imports: [
        DashboardRoutingModule,
        SharedModule,
        CommonModule,
        MatSidenavModule
    ],
    providers: [],
})
export class DashboardModule {
}
