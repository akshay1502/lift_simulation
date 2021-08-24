import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const Floor = ({floor, floorName = null, last = null}) => {
    return (
        <div className="floor">
            <div className="buttons">
            {/* <FaArrowCircleUp className="i" size={28} onClick={() => change('up',floor)} id={"up"+floor} /> */}
            {/* <FaArrowCircleDown className="i" size={28} onClick={() => change('down',floor)} id={"down"+floor} /> */}
                {!last && <FaArrowCircleUp className="i" size={28} /> }
                <span>{floorName || floor}</span>
                { !floorName && <FaArrowCircleDown className="i" size={28} /> }
            </div>
        </div>
    );
}
 
export default Floor;

