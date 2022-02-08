import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Armas } from './Armas'


@Injectable({ providedIn: 'root' })
export class ArmasService {

	constructor(private http: HttpClient) { }

	protected UrlServiceV1: string= "http://localhost:3000/";

	obterArmas() : Armas {
		return this.http.get<Armas[]>(this.UrlServiceV1 + "armas");
		
	}

}