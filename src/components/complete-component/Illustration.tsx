import IlustrationCard from "../short-components/IlustrationCard";
function Illustration(){
    return (
        <>
            <div className="p-4 grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2">
                <IlustrationCard btnContent="BESTSELLERS" url="img/item-13.jpg" alt="Tenis Masculino" />
                <IlustrationCard btnContent="Mens" url="img/item-14.jpg" alt="Tenis Masculino Personalizado"/>
                <IlustrationCard btnContent="Womens" url="img/item-5.jpg" alt="Tenis de alta qualidade" />
                <IlustrationCard btnContent="GIFTS Under 100$" url="img/item-7.jpg" alt="Tenis"/>
            </div>
        </>
    )
}
export default Illustration;
