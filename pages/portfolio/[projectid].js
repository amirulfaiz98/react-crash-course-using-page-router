import { useRouter } from "next/router";

function PortfolioProjectPage({ query }) {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send request to backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
