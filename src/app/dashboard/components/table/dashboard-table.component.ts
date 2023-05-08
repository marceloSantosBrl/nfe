import {Component, Input} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {data} from "autoprefixer";

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent {
  @Input('data') public data = [
    {product: "Camisas", amount: 60, brand: "Lacoste", value: 60, nfeAmount: 3},
    {product: "Camisas", amount: 60, brand: "Lacoste", value: 60, nfeAmount: 3},
    {product: "Camisas", amount: 60, brand: "Lacoste", value: 60, nfeAmount: 3},
    {product: "Camisas", amount: 60, brand: "Lacoste", value: 60, nfeAmount: 3},
    {product: "Camisas", amount: 60, brand: "Lacoste", value: 60, nfeAmount: 3},
    {product: "Camisas", amount: 60, brand: "Lacoste", value: 60, nfeAmount: 3},
  ];

  @Input('columns') public columns = ['product', 'amount', 'brand', 'value', 'nfeAmount'];

}
