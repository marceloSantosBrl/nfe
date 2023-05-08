import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
  @Input('imgModel') public imgModel = {
    path: 'assets/sales.svg',
    alt: 'icone de vendas'
  };
  @Input('title') public title = 'Total de Nf-e';
  @Input('change') public change = 0.04;
  @Input('value') public value = 75;
  @Input('type') public type = 'number';
}
