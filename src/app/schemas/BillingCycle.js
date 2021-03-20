const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({

    name: {
        type: String,
        required:[true, 'A propriedade name do objeto credits não pode ser vazia!']
    },
    value: {
        type: Number,
        min:0,
        required:[true, 'A propriedade value do objeto credits não pode ser vazia!']
    }
});

const debtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A propriedade name do objeto debt não pode ser vazia!']
    },
    value: {
        type: Number,
        min: 0,
        required: [true, 'A propriedade value do objeto debt não pode ser vazia!']
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
});

const billingCycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A propriedade name não pode ser vazia!']
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: [true,'A propriedade month não pode ser vazia!']
    },
    year: {
        type: Number,
        min: 1970,
        max:2100,
        required: [true, 'A propriedade year não pode ser vazia!']
    },
    credits: [creditSchema],
    debts: [debtSchema],
}, {
    timestamps: true
});


module.exports =  mongoose.model('BillingCycle', billingCycleSchema);