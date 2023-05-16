import { useState } from "react";



const Test = () => {
    const [pageState, setPageState] = useState("Test");

    function handle(value:string | number){
        setPageState(`Tekst: ${value}`)
    }

    return (
        <div className="Wrapper">
            <input onChange={(event)=>handle(event.target.value)} type="text" />
            <button onClick={()=>handle("dsds")}>Klik</button>
            <span>{pageState}</span>
        </div>
    )
}

export {Test}

// napisac aplikacje ktora przechowuje numer, niech ten numer jest wyswietlany niech sa 4 przyciski ktore modyfikuja ten numer +1 -1 +5 -5 
// niech tez jest input ktory przyjmuje tylko numery i po klikniecu w przycisk modyfikuje wyswietlany numer, oddzielny komponent 