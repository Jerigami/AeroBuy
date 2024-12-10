import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab16Page } from './tab16.page';

describe('Tab16Page', () => {
  let component: Tab16Page;
  let fixture: ComponentFixture<Tab16Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab16Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
