import {  Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: `./lazyImage.component.html`,
})
export class LazyImageComponent implements OnInit{
 

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoad: boolean = false;
  
  ngOnInit(): void {
    if( !this.url) throw new Error('Irl property is required');
  } 

  onLoad(){
    this.hasLoad = true;
  }


}
