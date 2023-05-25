import React from "react";
import { useNavigate } from "react-router-dom";

export interface IHomeProps {}
 
const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return ( 
        <div><p>Home Page</p></div>
     );
}
 
export default Home;