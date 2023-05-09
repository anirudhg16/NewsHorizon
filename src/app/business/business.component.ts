import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
  businessNwsArr:any =[];

  constructor(private newsService:NewsApiService ){}

  ngOnInit():void{
    this.newsService.businessNews().subscribe(res=>{
      this.businessNwsArr=res['articles'];
    })
  }
}
