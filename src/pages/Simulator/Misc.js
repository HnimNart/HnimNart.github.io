import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';


export function miscComponent({ state, dispatch, open, setOpen }) {
    return (
        <Box sx={{ width: '100%' }}>
            <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText primary="Miscellaneous" />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className="input-text-wrapper" style={{ display: "flex", alignItems: "center" }} >
                    <TextField
                        label="Output file"
                        id="filled-size-small"
                        value={state.outfile}
                        sx={{ m: 1, width: '25ch' }}
                        variant='filled'
                        onChange={(e) => { dispatch({ type: 'changeOutFile', value: e.target.value }) }}
                    />
                </div>
            </Collapse>
        </Box >)
}

