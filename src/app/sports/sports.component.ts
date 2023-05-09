import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent {
sportsNewsArr:any=[];
constructor(private newsApiService:NewsApiService){}
ngOnInit():void{
  this.newsApiService.sportNews().subscribe(res=>{
    this.sportsNewsArr=res['articles'];
  })
}
}
