import init, { simulate } from "simulator";
import { useState } from 'react';

import { Button } from '@mui/base/Button';
import TextField from '@mui/material/TextField';



export const Simulator = () => {
    const [file, setFile] = useState();
    const [outfile, setOutfile] = useState('Result.txt');
    const [samples, setSamples] = useState(0.0);
    const handleClick = () => {
        // implementation details
        init().then(() => {
            simulate();
        });
    }
    const isValidDecimal = (e) => {
        const regex = /^\d*\.?\d*$/;
        return e.target.value === "" || regex.test(e.target.value);
    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    return (<>
        <h2> Simulation Params </h2>
        <TextField
            label="Number of samples"
            type="number"
            sx={{ m: 1, width: '25ch' }}
            value={samples}
            variant="filled"
            onChange={(e) => isValidDecimal(e) ? setSamples(e.target.value) : alert("not a valid number")}
        />
        <div>
            <input label='file' type="file" onChange={handleFileChange} />
            {file && (
                <section>
                    File details:
                    <ul>
                        <li>Name: {file.name}</li>
                        <li>Type: {file.type}</li>
                        <li>Size: {file.size} bytes</li>
                    </ul>
                </section>
            )}
        </div>


        <div className="input-text-wrapper" style={{ display: "flex", alignItems: "center" }} >
            <TextField
                label="Output file"
                id="filled-size-small"
                value={outfile}
                sx={{ m: 1, width: '25ch' }}
                variant='filled'
                onChange={(event) => {
                    setOutfile(event.target.value);
                }}
            />
            <Button
                style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}
                onClick={() => { handleClick(); }}>Simulate
            </Button>
        </div>
    </>
    );
}

export default Simulator;