import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss']
})
export class ModeSwitchComponent implements OnInit {

  constructor() { }

  changeMode =  () => {
    console.log("Changed the mode to dark or light when clicked.")
  }

  ngOnInit(): void {
  }

}
