export default function Footer({name, email, website, phone}) {
  return (
    <>
        <footer className="footer border-t-2 border-gray-300 pt-5">
            <ul className="flex flex-wrap items-center 
            justify-center">
                <li>
                    <span className="font-bold">School: </span> {name}
                </li>
                <li>
                    <span className="font-bold">E-mail: </span> {email}
                </li>
                <li>
                    <span className="font-bold">Phone number: </span> {phone}
                </li>

                <li>
                    <span className="font-bold">Website: </span> <a href={website} target="_blank" rel="noopenner noreferrer">{website}</a>
                </li>
            </ul>
        </footer>
    </>
  )
}
