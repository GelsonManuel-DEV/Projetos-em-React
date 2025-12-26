import ShopBtn from "./ShopBtn";
function HeaderCard(){
    return (
        <>
            <div className="w-full h-[500px] px-0  md:px-2  py-4 relative">
                <img className="rounded-none md:rounded-2xl object-cover h-full w-full relative z-0" src="img/item-4.jpg" alt="exemplar" loading="eager" />
                <div className="z-10 absolute flex flex-col gap-5 ms-4 top-1/3 left-4 md:left-24">
                    <p className="text-white text-sm font-semibold">THIS SALE SLEIGHS</p>
                    <h1 className="text-white text-2xl">30-50% Odd Sitewide</h1>
                <div className="flex flex-col md:self-center sm:flex-row gap-4  justify-self-center">
                    <ShopBtn content="Shop Men" />
                    <ShopBtn content="Shop Women" />
                </div>
                </div>
            </div>
        </>
    )
}
export default HeaderCard;
