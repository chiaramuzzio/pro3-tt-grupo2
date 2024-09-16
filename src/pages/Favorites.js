import FavoriteComponent from "../components/FavoriteComponent/FavoriteComponent";

const Favorites = () => {
    return (
        <>
        <main class="main_home">
                <section class="seccion1">
                    <article class="categoria">
                        <h2>Favoritos</h2>
                       
                        <div class ="portada">
                            <FavoriteComponent />
                        </div>
                    </article>
                </section>
        </main>
        </>
    );
}
export default Favorites;