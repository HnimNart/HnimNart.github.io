import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 30,
    lineHeight: '30px',
}));


export function DefaultBox() {
    return (
        <Box
            sx={{
                p: 1,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr' },
                gap: 2,
            }}
        ></Box>
    )
}
