import {TButtonType} from '../types/TButton';

export default interface IButtonAction {
    type: TButtonType
    onClick: () => void;
}