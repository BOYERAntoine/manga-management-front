import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import HomeComponent from './home/home.component';
import ListMangaComponent from './manga/listManga.component';
import EditManga from './manga/editManga.component';

function App() {
  return (
    <div className="App">


      <Router>
      <NavLink  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/" exact>HOME</NavLink>
    <NavLink to="/mangas" exact>Mangas</NavLink>
    <NavLink to="/mangas/create" exact>Ajout manga</NavLink>

        <Switch>
      <Route  path='/'exact component={HomeComponent}/>
      <Route  path='/mangas'exact component={ListMangaComponent}/>
      <Route  path='/mangas/create'exact component={EditManga}/>


      </Switch>
      </Router>
    </div>
  );
}

export default App;
