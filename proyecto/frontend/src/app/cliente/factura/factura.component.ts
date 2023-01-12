import { Component } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  public factura = "Factura";
  public pago = "Forma de pago:";
  public nombre = "Facturado a:";
}
