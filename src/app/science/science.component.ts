import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent {
scienceNwsArr:any=[];
constructor(private newsApiService:NewsApiService){}
ngOnInit():void{
this.newsApiService.scienceNews().subscribe(res=>{
  this.scienceNwsArr=res['articles'];
})
}
}
