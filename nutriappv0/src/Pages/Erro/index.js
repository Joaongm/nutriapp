import "./Erro.css";
import {Link} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import imagegif from "../../Assets/img/404.gif"

export default function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <img src={imagegif} alt="notfound"></img>
      <h2>Página não encontrada</h2>
      <Link to ="/">Veja todos os títulos</Link>
    </div>
  );
}


