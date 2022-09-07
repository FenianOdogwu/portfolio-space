import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // import form modules



@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {


  contactForm: FormGroup; // create a 'form group' object to manage each child controls
  dest: string;
  constructor(private builder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      uname: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.email],
      message: '',
    })
  }

  submitContact() {
    const formData = JSON.stringify(this.contactForm.value); // converts js object value into a json string

    this.http.post('https://portfolio-backend-space-default-rtdb.europe-west1.firebasedatabase.app/.json', formData).subscribe(response => {
      console.log(response);
     });
     console.log(formData);

  }
}
