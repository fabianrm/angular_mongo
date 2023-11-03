import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  entityNamesAll: Array<any> = [];

  searchTag: any;
  filtrarTabla: any = '';
  page: number = 1;
  numRows: number = 10;

  //collection: any[] = someArrayOfThings;

  constructor(private route: ActivatedRoute, private entityService: EntityService, private router: Router) {
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
    // console.log(this.pagePath);
    this.entityNamesAll = getEntityProperties(this.pagePath);
    //Llenamos los campos
    //this.entityNames = [this.entityNamesAll[0]]

    const getDataLS = this.getDataLocalStorage(this.pagePath);
    this.entityNames = getDataLS ? getDataLS.entityNames : [this.entityNamesAll[0]]


    // console.log(this.entityNames);
  }

  getValue(data: any, nombre: any) {
    const index: any = nombre;
    if (data) {
      this.searchTag = data.value;
    }
    return data[index];
  }

  getStartIndex(currentPage: number, lastPage: number) {
    let firstIndex = 1;
    if ((currentPage != lastPage) || (currentPage > 0 && lastPage > 0)) {
      firstIndex = (Number(this.numRows) * (Number(currentPage) - 1) + 1)
    }
    return firstIndex.toString();
  }

  getLasttIndex(currentPage: number, lastPage: number) {
    let lastIndex = this.datas ? this.datas.length : null;
    if (currentPage != lastPage) {
      lastIndex = (Number(this.numRows) * Number(currentPage))
    }
    return lastIndex.toString();
  }


  setEntityNames(event: any, objeto: any) {
    const {checked} = event.target;

    if (checked) {
      if (!this.entityNames.includes(objeto)) {
        //      this.entityNames.push(objeto);
        const oldValue = this.entityNames;
        oldValue.push(objeto);
        this.entityNames = [];
        this.entityNames = this.entityNamesAll.filter(objeto => oldValue.includes(objeto))
      }
    } else {
      this.entityNames = this.entityNames.filter((entityName: any) => entityName !== objeto)
    }

    //almacenamose en localstorage
    const index: any = this.pagePath;
    let data: any = {'entityNames': this.entityNames}
    this.setDataLocalStorage(index, data);
  }

  //funcion para almacenar los campos en el localstorage
  setDataLocalStorage(key: any, value: string) {
    if (window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  //funcion para recuperar los campos del localStorage
  getDataLocalStorage(key: any) {
    if (window.localStorage) {
      const value: any = window.localStorage.getItem(key);
      return JSON.parse(value);
    }
  }

  entityitem(id: any, action: any) {
    this.router.navigate([`${this.pagePath}/${id}/${action}`])
  }
}
