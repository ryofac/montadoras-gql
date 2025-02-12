import "reflect-metadata";
import { DataSource } from "typeorm";
import { Montadora } from "./src/montadora.entity";
import { Veiculo } from "./src/veiculo.entity";

export const AppDataSource = new DataSource({
  type: "postgres",

  host: "localhost",
  port: 5432,
  database: "minha_base",
  username: "meu_usuario",
  password: "minha_senha",

  synchronize: false,
  logging: true,
  entities: [Montadora, Veiculo], // pode ser como abaixo
  migrations: ["src/persistence/typeorm/migrations/**/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Datasource is UP!!!");
  })
  .catch((err) => {
    console.log("Erro ao inicilizar o DS!", err);
  });
