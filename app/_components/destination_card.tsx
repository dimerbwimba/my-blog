
interface DestinationCardProps{
    destination:{
        city:string;
        description : string ;
    }
}

const DestinationCard = ({destination}:DestinationCardProps) => {
    return ( 
        <div className="">
            <div className="flex items-end justify-center bg-muted-foreground/5 shadow h-72 w-64 p-5 rounded-md">
                <div className=" text-start px-2 py-2 bg-white shadow h-32 w-full rounded-md">
                    <h2 className=" text-xs font-bold">{destination.city}</h2>
                    <h3></h3>
                    <p>{destination.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default DestinationCard;