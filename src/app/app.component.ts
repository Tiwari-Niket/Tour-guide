import { Component, OnInit } from '@angular/core';
import { TourService } from './tour.service';
import { CommonModule } from '@angular/common';
import { TourComponent } from './tour/tour.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TourComponent],
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.startTour(); 
  }

  startTour() {
    this.tourService.setSteps([
      { selector: '#step1', title: 'Step 1', description: 'This is the first step.' },
      { selector: '#step2', title: 'Step 2', description: 'This is the second step.' },
      { selector: '#step3', title: 'Step 3', description: 'This is the third step.' },
    ]);
  }
}
