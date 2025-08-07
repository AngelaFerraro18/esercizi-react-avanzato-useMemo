import { useState, useMemo } from 'react';

const prodotti = [
    { id: 1, nome: 'Libro', prezzo: 12 },
    { id: 2, nome: 'Mouse', prezzo: 25 },
    { id: 3, nome: 'Zaino', prezzo: 40 },
];

function OrdinaProdotti() {
    const [sortByPrezzo, setSortByPrezzo] = useState(false);

    // TODO: usa useMemo per ordinare solo se sortByPrezzo è true

    const sorteredOrder = useMemo(() => {

        if (sortByPrezzo) {
            return [...prodotti].sort((a, b) => (b.prezzo) - (a.prezzo))
        }

        return prodotti;
    }, [sortByPrezzo])



    return (
        <div>
            <button onClick={() => setSortByPrezzo(!sortByPrezzo)}>
                {sortByPrezzo ? 'Disattiva ordinamento' : 'Ordina per prezzo'}
            </button>
            <ul>
                {sorteredOrder.map(p => <li key={p.id}>{p.nome}  prezzo: {p.prezzo}</li>)}
            </ul>
        </div>
    );
}


export default OrdinaProdotti;