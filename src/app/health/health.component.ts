import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent {
healthNwsArr:any=[];
constructor(private newsApiService:NewsApiService){}
ngOnInit():void{
  this.newsApiService.healthNews().subscribe(res=>{
    this.healthNwsArr=res['articles'];
  })
}
}
