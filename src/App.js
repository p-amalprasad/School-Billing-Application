import { useState, useRef } from "react"
import Dates from "./components/Dates"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import Notes from "./components/Notes"
import StudentDetails from "./components/StudentDetails"
import Table from "./components/Table"
import TableForm from "./components/TableForm"
import ReactToPrint from "react-to-print"

function App() {
  const [showInvoice, setShowInvoice] = useState(false)

  const [name, setName] = useState("Motherland Public School")
  const [address, setAddress] = useState("Near Village Office Junction\nMullikulangara, Mavelikkara\nPin: 690107, Kerala.")
  const [email, setEmail] = useState("praveenvrn@gmail.com")
  const [phone, setPhone] = useState("9946535731")
  const [website, setWebsite] = useState("https://www.motherlandpublicschool.com/")
  const [studentName, setStudentName] = useState("")
  const [studentAddress, setStudentAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)

  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white 
      rounded shadow">
        
        {showInvoice ? (
        <>
          <ReactToPrint trigger={() => <button className="absolute top-5 right-5 bg-green-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500
            hover:bg-transparent hover:text-green-500 transition-all duration-300">Print/Download</button>} content={() => componentRef.current}/>

          <div ref={componentRef} className="p-10">
          <Header handlePrint={handlePrint}/>

          <MainDetails name={name} address={address}/>

          <StudentDetails studentName={studentName} studentAddress={studentAddress}/>

          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>

          <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal}/>

          <Notes notes={notes}/>

          <Footer name={name} address={address} website={website} email={email} phone={phone}/>

        </div>
        <button 
        onClick={() => setShowInvoice(false)}
        className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow
        border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
        transition-all duration-300">
          Edit information</button>
        </>
        ) : (
        <>
        {/* Name, Address, Email, Phone, Bank name, Bank account number, Website, 
        Student's name, Student's address, Invoice number, Invoice date, Due date, Notes 
        */}
          <div>
            <h1 className="font-bold uppercase 
            tracking-wide text-3xl mt-5 mb-5 text-center"><img src="../images/logo1.jpg" alt="logo" width={200} height={200}/>Motherland Public School</h1>
          </div>
          <div>
            <h1 className="font-bold tracking-wide mt-3 text-2xl mb-10 text-center">Billing Application</h1>
          </div>
          <div className="flex flex-col justify-center">
            <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
            <label htmlFor="name">Enter your name</label>
            <input 
              type="text" 
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="address">Enter your address</label>
            <input 
              type="text" 
              name="address" 
              id="address" 
              placeholder="Enter your address" 
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
            <label htmlFor="email">Enter your email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter your email" 
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="website">Enter your website</label>
            <input 
              type="url" 
              name="website" 
              id="website" 
              placeholder="Enter your website" 
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="phone">Enter your phone number</label>
            <input 
              type="text" 
              name="phone" 
              id="phone" 
              placeholder="Enter your phone" 
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10 md:mt-16">
            <div className="flex flex-col">
            <label htmlFor="studentName">Enter the student's name</label>
            <input 
              type="text" 
              name="studentName" 
              id="studentName" 
              placeholder="Enter the student's name" 
              autoComplete="off"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="studentAddress">Enter the student's address</label>
            <input 
              type="text" 
              name="studentAddress" 
              id="studentAddress" 
              placeholder="Enter the student's address" 
              autoComplete="off"
              value={studentAddress}
              onChange={(e) => setStudentAddress(e.target.value)}
            />
            </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
            <label htmlFor="invoiceNumber">Roll number</label>
            <input 
              type="text" 
              name="invoiceNumber" 
              id="invoiceNumber" 
              placeholder="Invoice number" 
              autoComplete="off"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="invoiceDate">Invoice date</label>
            <input 
              type="date" 
              name="invoiceDate" 
              id="invoiceDate" 
              placeholder="Invoice date" 
              autoComplete="off"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="dueDate">Due date</label>
            <input 
              type="date" 
              name="dueDate" 
              id="dueDate" 
              placeholder="Due date" 
              autoComplete="off"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            </div>
            </article>

            {/* This is our table form */}
            <article>
              <TableForm description={description} 
              setDescription={setDescription}
              quantity={quantity} 
              setQuantity={setQuantity}
              price={price} 
              setPrice={setPrice}
              amount={amount} 
              setAmount={setAmount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}/>

            </article>

            <label htmlFor="notes">Additional notes</label>
            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

            <button 
            onClick={() => setShowInvoice(true)}
            className="bg-blue-500 text-white
            font-bold py-2 px-8 rounded shadow
            border-2 border-blue-500
            hover:bg-transparent hover:text-blue-500
            transition-all duration-300">
              Preview Invoice
            </button>
          </div>
        </>
        )}
      
      </main>

    </>
  );
}

export default App;
