import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { pairwise } from 'rxjs/internal/operators/pairwise';

@Component({
  selector: 'mcs-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {

    @ViewChild('previewCard') previewCard: ElementRef;
    creditCardForm: FormGroup;

    CREDIT_CARD_NUMBER_LENGTH = 16;
    EXPIRATION_DATE_LENGTH = 5;
    CARD_NAME_MAX_LENGTH = 30;
    CVV_LENGTH = 3;

    remainingCardNumbers: number = this.CREDIT_CARD_NUMBER_LENGTH;
    remainingExpirationDateNumbers: number = this.EXPIRATION_DATE_LENGTH;
    remainingCVVNumbers: number = this.CVV_LENGTH;
    counter = Array;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.creditCardForm = this.fb.group({
            number: [''],
            name: [''],
            expirationDate: [''],
            cvv: ['']
        });

        this.onChanges();
    }

    onChanges(): void {
        this.creditCardForm.get('number').valueChanges.subscribe(newNumber => {
            this.remainingCardNumbers = this.CREDIT_CARD_NUMBER_LENGTH - newNumber.length;
        });

        this.creditCardForm.get('expirationDate').valueChanges.subscribe(newExpirationDate => {
            this.remainingExpirationDateNumbers = this.EXPIRATION_DATE_LENGTH - newExpirationDate.length;
        });

        this.creditCardForm.get('cvv').valueChanges.subscribe(newCVV => {
            this.remainingCVVNumbers = this.CVV_LENGTH - newCVV.length;
        });

        this.creditCardForm.get('expirationDate')
            .valueChanges
            .pipe(pairwise())
            .subscribe(([prevExpirationDate, newExpirationDate]: [string, string]) => {
                if (prevExpirationDate.length === 1 && newExpirationDate.length === 2) {
                    this.creditCardForm.controls['expirationDate'].setValue(newExpirationDate + "/");
                }
                else if (prevExpirationDate.length === 4 && newExpirationDate.length === 3) {
                    this.creditCardForm.controls['expirationDate'].setValue(newExpirationDate.substring(0, newExpirationDate.length - 1));
                }
            } );

    }
;

    onCVVBlur() {
        this.previewCard.nativeElement.classList.remove("is-flipped");
    }

    onCVVFocus() {
        this.previewCard.nativeElement.classList.add("is-flipped");
    }

}
