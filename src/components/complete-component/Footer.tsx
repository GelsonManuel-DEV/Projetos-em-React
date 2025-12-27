import FooterDetails from "../short-components/FooterDetails";
import SocialMedia from "../short-components/SocialMedias";
const Footer = ()=>{
    const helpLinks:string[] = ['Link Chat','Call Us', 'Text Us', 'helP@allbirds.com','FAQ/Contact Us', 'Returns/Exchanges']
    const shopLinks:string[] = ['Men`s Shoes', 'Women`s Shoes', 'Men`s Apperer', 'Womne`s Apperer']
    const companyLinks:string[] = ['Our Story', 'Our Stories', 'Our Materials','Sustainability','Investor','Shoe Care']
    return (
        <>
            <footer className="grid grid-cols-1 md:grid-cols-2 bg-black p-6  mt-28">
                <div className="mt-20 flex flex-col gap-5 me-7">
                    <h1 className="text-white text-xl font-semibold">Subscribe to Our Email</h1>
                    <div className="flex w-full ">
                    <input className="px-4 py-2 rounded-s-xl w-full placeholder:text-gray-600" type="text" placeholder="Email Adress..." />
                    <button className="text-black pe-3 rounded-e-xl bg-white">Subscribe</button>
                    </div>
                    <div>
                        <SocialMedia />
                    </div>
                </div>
                
                <div className="flex mt-20 space-y-6 justify-between flex-wrap p-4">
                <FooterDetails title="Help" link={helpLinks} text_color="text-white"/>
                <FooterDetails title="Shop" link={shopLinks} text_color="text-white"/>
                <FooterDetails title="Company" link={companyLinks} text_color="text-white"/>
                </div>
            </footer>
        </>
    )
}
export default Footer;
