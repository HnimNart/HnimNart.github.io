import { useEffect, useRef, useState } from "react"
import { useImmerReducer } from "use-immer";


import init, { main, init_logger, init_storage } from "simulator";
import { get_float_from_key, get_int_from_key, get_string_from_key } from "simulator";
import { set_float_from_key, set_int_from_key, set_string_from_key } from "simulator";

import TextField from '@mui/material/TextField';
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

    // Optical properties
    sigma_s: 0.0,
    sigma_a: 0.0,
    g: 0.0,
    ior: 0.0,

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



export default function MainComponent() {
    const [ready, setReady] = useState(false);
    const [state, dispatch] = useImmerReducer(reducer, initialState);
    const canvasRef = useRef(null);

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
                console.log("Uknonwn type", type);
        }
        return dispatch({ type: type, key: name, value: value });
    }

    useEffect(() => {

        if (!ready) {
            init().then(() => {
                init_logger();
                init_storage();
                dispatch_value_from_name('sigma_s', 'float');
                dispatch_value_from_name('sigma_a', 'float');
                dispatch_value_from_name('g', 'float');
                dispatch_value_from_name('ior', 'float');
                dispatch_value_from_name('pixel_width', 'float');
                dispatch_value_from_name('pixel_height', 'float');

                dispatch_value_from_name('n_samples', 'int');
                dispatch_value_from_name('n_samples_pr_frame', 'int');
                dispatch_value_from_name('width', 'int');
                dispatch_value_from_name('height', 'int');
                dispatch_value_from_name('min_bounce', 'int');
                dispatch_value_from_name('max_bounce', 'int');
            }).then(setReady(true)).catch((error) => {
                if (!error.message.startsWith("Using exceptions for control flow,")) {
                    throw error;
                }
            });
        }
    }, [dispatch, ready]);


    function FieldNumber(props) {
        return (
            < TextField
                label={props.label}
                type="number"
                sx={{ m: 1, width: '25ch' }
                }
                value={props.value}
                variant="filled"
                onChange={(e) => dispatch({ type: props.type, value: e.target.value })
                }
            />
        )
    }
    return (<>
        <h3> Simulation Params </h3>
        <FieldNumber label="Number of samples" value={state.n_samples} type='samples' />
        <FieldNumber label="Number of samples pr frame" value={state.n_samples_pr_frame} type='samples_pr_frame' />
        <FieldNumber label="Width" value={state.width} type='width' />
        <FieldNumber label="Height" value={state.height} type='height' />
        <FieldNumber label="Pixel Width" value={state.pixel_width} type='pixel_width' />
        <FieldNumber label="Pixel Height" value={state.pixel_height} type='pixel_height' />
        <FieldNumber label="Min Bounces" value={state.min_bounce} type='bmin' />
        <FieldNumber label="Max Bounces" value={state.max_bounce} type='bmax' />
        <h3> Angles </h3>

        <FieldNumber label="Theta_i" value={state.theta_i} type='theta_i' />
        <FieldNumber label="Phi_i" value={state.phi_i} type='phi_i' />
        <FieldNumber label="Theta_o" value={state.theta_o} type='theta_o' />
        <FieldNumber label="Phi_o" value={state.phi_o} type='phi_o' />

        <h3> Optical Properties </h3>
        <FieldNumber label="Scattering" value={state.sigma_s} type='sigma_s' />
        <FieldNumber label="Absorption" value={state.sigma_a} type='sigma_a' />
        <FieldNumber label="Asymmetry" value={state.g} type='g' />
        <FieldNumber label="Index of Refraction" value={state.ior} type='ior' />
        <h3> Misc </h3>

        <div>
            <input label='file' type="file"
                onChange={(e) => dispatch({ type: 'changeFile', files: e.target.files })} />
            {state.file && (
                <section>
                    File details:
                    <ul>
                        <li>Name: {state.file.name}</li>
                        <li>Type: {state.file.type}</li>
                        <li>Size: {state.file.size} bytes</li>
                    </ul>
                </section>
            )}
        </div>

        <div className="input-text-wrapper" style={{ display: "flex", alignItems: "center" }} >
            <TextField
                label="Output file"
                id="filled-size-small"
                value={state.outfile}
                sx={{ m: 1, width: '25ch' }}
                variant='filled'
                onChange={(e) => { dispatch({ type: 'changeOutFile', value: e.target.value }) }}
            />
            {ready && <Button
                style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}
                onClick={() => {
                    main();
                }}>Simulate
            </Button>}
        </div>
        <canvas id='canvas' ref={canvasRef} width={10} height={10} />
    </>
    );

}

export { MainComponent }