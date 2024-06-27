import Child1 from './child1'

function Name (props){



    return(
        <>
        <h2>welcome Trainne: Mr {props.x} {props.y}</h2>
        <Child1 c1={props.x} c2={props.y}/>
    </>)
}
export default Name;
