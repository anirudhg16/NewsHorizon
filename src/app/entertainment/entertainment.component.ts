import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent {
constructor( private newsService: NewsApiService){}
entertainmentNwsArr:any=[];
ngOnInit():void{
  this.newsService.entertainmentNews().subscribe(res=>{
    this.entertainmentNwsArr=res['articles'];
  })
}
}
