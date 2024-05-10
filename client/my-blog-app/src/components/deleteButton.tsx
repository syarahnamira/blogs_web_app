"use client"

import { deleteUser } from "@/app/action"
import { RiDeleteBin6Line } from "react-icons/ri"

export default function DeleteButtonUsers({id, onDelete} : {id: number, onDelete: () => void }){
    const handleDelete = async () => {
        await deleteUser(id);
        onDelete();
    };
    
    return (
        <button className="btn btn-error" onClick={handleDelete}>
            <RiDeleteBin6Line></RiDeleteBin6Line>
        </button>
    )
}