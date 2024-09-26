//importar en CARD y en movie-detail

const Favorito = {
    buscar: () =>{
        const recuperoStorage = localStorage.getItem('favoritos');
        return recuperoStorage ? JSON.parse(recuperoStorage) : [];
    },
    agregar: (id) => {
        const recuperoStorage = localStorage.getItem('favoritos');
        let favoritos = recuperoStorage ? JSON.parse(recuperoStorage) : [];

        if (!favoritos.includes(id)) {
            favoritos.unshift(id);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            return [true, favoritos]
        }
    },
    quitar: (id) => {
        const recuperoStorage = localStorage.getItem('favoritos');
        let favoritos = recuperoStorage ? JSON.parse(recuperoStorage) : [];

        if (favoritos.includes(id)) {
            favoritos = favoritos.filter(favId => favId !== id);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            return [false, favoritos]
        }
        }

    }

export default Favorito;