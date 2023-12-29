import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Item, FieldNumberFloat } from "../../widgets/fields";

import { upload_light_file } from "simulator";

export const lightComponenet = ({ state, dispatch, open, setOpen }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText primary="Light" />
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
                                {`Pixel size`}
                            </Item>
                            <FieldNumberFloat label="Pixel width" value={state.light_pixel_width} type='light_pixel_width' dispatch={dispatch} />
                            <FieldNumberFloat label="Pixel height" value={state.light_pixel_height} type='light_pixel_height' dispatch={dispatch} />
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
                                {`Beam profile`}
                            </Item>
                            <input id="light_file" type="file"
                                onClick={(e) => { upload_light_file("light_file") }} />
                        </Box>
                    </Grid>
                </Grid>
            </Collapse>
        </Box>
    )
}