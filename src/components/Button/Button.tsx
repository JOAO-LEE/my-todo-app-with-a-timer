import { ReactNode } from 'react';
import buttonStyle from './button-style.module.scss';
export default function Button ({children}: {children: ReactNode}) {
    return (
        <button className={buttonStyle['button-style']}>{children}</button>
    )
}
