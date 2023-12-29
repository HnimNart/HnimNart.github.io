import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import { FieldNumberFloat, Item } from "../../widgets/fields";



export const anglesComponenent = ({ state, dispatch, open, setOpen }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText primary="Angles" />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid container spacing={1} >
                    <Grid item xs={2}>
                        <Box
                            sx={{
                                p: 1,
                                borderRadius: 2,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr' },
                                gap: 2,
                            }}
                        >
                            <Item key="incident" elevation={2}>
                                {`Incident Angle`}
                            </Item>
                            <FieldNumberFloat label="Theta_i" value={state.theta_i} type='theta_i' dispatch={dispatch} />
                            <FieldNumberFloat label="Phi_i" value={state.phi_i} type='phi_i' dispatch={dispatch} />
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            sx={{
                                p: 1,
                                borderRadius: 2,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr' },
                                gap: 2,
                            }}
                        >
                            <Item key="incident" elevation={2}>
                                {`Collection Angle`}
                            </Item>
                            <FieldNumberFloat label="Theta_o" value={state.theta_o} type='theta_o' dispatch={dispatch} />
                            <FieldNumberFloat label="Phi_o" value={state.phi_o} type='phi_o' dispatch={dispatch} />
                        </Box>
                    </Grid>
                </Grid>
            </Collapse>
        </Box>
    )
}

