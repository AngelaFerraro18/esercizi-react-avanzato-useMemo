import { useMemo, useState } from 'react';

const inizialeCarrello = [
    { id: 1, nome: 'Maglietta', prezzo: 20, quantità: 2 },
    { id: 2, nome: 'Jeans', prezzo: 50, quantità: 1 },
];

function Carrello() {
    const [carrello, setCarrello] = useState(inizialeCarrello);
    const [show, setShow] = useState(true);

    // TODO: calcola il totale solo quando il carrello cambia
    // const totale = null;

    const totale = useMemo(() => {

        return carrello.reduce((acc, curr) => acc + curr.prezzo * curr.quantità, 0);

    }, [carrello]);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle visibilità</button>
            {show && <h2>Totale carrello: {totale}€</h2>}
            <ul>
                {carrello.map(p => (
                    <li key={p.id}>
                        {p.nome} - {p.prezzo}€ x {p.quantità}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Carrello;
