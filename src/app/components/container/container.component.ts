import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntityService} from "../../services/entity.service";
import {getEntityProperties} from "../../helpers/helpers";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  pagePath: string = '';
  datas: any;
  entityNames: Array<any> = [];
  searchTag: any;

  constructor(private route: ActivatedRoute, private entityService: EntityService) {
  }

  ngOnInit(): void {
    this.initComponent();
    this.entityService.getDatas(this.pagePath).subscribe({
      next: (data: any) => {
        const {isSuccess, results} = data;
        if (isSuccess && results) {
          this.datas = results;
          console.log(this.datas);
        }
      },
      error(err: any) {
        console.log(err);
      }
    });
  }

  initComponent() {
    this.pagePath = this.route.snapshot.url[0]?.path || 'productos';
    console.log(this.pagePath);
    this.entityNames = getEntityProperties(this.pagePath);
    console.log(this.entityNames);
  }

  getValue(data: any, nombre: any) {
    const index: any = nombre;
    if (data) {
      this.searchTag = data.value;
    }
    return data[index];
  }
}
