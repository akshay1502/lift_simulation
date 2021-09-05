import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { goUp } from './change';

const Floor = ({floor, floorName = null, last = null}) => {
    return (
        <div className="floor">
            <div className="buttons">
                { !last && <FaArrowCircleUp className="i" size={28} onClick={ () => goUp(floor) }/> }
                <span>{floorName || floor}</span>
                { !floorName && <FaArrowCircleDown className="i" size={28} /> }
            </div>
        </div>
    );
}
 
export default Floor;

