import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab17Page } from './tab17.page';

describe('Tab17Page', () => {
  let component: Tab17Page;
  let fixture: ComponentFixture<Tab17Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab17Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
