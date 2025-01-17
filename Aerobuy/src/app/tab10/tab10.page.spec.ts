import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab10Page } from './tab10.page';

describe('Tab10Page', () => {
  let component: Tab10Page;
  let fixture: ComponentFixture<Tab10Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab10Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});