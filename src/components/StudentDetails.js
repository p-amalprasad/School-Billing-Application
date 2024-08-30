export default function StudentDetails({studentName, studentAddress}) {
  return (
    <>
        <section className="mt-10">
          <h2 className="text-2xl uppercase font-bold mb-1">{studentName}</h2>
          <p className="lg:w-1/2 text-justify">{studentAddress}</p>
        </section>
      
    </>
  )
}
