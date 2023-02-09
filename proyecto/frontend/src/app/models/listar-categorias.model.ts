export interface CategoriasModel {
  id_cat: number;
  nombre_cat: string;
}

export interface CreateCategoriasModel extends Omit<CategoriasModel, 'id_cat'| 'nombre_cat'> {
  id_cat: number;
}
