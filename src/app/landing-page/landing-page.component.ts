import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  userEmail: string = 'me@my-house.com';
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  onContinue() {
    this.router.navigateByUrl('facesnaps');
}
onSubmit() {
  console.log(this.userEmail);
}
onSubmitForm(form: NgForm) {//Le type  NgForm  expose un attribut  value  qui correspond à un objet contenant les champs du formulaire avec leur attribut  name  et les valeurs contenues dans ces champs.
  console.log(form.value);
}
}
