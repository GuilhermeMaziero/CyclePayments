const BillingCycleModel =  require('../schemas/BillingCycle');

class BillingSumaryController {

    async index(req, res) {

        try {
            
            const data = await BillingCycleModel.aggregate([{
                $project: {
                    debit:{$sum:"$debts.value"},
                    credit:{$sum:"$credits.value"}
                }
            },{
                $group: {
                    _id:null,
                    credit: {$sum:"$credit"},
                    debit: {$sum:"$debit"}
                }
            }, {
                $project: {
                    _id:0,
                    credit:1,
                    debit:1
                }
            }]);

            return res.status(200).json(data);

        } catch(error) {

            const {message} = error;
            
            return res.status(400).json({
                message: message
            });
        }
    }
}


module.exports =  new BillingSumaryController();