import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/customClasses.scss']
})
export class AppComponent implements OnInit {
  title = 'drop.je';
  public darkMode = this.ThemeService.darkmode.value;
  constructor(private ThemeService: ThemeService) {
    console.log(this.darkMode);
  }
  ngOnInit(): void {
    this.ThemeService.darkmode.subscribe(value => this.darkMode = this.ThemeService.darkmode.value)
  }



}
