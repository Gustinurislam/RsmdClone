import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PagesProp from "../components/PagesProp"
import Subscribe from "../components/Subscribe"

const LokerRsmd = () => {
    return (
        <>
            <Navbar />
            <PagesProp titleFirst={'Rumah Sakit'} titleSecond={'Medika Dramaga'} subTitle={'Lowongan Kerja Di Rs Medika Dramaga'} textFirst={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur exercitationem quasi rerum quod modi eos perferendis iure expedita! Cumque nesciunt neque numquam, enim molestias rem eaque fugiat quas nemo expedita deserunt consequatur iusto eos quibusdam. Blanditiis doloremque cumque facilis nesciunt provident, quas, nobis quo velit dolores itaque iste recusandae ad.'} textSecond={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur exercitationem quasi rerum quod modi eos perferendis iure expedita! Cumque nesciunt neque numquam, enim molestias rem eaque fugiat quas nemo expedita deserunt consequatur iusto eos quibusdam. Blanditiis doloremque cumque facilis nesciunt provident, quas, nobis quo velit dolores itaque iste recusandae ad.'} textThird={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur exercitationem quasi rerum quod modi eos perferendis iure expedita! Cumque nesciunt neque numquam, enim molestias rem eaque fugiat quas nemo expedita deserunt consequatur iusto eos quibusdam. Blanditiis doloremque cumque facilis nesciunt provident, quas, nobis quo velit dolores itaque iste recusandae ad.'} />
            <Subscribe />
            <Contact />
            <Footer />
        </>
    )
}

export default LokerRsmd
