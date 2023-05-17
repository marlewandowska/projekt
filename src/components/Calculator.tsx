import { useEffect, useState } from "react";

async function Calculator() {
    const response = await fetch("http://api.nbp.pl/api/exchangerates/tables/A/");
    const jsonData = await response.json();
    console.log(jsonData);
    return(
        <div>
            <button onClick={Calculator}>Klik</button>
        </div>
    )
  }

export { Calculator }