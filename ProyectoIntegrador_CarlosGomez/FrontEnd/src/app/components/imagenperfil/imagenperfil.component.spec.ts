import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenperfilComponent } from './imagenperfil.component';

describe('ImagenperfilComponent', () => {
  let component: ImagenperfilComponent;
  let fixture: ComponentFixture<ImagenperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
