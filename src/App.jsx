import NavBar from "./components/NavBar";
import Entry from "./components/Entry";
import data from "./data";

const arr = data.map(entry=>{
    return <Entry 
                key = {entry.id}
                entry={entry}
            /> 
})
export default function App(){
    return (
        
        <>
            <NavBar />
            {arr}
        </>
    )
}