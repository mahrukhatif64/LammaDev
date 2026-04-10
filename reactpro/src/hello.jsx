const name ="bob";
function displayMassage(){
    return "Wow!";
}

function Hello(){
    return <h1>Hello from a component! {displayMassage()}</h1>
}
export default Hello;