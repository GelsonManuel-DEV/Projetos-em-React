interface CardContent{
    title:string,
    children:string,
}
const DetailsCard = function({title, children}:CardContent){
    return (
        <>
            <div className="flex cursor-pointer transition-all flex-col gap-5 p-5 rounded-lg shadow-xl bg-gray-200 border-2 border-transparent hover:border-gray-400">
                <h1 className="text-xl">{title}</h1>
                <p>{children}</p>
            </div>
        </>
    )
} 
export default DetailsCard;