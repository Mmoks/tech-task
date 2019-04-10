import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/features/shared';
import { UserDetailsFacades } from '../../user-details/user-details.facades';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  destroy$: Subject<boolean> = new Subject();

  constructor(
    private userDetailsFacades: UserDetailsFacades,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.user$ = this.userDetailsFacades.user$;
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = +params.get('id');
      return this.loadUser(id);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.userDetailsFacades.resetState();
  }

  loadUser(id: number): void {
    this.userDetailsFacades.loadUser(id);
  }

  back() {
    this.location.back();
  }
}
