/* eslint no-eval: 0 */

import { useState } from "react"

import { Button } from '@mui/base/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

import { add_layer, remove_layer, set_layer_from_key } from "simulator";
import { FieldNumberFloat2 } from "../../widgets/fields";





export default function LayersComponenet({ layers, setLayers }) {
    const [open, setOpen] = useState(true);
    const [layerCount, setLayerCount] = useState(layers.length + 1);
    const [layerNames, setLayerNames] = useState(["Layer 0"]);
    const handleClick = () => {
        setOpen(!open);
    };

    function update_layer(id, new_item) {
        let newLayers = [...layers];
        newLayers[id] = new_item;
        setLayers(newLayers);
        set_layer_from_key(id.toString(), JSON.stringify(new_item));
    }

    function LayerComponenet(props) {

        const [open, setOpen] = useState(true);
        const handleClick = () => {
            setOpen(!open);
        };
        return (
            <Box sx={{ width: '100%' }}>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary={props.name} />
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <FieldNumberFloat2 label="Thickness" value={props.item.thickness}
                                onChange={(e) => {
                                    props.item.thickness = parseFloat(e.target.value);
                                    update_layer(props.id, props.item);
                                }} />
                        </Grid>
                        <Grid item xs={3}>
                            <FieldNumberFloat2 label="Scattering" value={props.item.sigma_s}
                                onChange={(e) => {
                                    props.item.sigma_s = parseFloat(e.target.value);
                                    update_layer(props.id, props.item);
                                }} />
                            <FieldNumberFloat2 label="Absorption" value={props.item.sigma_a}
                                onChange={(e) => {
                                    props.item.sigma_a = parseFloat(e.target.value);
                                    update_layer(props.id, props.item);
                                }} />
                            <FieldNumberFloat2 label="Asymmetry" value={props.item.g}
                                onChange={(e) => {
                                    props.item.g = parseFloat(e.target.value);
                                    update_layer(props.id, props.item);
                                }} />
                            <FieldNumberFloat2 label="Refractive Index" value={props.item.ior}
                                onChange={(e) => {
                                    props.item.ior = parseFloat(e.target.value);
                                    update_layer(props.id, props.item);
                                }} />
                        </Grid>
                    </Grid>
                </Collapse>
            </Box>
        )
    }

    return (<>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <LayersOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Layers" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {layers.map(function (item, i) {
                return (<ListItem key={i}>
                    <LayerComponenet name={layerNames[i]} id={i} item={item} />
                    {/* <div>{layerNames[i]}<pre>{JSON.stringify(item, null, 2)}</pre></div> */}
                </ListItem>)
            })
            }
            <ButtonGroup variant="contained" aria-label="small button group">
                <Button
                    style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}
                    onClick={() => {
                        setLayers(prev_layers => {
                            var name = "Layer " + layerCount;
                            var new_layer = add_layer(layerCount.toString());
                            prev_layers.push(new_layer);
                            setLayerNames(layerNames => [...layerNames, name]);
                            setLayerCount(layerCount + 1);
                            return prev_layers;
                        })
                    }}>Add Layer
                </Button>
                < Button
                    style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}
                    onClick={() => {
                        remove_layer((layerCount - 1).toString());
                        setLayers(
                            layers.filter(function (item, j) {
                                return layerNames[layerCount - 1] !== layerNames[j];
                            })
                        );
                        setLayerNames(layerNames.filter(function (item, j) {
                            return layerNames[layerCount - 1] !== item;
                        }));
                        setLayerCount(layerCount - 1);

                    }}>Delete Layer
                </Button>
                <Button
                    style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}
                    onClick={() => {
                        layers.map((item, i) => (
                            remove_layer(i.toString())
                        ));
                        var new_layer = add_layer("0");
                        setLayers([new_layer]);
                        setLayerNames(["Layer 0"]);
                        setLayerCount(1);
                    }
                    }>Reset
                </Button>
                <Button
                    style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}
                    onClick={() => {
                        layers.map(function (item, i) {
                            console.log(i, item);
                            set_layer_from_key(i.toString(), JSON.stringify(item));
                            return ""
                        })
                    }}>Test
                </Button>
            </ButtonGroup>
        </Collapse >
    </>
    )
}