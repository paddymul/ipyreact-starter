import ipyreact
from pathlib import Path

ipyreact.define_module(
    "ipyreact-tsxlib",
    Path(__file__).parent.parent / "packages/bundled-staging/ipyreact-tsxlib.minimal.esm.js")

# note that this import_map is already part of the default
ipyreact.define_import_map({
    "canvas-confetti": "https://esm.sh/canvas-confetti@1.6.0",
})


class Simple(ipyreact.ValueWidget):
    _module="ipyreact-tsxlib"
    _esm="""
    import confetti from "canvas-confetti";
    import * as React from "react";
    import SampleButton from "ipyreact-tsxlib";
    
    export default function({value, setValue}) {
        return (<div>
            <SampleButton label={"sample label"} />
            <button onClick={() => confetti() && setValue(value + 1)}>
            {value || 0} times confetti
        </button>
    </div>);
    };
    """

