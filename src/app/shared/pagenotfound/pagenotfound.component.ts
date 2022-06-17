import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnMain(){
    this.router.navigate(['tasks']);
  }
}
