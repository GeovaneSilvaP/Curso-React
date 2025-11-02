function TemplteExpression() {
    const nome = "Geovane"

    const data = {
        nome: "Aurora",
        idade: 23,
        cidade: "Natal"
    }

    return(
        <div>
            {/* Utilizando Template expressions */}
            <p>A soma é {2 + 2}</p>
            <p>Bem vindo {nome}</p>
            <p>Sua idade é {data.idade} anos, seu nome é {data.nome}, e mora em {data.cidade}</p>
        </div>
    )
}

export default TemplteExpression;