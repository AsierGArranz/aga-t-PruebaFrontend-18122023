import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculainfoComponent } from './peliculainfo.component';

describe('PeliculainfoComponent', () => {
  let component: PeliculainfoComponent;
  let fixture: ComponentFixture<PeliculainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculainfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
