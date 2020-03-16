const upWindow = (distance) => {
    window.scrollTo({
        bottom: distance,
        behavior: 'smooth',
    })
}

const downWindow = (distance) => {
    window.scrollTo({
        top: distance,
        behavior: 'smooth',
    })
}

const getUrlimg = (img) => {
    if (img == null) {
        return "data:image/png;base64,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"
    } else {
        return "https://image.tmdb.org/t/p/w185" + img
    }
}

window.addEventListener('load', ()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&year=2020')
    .then(res => res.json())
    .then(res => {
        let movies = res.results.slice(0, 16);
        
        movies.forEach( movie => {
            let img = getUrlimg(movie.poster_path)
            let name = movie.title
            document.querySelector('#inserts-home').innerHTML += `
            <div class="container  mb-4  col-6">
            <button class="b-aside p-0 m-2" onclick="getMoviesForAside('${name}')">
                <img class="rounded-lg " src="${img}" width="155" alt="....">
            </button>
            </div>`
        });
    })
})


const getMoviesForAside = (arg) =>{
    fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=' + arg)
        .then(res => res.json())
        .then(res => {
            let movies = res.results.slice(0, 1);
            let results = res.total_results

            document.querySelector('.inserts').innerHTML = ''
            document.querySelector('.notices').style.display = 'none';
            document.querySelector('.movies').style.display = 'block';

            if (results > 0) {
                let modalId = 0
                movies.forEach(movie => {
                    modalId ++
                    let img = getUrlimg(movie.poster_path)
                    let overview = movie.overview.slice(0, 110)
                    let age
                    movie.adult == true ? age = "+18" : age = "+12"
                    document.querySelector('.inserts').innerHTML += `
                    <div class="col-sm-12 col-md-12 col-lg-6">
                    <div
                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">${age}</strong>
                            <h5 class="mb-0">${movie.title}</h5>
                            <div class="mb-1 text-muted">${movie.release_date}</div>
                            <p class="card-text mb-auto">${overview}...</p>

<!--                         START MODAL                             -->
                      
                        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target=".bd-modal${modalId}-lg">Mas detalles</button>

                        <div class="modal fade bd-modal${modalId}-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header bg-light">
                                        <h5 class="modal-title">Detalles de la Pelicula</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="container">
                                                <div class="col-mt-auto">
                                                    <div
                                                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                                        <div class="col p-4 d-flex flex-column position-static">
                                                            <strong class="d-inline-block mb-2 text-primary">${age}</strong>
                                                            <h2 class="mb-3 text-justify">${movie.title}</h2>
                                                            <div class="mx-1 text-muted">${movie.release_date}</div>
                                                            <p class="card-text p-2 mb-2 text-justify mb-auto">
                                                                ${movie.overview}
                                                            </p>
                                                            
                                                            <ul class="list-group list-group-horizontal">
                                                                <li class="list-group-item font-weight-bolder">Average de Votos: <span class"text-muted">${movie.vote_average}</span></li>
                                                                <li class="list-group-item font-weight-bolder text-uppercase">Lenguaje Original: <span class"font-weight-normal ">${movie.original_language}</span></li>
                                                                <li class="list-group-item font-weight-bolder">Popularidad: <span class"font-weight-normal">${movie.popularity}</span></li>
                                                            </ul>
                                                            
                                                        </div>
                                                        <div class="col-auto my-auto d-none d-lg-block">
                                                            <div class="container">
                                                                <img class="rounded" src="${img}" width="255" alt="....">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer bg-light">
                                        <div class="container col-md-5 mx-auto">
                                            <button type="button" class="btn btn-block btn-outline-primary" data-dismiss="modal">Cerrar</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

<!--                                    END MODAL                                      -->

                        </div><!-- END COL P-4-->
                        <div class="col-auto ">
                            <div class="row">
                                <div class ="container">
                                    <img src="${img}" width="185" alt="....">
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                    `
                })
                downWindow(600)
            } else {
                document.querySelector('.inserts').innerHTML = `
                <div class="container col-12">
                <div class="alert alert-danger text-center" role="alert">
                No hay resultados disponibles para tu búsqueda
              </div>
                </div>
                
                `
                downWindow(600)
            }

        })
        .catch(error => console.error(error))
}

document.querySelector('.finder-btn').onclick = function getMovies(event) {
    const busqueda = document.querySelector('.finder').value
    fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=' + busqueda)
        .then(res => res.json())
        .then(res => {
            let movies = res.results.slice(0, 10);
            let results = res.total_results

            document.querySelector('.inserts').innerHTML = ''
            document.querySelector('.notices').style.display = 'none';
            document.querySelector('.movies').style.display = 'block';

            if (results > 0) {
                let modalId = 0
                movies.forEach(movie => {
                    modalId ++
                    let img = getUrlimg(movie.poster_path)
                    let overview = movie.overview.slice(0, 110)
                    let age
                    movie.adult == true ? age = "+18" : age = "+12"
                    document.querySelector('.inserts').innerHTML += `
                    <div class="col-sm-12 col-md-12 col-lg-6">
                    <div
                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">${age}</strong>
                            <h5 class="mb-0">${movie.title}</h5>
                            <div class="mb-1 text-muted">${movie.release_date}</div>
                            <p class="card-text mb-auto">${overview}...</p>

<!--                         START MODAL                             -->
                      
                        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target=".bd-modal${modalId}-lg">Mas detalles</button>

                        <div class="modal fade bd-modal${modalId}-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header bg-light">
                                        <h5 class="modal-title">Detalles de la Pelicula</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="container">
                                                <div class="col-mt-auto">
                                                    <div
                                                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                                        <div class="col p-4 d-flex flex-column position-static">
                                                            <strong class="d-inline-block mb-2 text-primary">${age}</strong>
                                                            <h2 class="mb-3 text-justify">${movie.title}</h2>
                                                            <div class="mx-1 text-muted">${movie.release_date}</div>
                                                            <p class="card-text p-2 mb-2 text-justify mb-auto">
                                                                ${movie.overview}
                                                            </p>
                                                            
                                                            <ul class="list-group list-group-horizontal">
                                                                <li class="list-group-item font-weight-bolder">Average de Votos: <span class"text-muted">${movie.vote_average}</span></li>
                                                                <li class="list-group-item font-weight-bolder text-uppercase">Lenguaje Original: <span class"font-weight-normal ">${movie.original_language}</span></li>
                                                                <li class="list-group-item font-weight-bolder">Popularidad: <span class"font-weight-normal">${movie.popularity}</span></li>
                                                            </ul>
                                                            
                                                        </div>
                                                        <div class="col-auto my-auto d-none d-lg-block">
                                                            <div class="container">
                                                                <img class="rounded" src="${img}" width="255" alt="....">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer bg-light">
                                        <div class="container col-md-5 mx-auto">
                                            <button type="button" class="btn btn-block btn-outline-primary" data-dismiss="modal">Cerrar</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

<!--                                    END MODAL                                      -->

                        </div><!-- END COL P-4-->
                        <div class="col-auto ">
                            <div class="row">
                                <div class ="container">
                                    <img src="${img}" width="185" alt="....">
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                    `
                })
                downWindow(600)
            } else {
                document.querySelector('.inserts').innerHTML = `
                <div class="container col-12">
                <div class="alert alert-danger text-center" role="alert">
                No hay resultados disponibles para tu búsqueda
              </div>
                </div>
                
                `
                downWindow(600)
            }

        })
        .catch(error => console.error(error))
}

document.querySelector('.finder').onkeyup = function getMovies(event) {

    if (event.key === "Enter") {
        const busqueda = event.target.value
        fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=' + busqueda)
            .then(res => res.json())
            .then(res => {
                let movies = res.results.slice(0, 10);
                let results = res.total_results

                document.querySelector('.inserts').innerHTML = ''
                document.querySelector('.notices').style.display = 'none';
                document.querySelector('.movies').style.display = 'block';

                if (results > 0) {
                    let modalId = 0
                movies.forEach(movie => {
                    modalId ++
                    let img = getUrlimg(movie.poster_path)
                    let overview = movie.overview.slice(0, 110)
                    let age
                    movie.adult == true ? age = "+18" : age = "+12"
                    document.querySelector('.inserts').innerHTML += `
                    <div class="col-sm-12 col-md-12 col-lg-6">
                    <div
                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">${age}</strong>
                            <h5 class="mb-0">${movie.title}</h5>
                            <div class="mb-1 text-muted">${movie.release_date}</div>
                            <p class="card-text mb-auto">${overview}...</p>

<!--                         START MODAL                             -->
                      
                        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target=".bd-modal${modalId}-lg">Mas detalles</button>

                        <div class="modal fade bd-modal${modalId}-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header bg-light">
                                        <h5 class="modal-title">Detalles de la Pelicula</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="container">
                                                <div class="col-mt-auto">
                                                    <div
                                                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                                        <div class="col p-4 d-flex flex-column position-static">
                                                            <strong class="d-inline-block mb-2 text-primary">${age}</strong>
                                                            <h2 class="mb-3 text-justify">${movie.title}</h2>
                                                            <div class="mx-1 text-muted">${movie.release_date}</div>
                                                            <p class="card-text p-2 mb-2 text-justify mb-auto">
                                                                ${movie.overview}
                                                            </p>
                                                            
                                                            <ul class="list-group list-group-horizontal">
                                                                <li class="list-group-item font-weight-bolder">Average de Votos: <span class"text-muted">${movie.vote_average}</span></li>
                                                                <li class="list-group-item font-weight-bolder text-uppercase">Lenguaje Original: <span class"font-weight-normal ">${movie.original_language}</span></li>
                                                                <li class="list-group-item font-weight-bolder">Popularidad: <span class"font-weight-normal">${movie.popularity}</span></li>
                                                            </ul>
                                                            
                                                        </div>
                                                        <div class="col-auto my-auto d-none d-lg-block">
                                                            <div class="container">
                                                                <img class="rounded" src="${img}" width="255" alt="....">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer bg-light">
                                        <div class="container col-md-5 mx-auto">
                                            <button type="button" class="btn btn-block btn-outline-primary" data-dismiss="modal">Cerrar</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

<!--                                    END MODAL                                      -->

                        </div><!-- END COL P-4-->
                        <div class="col-auto ">
                            <div class="row">
                                <div class ="container">
                                    <img src="${img}" width="185" alt="....">
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                    `
                })
                downWindow(600)
                } else {
                    document.querySelector('.inserts').innerHTML = `
                <div class="container col-12">
                <div class="alert alert-danger text-center" role="alert">
                No hay resultados disponibles para tu búsqueda
              </div>
                </div>
                
                `
                    downWindow(600)
                }

            })
            .catch(error => console.error(error))
    }
}

/*
fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query='+busqueda)
.then(res=>res.json())//parsearlo a json
.then(res=>{
    const peliculas =res.results;
    for (const pelicula of peliculas) {
    
    }
    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
    }
    peliculas.forEach(pelicula => {
        document.querySelector('.peliculas').innerHTML +=`
        <h2>${pelicula.title}</h2>
        <img src="${}" />
        `
    });
})



------------------------------ FUNCION DE PRUEBA 

const getMoviesEnter = (arg) => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=' + arg)
        .then(res => res.json())
        .then(res => {
            let movies = res.results.slice(0, 10);
            return movies
        })
        .catch(error => console.error(error))        
}

prueba = getMoviesEnter('casa');
console.log(prueba);

no me retorna movies, la impresion de "prueba" por consola es undefined

*/