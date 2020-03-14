import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from 'axios';
import ListadoNoticias from "./components/ListadoNoticias";
function App() {
  
  const [categoria, setCategoria] = useState("");

  const [noticias, setNoticias] = useState([]);
  
  useEffect(() => {
    
    const consultarApi = async () => {
      const apiKey = 'e71efdfdf35d406bb223cd318c761bcb';
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`;
      const resultado = await axios.get(url);
      setNoticias(resultado.data.articles);
    }

    consultarApi();

    
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Claryn" />
      <div className="container white">
        <Formulario setCategoria = {setCategoria}/>
        <ListadoNoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
