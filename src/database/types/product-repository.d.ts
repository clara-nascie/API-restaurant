//preciso criar as tipagens porque o knex não 
//consegue inferir os tipos de dados que vem do banco de dados 
//então eu preciso criar as tipagens para que o knex consiga 
//inferir os tipos de dados que vem do banco de dados
//para isso eu preciso criar um arquivo .d.ts que vai conter as 
//tipagens dos dados que vem do banco de dados
//e importar esse arquivo no arquivo que vai usar as tipagens
//o arquivo .d.ts vai conter as tipagens dos dados que vem do banco de dados
//e importar esse arquivo no arquivo que vai usar as tipagens

type productRepository = {
  id: number;
  name: string;
  price: number;
  created_at: number;
  updated_at: number;
}

export { productRepository }
