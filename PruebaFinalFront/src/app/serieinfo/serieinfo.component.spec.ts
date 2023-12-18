import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieinfoComponent } from './serieinfo.component';

describe('SerieinfoComponent', () => {
  let component: SerieinfoComponent;
  let fixture: ComponentFixture<SerieinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerieinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
