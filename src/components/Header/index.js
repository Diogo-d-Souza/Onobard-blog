import { useRouter } from 'next/router';
import { Div, Linha_Branca, Cabecalho } from "./style";

export default function Header() {
    const router = useRouter();
    return (
        <>
            <Cabecalho>
                <div className="header_sup">
                    <h1>NOME DO BLOG</h1>
                    <div>
                        <button className="botao-login" onClick={() => router.push('../../login')}>Logar</button>
                        <button className="botao-cadastro" onClick={() => router.push('../../cadastro')}>Cadastrar</button>
                    </div>
                    <div></div>
                </div>
                <div className="linha_branca"></div>
                <div className="header_inf">
                    <div className="search">
                        <input className="pesquisar" placeholder="Pesquisar" />
                        <button className="botao_lupa">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.3741 32.1258L28.5 26.2991C30.7801 23.4561 31.8843 19.8475 31.5856 16.2154C31.2868 12.5832 29.6078 9.20354 26.8937 6.77132C24.1796 4.33911 20.6368 3.03919 16.9938 3.13888C13.3507 3.23857 9.88428 4.73028 7.30728 7.30728C4.73028 9.88428 3.23857 13.3507 3.13888 16.9938C3.03919 20.6368 4.33911 24.1796 6.77132 26.8937C9.20354 29.6078 12.5832 31.2868 16.2154 31.5856C19.8475 31.8843 23.4561 30.7801 26.2991 28.5L32.1258 34.3266C32.273 34.475 32.4481 34.5928 32.6411 34.6732C32.834 34.7536 33.041 34.795 33.25 34.795C33.459 34.795 33.6659 34.7536 33.8589 34.6732C34.0518 34.5928 34.2269 34.475 34.3741 34.3266C34.6595 34.0314 34.819 33.6368 34.819 33.2262C34.819 32.8156 34.6595 32.421 34.3741 32.1258ZM17.4166 28.5C15.2246 28.5 13.0817 27.8499 11.2591 26.6321C9.43642 25.4142 8.01584 23.6833 7.17697 21.658C6.3381 19.6328 6.11861 17.4043 6.54627 15.2544C6.97392 13.1044 8.02951 11.1296 9.57954 9.57954C11.1296 8.0295 13.1044 6.97392 15.2544 6.54627C17.4043 6.11861 19.6328 6.3381 21.658 7.17697C23.6833 8.01584 25.4142 9.43642 26.6321 11.2591C27.8499 13.0817 28.5 15.2246 28.5 17.4166C28.5 20.3561 27.3323 23.1752 25.2537 25.2537C23.1752 27.3323 20.3561 28.5 17.4166 28.5Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Cabecalho>
        </>
    );
}