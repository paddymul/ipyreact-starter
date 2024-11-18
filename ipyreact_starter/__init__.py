import ipyreact
from pathlib import Path



ipyreact.define_module(
    "ipyreact-tsxlib",
    Path(__file__).parent.parent / "packages/bundled-staging/ipyreact-tsxlib.rollup.bundle.js")

class Simple(ipyreact.ValueWidget):
    _esm="""
    import confetti from "canvas-confetti";
    import * as React from "react";
    import ipyr from "ipyreact-tsxlib";
    export default function({value, setValue}) {
        console.log("ipyr", ipyr);
        const clickCallback = (foo:any) => {console.log("clickCallback", foo)}    

        return (<div>
        <ipyr.SampleButton onClick={clickCallback} label={"SampleButton label"} />
              <button onClick={() => confetti() && setValue(value + 1)}>
            {value || 0} times confetti
        </button>
    </div>);
    };
    """
