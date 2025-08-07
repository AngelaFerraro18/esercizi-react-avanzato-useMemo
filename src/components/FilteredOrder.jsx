import { useState, useMemo } from 'react';

const prodotti = [
    { id: 1, nome: 'Penna', prezzo: 2 },
    { id: 2, nome: 'Agenda', prezzo: 25 },
    { id: 3, nome: 'Zaino', prezzo: 50 },
    { id: 4, nome: 'Portatile', prezzo: 700 },
];

function ListaProdotti() {
    const [filterPrezzo, setFilterPrezzo] = useState(false);
    const [sort, setSort] = useState(false);

    // TODO: filtra se filterPrezzo è true (<= 30)
    //       ordina se sort è true (crescente)
    const listaFinale = useMemo(() => {

        let risultato = [...prodotti];

        if (filterPrezzo) {
            risultato = risultato.filter(p => p.prezzo <= 30)
        }

        if (sort) {
            risultato = risultato.sort((a, b) => b.prezzo - a.prezzo)
        }

        return risultato;
    }, [sort, filterPrezzo]);

    return (
        <div>
            <button onClick={() => setFilterPrezzo(!filterPrezzo)}>
                {filterPrezzo ? 'Mostra tutti' : 'Mostra solo sotto i 30€'}
            </button>
            <button onClick={() => setSort(!sort)}>
                {sort ? 'Disattiva ordinamento' : 'Ordina per prezzo'}
            </button>
            <ul>
                {listaFinale.map(p => (
                    <li key={p.id}>{p.nome} - {p.prezzo}€</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaProdotti;
