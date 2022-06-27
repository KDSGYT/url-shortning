import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConvertUrlService } from '../convert-url.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit,OnDestroy {

  constructor(private URLService: ConvertUrlService) { }
  public output: string = this.URLService.newUrl.getValue();
  ngOnInit(): void {
    this.URLService.newUrl.subscribe(value => this.output = value);
  }

  public copyLinkToClipboard() {
    navigator.clipboard.writeText(this.output)
    alert('Copied to clipboard!!!')
  }

  ngOnDestroy(): void {
    this.URLService.newUrl.unsubscribe();
  }

}
