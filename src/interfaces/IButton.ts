import {TButtonType} from '../types/TButton';

export default interface IButtonAction {
    disable?: boolean | boolean
    type: TButtonType
    onClick: () => void;
};