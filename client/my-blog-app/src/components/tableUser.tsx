import Link from "next/link";
import { UserDetail } from "@/app/type";
import DeleteButtonUsers from "./deleteButton";

export default function TableComponent({ users, onDelete }: { users: UserDetail[], onDelete: (id: number) => void }) {
    
  return (
    <div className="w-full overflow-x-auto">
    <button className="btn bg-buttonAdd mb-8 mr-6 text-black">
     <Link href="/userpages/adduser">Add New User</Link>
    </button>
   <table className="min-w-full text-sm shadow-md rounded-lg">
     <thead>
       <tr className="text-gray-700 text-lg">
         <th className="pr-5 text-center">ID</th>
         <th className="pr-5 text-center">Name</th>
         <th className="pr-5 text-center">Gender</th>
         <th className="pr-5 text-center">Email</th>
         <th className="pr-5 text-center">Status</th>
         <th className="text-center">Action</th>
       </tr>
     </thead>
     <tbody>
       {users.map((user) => (
         <tr key={user.id} className="hover:bg-gray-100 mb-10">
           <td className="pr-5 text-center py-4">{user.id}</td>
           <td className="pr-5 text-center py-4">{user.name}</td>
           <td className="pr-5 text-center py-4">{user.gender}</td>
           <td className="pr-5 text-cente py-4">{user.email}</td>
           <td className="pr-5 text-center py-4">
             <span className={`${user.status === "active" ? "text-green-800" : "text-red-500"}`}>
               {user.status}
             </span>
           </td>
           <td className="flex justify-center space-x-2 py-4">
             <Link href={`/userpages/updateuser/${user.id}`} className=" btn hover bg-buttonwarn"> Edit </Link>
             <DeleteButtonUsers id={user.id} onDelete={() => onDelete(user.id)} />
           </td>
         </tr>
       ))}
     </tbody>
   </table>
 </div>
  );
}
