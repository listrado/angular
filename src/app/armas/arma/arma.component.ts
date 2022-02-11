import { Component, OnInit } from '@angular/core';
import { Armas } from '../armas';
import { ArmasService } from '../armas.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-arma',
  templateUrl: './arma.component.html'
})
export class ArmaComponent implements OnInit {

  constructor(
    private ArmasService: ArmasService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  public armas!: Armas[];
  public id!: string;


  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        this.id = params.getAll('id').toString();
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
