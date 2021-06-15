import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import{ change } from './change';

const Floor = ({cur_floor}) => {
    console.log(typeof("up"+cur_floor));
    return (
    <div className="main">
        <div className="floor">
            <FaArrowCircleUp className="i" size={28} onClick={() => change('up',cur_floor)} id={"up"+cur_floor} />
            <span>{cur_floor}</span>
            <FaArrowCircleDown className="i" size={28} onClick={() => change('down',cur_floor)} id={"down"+cur_floor} />
        </div>
    </div>
    );
}
 
export default Floor;

