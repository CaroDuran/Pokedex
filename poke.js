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

            var nombrePokemon = respuesta.name;

            $(".namepoke").append("Aqui deberia aparecer el Nombre "+ nombrePokemon);
            $("#imgpoke").attr("src", "" +respuesta.sprites.front_default+"");

            // Cartilla Pokémon: 
            //console.log(respuesta.name); // Nombre Pokémon // bulbasaur
            //console.log(respuesta.sprites.front_default); // Img sprite
            //console.log(respuesta.weight); // Peso del Pokémon // 69
            var experienciaGananciaPokemon = respuesta.stats[0].base_stat;
            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "light1", // "light2", "dark1", "dark2"
                animationEnabled: false, // change to true		
                title:{
                    text: "Basic Column Chart"
                },
                data: [
                {
                    // Change type to "bar", "area", "spline", "pie",etc.
                    type: "column",
                    dataPoints: [
                        { label: "exp",  y: experienciaGananciaPokemon  },
                        { label: "orange", y: 15  },
                        { label: "banana", y: 25  },
                        { label: "mango",  y: 30  },
                        { label: "grape",  y: 28  }
                    ]
                }
                ]
            });
            chart.render();

            // Información del Grafico
            //console.log(base[0].base_stat); // Experiencia que gana // 45
            //console.log(base[0].stat.name); // Vida del Pokémon // hp
            //console.log(base[1].stat.name); // ataque
            //console.log(base[2].stat.name); // defensa
            //console.log(base[3].stat.name); // ataque especial
            //console.log(base[4].stat.name); // defensa especial
            //console.log(base[5].stat.name); // velocidad    
        });
    });
});






