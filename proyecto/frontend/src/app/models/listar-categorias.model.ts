export interface CategoriasModel {
  id_cat: number;
  nombre_cat: string;
}

export interface CreateCategoriasModel extends Omit<CategoriasModel, 'id_cat'> {
<<<<<<< HEAD
=======
 id_cat:number
>>>>>>> bbd1a098a410b2b2432f3045fb3511c76e52696d
}
export interface UpdateCategoriasModel{
  id_cat: number;
  nombre_cat:string;
}
export interface DeleteCategoriasModel extends Omit<CategoriasModel, 'id_cat'> {
  id_cat: number;
}
