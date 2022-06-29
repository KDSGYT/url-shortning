import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../assets/customClasses.scss']
})
export class NavbarComponent implements OnInit , OnDestroy{

  constructor(private ThemeService: ThemeService) { }
  public darkMode:boolean = false

  ngOnInit(): void {
    this.ThemeService.darkmode.subscribe(value => this.darkMode = value)
  }
  ngOnDestroy(): void {
    this.ThemeService.darkmode.unsubscribe();
  }

}
