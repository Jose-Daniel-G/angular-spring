import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaFormComponent } from './create.component';


describe('PersonaFormComponent', () => {
  let component: PersonaFormComponent;
  let fixture: ComponentFixture<PersonaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
