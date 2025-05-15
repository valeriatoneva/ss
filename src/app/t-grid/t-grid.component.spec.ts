import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_TREE_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { TGridComponent } from './t-grid.component';

describe('TGridComponent', () => {
  let component: TGridComponent;
  let fixture: ComponentFixture<TGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TGridComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_TREE_GRID_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
