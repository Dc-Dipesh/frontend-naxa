

const Banner = () => {
  return (
    <div className="w-full flex flex-col  gap-5 h-20 justify-center items-center min-h-[500px] bg-slate-100">
      <span className="uppercase text-custom-100 font-semibold md:text-lg text-sm ">
        Portfolio
      </span>
      <h1 className="text-4xl lg:text-6xl max-w-3xl text-center ">
        Diverse, <span className="text-blue-600">Impactful</span>, and Reliable
      </h1>
      <img
        src="/images/bg-line.svg"
        alt=""
        className="absolute left-0 top-0 z-0 "
      />
    </div>
  )
}

export default Banner