import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IAsyncButtonProps {label:string, asyncfunction:()=>Promise<any>}
 
const AsyncButton: React.FunctionComponent<IAsyncButtonProps> = (props) => {
    const {label, asyncfunction} = props

    const [isDisabled, setDisabled] = useState(false)

    const newLogin = async () => {
        setDisabled(true)
        try {
            await asyncfunction()
            throw new Error()
        }
        catch (err){
            console.error("hhhhhhh",err)
        }
        finally  {
            setDisabled(false)
        }

        
    }

    return ( 
        <button type="submit" disabled={isDisabled} className="btn" onClick={() => newLogin()}>{label}</button>
     );
}
 
export default AsyncButton;