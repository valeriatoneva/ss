import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-grid',
  imports: [IGX_GRID_DIRECTIVES],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindEmployees = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
