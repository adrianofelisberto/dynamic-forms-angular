import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './models/question-base';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h2>Study Angular Dynamic Forms</h2>
    <app-dynamic-form [questions]="question$ | async"></app-dynamic-form>
  </div>
  `,
  providers: [QuestionService]
})
export class AppComponent {
  question$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.question$ = service.getQuestions();
  }
}
