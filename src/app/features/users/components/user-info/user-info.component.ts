import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'src/app/features/shared';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  @Output() loadUserHandler: EventEmitter<number> = new EventEmitter<number>();

  constructor(private location: Location) {}

  ngOnInit(): void {}

  loadUser(id: number): void {
    this.loadUserHandler.emit(id);
  }

  back() {
    this.location.back();
  }
}
