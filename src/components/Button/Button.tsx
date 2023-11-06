import { ReactNode } from 'react';
import buttonStyle from './button-style.module.scss';
import IButtonAction from '../../interfaces/IButton'; 

export default function Button ({ children, typeAndActions }: { children: ReactNode, typeAndActions: IButtonAction }) {
    return (
        <button 
        className={buttonStyle['button-style']}
        type={typeAndActions?.type} 
        onClick={typeAndActions?.onClick}
        disabled={typeAndActions?.disable}
        >{children}
        </button>
    )
}
