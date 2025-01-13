import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import axios from "axios";
import "./CardPontoTuristico.css";
import Modal from "react-modal";
import config from "../../../../config";

Modal.setAppElement("#root");

const CardPontoTuristico = (props) => {
    const [modalAberta, setModalAberta] = useState(false);
    const [detalhes, setDetalhes] = useState(null);
    const apiUrl = config.apiUrl;

    const fetchDetalhes = async () => {
        try {
            const response = await axios.get(`${apiUrl}/pontosturisticos/ponto`, {
                params: { id: props.id },
            });
            setDetalhes(response.data[0]);
            setModalAberta(true);
        } catch (error) {
            console.error("Erro ao buscar os detalhes do ponto turístico:", error);
        }
    };

    return (
        <div className="card" id={props.id}>
            <div className="card-content">
                <h3>{props.titulo}</h3>
                <p style={{ fontSize: '16px' }}>{props.referencia}</p>
                <div className="descricao">
                    <p className="texto-descricao">{props.descricao}</p>
                </div>
            </div>
            <PrimaryButton style={{ padding: "4px 16px" }} onClick={fetchDetalhes}>
                Ver detalhes
            </PrimaryButton>


            <Modal
                isOpen={modalAberta}
                onRequestClose={() => setModalAberta(false)}
                contentLabel="Cadastro Concluído"
                ariaHideApp={false}
                style={{
                    content: {
                        margin: 'auto',
                        borderRadius: '20px',
                        maxWidth: '80%',
                    },
                }} >
                <div className="modal-content">
                    <h2>{detalhes?.nome}</h2>
                    <p className="modal-descricao">{detalhes?.descricao}</p>
                    <p className="modal-localizacao"><strong>Localização:</strong> {detalhes?.referencia}</p>
                    <PrimaryButton style={{ marginBottom: '15px' }} onClick={() => setModalAberta(false)}>Fechar</PrimaryButton>
                </div>
            </Modal>

        </div >
    );
};

export default CardPontoTuristico;
