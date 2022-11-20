import {
  Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('img')
  postImg = '';

  @Output()
  imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg);
  }

  ngOnInit(): void {
    console.log('ngOnInit() called', this.postImg);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked(): void {
    console.log('(ngAfterContentChecked) called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }
}
