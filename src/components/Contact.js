import React, {useState} from "react";


function Contact () {

    const [title, setTitle] = useState('')


    function cz () {
        const czesc = document.getElementById('czesc')
        czesc.style.display = 'block'
    }


    return (
        <div className="form container">
            <label for="name">Nickname (do 15 znaków):</label>
            <input type="text" placeholder="Nickname" id="name" name="name" required
            minlength="1" maxlength="15" size="14" onChange={event => setTitle(event.target.value)} ></input>
            {/* <button className="submit" onClick={cz}>OK</button> */}
            <div id="czesc" className="czesc">Cześć, {title}</div>
       </div>
    ) 
}

export default Contact