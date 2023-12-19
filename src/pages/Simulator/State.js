import { useEffect, useRef } from "react"
import { useImmerReducer } from "use-immer";


import init, { setup, main } from "simulator";
import { get_sigma_s, get_g, get_ior, get_sigma_a } from "simulator";
import { set_sigma_s, set_g, set_ior, set_sigma_a } from "simulator";
import { get_width, get_height, set_width, set_height } from "simulator";
import { get_n_samples_pr_frame, get_n_frames, set_n_samples_pr_frame, set_n_frames } from "simulator"
import { get_pixel_width, get_pixel_height, set_pixel_width, set_pixel_height } from "simulator";
import { get_min_bounce, get_max_bounce, set_min_bounce, set_max_bounce } from "simulator";
import { set_wi, set_wo } from 'simulator';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/base/Button';

const initialState = {
    ready: false,

    // Simualtion params
    samples: 10,
    samples_pr_frame: 1,
    width: 1,
    height: 1,
    pixel_width: 0.1,
    pixel_height: 0.1,
    bmin: 1,
    bmax: 1000,

    // Light Direction
    theta_i: 0.0,
    phi_i: 0.0,

    // Collection Direction
    theta_o: 0.0,
    phi_o: 180.0,

    // Optical properties
    scattering: 0.0,
    absorption: 0.0,
    asymmetry: 0.0,
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
        case 'setReady': {
            draft.ready = true;
            break;
        }
        case 'changeFile': {
            if (action.files) {
                draft.file = action.files[0];
            }
            break;
        }
        case 'changeOutFile': {
            draft.outfile = action.value;
            break;
        }
        case 'samples': {
            set_n_frames(action.value);
            draft.samples = action.value;
            break;
        }
        case 'samples_pr_frame': {
            set_n_samples_pr_frame(action.value);
            draft.samples_pr_frame = action.value;
            break;
        }
        case 'width': {
            set_width(action.value);
            draft.width = action.value;
            break;
        }
        case 'height': {
            set_height(action.value);
            draft.height = action.value;
            break;
        }
        case 'pixel_width': {
            set_pixel_width(action.value);
            draft.pixel_width = action.value;
            break;
        }
        case 'pixel_height': {
            set_pixel_height(action.value);
            draft.pixel_height = action.value;
            break;
        }
        case 'bmin': {
            set_min_bounce(action.value);
            draft.bmin = action.value;
            break;
        }
        case 'bmax': {
            set_max_bounce(action.value);
            draft.bmax = action.value;
            break;
        }
        case 'scattering': {
            if (isValidDecimal(action.value)) {
                set_sigma_s(action.value);
                draft.scattering = action.value;
            }
            break;
        }
        case 'absorption': {
            if (isValidDecimal(action.value)) {
                set_sigma_a(action.value);
                draft.absorption = action.value;
            }
            break;
        }
        case 'ior': {
            if (isValidDecimal(action.value)) {
                set_ior(action.value);
                draft.ior = action.value;
            }
            break;
        }
        case 'asymmetry': {
            if (isValidDecimal(action.value)) {
                set_g(action.value);
                draft.g = action.value;
            }
            break;
        }
        case 'theta_i': {
            if (isValidDecimal(action.value)) {
                draft.theta_i = action.value;
                set_wi(draft.phi_i, draft.theta_i);
            }
            break;
        }
        case 'phi_i': {
            if (isValidDecimal(action.value)) {
                draft.phi_i = action.value;
                set_wi(draft.phi_i, draft.theta_i);
            }
            break;
        }

        case 'theta_o': {
            if (isValidDecimal(action.value)) {
                draft.theta_o = action.value;
                set_wo(draft.phi_o, draft.theta_o);
            }
            break;
        }
        case 'phi_o': {
            if (isValidDecimal(action.value)) {
                draft.phi_o = action.value;
                set_wo(draft.phi_o, draft.theta_o);
            }
            break;
        }

        default: {
            console.log("Unknown Action", action.type);
        }
    }
    return draft;
}




export default function MainComponent() {
    const [state, dispatch] = useImmerReducer(reducer, initialState);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!state.ready) {
            init().then(() => {
                dispatch({ type: 'scattering', value: get_sigma_s() });
                dispatch({ type: 'absorption', value: get_sigma_a() });
                dispatch({ type: 'asymmetry', value: get_g() });
                dispatch({ type: 'ior', value: get_ior() });
                dispatch({ type: 'samples', value: get_n_frames() });
                dispatch({ type: 'samples_pr_frame', value: get_n_samples_pr_frame() });
                dispatch({ type: 'width', value: get_width() });
                dispatch({ type: 'height', value: get_height() });
                dispatch({ type: 'pixel_width', value: get_pixel_width() });
                dispatch({ type: 'pixel_height', value: get_pixel_height() });
                dispatch({ type: 'bmin', value: get_min_bounce() });
                dispatch({ type: 'bmax', value: get_max_bounce() });
            }).then(dispatch({ type: 'setReady' })).catch((error) => {
                if (!error.message.startsWith("Using exceptions for control flow,")) {
                    throw error;
                }
            });
        }
    }, []);


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
        <FieldNumber label="Number of samples" value={state.samples} type='samples' />
        <FieldNumber label="Number of samples pr frame" value={state.samples_pr_frame} type='samples_pr_frame' />
        <FieldNumber label="Width" value={state.width} type='width' />
        <FieldNumber label="Height" value={state.height} type='height' />
        <FieldNumber label="Pixel Width" value={state.pixel_width} type='pixel_width' />
        <FieldNumber label="Pixel Height" value={state.pixel_height} type='pixel_height' />
        <FieldNumber label="Min Bounces" value={state.bmin} type='bmin' />
        <FieldNumber label="Max Bounces" value={state.bmax} type='bmax' />
        <h3> Angles </h3>

        <FieldNumber label="Theta_i" value={state.theta_i} type='theta_i' />
        <FieldNumber label="Phi_i" value={state.phi_i} type='phi_i' />
        <FieldNumber label="Theta_o" value={state.theta_o} type='theta_o' />
        <FieldNumber label="Phi_o" value={state.phi_o} type='phi_o' />

        <h3> Optical Properties </h3>
        <FieldNumber label="Scattering" value={state.scattering} type='scattering' />
        <FieldNumber label="Absorption" value={state.absorption} type='absorption' />
        <FieldNumber label="Asymmetry" value={state.asymmetry} type='asymmetry' />
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
            {state.ready && <Button
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