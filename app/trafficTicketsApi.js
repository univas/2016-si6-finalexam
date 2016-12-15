'use strict';

let trafficTickets = require('./trafficTicketsDB.json');
module.exports = (() => {

    return {
        getTrafficTickets: getTrafficTickets
    };

    function getTrafficTickets(req, res, next) {
        let vehiclePlate = req.query.mat;

    function calcularDesconto(trafficTickets) {
       
        
            var desconto = trafficTicketsDB.value;

            var desconto = (desconto-(desconto * 0.10));
            
            return desconto;

    }
    }
    })();