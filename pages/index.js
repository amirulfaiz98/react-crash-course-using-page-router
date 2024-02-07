import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>THe Home Page</h1>
      <ul>
        <li>
            <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
            <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}// style 1

// style 2
// function HomePage() {
//     return (
//         <div>
//           <h1>THe Home Page</h1>
//         </div>
//       );
// }

// export default HomePage
