export default function Dates({invoiceNumber, invoiceDate, dueDate}) {
  return (
    <>
        {/* Dates*/}
        <article className="mt-10 mb-14 flex items-end
        justify-end">
          <ul>
            <li className="p-1"><span className="font-bold">Student's Roll no.:</span> {invoiceNumber}
            </li>
            <li className="bg-gray-100"><span className="font-bold">Invoice date:</span> {invoiceDate}
            </li>
            <li className="p-1"><span className="font-bold">Due date:</span> {dueDate}
            </li>
          </ul>
        </article>
      
    </>
  )
}
