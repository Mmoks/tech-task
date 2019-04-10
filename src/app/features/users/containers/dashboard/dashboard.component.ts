import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/features/shared';
import { DashboardFacades } from '../../dashboard/dashboard.facades';
import { MetaData } from '../../dashboard/dashboard.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  users$: Observable<User[]>;
  meta$: Observable<MetaData>;
  loading$: Observable<boolean>;

  constructor(private dashboardFacades: DashboardFacades) {
    this.users$ = this.dashboardFacades.users$;
    this.meta$ = this.dashboardFacades.meta$;
    this.loading$ = this.dashboardFacades.loading$;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(page = 1): void {
    this.dashboardFacades.loadUsers(page);
  }
}
