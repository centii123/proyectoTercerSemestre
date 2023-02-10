export interface CategoriasModel {
  id_cat: number;
  nombre_cat: string;
}

export interface CreateCategoriasModel extends Omit<CategoriasModel, 'id_cat'> {
<<<<<<< HEAD
 id_cat:number
=======

>>>>>>> 307baa0ab9dc806800101fff836807df2d39392a
}
export interface UpdateCategoriasModel{
  id_cat: number;
  nombre_cat:string;
}
export interface DeleteCategoriasModel extends Omit<CategoriasModel, 'id_cat'> {
  id_cat: number;
}
