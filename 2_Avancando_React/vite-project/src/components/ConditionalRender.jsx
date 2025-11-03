import React from "react";

function ConditionalRender() {

    const x = false;

    const y = 200;

    const nome = "João";

    const userName = {
        nome: "Geovane",
        idade: 23,
        profissao: "Programador"
    }

    return(
        
        <div>
            {/*7- Renderização condicional */}
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true Sim</p>}

            <h3>Testando Renderização condicional</h3>
            {y > 100 && <p>200 Nao é menor que 100</p>}

            {/*8- Adicionando else nas condições */}
            {nome === "João" ? (
                <div>
                    <p>Olá João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}

            {userName.profissao === "Programador" ? (
                <div>
                    <p>Bom dia {userName.profissao}</p>
                </div>
            ) : (
                <div>
                    <p>Voçê não é um programador</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender;