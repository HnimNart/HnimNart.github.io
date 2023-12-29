
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Item, FieldNumberFloat, FieldNumberInt } from "../../widgets/fields";

export const simParamsComponent = ({ state, dispatch, open, setOpen }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText primary="Simulation Parameters" />
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
                                {`Samples`}
                            </Item>
                            <FieldNumberInt label="Number of samples" value={state.n_samples} type='n_samples' dispatch={dispatch} />
                            <FieldNumberInt label="Number of samples pr frame" value={state.n_samples_pr_frame} type='n_samples_pr_frame' dispatch={dispatch} />
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
                                {`Image Resolution`}
                            </Item>
                            <FieldNumberInt label="Width" value={state.width} type='width' dispatch={dispatch} />
                            <FieldNumberInt label="Height" value={state.height} type='height' dispatch={dispatch} />
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
                                {`Pixel size`}
                            </Item>
                            <FieldNumberFloat label="Width" value={state.pixel_width} type='pixel_width' dispatch={dispatch} />
                            <FieldNumberFloat label="Height" value={state.pixel_height} type='pixel_height' dispatch={dispatch} />
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
                                {`Scattering Events`}
                            </Item>
                            <FieldNumberInt label="Min" value={state.min_bounce} type='min_bounce' dispatch={dispatch} />
                            <FieldNumberInt label="Max" value={state.max_bounce} type='max_bounce' dispatch={dispatch} />
                        </Box>
                    </Grid>


                </Grid>
            </Collapse>
        </Box >)
}