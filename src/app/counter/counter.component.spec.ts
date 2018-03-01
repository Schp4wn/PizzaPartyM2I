import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a value', () => {
    const counter = new CounterComponent();
    expect(counter.value).toBe(0);
  });

  it('should have an increment/decrement method', () => {
    const counter = new CounterComponent();
    
    expect(component.increment).not.toBeNull();
    expect(component.decrement).not.toBeNull();
  });

  it('increment/decrement method should stay between 0 and 10', () => {
    const counter = new CounterComponent();

    counter.increment();
    expect(counter.value).toBe(1);

    counter.decrement();
    expect(counter.value).toBe(0);

    counter.decrement();
    expect(counter.value).toBe(0);
  
    counter.increment();
    expect(counter.value).toBe(1);

    counter.value = 10;
    counter.increment();
    expect(counter.value).toBe(10);
  });

  it('should increment when click on plus button', () => {
    const element = fixture.nativeElement;

    const button = element.querySelector('.btn-plus');
    expect(button).not.toBeNull('Il manque le bouton plus');
    button.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    const value = element.querySelector('span');
    expect(+value.textContent).toBe(1);
  });

  it('should increment when click on minus button', () => {
    const element = fixture.nativeElement;

    const button = element.querySelector('.btn-minus');
    expect(button).not.toBeNull('Il manque le bouton moins');
    button.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    const value = element.querySelector('span');
    expect(+value.textContent).toBe(0);
  });
});
