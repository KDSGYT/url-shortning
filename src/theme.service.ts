import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  constructor() { }

  public darkmode = new BehaviorSubject(true);
  switchMode = () => {
    this.darkmode.next(!this.darkmode.value);
    console.log(this.darkmode.value)
  }
}
