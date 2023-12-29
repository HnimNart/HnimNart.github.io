import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { FieldNumberFloat } from "../../widgets/fields";

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
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={0}>
                        <FieldNumberFloat label="light_pixel_width" value={state.light_pixel_width} type='light_pixel_width' dispatch={dispatch} />
                        <FieldNumberFloat label="light_pixel_height" value={state.light_pixel_height} type='light_pixel_height' dispatch={dispatch} />
                        <input id="light_file" type="file"
                            onClick={(e) => { upload_light_file("light_file") }} />
                    </Grid>
                </Grid>
            </Collapse>
        </Box>
    )
}