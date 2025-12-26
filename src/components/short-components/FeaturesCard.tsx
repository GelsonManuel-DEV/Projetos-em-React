import ShopBtn from "./ShopBtn"
interface FeatProps{
    title:string,
    img:{
        alt?:string,
        url:string
    }
}
function FeaturesCard({title, img}:FeatProps){
    return (
        <>
            <div className="relative bg-gray-500 h-[560px] rounded-lg z-10 overflow-hidden">
                <img className="size-full object-cover absolute transition hover:scale-150 rounded-lg z-0" src={img.url} alt={img.url ?? 'Exemplar'} />
                <h1 className="relative w-fit z-20 top-1/2 left-1/3 right-1/2 font-bold text-white text-2xl">{title}</h1>
                <div className="flex flex-wrap gap-2 justify-between p-2 relative top-3/4">
                    <ShopBtn content="Shop Men" />      
                    <ShopBtn content="Shop Women" />      
                </div>
            </div>
        </>
    )
}
export default FeaturesCard;
