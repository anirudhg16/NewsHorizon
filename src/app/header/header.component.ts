import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (private newsApiService:NewsApiService){}

  headerDisplay:any=[];

  ngOnInit():void
  {
    this.newsApiService.Header().subscribe((res)=>{
      
      this.headerDisplay=res['articles'];
    })
  }

}
