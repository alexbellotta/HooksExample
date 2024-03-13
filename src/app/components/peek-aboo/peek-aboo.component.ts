import { Component } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,DoCheck,Input,OnChanges,OnDestroy,OnInit,SimpleChanges } from '@angular/core';
import {LoggerService} from '../../services/logger-service.service'
import {PeekABooDirective} from '../../directives/peek-aboo.directive'
@Component({
  selector: 'app-peek-aboo',
  templateUrl: './peek-aboo.component.html',
  styleUrls: ['./peek-aboo.component.scss']
})
export class PeekABooComponent extends PeekABooDirective implements OnChanges, OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewChecked,OnDestroy{
  @Input() name = "";
  private verb = "initialized";
  constructor(logger: LoggerService){
    super(logger);
    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

}
