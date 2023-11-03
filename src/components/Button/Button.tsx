import { ReactNode } from 'react';
import buttonStyle from './button-style.module.scss';
import { TButton } from '../../types/TButton';

export default function Button ({ children, type }: { children: ReactNode, type: TButton }) {
    return (
        <button type={type} className={buttonStyle['button-style']}>{children}</button>
    )
}
