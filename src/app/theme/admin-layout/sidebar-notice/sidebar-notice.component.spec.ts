import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNoticeComponent } from './sidebar-notice.component';

describe('SidebarNoticeComponent', () => {
  let component: SidebarNoticeComponent;
  let fixture: ComponentFixture<SidebarNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
