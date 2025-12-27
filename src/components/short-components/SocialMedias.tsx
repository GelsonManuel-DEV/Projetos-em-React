const SocialMedia = ()=>{
    return (
        <>
            <div className="flex space-x-4 p-4 rounded-lg bg-zinc-950 w-fit">
                <a href="#" className="text-white transition-opacity hover:opacity-65 text-xl" aria-label="Instagram" title="Instagram">
                <i className='bx bxl-instagram'></i>
                </a>
                <a href="#" className="text-white transition-opacity hover:opacity-65 text-xl" aria-label="Git Hub" title="Git Hub">
                <i className='bx bxl-github'></i>
                </a>
                <a href="#" className="text-white transition-opacity hover:opacity-65 text-xl" aria-label="Linkedin" title="Linkedin">
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="#" className="text-white transition-opacity hover:opacity-65 text-xl" aria-label="Tik Tok" title="Tik Tok">
                <i className='bx bxl-tiktok'></i>
                </a>   
            </div>
        </>
    )
}
export default SocialMedia;
