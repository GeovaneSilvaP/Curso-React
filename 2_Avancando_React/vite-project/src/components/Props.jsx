export function Props({nome, cidade}) {
    return(
        <div>
            <h3>Seu nome é {nome} e mora em {cidade}</h3>
        </div>
    )
}

export function Carro({marca, km, cor}) {
    return(
        <div>
            <h2>Detalhes do Carro:</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Kilometragem: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
        </div>
    )
}

export function PropsComPros(props) {
    return(
        <div>
            <h3>Curso de React JS do {props.basico} ao {props.avancado}</h3>
        </div>
    )
}

