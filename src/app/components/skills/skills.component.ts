import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Set up the progress bar animation once the view is initialized
    this.initProgressBars();
  }

  initProgressBars(): void {
    // Select all progress bars
    const progressBars = document.querySelectorAll('.skill-progress');
    
    // Set up intersection observer to check when progress bars are visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When progress bar is visible in viewport, get the progress bar element
          const progressBar = entry.target as HTMLElement;
          
          // Find the inner progress bar
          const bar = progressBar.querySelector('.progress-bar') as HTMLElement;
          
          // Get the percentage from the previous sibling (skill-info) element
          const percentageElement = progressBar.previousElementSibling?.querySelector('.skill-percentage');
          const percentage = percentageElement?.textContent || '0%';
          
          // Set the width as a CSS variable
          bar.style.setProperty('--percent', percentage);
          
          // Add animation class
          progressBar.classList.add('animate');
          
          // Unobserve after animation is triggered
          observer.unobserve(progressBar);
        }
      });
    }, {
      root: null,
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    
    // Observe each progress bar
    progressBars.forEach(progressBar => {
      observer.observe(progressBar);
    });
  }
}