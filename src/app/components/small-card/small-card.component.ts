import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
@Input()
photoCover: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzH_2sTD7fe2XL_NgksL0Dz-7oicdFmMB8w&usqp=CAU ";
@Input()
contentTitle: string="Tecnologia";
}
