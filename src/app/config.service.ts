import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  books = [
    {
      title: 'Java ist eine Insel',
      subtitle: 'Java 6 Buch',
    },
    {
      title: 'Handbuch der Chipkarten',
      subtitle: 'Die Chipkarten Bibel',
    },
    {
      title: 'CSS',
      subtitle: 'Das CSS Buch',
    },
  ];

  constructor() {
  }

  getConfig(): ({ subtitle: string; title: string })[] {
    return this.books;
  }

}
