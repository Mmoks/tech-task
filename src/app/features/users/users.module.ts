import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing-module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard/dashboard.effects';
import { UserDetailsEffects } from './user-details/user-details.effects';
import { StoreModule } from '@ngrx/store';
import { reducerToken, reducerProvider } from './reducers';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    EffectsModule.forFeature([DashboardEffects, UserDetailsEffects]),
    StoreModule.forFeature('users', reducerToken),
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [reducerProvider],
  declarations: [
    DashboardComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserInfoComponent,
  ],
})
export class UsersModule {}
