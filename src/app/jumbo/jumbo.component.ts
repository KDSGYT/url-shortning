import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/theme.service';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.scss']
})
export class JumboComponent implements OnInit {

  constructor(private ThemeService: ThemeService) { }

  changeMode = this.ThemeService.switchMode;
  public darkMode:boolean = this.ThemeService.darkmode.value;
  ngOnInit(): void {
    this.ThemeService.darkmode.subscribe(value => this.darkMode = value)
  }
  ngOnDestroy():void {
    this.ThemeService.darkmode.unsubscribe()
  }

}
