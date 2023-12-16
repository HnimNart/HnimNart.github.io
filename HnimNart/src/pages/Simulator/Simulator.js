import init, { simulate } from "simulator";
import { useEffect } from "react";

export const Simulator = () => {
    const handleClick = () => {
        // implementation details
        init().then(() => {
            simulate(1, 1);
        });
    }

    return (<>
        <h1> Simulator </h1>
        <div>
            <button type="button" onClick={handleClick}>
                Click Me
            </button>
        </div>
    </>
    );
}

export default Simulator;