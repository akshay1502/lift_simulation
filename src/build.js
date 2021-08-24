import Floor from "./floor";

const Build = ({floors}) => {
    return ( 
        <>  
            <Floor floor={floors} last={true} />
            {
                [...Array.from({length:floors-1}, (_,i) => i+1)].reverse().map(floor => {
                    return(
                        <Floor floor={floor} key={floor} />
                    )
                })
            }
            <Floor floor={0} floorName='G'/>
        </>
    );
}
 
export default Build;
