import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginPage } from './singin-page';

describe('SinginPage', () => {
  let component: SinginPage;
  let fixture: ComponentFixture<SinginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinginPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SinginPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
