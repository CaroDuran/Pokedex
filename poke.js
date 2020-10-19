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
            //console.log(respuesta.name); // Nombre Pokémon // bulbasaur
            //console.log(respuesta.sprites.front_default); // Img sprite
            //console.log(respuesta.weight); // Peso del Pokémon // 69
            $(".namepoke").text(introPokemon);
            $("#imgpoke").attr("src", "" + respuesta.sprites.front_default + "" );
            $(".pesopoke").text(` Peso: ${respuesta.weight} [kg]`);
            

            // Información del Grafico // 
            var velocidadPokemon = respuesta.stats[5].base_stat;
            //console.log(base[5].stat.name); // velocidad 
            var especialDefensa = respuesta.stats[4].base_stat;
            //console.log(base[4].stat.name); // defensa especial
            var especialAtaque = respuesta.stats[3].base_stat;
            //console.log(base[3].stat.name); // ataque especial
            var defensaPokemon = respuesta.stats[2].base_stat;
            //console.log(base[2].stat.name); // defensa
            var ataquePokemon = respuesta.stats[1].base_stat;
            //console.log(base[1].stat.name); // ataque
            var vidaPokemon = respuesta.stats[0].base_stat;
            //console.log(base[0].stat.name); // Vida del Pokémon // hp

            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "dark2",  
                animationEnabled: false, // change to true		
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
                    // Change type to "bar", "area", "spline", "pie",etc.
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






