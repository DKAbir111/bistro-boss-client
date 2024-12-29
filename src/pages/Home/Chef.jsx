import chefImg from '../../assets/home/chef-service.jpg'
export default function Chef() {
    return (
        <section className='max-w-screen-xl mx-auto my-24 h-[500px] bg-cover bg-center flex justify-center items-center' style={{ backgroundImage: `url(${chefImg})` }}>
            <div className='w-11/12 md:w-10/12 mx-auto bg-base-100 px-5 lg:px-40 md:py-20 space-y-4 py-10'>
                <h3 className='text-4xl font-cinzel text-center text-[#151515]'>Bistro Boss</h3>
                <p className='font-inter text-center text-[#151515]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>

            </div>
        </section>
    )
}