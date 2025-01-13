import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config';
import Modal from 'react-modal';
import './PontosTuristicosForm.css';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../buttons/SecondaryButton';

const PontosTuristicosForm = ({ readOnly = false, initialData = {} }) => {
    const [nome, setNome] = useState(initialData.nome || '');
    const [uf, setUf] = useState(initialData.uf || '');
    const [cidade, setCidade] = useState(initialData.cidade || '');
    const [referencia, setReferencia] = useState(initialData.referencia || '');
    const [descricao, setDescricao] = useState(initialData.descricao || '');
    const [descricaoRequired, setDescricaoRequired] = useState(initialData.descricao || '');
    const [cidadesSugestao, setCidadesSugestao] = useState([]);
    const [modalAberta, setModalAberta] = useState(false);
    const [erroCidade, setErroCidade] = useState(false);
    const [erroCadastro, setErroCadastro] = useState('');
    const navigate = useNavigate();
    const apiUrl = config.apiUrl;
    const wsUrl = config.wsUrl;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !uf || !cidade || !referencia || !descricao) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            await axios.post(`${apiUrl}/pontosturisticos/cadastrar`, {
                Nome: nome,
                UfCodigoIbge: uf,
                Cidade: cidade,
                Referencia: referencia,
                Descricao: descricao,
            });
            setModalAberta(true);
        } catch (error) {
            setModalAberta(true);
            try {
                setErroCadastro(error.response.data.detail);
            } catch (erro) {
                setErroCadastro(error.message);
            }
        }
    };

    const handleVoltarOnclick = () => {
        navigate('/');
    };

    const handleModalClick = () => {
        setModalAberta(false);
        navigate('/');
    };

    const buscarCidades = async (ufSelecionada) => {
        try {
            const response = await axios.get(wsUrl.replace('{ufCodigoIbge}', ufSelecionada));
            setCidadesSugestao(response.data);
            setErroCidade(false);
        } catch (error) {
            setCidadesSugestao([]);
            setErroCidade(true);
        }
    };

    const handleDescricaoBlur = () => {
        !descricao ? setDescricaoRequired(true) : setDescricaoRequired(false);
    };

    useEffect(() => {
        if (uf) {
            buscarCidades(uf);
        } else {
            setCidadesSugestao([]);
        }
    }, [uf]);

    return (
        <div className="form-group-container">
            <h3 className='title'>Cadastrar novo ponto turístico</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <div className="label">
                        <label htmlFor="nome"><b>Nome*</b></label>
                    </div>
                    <Input
                        type="text"
                        id="nome"
                        placeholder="Informe o nome do ponto turístico"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        maxLength={50}
                        readOnly={readOnly}
                        style={{ width: '100%' }}
                        required={!nome} />
                </div>

                <div className='localizacao-group'>
                    <label className='label-localizacao'><b>Localização</b></label>
                    <div className='form-group'>
                        <div className="label">
                            <label htmlFor="cidade">UF/Cidade*</label>
                        </div>
                        <select
                            value={uf}
                            onChange={(e) => setUf(e.target.value)}
                            disabled={readOnly}
                            style={{ marginRight: '10px' }}>
                            <option value="">Selecione</option>
                            <option value="12">AC</option>
                            <option value="27">AL</option>
                            <option value="16">AP</option>
                            <option value="13">AM</option>
                            <option value="29">BA</option>
                            <option value="23">CE</option>
                            <option value="53">DF</option>
                            <option value="32">ES</option>
                            <option value="52">GO</option>
                            <option value="21">MA</option>
                            <option value="51">MT</option>
                            <option value="50">MS</option>
                            <option value="31">MG</option>
                            <option value="15">PA</option>
                            <option value="25">PB</option>
                            <option value="41">PR</option>
                            <option value="26">PE</option>
                            <option value="22">PI</option>
                            <option value="33">RJ</option>
                            <option value="24">RN</option>
                            <option value="43">RS</option>
                            <option value="11">RO</option>
                            <option value="14">RR</option>
                            <option value="42">SC</option>
                            <option value="35">SP</option>
                            <option value="28">SE</option>
                            <option value="17">TO</option>
                        </select>
                        <Input
                            type="text"
                            id="cidade"
                            placeholder="Informe a cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            list="cidades"
                            disabled={!uf || readOnly}
                            required={!cidade}
                            style={{ width: '100%' }}
                        />
                        <datalist id="cidades">
                            {cidadesSugestao.map((c, index) => (
                                <option key={`${c}-${index}`} value={c.nome} />
                            ))}
                        </datalist>
                        {erroCidade && (
                            <p style={{ color: 'red' }}>
                                Não foi possível carregar as cidades. Insira a cidade manualmente.
                            </p>
                        )}
                    </div>
                </div>


                <div>
                    <div className='form-group'>
                        <div className="label">
                            <label htmlFor="referencia">Referência*</label>
                        </div>
                        <Input
                            type="text"
                            id="referencia"
                            placeholder="Informe uma referência/endereço para o ponto turístico"
                            value={referencia}
                            onChange={(e) => setReferencia(e.target.value)}
                            readOnly={readOnly}
                            required={!referencia}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <div>
                    <div className='form-group'>
                        <div className="label">
                            <label htmlFor='descricao'><b>Descrição*</b></label>
                        </div>
                        <textarea
                            placeholder="Descreva o ponto turístico"
                            value={descricao}
                            id='descricao'
                            onChange={(e) => setDescricao(e.target.value)}
                            maxLength={100}
                            readOnly={readOnly}
                            required={descricaoRequired}
                            onBlur={handleDescricaoBlur}
                            style={{ width: '100%', minHeight: '90px' }}
                        />
                    </div>
                </div>

                {!readOnly && (
                    <PrimaryButton style={{ float: 'right' }} type="submit">Cadastrar</PrimaryButton>
                )}

            </form>

            {!readOnly && (
                <SecondaryButton style={{ float: 'left', marginBottom: '15px' }} onClick={handleVoltarOnclick}>Voltar</SecondaryButton>
            )}

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
                    {
                        erroCadastro === '' && (<h2>Sucesso! O novo ponto turístico foi cadastrado.</h2>)
                    }
                    {
                        erroCadastro !== '' && (<h2>{erroCadastro}</h2>)
                    }
                    <PrimaryButton onClick={handleModalClick}>Fechar</PrimaryButton>
                </div>
            </Modal>
        </div >
    );
};

export default PontosTuristicosForm;
