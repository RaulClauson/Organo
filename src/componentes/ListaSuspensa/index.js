import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (
        <div className='lista-suspensa'>
            <label>
                <p>{props.p}</p>
                <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                    <option value=""></option>
                    {props.itens.map(item => <option key={item}>{item}</option>)}

                    {/* DÁ PRA FAZER ASSIM TBM CASO PRECISE DE MAIS LINHAS:

                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}

                    */}
                </select>
            </label>
        </div>
    )
}

export default ListaSuspensa