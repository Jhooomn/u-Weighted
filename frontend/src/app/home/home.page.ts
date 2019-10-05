import { Component } from '@angular/core';
import { User } from '../model/user/user';
import { Subject } from '../model/subject/subject';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User = new User();

  subject1: Subject = new Subject();
  subject2: Subject = new Subject();
  subject3: Subject = new Subject();
  subject4: Subject = new Subject();
  subject5: Subject = new Subject();
  subject6: Subject = new Subject();

  totalWeighted: number;
  totalCredits: number;
  weighted: number;
  constructor() { }

  myWeighted() {
    this.user.subject = [
      {
        name: this.subject1.name,
        credits: this.subject1.credits,
        note: this.subject1.note
      },
      {
        name: this.subject2.name,
        credits: this.subject2.credits,
        note: this.subject2.note
      },
      {
        name: this.subject3.name,
        credits: this.subject3.credits,
        note: this.subject3.note
      },
      {
        name: this.subject4.name,
        credits: this.subject5.credits,
        note: this.subject5.note
      },
      {
        name: this.subject5.name,
        credits: this.subject5.credits,
        note: this.subject5.note
      },
      {
        name: this.subject6.name,
        credits: this.subject6.credits,
        note: this.subject6.note
      }
    ];

    this.totalWeighted = ((this.subject1.note * this.subject1.credits) +
      (this.subject2.note * this.subject2.credits) + (this.subject3.note * this.subject3.credits) +
      (this.subject4.note * this.subject4.credits) + (this.subject5.note * this.subject5.credits) +
      (this.subject6.note * this.subject6.credits));

    this.totalCredits = ((this.subject1.credits) + (this.subject2.credits) +
      (this.subject3.credits) + (this.subject4.credits) + (this.subject5.credits) +
      (this.subject6.credits));

    this.weighted = this.totalWeighted / this.totalCredits;


  }




}
