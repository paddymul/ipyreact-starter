import ipyreact
from pathlib import Path

ipyreact.define_module(
    "ipyreact-tsxlib",
    Path(__file__).parent.parent / "packages/bundled-staging/ipyreact-tsxlib.minimal.esm.js")

import ipyreact

# note that this import_map is already part of the default
ipyreact.define_import_map({
    "canvas-confetti": "https://esm.sh/canvas-confetti@1.6.0",
})


class Simple(ipyreact.ValueWidget):
    _esm="""
    import confetti from "canvas-confetti";
    import * as React from "react";

    export default function({value, setValue}) {
        return <button onClick={() => confetti() && setValue(value + 1)}>
            {value || 0} times confetti
        </button>
    };
    """

