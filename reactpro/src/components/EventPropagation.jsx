const EventPropagation =( ) =>{
    const handleGrandParent=() =>{
        console.log("GrandParent clicked");
    }
    const handleParentClick =()=>{
        console.log("parent clicked");
    }
    const handleChildClick=(event)=>{
        console.log(event);
        console.log("chiled click");

    }
    return(
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>chiled div</button>
                </div>
            </div>
        </section>
    )
}
export default EventPropagation