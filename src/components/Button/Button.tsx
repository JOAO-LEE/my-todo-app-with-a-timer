import { ComponentProps } from "react";
import  "./Button.scss";
// import IButtonAction from '../../interfaces/IButton'; 
// 
export function Button ({...rest}: ComponentProps<"button">) {
    return (
        <button 
        className="button-shadowed" 
        {...rest}
        />
        // className={buttonStyle['button-style']}
        // type={typeAndActions?.type} 
        // onClick={typeAndActions?.onClick}
        // disabled={typeAndActions?.disable}
        // >{children}
        
    )
}
