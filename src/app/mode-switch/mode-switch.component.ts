import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/theme.service';
@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss']
})
export class ModeSwitchComponent implements OnInit, OnDestroy{

  constructor(private ThemeService:ThemeService) { }

  changeMode = this.ThemeService.switchMode;
  public darkMode:boolean = this.ThemeService.darkmode.value;
  ngOnInit(): void {
    this.ThemeService.darkmode.subscribe(value => this.darkMode = value)
  }
  ngOnDestroy():void {
    this.ThemeService.darkmode.unsubscribe()
  }

}
