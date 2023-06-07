const aux = document.getElementById("idCh")
function getCharacter() {
        let min = 1;
        let max = 826;
        let numCh = Math.floor(Math.random() * (max - min + 1)) + min    
        fetch("https://rickandmortyapi.com/api/character/" + numCh)
        .then(function (response) {
            return response.json()
            }
        )
        .then (function (data) {
            let element = document.getElementById("resultado2")
            element.innerHTML = `
            <img src=${data.image}>
            <li><label>Nombre: ${data.name}</label></li>
            <li><label>Estado: ${data.status}</label></li>
            <li><label>Genero: ${data.gender}</label></li>
            <li><label>Especie: ${data.species}</label></li>
            <li><label>Localidad: ${data.location.name}</label></li> `
            return (gen1=data.gender)
            }
        )
    fetch("https://randomuser.me/api/"+aux.value)
        .then(function (response) {
            return response.json()
            }
        )
        .then (function (data) {
            let element = document.getElementById("resultado1")
            element.innerHTML=`
            <img src=${data.results[0].picture.large}> 
            <li><label>Nombre: ${data.results[0].name.first} </label></li> 
            <li><label>Apellido: ${data.results[0].name.last} </label></li> 
            <li><label>Genero: ${data.results[0].gender} </label></li> 
            <li><label>Fecha de nacimiento: ${data.results[0].registered.date} </label></li> 
            <li><label>Localidad: ${data.results[0].location.city} </label></li>  
            <li><label>Latitud: ${data.results[0].location.coordinates.latitude} </label></li>
            <li><label>Longitud: ${data.results[0].location.coordinates.longitude} </label></li>
            `
            return(gen2=data.results[0].gender)
            }
        )
        
        .then (function(){
            let Gen1=gen1.toLowerCase();
            console.log(Gen1)
            if (Gen1===gen2){
                let match = document.getElementById("matcheo")
                match.innerHTML = `
                <p>Resultado:</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ndx69YIa--Ik5wY8_omQ-duyI0UzPv5x2A8UZgbXOitAX1RrpeV17bHcuWR262Nzp00&usqp=CAU" height=200>
                `
            }
            else {
            let match = document.getElementById("matcheo")
            match.innerHTML = `
            <p>Resultado:</p>
            <img src='https://img.freepik.com/vector-premium/icono-signo-incorrecto_188544-4739.jpg' height=200 >
        `
            }
        }

        )


    }
    