'use strict';

let trafficTicketsApi = require('./trafficTicketsApi');

module.exports = (server) => {
    server.get('/trafficTickets', trafficTicketsApi.getTrafficTickets);
};