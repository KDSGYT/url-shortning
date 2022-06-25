import { Injectable } from '@angular/core';
import Axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConvertUrlService {

  constructor() { }
  async getShortenedUrl(url:string) {
    await Axios.post('https://api-ssl.bitly.com/v4/shorten',{
      long_url: url,
    },{
      headers:{
        'Authorization': `Bearer ${environment.apiKey}`
      }
    }).then((res) => console.log(res.data))
    .catch((err) => console.error(err.message))

  }

}
