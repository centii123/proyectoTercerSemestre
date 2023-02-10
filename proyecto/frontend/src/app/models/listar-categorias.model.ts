export interface CategoriasModel {
  id_cat: number;
  nombre_cat: string;
}

export interface CreateCategoriasModel extends Omit<CategoriasModel, 'id_cat'> {

}
export interface UpdateCategoriasModel extends Omit<CategoriasModel, 'nombre_cat'> {
  id_cat: number;
}
export interface DeleteCategoriasModel extends Omit<CategoriasModel, 'id_cat'> {
  id_cat: number;
}
