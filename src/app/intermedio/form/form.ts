import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class Form {
    declare form: FormGroup;

    constructor(private fb: FormBuilder){
        this.form = this.fb.group({
            email: ['',[ Validators.required, Validators.email ]],
            password: ['',[ Validators.required ]],
        })
    }
}