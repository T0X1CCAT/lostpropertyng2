import {Component,Input, Inject, forwardRef } from '@angular/core'
import {JQ_TOKEN} from './jQuery.service'
import {MOMENT_TOKEN} from './moment.service'
import { ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    Validator,
    FormControl  } from '@angular/forms';

@Component({
    templateUrl:'/app/shared/date-input.component.html',
    selector:'date-input',
    styles: [`.date-input .form-control[disabled] {background-color:white;border-right:0px}
        .input-group.date-input{border-right:0px}
    `],
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    }  ]   
        

})

export class DateInputComponent 
    implements ControlValueAccessor, Validator {
    //@Input() name:string
    private data:any;
    private jsonString: string;
    private parseError: boolean;

    
    constructor(@Inject(JQ_TOKEN) private $ : any,
                @Inject(MOMENT_TOKEN) private moment:any){
        this.data = null;
    }
    // the method set in registerOnChange, it is just 
    // a placeholder for a method that takes one parameter, 
    // we use it to emit changes back to the form
    private propagateChange = (_: any) => { };

    // this is the initial value set to the component
    public writeValue(obj: any) {
        if (obj) {
            this.data = obj;
            
        }
    }

    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

   

    // not used, used for touch input
    public registerOnTouched() { }

    // returns null when valid else the validation object 
    // in this case we're checking if the json parsing has 
    // passed or failed from the onChange method
    public validate(c: FormControl) {
        return (this.data) ? null :{
            requiredError:{
                valid:false
            }
        };
        // return (!this.parseError) ? null : {
        //     requiredError: {
        //         valid: false,
        //     },
        // };
    }

    dateDisabled: {date: Date, mode: string}[];

    
    showDatePicker(pickerId){
        this.$('#'+pickerId).toggle();
        
    }

    clearDate(){
        this.data = null;
        this.propagateChange(null);
    }
    //called via event selectionDone from date picker
    newDateSelected(date){
        console.log('test', date);
        let formattedDate = this.moment(date).format("DD/MM/YYYY");
        console.log('formateed date ', formattedDate);
        this.data = formattedDate;
        this.propagateChange(this.data);
    }
}