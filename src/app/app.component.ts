import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'dashboard';

  users;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }
}
