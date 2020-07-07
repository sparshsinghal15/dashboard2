import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  USERS = [
    {
      title: "01.jpeg",
      name: "Albert Einstein",
      college: "IIT Kanpur",
      phone: "+91 9234567890",
      submission: "https://www.google.com/"
    },
    {
      title: "02.jpg",
      name: "Galileo Galilei",
      college: "IIT Delhi",
      phone: "+91 9234567890",
      submission: "https://www.google.com/"
    },
    {
      title: "03.jpg",
      name: "Isaac Newton",
      college: "IIT Kharagpur",
      phone: "+91 9234567890",
      submission: "https://www.google.com/"
    }
  ]
  constructor() { }

  getUsers() {
    return this.USERS ;
  }
}
