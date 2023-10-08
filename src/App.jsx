import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spiner from './components/Spiner'

const Contenedor = styled.div`
  max-width:900px;
  margin:0 auto;
  width:90%;
  @media(min-width: 992px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`
const ContenedorFull = styled.div`
  margin:0 auto;
  width:80%;
  @media(max-width: 700px){
	max-width:900px;
	width:100%;
  }
`
const Imagen = styled.img`
  max-width:400px;
  width:80%;
  margin:100px auto 0 auto;
  display: block;

`

const Heading = styled.h1`
  font-family: 'Lato',sans-serif;
  color:#FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom:50px;
  font-size: 34px;

  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`
function App() {

	const [monedas, setMonedas] = useState({})
	const [resultado, setResultado] = useState({})
	const [cargando, setCargando] = useState(false)

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {
			const cotizarCripto = async () => {
				setCargando(true)
				const { moneda, criptomoneda } = monedas;
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
				// console.log(url);
				const response = await fetch(url);
				const json = await response.json();
				setTimeout(() => {
					setResultado(json.DISPLAY[criptomoneda][moneda])
					setCargando(false);
				}, 2000);

			}
			cotizarCripto();
		}
	}, [monedas]);

	useEffect(() => {
		if (cargando) {
			const container = document.getElementById('containerfull');
			if (container) {
				const containerTop = container.getBoundingClientRect().top;
				window.scrollTo({
					top: containerTop,
					behavior: 'smooth',
				});
			}
		}
	}, [cargando]);

	return (
		<>
			<Contenedor>
				<Imagen
					src={ImagenCripto}
					alt='Imagenes criptomonedas'
				/>
				<div>
					<Heading>
						Cotiza Criptomonedas al Instante
					</Heading>
					<Formulario
						setMonedas={setMonedas}
						setResultado={setResultado}
					/>
				</div>
			</Contenedor>
			<ContenedorFull id="containerfull">
				{cargando && <Spiner id="#spiner" />}
				{resultado.PRICE && <Resultado resultado={resultado} />}
			</ContenedorFull>
		</>
	)
}

export default App
