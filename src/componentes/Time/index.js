import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {

    const style = {backgroundColor: props.corSecundaria}

    return (
        (props.colaboradores.length > 0) ? //condicional que não precisa falar se for false seria "&&" no lugar da "?"
            <section className='time' style={style}>
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />)}
                </div>
            </section>
        : '' //como estamos usando "?" precisa-se colocar : para caso não seja verdadeiro
    )
}

export default Time;