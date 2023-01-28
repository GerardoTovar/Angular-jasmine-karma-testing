import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getData() {
    return of(['medico1', 'medico2', 'medico3']).pipe(delay(5000));
  }

  getMedicos() {
    return this.http.get('...').pipe(
      map( (resp:any) => resp['medicos'] )
    );
  }
 
  agregarMedico( medico: any ) {
    return this.http.post('...', medico ).pipe(
      map( (resp:any) => resp['medico'] )
    );
  }
 
  borrarMedico( id: string ) {
    return this.http.delete('...' ).pipe(
      map( (resp:any) => resp['medico'] )
    );
  }

}
