import { TextField, TextFieldProps } from "./TextField";


export const NumericField: React.FC<TextFieldProps> = ({ ...rest }) => {
    return <TextField {...rest} onInput={(e) => {
        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, '');
        e.currentTarget.value = e.currentTarget.value.replace(/(\..*)\./g, '$1');
    }} />
}