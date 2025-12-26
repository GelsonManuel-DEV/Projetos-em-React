import HeaderCard from "../short-components/HeaderCard";
import ShopBtn from "../short-components/ShopBtn";
function Header(){
    return (
        <>
        <header className="h-[calc(100vh + 800px)] relative top-0 w-full flex flex-col  sm:h-[calc(100vh + 300px)]">
            <div className="w-full p-2 h-[800px] sm:h-[500px] bg-slate-900 relative  flex flex-col gap-8 align-center justify-center md:p-0">
                <h1 className="text-white me-auto ms-auto text-4xl">30-50% Off Sitewide</h1>
                <h2 className="text-white me-auto ms-auto text-3xl font-extralight">Order by 12/21 for Christmas delivery</h2>
                <div className="p-2 flex flex-col gap-4 md:flex-row md:me-auto md:ms-auto md:p-4">
                    <ShopBtn content="Shop Men" />
                    <ShopBtn content="Shop Women"/> 
                </div>
            </div>
            <HeaderCard />
        </header>
        </>
    )
}
export default Header;
