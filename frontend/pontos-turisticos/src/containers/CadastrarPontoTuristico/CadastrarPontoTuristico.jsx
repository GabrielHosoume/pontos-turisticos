import React, { Fragment } from 'react';
import Navbar from '../../components/ui/navbar/Navbar';
import './CadastrarPontoTuristico.css';
import PontosTuristicosForm from '../../components/ui/pontosTuristicos/PontosTuristicosForm';


const CadastrarPontoTuristico = () => {

    return (
        <Fragment>
            <header>
                <Navbar />
            </header>
            <div className="container">
                <div className="form-pontos-turisticos">
                    <PontosTuristicosForm />
                </div>
            </div>
        </Fragment>
    );
}

export default CadastrarPontoTuristico;