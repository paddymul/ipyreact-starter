export const SampleButton({label, onclick}:{label:string; onclick:(ev:any) => void}) => {

    return <button onclick={onclick}>{label}</button>
}
