import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, output, viewChild } from '@angular/core';


@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>; 
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{title:string, text:string}>()
  enteredTitle = '';
  enteredText = '';
  add = output<{title:string, text:string}>()

  ngOnInit() {
    console.log('OnInit')
    console.log(this.form().nativeElement)

  }

  ngAfterViewInit() {
    console.log('After view init')
    console.log(this.form().nativeElement)
  }
  onSubmit(){
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    this.form().nativeElement.reset();
    this.enteredTitle ='';
    this.enteredText = '';
  }
}
