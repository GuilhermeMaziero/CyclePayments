const BillingCycleModel =  require('../schemas/BillingCycle');

class BillingCycleController {

    async index(req, res) {

        try {
            
            const cicleExists = await BillingCycleModel.find();

            return res.status(200).json(cicleExists)

        } catch(error) {

            const {message} = error;
            
            return res.status(400).json({
                message: message
            });
        }
    }

    async store(req, res) {

        const cycle = req.body;

        try {
            
            const { _id } = await BillingCycleModel.create(cycle);

            return res.status(200).json({
                id: _id,
                message:'Registro criado com sucesso!'
            })

        } catch(error) {

            const {message} = error;
            
            return res.status(400).json({
                message: message
            });
        }
    }

    async delete(req, res) {

        try {
            
            const { _id } = await BillingCycleModel.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                id: _id,
                message:'Registro deletado com sucesso!'
            })

        } catch(error) {

            const {message} = error;
            
            return res.status(400).json({
                message: message
            });
        }
    }

    async update(req, res) {

        try {

            const exists = await BillingCycleModel.findById(req.params.id);

            if (!exists) {
                return res.status(400).json({message:'Não existe o id mencionado!'});
            }

            const cycle = req.body;
            
            const { _id } = await BillingCycleModel.findByIdAndUpdate(req.params.id, cycle);

            return res.status(200).json({
                id: _id,
                message:'Registro atualizado com sucesso!'
            })

        } catch(error) {

            const {message} = error;
            
            return res.status(400).json({
                message: message
            });
        }
    }

}


module.exports =  new BillingCycleController();