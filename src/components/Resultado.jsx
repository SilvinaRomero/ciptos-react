import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: white;
    font-family:'Lato',sans-serif;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap:3rem;
    margin-top: 30px;
    width: 100%;;
    padding-bottom: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 80px;
    margin: auto;
`
const Texto = styled.p`
    font-size:16px;
    color: black;
    background-color: rgb(245, 235, 235);
    box-shadow: 1px 1px 4px 2px rgb(182, 178, 178);
    padding:15px;
    width: 250px;
    text-align: start;
    height: 80px;
    margin: auto;
`
const Span = styled.p`
    font-size: 18px;
    font-weight: 700px;
    text-align: center;
`

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    return (
        <>
            <Contenedor>
                <Texto> <Imagen src={`https://www.cryptocompare.com${IMAGEURL}`} alt="imagen" /></Texto>
                <Texto>Precio mas alto del día: <Span>{HIGHDAY}</Span></Texto>
                <Texto>Variación últimas 24 horas: <Span>{CHANGEPCT24HOUR}</Span></Texto>
                <Texto>Precio actual es de: <Span>{PRICE}</Span></Texto>
                <Texto>Precio mas bajo del día: <Span>{LOWDAY}</Span></Texto>
                <Texto>Última Actualización: <Span>{LASTUPDATE}</Span></Texto>
            </Contenedor>

        </>
    )
}

export default Resultado
