/* eslint no-eval: 0 */
import React from 'react';

import { useEffect, useRef, useState } from "react"
import { useImmerReducer } from "use-immer";

import init, { main, init_logger, init_storage } from "simulator";
import { get_layer_from_key_js, get_float_from_key, get_int_from_key, get_string_from_key } from "simulator";
import { set_float_from_key, set_int_from_key, set_string_from_key } from "simulator";

import LayersComponenet from "./Layer";
import { FieldNumberFloat, FieldNumberInt } from "../../widgets/fields";

import { simParamsComponent } from "./SimParams";
import { lightComponenet } from "./Light";
import { anglesComponenent } from "./Angle";
import { miscComponent } from "./Misc";

import { Button } from '@mui/base/Button';
const initialState = {
    // Simualtion params
    n_samples: 10,
    n_samples_pr_frame: 1,
    width: 1,
    height: 1,
    pixel_width: 0.1,
    pixel_height: 0.1,
    min_bounce: 1,
    max_bounce: 1000,

    // Light Direction
    theta_i: 0.0,
    phi_i: 0.0,

    // Collection Direction
    theta_o: 0.0,
    phi_o: 180.0,

    light_width: 0,
    light_height: 0,
    light_pixel_width: 0,
    light_pixel_height: 0,
    light_total_flux: 0,
    light_center_idx_i: 0,
    light_center_idx_j: 0,

    // Misc
    file: null,
    outfile: 'Result.txt',
}

const isValidDecimal = (value) => {
    const regex = /^\d*\.?\d*$/;
    return value === "" || regex.test(value);
}

function reducer(draft, action) {
    switch (action.type) {
        case 'float':
            if (isValidDecimal(action.value)) {
                set_float_from_key(action.key, action.value);
            }
            break;
        case 'int':
            set_int_from_key(action.key, action.value);
            break;
        case 'string':
            set_string_from_key(action.key, action.value);
            break;
        default: {
            console.log("Unknown Action", action.type);
        }
    }
    eval('draft.' + action.key + '= ' + action.value);
    return draft;
}


export default function ParamComponent() {
    const [ready, setReady] = useState(false);
    const [layers, setLayers] = useState([]);
    const [state, dispatch] = useImmerReducer(reducer, initialState);
    const canvasRef = useRef(null);
    const [simOpen, setSimOpen] = useState(true);
    const [angleOpen, setAngleOpen] = useState(true);
    const [lightOpen, setLightOpen] = useState(true);
    const [miscOpen, setMiscOpen] = useState(true);


    useEffect(() => {
        function dispatch_value_from_name(name, type) {
            var value;
            switch (type) {
                case 'float':
                    value = get_float_from_key(name);
                    break;
                case 'int':
                    value = get_int_from_key(name);
                    break;
                case 'string':
                    value = get_string_from_key(name);
                    break;
                default:
                    console.log("Unknown type", type);
            }
            return dispatch({ type: type, key: name, value: value });
        }

        if (!ready) {
            init().then(() => {
                init_logger();
                init_storage();
                dispatch_value_from_name('pixel_width', 'float');
                dispatch_value_from_name('pixel_height', 'float');
                dispatch_value_from_name('n_samples', 'int');
                dispatch_value_from_name('n_samples_pr_frame', 'int');
                dispatch_value_from_name('width', 'int');
                dispatch_value_from_name('height', 'int');
                dispatch_value_from_name('min_bounce', 'int');
                dispatch_value_from_name('max_bounce', 'int');

                dispatch_value_from_name('theta_i', 'float');
                dispatch_value_from_name('phi_i', 'float');
                dispatch_value_from_name('theta_s', 'float');
                dispatch_value_from_name('phi_s', 'float');

                dispatch_value_from_name('light_pixel_width', 'float');
                dispatch_value_from_name('light_pixel_height', 'float');
                dispatch_value_from_name('light_total_flux', 'float');
                dispatch_value_from_name('light_center_idx_i', 'int');
                dispatch_value_from_name('light_center_idx_j', 'int');
                dispatch_value_from_name('light_width', 'int');
                dispatch_value_from_name('light_height', 'int');

                setLayers([get_layer_from_key_js("0")]);
            }).then(setReady(true)).catch((error) => {
                if (!error.message.startsWith("Using exceptions for control flow,")) {
                    throw error;
                }
            });
        }
    }, [dispatch, ready]);

    return (<div>
        <canvas id='staging-canvas' ref={canvasRef} width={10} height={10} />
        {simParamsComponent({ state: state, dispatch: dispatch, open: simOpen, setOpen: setSimOpen })}
        {anglesComponenent({ state: state, dispatch: dispatch, open: angleOpen, setOpen: setAngleOpen })}
        {lightComponenet({ state: state, dispatch: dispatch, open: lightOpen, setOpen: setLightOpen })}
        <LayersComponenet layers={layers} setLayers={setLayers} />
        {miscComponent({ state: state, dispatch: dispatch, open: miscOpen, setOpen: setMiscOpen })}
        {ready && <Button
            style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}
            onClick={() => {
                main();
            }}>Simulate
        </Button>}
    </div>
    );

}

export { ParamComponent }