const PagesProp = ({ titleFirst, titleSecond, subTitle, textFirst, textSecond, textThird }) => {
    return (
        <>
            <div className="bg-[url('/img/hero.jpg')] w-full h-24 xl:h-48 bg-cover bg-no-repeat bg-bottom flex flex-col items-center pt-3 xl:pt-12 font-bold text-2xl xl:text-4xl uppercase">
                <span className="text-white drop-shadow-[0_3px_3px_rgba(255,0,0,3)]">{titleFirst}</span>
                <span className="text-white drop-shadow-[0_3px_3px_rgba(255,0,0,3)]">{titleSecond}</span>
            </div>
            <div className="bg-gradient-to-b from-red-500 to-white w-full h-40 text-center pt-12">
                <h2 className="text-white drop-shadow-[0_3px_3px_rgba(255,0,0,3)] font-bold text-2xl xl:text-4xl">
                    {subTitle}
                </h2>
            </div>
            <div className="space-y-6 px-3 md:px-5 lg:px-6 xl:px-8">
                <p className="text-justify text-lg xl:text-2xl">
                    {textFirst}
                </p>
                <p className="text-justify text-lg xl:text-2xl">
                    {textSecond}
                </p>
                <p className="text-justify text-lg xl:text-2xl">
                    {textThird}
                </p>
            </div>
            <div className="bg-gradient-to-t from-red-500 to-white w-full h-40" />
            <div className="w-full h-3 bg-white" />
        </>
    )
}

export default PagesProp
