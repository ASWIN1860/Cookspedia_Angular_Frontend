import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminRecipelist } from './admin-recipelist/admin-recipelist';
import { AdminUsers } from './admin-users/admin-users';
import { AdminFeedbacks } from './admin-feedbacks/admin-feedbacks';
import { AdminAddrecipe } from './admin-addrecipe/admin-addrecipe';
import { AdminSidebar } from './admin-sidebar/admin-sidebar';
import { RouterLink } from '@angular/router';
import { HighchartsChartComponent } from 'highcharts-angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminDashboard,
    AdminRecipelist,
    AdminUsers,
    AdminFeedbacks,
    AdminAddrecipe,
    AdminSidebar,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterLink,
    HighchartsChartComponent,
    MatDatepickerModule,
    MatCardModule,
    SearchPipe,
    FormsModule
  ]
})
export class AdminModule { }
