export const SampleButton = (
    {label, onClick}:
    {label:string; onClick:(ev:any) => void;}) => {
    return <button onClick={onClick}>{label}</button>
}

export const HeaderNoArgs = () => {
	return <h1> Header NoArgs </h1>
    }
