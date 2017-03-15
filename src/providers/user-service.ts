import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const USERS = [
  {
    "name": {
      "title": "mr",
      "first": "romain",
      "last": "hoogmoed"
    },
    "email": "romain.hoogmoed@example.com",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/83.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
    },
  },
  {
    "name": {
      "title": "mr",
      "first": "philip",
      "last": "madsen"
    },
    "email": "romain.hoogmoed@example.com",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/45.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/45.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
    },
  },
  {
    "name": {
      "title": "ms",
      "first": "josefa",
      "last": "ruiz"
    },
    "email": "romain.hoogmoed@example.com",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/84.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
    },
  },
  {
    "name": {
      "title": "mr",
      "first": "romain",
      "last": "hoogmoed"
    },
    "email": "romain.hoogmoed@example.com",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/83.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
    },
  },
  {
    "name": {
      "title": "mr",
      "first": "philip",
      "last": "madsen"
    },
    "email": "romain.hoogmoed@example.com",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/45.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/45.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
    },
  },
  {
    "name": {
      "title": "ms",
      "first": "josefa",
      "last": "ruiz"
    },
    "email": "romain.hoogmoed@example.com",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/84.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
    },
  },
];

@Injectable()
export class UserService {

  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  getALL(){
    return USERS;
  }

}
