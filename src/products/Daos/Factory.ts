import { ContainerDaoFile } from "../Containers/ContainerFS";
import { ContainerDaoMem } from '../Containers/ContainerMem';

const opcion = process.env.DAO || "File";

let dao;

switch (opcion) {
  case "File":
      dao = new ContainerDaoFile('products');
      dao.init();
    break;
  default:
    dao = new ContainerDaoMem();
}

export default class ContainerDaoFactory {
  static getDao() {
    return dao;
  }
}