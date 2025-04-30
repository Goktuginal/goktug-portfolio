import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>Göktuğ İnal</h1>
            <h2>Software Engineer</h2>
            <p class="lead">Specializing in AI, Machine Learning & Full-Stack Development</p>
            <div class="mt-4">
              <a href="#contact" class="btn btn-primary me-3">Contact Me</a>
              <a href="#projects" class="btn btn-outline-light">View Projects</a>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <img src="assets/profile-image.jpg" alt="Profile" class="profile-image">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      padding: 120px 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #4299e1;
    }
    .profile-image {
      max-width: 80%;
      border-radius: 50%;
      border: 5px solid rgba(255,255,255,0.2);
    }
  `]
})
export class HeroComponent {}
