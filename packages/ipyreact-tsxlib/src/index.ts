import _ from "lodash";
import { SampleButton, HeaderNoArgs } from "./SampleComponent";

export default {SampleButton, HeaderNoArgs, _ }
//force print of lodash to make sure it is bundled
console.log("index.ts", _)
