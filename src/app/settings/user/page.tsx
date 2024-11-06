import { getUserInfo } from "@/app/lib/settings";

async function User() {
    const { name, email, age } = await getUserInfo();

    return (
        <div>
            <h1>User Page</h1>
            <div className="border border-dashed border-red-500 p-4">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    )
}

export default User;