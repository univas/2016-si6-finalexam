(function () {
    "use strict"

    function getTrafficTickets(vehiclePlate) {
        $.ajax({
            method: "GET",
            url: "/api/traffic-ticket/" + vehiclePlate
        })
        .done(trafficTicket => {
            console.log(trafficTicket)
        })
    }

    $("form").on("submit", event => {
        let vehiclePlate = $("#vehiclePlate").val()
        getTrafficTicket(vehiclePlate)
        return false
    })

    function escreverMulta(trafficTickets){
        
        escreverPlaca(trafficTickets.vehiclePlate);
        escreverViolacao(trafficTickets.violation);
        escreverPontos(trafficTickets.points);
        escreverValor(trafficTickets.value);
        escreverValorDesconto(trafficTickets.desconto);
    }


    function escreverPlaca(vahiclePlate){
        $('#vehiclePlate').html(vehiclePlate);

    }

    function escreverViolacao(violation){
        $('#violation').html(violation);
        
    }
    
    function escreverPontos(points){
        $('#points').html(points);
        
    }
    
    function escreverValor(value){
        $('#value').html(value);

    }
    
   function escreverValorDesconto(desconto){
       $('#desconto').html(desconto);
   }
        
    
    
})()