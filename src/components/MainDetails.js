export default function MainDetails({name, address}) {
  return (
    <>
        <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-xl uppercase md:text-2xl mb-1">{name}</h2>
          <p className="lg:w-1/3 text-justify">{address}</p>
        </section>
      
    </>
  )
}
