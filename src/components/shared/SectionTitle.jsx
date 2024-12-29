export default function SectionTitle({ heading, subHeading }) {
    return (
        <div className="lg:w-1/4 md:w-1/2 mx-auto space-y-4 my-10">
            <p className="text-center text-[#D99904] italic font-inter">---{subHeading}---</p>
            <h3 className="uppercase text-center text-3xl font-cinzel border-y-2 p-4">{heading}</h3>
        </div>
    )
}
