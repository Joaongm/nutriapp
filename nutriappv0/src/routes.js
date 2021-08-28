//Switch --> Para ter apenas 1 rota (1 componente) por página

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";

import Header from "./components/Header";

import Post from "./components/Post"

import Erro from "./Pages/Erro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={Post} />

        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
