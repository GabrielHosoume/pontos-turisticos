import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Navbar from '../../components/ui/navbar/Navbar';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton';
import Input from '../../components/ui/inputs/Input';
import './HomePage.css';
import CardPontoTuristico from '../../components/ui/cards/CardPontoTuristico';
import ReactPaginate from 'react-paginate';
import config from '../../../config';


const HomePage = () => {
    const [pontosTuristicos, setPontosTuristicos] = useState([]);
    const [pontosTuristicosOriginais, setPontosTuristicosOriginais] = useState(pontosTuristicos);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [itensPorPagina] = useState(3);
    const [termoBusca, setTermoBusca] = useState('');
    const apiUrl = config.apiUrl;

    useEffect(() => {
        axios.get(`${apiUrl}/pontosturisticos/lista`)
            .then((response) => {
                setPontosTuristicos(response.data);
                setPontosTuristicosOriginais(response.data);
            })
            .catch((error) => console.error('Erro:', error));
    }, []);

    const handleCliquePagina = ({ selected }) => {
        setPaginaAtual(selected);
    };

    const handleBusca = () => {

        const pontosFiltro = pontosTuristicosOriginais.filter((ponto) =>
            ponto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
            ponto.referencia.toLowerCase().includes(termoBusca.toLowerCase()) ||
            ponto.descricao.toLowerCase().includes(termoBusca.toLowerCase())
        );
        setPontosTuristicos(pontosFiltro);
    };

    const inicioIndex = paginaAtual * itensPorPagina;
    const fimIndex = inicioIndex + itensPorPagina;
    const itensExibir = pontosTuristicos.slice(inicioIndex, fimIndex);

    return (
        <Fragment>
            <header>
                <Navbar />
            </header>
            <div className="container">
                <div className="busca">
                    <Input
                        type="text"
                        style={{ marginRight: '10px' }}
                        placeholder="Digite um termo para buscar um ponto turístico..."
                        value={termoBusca}
                        onChange={(e) => setTermoBusca(e.target.value)}
                        onKeyUp={handleBusca}
                    />
                    <PrimaryButton onClick={handleBusca}>Buscar</PrimaryButton>
                </div>
                <div className="lista-content">
                    {itensExibir.length > 0 ? (
                        itensExibir.map((ponto) => (
                            <CardPontoTuristico
                                key={ponto.idPontoTuristico}
                                id={ponto.idPontoTuristico}
                                titulo={ponto.nome}
                                referencia={ponto.referencia}
                                descricao={ponto.descricao}
                            />
                        ))
                    ) : (
                        <div className='nenhum-ponto'><p style={{ fontSize: '18px', fontWeight: 'bold', color: '#444' }}>Nenhum ponto turístico foi encontrado :(</p></div>
                    )}
                </div>
                {pontosTuristicos.length > itensPorPagina && (
                    <ReactPaginate
                        previousLabel={"Anterior"}
                        nextLabel={"Próximo"}
                        breakLabel={"..."}
                        pageCount={Math.ceil(pontosTuristicos.length / itensPorPagina)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handleCliquePagina}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                    />
                )}
            </div>
        </Fragment>
    );
};

export default HomePage;
