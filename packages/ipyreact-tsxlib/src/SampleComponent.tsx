export const SampleButton = (
    {label, onclick}:
    {label:string; onclick:(ev:any) => void;}) => {
    return <button onClick={onclick}>{label}</button>
}

export const HeaderNoArgs = () => {
	return <h1> Header NoArgs </h1>
    }
