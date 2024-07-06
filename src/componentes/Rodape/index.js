import './rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/imagens/fb.png" alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/imagens/ig.png" alt="Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/imagens/tw.png" alt="Instagram"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/imagens/logo.png" alt="Organo"/>
            </section>
            <section>
                <h6>Desenvolvido por Alura</h6>
            </section>
        </footer>
    )
}

export default Rodape