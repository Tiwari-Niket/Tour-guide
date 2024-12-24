import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private steps: { selector: string; title: string; description: string }[] = [];
  private currentStepIndex = 0;

  setSteps(steps: { selector: string; title: string; description: string }[]) {
    this.steps = steps;
    this.currentStepIndex = 0;
  }

  getCurrentStep() {
    return this.steps[this.currentStepIndex];
  }

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  isFirstStep() {
    return this.currentStepIndex === 0;
  }

  isLastStep() {
    return this.currentStepIndex === this.steps.length - 1;
  }
}
