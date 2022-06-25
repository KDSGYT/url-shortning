import { Component, OnInit } from '@angular/core';
import { ConvertUrlService } from '../convert-url.service';

@Component({
  selector: 'app-long-url-input',
  templateUrl: './long-url-input.component.html',
  styleUrls: ['./long-url-input.component.scss']
})
export class LongUrlInputComponent implements OnInit {

  public placeholderUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=43s';
  constructor(private URLService:ConvertUrlService) { 
  }

  
  shortenURL = (longUrl:string) =>{
    this.URLService.getShortenedUrl(longUrl)
  }

  ngOnInit(): void {
  }

}
