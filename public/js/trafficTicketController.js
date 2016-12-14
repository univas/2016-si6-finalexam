(function () {
    "use strict"

    function getTrafficTicket(vehiclePlate) {
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
    
})()