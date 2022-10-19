import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // import form modules



@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {


  contactForm: FormGroup; // create a 'form group' object to manage each child controls
  sent: boolean;
  constructor(private builder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      name: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      email:  new FormControl('',  [Validators.email, Validators.required]), //add multiple validators w/ array
      message: '',
    })
  }

  submitContact() {
    // const formData = JSON.stringify(this.contactForm.value); // converts js object value into a json string


    // create object for the request body to parse
    let emailContent = {
      name: this.contactForm.controls['name'].value,
      subject: this.contactForm.controls['subject'].value,
      email: this.contactForm.controls['email'].value,
      message: this.contactForm.controls['message'].value
    }
    console.log(emailContent);
    
    this.http.post('http://localhost:3000/send', emailContent, {responseType: 'text'}).subscribe(response => {
      console.log(response);
     });
     this.contactForm.reset();
  }

  sentHandler() {
    if (this.sent = true) {
        console.log('Email Sent!');
    }
  }
}
