import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FacturaModel } from "../models/factura.entity";

@Injectable({
    providedIn: 'root'
})
export class FacturaServices{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    readonly api = 'http://localhost:3000/factura'

    constructor(private http:HttpClient){}

    registrarFactura(registro:FacturaModel){
        const url = '${this.api}';
        return this.http.post(url,registro)
    }
     
}