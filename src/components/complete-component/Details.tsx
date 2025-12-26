import DetailsCard from "../short-components/DetailsCard";
function Details(){
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 py-7 gap-5 w-10/12 justify-self-center">
                <DetailsCard title="WEAR ALL DAY COMFORT">
                    Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing fell effortless, slip in, lace up, or slide tem on and enjoy the comfy support.
                </DetailsCard>

                <DetailsCard title="SUSTAINABILITY IN EVERY STEP">
                    Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing fell effortless, slip in, lace up, or slide tem on and enjoy the comfy support.
                </DetailsCard>

                <DetailsCard title="MATERIALS FROM THE EARTH">
                    Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing fell effortless, slip in, lace up, or slide tem on and enjoy the comfy support.
                </DetailsCard>
            </div>
        </>
    )
}
export default Details;