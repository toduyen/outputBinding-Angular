import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticalComponent } from './list-artical.component';

describe('ListArticalComponent', () => {
  let component: ListArticalComponent;
  let fixture: ComponentFixture<ListArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
