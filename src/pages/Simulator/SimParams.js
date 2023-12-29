
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { FieldNumberFloat, FieldNumberInt } from "../../widgets/fields";

export const simParamsComponent = ({ state, dispatch, open, setOpen }) => {
        return (
            <Box sx={{ width: '100%' }}>
                <ListItemButton onClick={() => setOpen(!open)}>
                    <ListItemIcon>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary="Simulation Params" />
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={0}>
                            <FieldNumberInt label="Number of samples" value={state.n_samples} type='n_samples' dispatch={dispatch} />
                            <FieldNumberInt label="Number of samples pr frame" value={state.n_samples_pr_frame} type='n_samples_pr_frame' dispatch={dispatch} />
                            <FieldNumberInt label="Width" value={state.width} type='width' dispatch={dispatch} />
                            <FieldNumberInt label="Height" value={state.height} type='height' dispatch={dispatch} />
                            <FieldNumberFloat label="Pixel Width" value={state.pixel_width} type='pixel_width' dispatch={dispatch} />
                            <FieldNumberFloat label="Pixel Height" value={state.pixel_height} type='pixel_height' dispatch={dispatch} />
                            <FieldNumberInt label="Min Bounces" value={state.min_bounce} type='min_bounce' dispatch={dispatch} />
                            <FieldNumberInt label="Max Bounces" value={state.max_bounce} type='max_bounce' dispatch={dispatch} />
                        </Grid>
                    </Grid>
                </Collapse>
            </Box >)
    }