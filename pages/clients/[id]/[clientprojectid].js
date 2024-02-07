import { useRouter } from "next/router";

function SelectedClientProject() {
    const router = useRouter();

    console.log(router.query);
    
    return <div>
        <h1>The Project Page for a Specific Project for Selected Client</h1>
    </div>
}

export default SelectedClientProject;