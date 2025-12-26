function BigCard(){
    return (
        <>
            <div className="flex flex-col lg:flex-row ms-auto me-auto w-[90%] mt-48">
                <div className=" max-w-sm w-72">
                    <img className="size-full object-cover" src="img/item-7.jpg" alt="exemplar" />
                </div>
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex flex-col flex-wrap space-y-4 md:flex-row justify-between">
                        <h1 className="text-4xl text-bold">WE ARE GOING TO SHOW YOUR <span className="text-blue-800">BEST</span></h1>
                        <button className="border border-black rounded-md px-2 cursor-pointer transition-colors text-black hover:bg-black hover:text-white">Saber Mais</button>
                    </div>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum porro accusantium error sit a magnam ipsa dolore.</p>
                    <button className="text-white bg-black rounded-lg py-2 px-4">Get in Touch</button>
                </div>
            </div>
        </>
    )
}
export default BigCard;
