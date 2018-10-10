import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
declare let jQuery: any;

@Component({
  selector: '[forms-wizard]',
  templateUrl: './wizard.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./wizard.style.scss']
})
export class WizardComponent implements OnInit {
  name = 'ng2 select2';
  value = [];
  options: any;
  public exampleData: Array<Select2OptionData>;
  public currentValue: any;
  public valueChangeValue: any;
  
  destindationMask = {
    mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/]
  };

  creditMask = {
    mask: [/[1-9]/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/
    ]
  };

  destinationValue = '';
  creditValue = '';

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  ngOnInit(): void {
    jQuery('.select2').select2();

    let basic4 = {
        id: 'basic4',
        text: 'Basic 4'
      };
      
    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      basic4
    ];
    
    this.currentValue = null; // basic4;

    this.value = ['basic1', 'basic2'];
    this.options = {
      multiple: true
    }
  }

  valueChanged($evt) {
    console.log("evt", $evt);
    console.log("value", this.currentValue);
    this.valueChangeValue = $evt.value;
  }
  
  clearSelection() {
    console.log("clearing selection")
    this.valueChangeValue = '';
    this.value = [];
    this.exampleData = [];
    this.currentValue = undefined;
  }

}
