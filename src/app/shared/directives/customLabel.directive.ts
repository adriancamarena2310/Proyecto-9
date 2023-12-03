import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
  standalone: false,
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;

  constructor( private el: ElementRef<HTMLElement> ) {
    // console.log('constructor de la directiva')
 // console.log(el);
 this.htmlElement = el;

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
