import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pptIntermedias';
  nombre = '';
  apellido = '';

  constructor(private http: HttpClient) { }
  GetAlumno() {
    const url = "http://localhost:3000/getAlumno";
    this.http.get<any>(url).subscribe( data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
    });
  }
}
