import { useState, useMemo } from 'react';

const utenti = [
    { id: 1, nome: 'Anna', eta: 22 },
    { id: 2, nome: 'Luca', eta: 35 },
    { id: 3, nome: 'Marco', eta: 40 },
    { id: 4, nome: 'Elisa', eta: 28 },
];

function FiltroUtenti() {
    const [showTitle, setShowTitle] = useState(true);

    // TODO: usa useMemo per filtrare utenti con eta > 30

    const filteredUsers = useMemo(() => {

        return utenti.filter(u => u.eta > 30);

    }, [])

    return (
        <div>
            <button onClick={() => setShowTitle(!showTitle)}>Toggle Titolo</button>
            {showTitle && <h2>Utenti over 30</h2>}
            <ul>
                {filteredUsers.map(u => <li key={u.id}>{u.nome} - {u.eta}</li>)}
            </ul>
        </div>
    );
}


export default FiltroUtenti;