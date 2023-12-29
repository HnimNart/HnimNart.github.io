import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { FieldNumberFloat, FieldNumberInt } from "../../widgets/fields";
export const anglesComponenent = ({ state, dispatch, open, setOpen }) => {
        return (
            <Box sx={{ width: '100%' }}>
                <ListItemButton onClick={() => setOpen(!open)}>
                    <ListItemIcon>
                        {open? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary="Angles" />
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={0}>
                            <FieldNumberFloat label="Theta_i" value={state.theta_i} type='theta_i' dispatch={dispatch} />
                            <FieldNumberFloat label="Phi_i" value={state.phi_i} type='phi_i' dispatch={dispatch} />
                            <FieldNumberFloat label="Theta_o" value={state.theta_o} type='theta_o' dispatch={dispatch} />
                            <FieldNumberFloat label="Phi_o" value={state.phi_o} type='phi_o' dispatch={dispatch} />
                        </Grid>
                    </Grid>
                </Collapse>
            </Box>
        )
    }

