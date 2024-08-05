import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioSectionComponent } from './porfolio-section.component';

describe('PorfolioSectionComponent', () => {
  let component: PorfolioSectionComponent;
  let fixture: ComponentFixture<PorfolioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorfolioSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
