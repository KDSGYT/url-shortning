import { Injectable } from '@angular/core';
import Axios from 'axios';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConvertUrlService {
  public newUrl = new BehaviorSubject('https://bit.ly/3yqkwBa')
  // public newUrl:Observable<string> = 'https://bit.ly/3yqkwBa';

  constructor() { }
  async getShortenedUrl(url:string) {
    await Axios.post('https://api-ssl.bitly.com/v4/shorten',{
      long_url: url,
    },{
      headers:{
        'Authorization': `Bearer ${environment.apiKey}`
      }
    }).then((res) => this.newUrl.next(res.data.link))
    .catch((err) => console.error(err.message))

  }

}
