import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from 'src/app/features/shared';
import { MetaData } from '../../dashboard/dashboard.reducer';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  @Input() meta: MetaData;
  @Output() loadUsersHandler: EventEmitter<number> = new EventEmitter<number>();
  displayedColumns: string[] = ['avatar', 'name', 'lastname'];

  constructor() {}

  ngOnInit(): void {}

  loadUsers(page: number) {
    this.loadUsersHandler.emit(page);
  }
}
