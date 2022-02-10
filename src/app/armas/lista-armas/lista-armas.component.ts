import { Component, OnInit } from '@angular/core';
import { Armas } from '../armas';
import { ArmasService } from '../armas.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-lista-armas',
  templateUrl: './lista-armas.component.html'
})
export class ListaArmasComponent implements OnInit {
  public href: string = "";
  constructor(
    private ArmasService: ArmasService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  public branco = true;
  public preto = true;
  public armas!: Armas[];
  public search!: string;

  longo(){
    this.preto = true;
    this.branco = false;
  }
  curto(){
    this.branco = true;
    this.preto = false;
  }
  reset(){
    this.branco = true;
    this.preto = true;
  }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        this.search = params.getAll('search').toString();

      }

    );

    this.ArmasService.obterArmas().subscribe(
      armas => {
        this.armas = armas;
        console.log(armas);
      },
      error => console.log(error)
    );
  }

}
