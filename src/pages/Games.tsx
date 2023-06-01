import React from "react";
import { useNavigate } from "react-router-dom";

export interface IGamesProps {}
 
const Games: React.FunctionComponent<IGamesProps> = (props) => {
    return ( 
        <div className="conGames">
            <button className="btnGames">dsd</button>
            <button className="btnGames">ss</button>
            <button className="btnGames">dd</button>
            <button className="btnGames">zz</button>
            <button className="btnGames">ss</button>
        </div>
     );
}
 
export default Games;