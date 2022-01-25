import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticalComponent } from './detail-artical.component';

describe('DetailArticalComponent', () => {
  let component: DetailArticalComponent;
  let fixture: ComponentFixture<DetailArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
