import React from 'react';
import './style.css';
import cursos from '../../store/cursos';

const Cursos = () => (
  <div className="containerCursos">
    {cursos.map((curso) => (
      <div className="cursoCard" key={`${curso.titulo} ${Math.random()}`}>
        <img src={curso.picture} alt={curso.titulo} />
        <p className="date">{curso.data}</p>
        <h5 className="titulo">{curso.titulo}</h5>
        <p className="autor">{curso.autor}</p>
        <p className="tempo">{curso.tempo}</p>
      </div>
    ))}
  </div>
);

export default Cursos;
