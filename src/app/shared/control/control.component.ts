import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  afterRender,
  contentChild,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  
  constructor(){
    afterRender(()=>{
      console.log('afterrender')
    });
    afterNextRender(()=>{
      console.log('afternextrender')
    });
    }

  ngAfterContentInit(): void {
    //...
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
