export default function Cover({ image, title, subTitle }) {
    return (
        <section
            className="hero min-h-[600px]"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-screen bg-[#15151599] p-20">
                    <h1 className="mb-5 text-5xl font-bold font-cinzel">{title}</h1>
                    <p className="mb-5 font-inter">
                        {subTitle}
                    </p>
                </div>
            </div>
        </section>
    )
}
