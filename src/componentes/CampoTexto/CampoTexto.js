import './CampoTexto.css'

//é possivel exportar assim. melhor quando há mais de um arquivo | precisa do index para funcionar
export const CampoTexto = (props) => {

                                  //da pra colocar essa tag la dentro do placeholder tbm | mas desse jeito acham mais organizado
    const placeholdermodificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                <p>{props.p}</p>
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
            </label>
        </div>
    )
}