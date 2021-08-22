import { Component, Input } from '@angular/core';
import { nsc } from 'src/assets/types/nsc';

@Component({
  selector: 'app-display-nsc',
  templateUrl: './display-nsc.component.html',
  styleUrls: ['./display-nsc.component.scss']
})
export class DisplayNscComponent {
  @Input() nsc = <nsc>{};
}
