import { useState, useMemo } from 'react';

const libri = [
    { id: 1, titolo: 'Harry Potter' },
    { id: 2, titolo: 'Il Signore degli Anelli' },
    { id: 3, titolo: 'Lo Hobbit' },
    { id: 4, titolo: 'La compagnia dell’anello' },
];

function FiltroLibri() {
    const [query, setQuery] = useState('');

    // TODO: filtra libri che includono la query nel titolo
    const libriFiltrati = useMemo(() => {

        return libri.filter(l => l.titolo.toLowerCase().includes(query.trim().toLowerCase()));

    }, [query]);

    return (
        <div>
            <input
                placeholder="Cerca libro"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {libriFiltrati.map(l => (
                    <li key={l.id}>{l.titolo}</li>
                ))}
            </ul>
        </div>
    );
}

export default FiltroLibri;
