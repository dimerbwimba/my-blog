import DestinationCard from "./destination_card";





const PopularDestination = () => {

    const items = [

        {
            cover_images: [
                {
                    url: ""
                }
            ],
            city: "Cape Town",
            country: "South Africa",
            description: "",
            place_name: "",
            location_address: "",
            ratings: ""

        },
        {
            cover_images: [
                {
                    url: ""
                }
            ],
            city: "Tokyo",
            country: "Japan",
            ratings: "",
            description: "",
            place_name: "",
            location_address: ""

        },
        {
            cover_images: [
                {
                    url: ""
                }
            ],
            city: "Tokyo",
            country: "Japan",
            ratings: "",
            description: "",
            place_name: "",
            location_address: ""

        }

    ]

    return (
        <section className=" flex justify-center flex-col items-center">
            <h2 className=" text-xl font-bold py-5">POPULAR DESTINATIONS</h2>
            <div className=" grid grid-cols-3 gap-4 text-center lg:w-3/4">
                {
                    items.map((item) => (<DestinationCard key={item.city} destination={item} />))
                }
            </div>
        </section>
    );
}

export default PopularDestination;