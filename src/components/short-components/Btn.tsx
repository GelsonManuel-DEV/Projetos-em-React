interface btnContent{
    content?:string,
    icon?:{
        solidIcon:string,
        iconTitle:string,
    },
}
function Btn({content,icon}:btnContent){
    return (
        <>
            <button className="border border-black bg-none text-black rounded-lg p-2 transition-all hover:bg-black hover:text-white cursor-pointer" title={icon?.iconTitle} aria-label={icon?.iconTitle}>{content} <i className={icon?.solidIcon}></i></button>
        </>
    )
}
export default Btn;