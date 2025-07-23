import Link from "next/link";

export const getData = async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await data.json()
    return res
}


const Manue = async () => {
    const data = await getData()
    return (
        <div className="grid grid-cols-4 gap-3">
            {data.map(d => <div className="border rounded-lg">
                <p>{d.name}</p>
                <p>{d.email}</p>
                <Link href={`/manue/${d.id}`}>Details</Link>
            </div>)}
        </div>
    );
};

export default Manue;