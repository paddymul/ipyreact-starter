export const SampleButton = (
    {label, onclick}:
    {label:string; onclick:(ev:any) => void;}) => {
    return <button onClick={onclick}>{label}</button>
}
