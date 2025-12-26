interface ShopBtnProps{
    content:string
}
function ShopBtn({content}:ShopBtnProps){
    return <button className=" md:w-40 transition-all rounded-full border border-white text-white hover:bg-white hover:text-black p-2">{content}</button>    
}
export default ShopBtn;
