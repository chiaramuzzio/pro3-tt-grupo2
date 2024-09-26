const Favorito = {
    agregar: (id) => {
        const recuperoStorage = localStorage.getItem('favoritos');
        let favoritos = recuperoStorage ? JSON.parse(recuperoStorage) : [];

        if (!favoritos.includes(id)) {
            favoritos.push(id);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            return true
        }
    },
    quitar: (id) => {
        const recuperoStorage = localStorage.getItem('favoritos');
        let favoritos = recuperoStorage ? JSON.parse(recuperoStorage) : [];

        if (favoritos.includes(id)) {
            favoritos = favoritos.filter(favId => favId !== id);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            return false
        }
    },
    buscar: () => {
        const recuperoStorage = localStorage.getItem('favoritos');
        return recuperoStorage ? JSON.parse(recuperoStorage) : [];
    }
};

export default Favorito;