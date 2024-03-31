const Contact = () =>{
    return (
    <div className="flex-wrap  w-6/12 h-auto">    
        <h1>Contact Us</h1>
        <div className="">
            <form>
                <input type="text" placeholder="Name" className="border-black-2 rounded-lg  m-2 p-2 w-4/12"/>
                
                <input type="text" placeholder="Query" className="border-black rounded-lg m-2 p-2 w-4/12"/>

                <button type="submit" className="bg-[#333] text-white rounded-lg  m-2 p-2 ">Submit</button>
            </form>
        </div>
    </div>    
    )
}
export default Contact;