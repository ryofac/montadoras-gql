import { MyGQLContext } from "./context-graphql";
import { Montadora } from "./montadora.entity";
import { Veiculo } from "./veiculo.entity";

export const resolvers = {
  Query: {
    montadoras: async (_parent: any, _args: any, context: MyGQLContext, _info: any) => {
      console.log(`User: ${context.user}`)

      const all_montadoras = await Montadora.find({ relations: { veiculos: true } });
      return all_montadoras
    },

    veiculos: async (_parent: any, _args: any, context: MyGQLContext, _info: any) => {
      return await Veiculo.find({ relations: { montadora: true } });
    }
  },

  Mutation: {
    async deleteMontadora(_parent: any, _args: any, context: MyGQLContext, _info: any) {
      let { id:montadoraId } = _args;
      montadoraId = parseInt(montadoraId);
      const montadoraToDelete = await Montadora.findOne({ where: { id: montadoraId } });
      console.log(montadoraToDelete);
      await montadoraToDelete?.remove();
      return montadoraId;
    },

    async createMontadora(_parent: any, _args: any, context: MyGQLContext, _info: any) {
      const { input: montadora } = _args;
      const new_montadora = await Montadora.create({ ...montadora });
      await new_montadora.save()
      return new_montadora;
    },
    
    async createVeiculo(_parent: any, _args: any, context: MyGQLContext, _info: any) {
      const { input: veiculo } = _args;
      
      const montadora = await Montadora.findOne(veiculo.montadoraId)
      const new_veiculo = await Veiculo.create({ ...veiculo, montadora: montadora?.id });
      console.log(new_veiculo)
      await new_veiculo.save();
      return new_veiculo;
    }
   
  }
};