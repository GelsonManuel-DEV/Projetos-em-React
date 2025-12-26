
interface FooterProps{
    link:string[],
    title:string,
    text_color?:'text-white'|'text-black',
}
function FooterDetails({link, title,text_color}:FooterProps){
    return (
        <>
            <div className="flex  flex-col space-y-4">
                <h1 className="text-2xl text-white">{title}</h1>
                <div className="flex flex-col gap-4">
                    {
                        link.map(item=>{
                            return <a href="#" key={item} className={text_color}>{item}</a>
                        })
                    }
                </div>
            </div>        
        </>
    )
}
export default FooterDetails;
