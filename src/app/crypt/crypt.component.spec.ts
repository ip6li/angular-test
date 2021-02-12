import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptComponent } from './crypt.component';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

describe('CryptComponent', () => {
  let component: CryptComponent;
  let fixture: ComponentFixture<CryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const waitUntil = async (untilTruthy: () => any): Promise<boolean> => {
    while (!untilTruthy()) {
      await interval(25).pipe(take(1)).toPromise();
    }
    return Promise.resolve(true);
  };

  it('should create', async (done) => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    await fixture.whenStable();
    const b = await waitUntil(() => {
      console.log('random: %o', component.random);
      done();
    });
    expect(b).toBeDefined();
  });

});
