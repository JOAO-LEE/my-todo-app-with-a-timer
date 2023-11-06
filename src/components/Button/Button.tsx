import { ReactNode } from 'react';
import buttonStyle from './button-style.module.scss';
import IButtonAction from '../../interfaces/IButton'; 

export default function Button ({ children, typeAndAction }: { children: ReactNode, typeAndAction: IButtonAction }) {
    return (
        <button 
        type={typeAndAction?.type} 
        className={buttonStyle['button-style']}
        onClick={typeAndAction?.onClick}
        >{children}
        </button>
    )
}
