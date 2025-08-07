import { useState, useMemo } from 'react';

function SlowSquareCalculator() {
    const [number, setNumber] = useState(0);
    const [otherState, setOtherState] = useState(false);

    // function slowFunction(n) {
    //     console.log('Eseguendo calcolo lento...');
    //     for (let i = 0; i < 1e9; i++) { } // simula lentezza
    //     return n * n;
    // }

    // TODO: usa useMemo per evitare che slowFunction venga chiamata ogni volta

    const slowCalculator = useMemo(() => {
        console.log('Eseguendo calcolo lento...');
        for (let i = 0; i < 1e9; i++) { } // simula lentezza
        return number * number;
    }, [number])

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setOtherState(!otherState)}>Toggle</button>
            <p>Risultato: {slowCalculator}</p>
        </div>
    );
}


export default SlowSquareCalculator;