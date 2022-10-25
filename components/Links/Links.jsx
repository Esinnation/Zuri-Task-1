import React from "react";
import "./Links.css"
function Links(){
    return(
        <div className="Links">
            <a href="https://twitter.com/esinnation" id="btn__twitter" className="btn">Twitter Link</a>
            <a href="https://training.zuri.team/" id="btn__zuri" className="btn">Zuri Books</a>
            <a href=" http://books.zuri.team " id="books" className="btn">Zuri Team</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=Esinnation" id="book__python" className="btn">Python Books</a>
            <a href=" https://background.zuri.team" id="pitch" className="btn">Background Check for Coders</a>
            <a href="https://books.zuri.team/design-rules" id="book__design" className="btn">Design Books</a>
        </div>
    )
}

export default Links