import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home-main-2',
  templateUrl: './home-main-2.component.html',
  styleUrl: './home-main-2.component.scss'
})
export class HomeMain2Component {
  newsData: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(([chinaData, russiaData, indiaData]) => {
      this.newsData.push(...chinaData.articles, ...russiaData.articles, ...indiaData.articles);
    });
  }
}
