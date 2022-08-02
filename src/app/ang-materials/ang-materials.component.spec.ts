import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialsComponent } from './ang-materials.component';

describe('AngMaterialsComponent', () => {
  let component: AngMaterialsComponent;
  let fixture: ComponentFixture<AngMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
