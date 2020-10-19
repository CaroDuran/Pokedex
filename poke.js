$(function () {
    var btn = $(".btn");
    btn.click(function () {
        var pokemon = $(".buscando").val();
        console.log(pokemon); // N° Pokémon // 1
        var caracteristicas = {
            "url": `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            "method": "GET",
            "timeout": 0, 
        };

        $.ajax(caracteristicas).done(function (respuesta) {
            var base = respuesta.stats;
            console.log(respuesta);

            var introPokemon = respuesta.name;

            // Cartilla Pokémon: 
            $(".namepoke").text(introPokemon);
            $("#imgpoke").attr("src", "" + respuesta.sprites.front_default + "" );
            $(".pesopoke").text(` Peso: ${respuesta.weight} [kg]`);
            

            // Información del Grafico // 
            var velocidadPokemon = respuesta.stats[5].base_stat;
            var especialDefensa = respuesta.stats[4].base_stat;
            var especialAtaque = respuesta.stats[3].base_stat;
            var defensaPokemon = respuesta.stats[2].base_stat;
            var ataquePokemon = respuesta.stats[1].base_stat;
            var vidaPokemon = respuesta.stats[0].base_stat;
            

            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "dark2",  
                animationEnabled: false,	
                title:{
                    text: "Stats Base"
                },
                axisY: {
                    title: "Valores"
                },
                axisX: {
                    title:"Estadisticas"
                },
                data: [
                {
                
                    type: "column",
                    dataPoints: [
                        { label: "speed",  y: velocidadPokemon},
                        { label: "special-defense", y: especialDefensa},
                        { label: "special-attack", y: especialAtaque},
                        { label: "defense",  y: defensaPokemon},
                        { label: "attack",  y: ataquePokemon},
                        { label: "hp",  y: vidaPokemon},
                    ]
                }
                ]
            });
            chart.render();
        });
    });
});






