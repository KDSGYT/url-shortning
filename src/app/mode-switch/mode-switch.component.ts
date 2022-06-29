import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/theme.service';
@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss']
})
export class ModeSwitchComponent implements OnInit {

  constructor(private ThemeService:ThemeService) { }

  changeMode = this.ThemeService.switchMode;
  
  ngOnInit(): void {
  }

}
