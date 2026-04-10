const EventProps =() =>{
    const HandleWelcomeUser=(user) =>{
        alert(`hy , ${user}`);
    }
    const handleHover=()=>{
        alert( `hy thanks for hovering me`); 
    }
    
    
    return(
        <>
        <WellcomeUser onClick={() => HandleWelcomeUser("alii")}
        onMouseEnter={handleHover}
        />
        </>
    )
}
const WellcomeUser=(props)=>{
    
    const  handleGreeting=()=>{
        console.log(`hy, user Welcome`);
    }
return(
    <>
    <button onClick={props.onClick}>Click me</button>
    <br /><br />
    <button onMouseEnter={props.onMouseEnter}>Hover me</button>
    <br /><br />
    <button onClick={handleGreeting}> Greeting</button>
    </>
)
}
export default EventProps