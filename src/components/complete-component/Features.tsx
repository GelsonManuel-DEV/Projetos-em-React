import FeaturesCard from "../short-components/FeaturesCard";
function Features(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-5 mt-28">
                <FeaturesCard title="Holiday Dressing" img={{url:'img/item-9.jpg', alt:'Vestuario de Domingo'}} />
                <FeaturesCard title="Storm Styles" img={{url:'img/item-15.jpg', alt:'Estilo de frio'}} />
                <FeaturesCard title="Storm Styles" img={{url:'img/item-3.jpg', alt:'Estilo definido'}} />
            </div>
        </>
    )
}
export default Features;
