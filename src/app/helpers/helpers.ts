import {Productos} from "../models/productos";
import {Categorias} from "../models/categorias";
import {Usuarios} from "../models/usuarios";

export const getEntityProperties = (entity: string): Array<any> => {
  let results: any = [];
  let entityClass: any;

  if (entity == "productos") {
    entityClass = new Productos();
  }

  if (entity == "categorias") {
    entityClass = new Categorias();
  }

  if (entity == "usuarios") {
    entityClass = new Usuarios();
  }

  if (entityClass) {
    results = Object.keys(entityClass);
  }

  return results;
}
