import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  constructor(private http: HttpClient) {}

  getEnderecoByCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  getEndereco(uf: string, localidade: string, logradouro: string) {
    return this.http.get(`https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`);
  }

}
