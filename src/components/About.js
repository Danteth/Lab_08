import React,{useState} from "react";
import "./About.css";

function About() {
  const [count, setCount] = useState(0);

    function Stating () {
        setCount(count + 1)
    }
    function handleKeyPress (event) {
        if(event.key == 'Enter'){
            setCount(count + 1)
          }
    }
  return (
    <div>
    <div id="event3" className="ReactElement" onContextMenu={Stating}>{count} RightClick</div>
            <div id="event4" className="Event" onDrag={Stating}>{count} Drag</div>
            <div id="event5" className="Event" onDragEnd={Stating}>{count} DragEnd</div>
            <div id="event6" className="Event" onDragEnter={Stating}>{count} DragEnter</div>
            <div id="event7" className="Event" onDragExit={Stating}>{count} DragExit</div>
            <div id="event8" className="Event" onDragLeave={Stating}>{count} DragLeave</div>
            <div id="event9" className="Event" onMouseEnter={Stating}>{count} MouseEnter</div>
            <div id="event10" className="Event" onMouseLeave={Stating}>{count} MouseLeave</div>
            <div id="event11" className="Event" onMouseMove={Stating}>{count} MouseMove</div>
            <div id="event12" className="Event" onMouseOut={Stating}>{count} MouseOut</div>
            <div id="event13" className="Event" onMouseUp={Stating}>{count} MouseUp</div>
            <div id="event14" className="Event" onKeyDown={handleKeyPress} tabIndex="0">{count} KeyDown</div>
            <div id="event15" className="Event" onKeyUp={handleKeyPress} tabIndex="0"> {count} KeyUp</div>
            <div id="event16" className="Event" onCopy={Stating}>{count} Copy</div>
            <div id="event17" className="Event" onCut={Stating}>{count} Cut</div>
            <div id="event18" className="Event" onPaste={Stating}>{count} Paste</div>
            <div id="event19" className="Event" onPointerDown={Stating}>{count} PointerDown</div>
            <div id="event20" className="Event"><input type="text" placeholder="pointerMove" onPointerMove={Stating}/></div>
            <div id="event21" className="Event"><input type="text" placeholder="pointerEnter" onPointerEnter={Stating}/></div>
            <div id="event22" className="Event"><input type="text" placeholder="pointerLeave" onPointerLeave={Stating}/></div>
            <div id="event23" className="Event"><input type="text" placeholder="pointerOver" onPointerOver={Stating}/></div>
            <div id="event24" className="Event"><input type="text" placeholder="pointerOut" onPointerOut={Stating}/></div>
            <div id="event25" className="Event" onWheel={Stating}>{count} MouseWhell</div>
    
    </div>
            
    
  );
}

export default About;