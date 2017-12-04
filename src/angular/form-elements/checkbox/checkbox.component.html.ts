export default `
<div class="sdc-checkbox">
    <input type="checkbox" class="sdc-checkbox__input" [ngModel]="checked" (ngModelChange)="toggleState($event)" [disabled]="disabled" >
    <label class="sdc-checkbox__label" *ngIf="label" >{{ label }}</label>
</div>
`;
