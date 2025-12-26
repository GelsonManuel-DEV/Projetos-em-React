import '../style.css'
import Btn from './Btn'
interface illProps{
    alt:string,
    url:string,
    btnContent:string,
}
function IlustrationCard({alt,url,btnContent}:illProps){
    return (
        <>
            <div id='il-card' className="rounded-2xl w-auto xl:w-72  h-[calc(288px - 40px)] relative ">
                <img src={url} className="relative size-full shadow-2xl rounded-2xl m-2  object-cover z-0" alt={alt} />
                <div className="absolute top-1/2 z-10 flex flex-col space-y-2 self-center justify-self-center">
                    <Btn content={btnContent} />                    
                </div>
            </div>
        </>
    )
}
export default IlustrationCard;
