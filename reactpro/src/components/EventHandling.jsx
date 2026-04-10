const EventHandling = () =>{

    const handleButtonClick = (event) => {
        console.log(event);
        alert("hy,T  am onClick event");
    }

    const handleWelcomeUser = (user) =>{
        console.log(`hy ${user} welcome`);
    }
    return(
        <>
        <button onClick={handleButtonClick}>Click Me</button>
<br />
        <button onClick={(event)=>handleButtonClick(event)}>Click Me2</button>
<br />
        <button onClick={(event)=>console.log(event)}>Click Me3</button>
<br />
        <button onClick={() =>alert("hy i am inline function")}>Inline</button>
<br />
        <button onClick={() => handleWelcomeUser("Atif")}>Click Me</button>


        </>
    )
}
export default EventHandling