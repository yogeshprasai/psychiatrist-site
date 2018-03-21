import { Component, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  collapse: boolean = true;
  isClickedBoolean;
  
  constructor(private el: ElementRef, private renderer: Renderer, private router: Router) {
    }

    goToHome(page){
      this.router.navigate(page);
    }


  
}
