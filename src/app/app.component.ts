import {Component, OnInit} from '@angular/core';
import { ConfigService } from './config.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-test';

  constructor(private configService: ConfigService, private titleService: Title) { }

  public setTitle(newTitle: string): any {
    this.titleService.setTitle(newTitle);
  }

  getBooks(): ({ subtitle: string; title: string })[] {
    return this.configService.getConfig();
  }
}
