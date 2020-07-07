import { Component, OnInit, Input } from '@angular/core';
import { QuestionControlService } from 'src/app/services/question-control.service';
import { QuestionBase } from 'src/app/models/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payload = '';

  constructor(
    private questionControlService: QuestionControlService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.payload = JSON.stringify(this.form.getRawValue());
  }

}
