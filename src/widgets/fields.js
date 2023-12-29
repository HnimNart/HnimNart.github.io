import TextField from '@mui/material/TextField';

export function FieldNumberInt(props) {
    return (
        < TextField
            label={props.label}
            type="number"
            value={props.value}
            variant="filled"
            onChange={(e) => props.dispatch({ type: 'int', key: props.type, value: e.target.value })
            }
        />
    )
}
export function FieldNumberFloat(props) {
    return (
        < TextField
            label={props.label}
            type="number"
            value={props.value}
            variant="filled"
            onChange={(e) => props.dispatch({ type: 'float', key: props.type, value: e.target.value })
            }
        />
    )
}

export function FieldNumberFloat2(props) {
    return (
        < TextField
            label={props.label}
            type="number"
            value={props.value}
            variant="filled"
            onChange={props.onChange}
        />
    )
}