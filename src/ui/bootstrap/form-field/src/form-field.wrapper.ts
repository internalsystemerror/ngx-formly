import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-form-field',
  template: `
    <div class="mb-3" [class.form-floating]="to.floating" [class.has-error]="showError">
      <ng-template *ngIf="to.floating" #fieldComponent></ng-template>

      <label *ngIf="to.label && to.hideLabel !== true" [attr.for]="id" [class.form-label]="!to.floating">
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
      </label>

      <ng-template *ngIf="!to.floating" #fieldComponent></ng-template>

      <div *ngIf="showError" class="invalid-feedback" [style.display]="'block'">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>

      <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .form-floating .form-control {
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormField extends FieldWrapper {}
