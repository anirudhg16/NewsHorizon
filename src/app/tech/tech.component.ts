import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {

  techNwsArr:any=[];
  constructor( private newsApiService:NewsApiService){}

  ngOnInit():void{
    this.newsApiService.techNews().subscribe(res=>{
      this.techNwsArr=res['articles'];
    })
  }

}
