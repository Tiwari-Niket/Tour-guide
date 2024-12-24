import { Component, OnInit } from '@angular/core';
import { TourService } from '.././tour.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour.component.html',
  styleUrls: ["./tour.component.scss"],
})
export class TourComponent implements OnInit {
  currentStep: { selector: string; title: string; description: string } | null = null;
  boxPosition = { top: 0, left: 0 };

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.updateStep();
  }

  updateStep() {
    this.currentStep = this.tourService.getCurrentStep();
    if (this.currentStep) {
      const element = document.querySelector(this.currentStep.selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        this.boxPosition = {
          top: rect.top + window.scrollY + rect.height + 10,
          left: rect.left + window.scrollX,
        };
      }
    }
  }

  next() {
    this.tourService.nextStep();
    this.updateStep();
  }

  previous() {
    this.tourService.previousStep();
    this.updateStep();
  }

  endTour() {
    this.currentStep = null;
  }

  isFirstStep() {
    return this.tourService.isFirstStep();
  }

  isLastStep() {
    return this.tourService.isLastStep();
  }
}
