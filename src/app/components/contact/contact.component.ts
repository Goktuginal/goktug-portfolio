import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  constructor() { }
  
  // You can add simple form handling logic here if needed
  // For example:
  
  submitForm(event: Event): void {
    event.preventDefault();
    
    // Get form data from DOM
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    // Do something with the data
    console.log({ name, email, subject, message });
    
    // Show an alert or update the UI to indicate success
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset the form
    form.reset();
  }
}