import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Captain America' },
      { id: 2, name: 'Thor' },
      { id: 3, name: 'Iron Man' },
      { id: 4, name: 'Hulk' },
      { id: 5, name: 'Black Widow' },
      { id: 6, name: 'Hawkeye' },
      { id: 7, name: 'Spiderman' },
      { id: 8, name: 'Groot' },
      { id: 9, name: 'StarLord' }
    ];
    return {heroes};
  }
}