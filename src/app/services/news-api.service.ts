import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor( private http:HttpClient) { }
  
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=04aebae244dd4df788a3cd3b45c50a00";
  techNewsUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=04aebae244dd4df788a3cd3b45c50a00";
  businessNewsUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=04aebae244dd4df788a3cd3b45c50a00";
  sportNewsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=04aebae244dd4df788a3cd3b45c50a00";
  entertainmentNewsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=04aebae244dd4df788a3cd3b45c50a00";
  healthNewsUrl="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=04aebae244dd4df788a3cd3b45c50a00";
  scienceNewsUrl= "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=04aebae244dd4df788a3cd3b45c50a00";

  Header(){
    return this.http.get(this.newsApiUrl);
  }
  techNews(){
    return this.http.get(this.techNewsUrl);
  }
  businessNews(){
    return this.http.get(this.businessNewsUrl);
  }
  sportNews(){
    return this.http.get(this.sportNewsUrl);
  }
  entertainmentNews(){
    return this.http.get(this.entertainmentNewsUrl);
  }
  healthNews(){
    return this.http.get(this.healthNewsUrl);
  }
  scienceNews(){
    return this.http.get(this.scienceNewsUrl);
  }
}
