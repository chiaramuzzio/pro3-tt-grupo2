import { Switch, Route } from "react-router-dom";

// PAGES

import Home from "./pages/Home";
import Search from "./pages/Search";
import More from "./pages/More";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search-results" component={Search}/>
          <Route path="/see-more/category/:category" component={More}/>
          <Route path="/movie-detail/id/:id" component={Detail}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route path="" component={NotFound}/>
        </Switch>
        <Footer />
    </>
  );
 }
 
 export default App; 
