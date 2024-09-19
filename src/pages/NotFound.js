import "../components/NotFound/notFound.css"

const NotFound = () => {
    return (
        <div>
            <h1 className="NotFound">404: Not Found</h1>
            <h2 className="NotFound">Parece que no existe esta pagina!</h2>
            <img src='https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif' className="gifNotFound"></img>
        </div>
    );
}
export default NotFound;