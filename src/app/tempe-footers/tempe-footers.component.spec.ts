/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TempeFootersComponent } from './tempe-footers.component';

describe('TempeFootersComponent', () => {
  let component: TempeFootersComponent;
  let fixture: ComponentFixture<TempeFootersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempeFootersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempeFootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
