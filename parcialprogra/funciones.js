function getCharacter(){
        const aux1=document.getElementById("idCh")
        const aux2=document.getElementById("idCh2")
fetch("API.json")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data["localidades-censales"])
    let datos1=(data["localidades-censales"])
    //console.log(datos1)
    let nul=null
    let A
    let B
    let C
    let D
    data["localidades-censales"].forEach(function(elemento){
        A=elemento.municipio.id
        if (aux1.value!==null){
            if (A==aux1.value){
                B=elemento.municipio.nombre
                if (B!==null){
                let element=document.getElementById("resultado1")
                element.innerHTML=
                `
                <li><label>provincia_nombre: ${elemento.municipio.nombre}</label></li>
                <li><label>latitud: ${elemento.centroide.lat}</label></li>
                <li><label>latitud: ${elemento.centroide.lon}</label></li>
                `
                }
                else {
                let element=document.getElementById("resultado2")
                element.innerHTML=
                `
                <li><label>provincia_nombre: ${elemento.departamento.nombre}</label></li>
                <li><label>latitud: ${elemento.centroide.lat}</label></li>
                <li><label>latitud: ${elemento.centroide.lon}</label></li>
                `
                }
            }
        }   
        else{
            C=elemento.provincia.id
        if (aux2.value!==null){
            if (C==aux2.value){
                D=elemento.municipio.nombre
                if (D!==null){
                let element=document.getElementById("resultado3")
                element.innerHTML=
                `
                <li><label>provincia_nombre: ${elemento.municipio.nombre}</label></li>
                <li><label>latitud: ${elemento.centroide.lat}</label></li>
                <li><label>latitud: ${elemento.centroide.lon}</label></li>
                `
                }
                else {
                let element=document.getElementById("resultado4")
                element.innerHTML=
                `
                <li><label>provincia_nombre: ${elemento.departamento.nombre}</label></li>
                <li><label>latitud: ${elemento.centroide.lat}</label></li>
                <li><label>latitud: ${elemento.centroide.lon}</label></li>
                `
                }
            }
        }
        }

    })
})
    
}