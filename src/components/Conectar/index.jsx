'use client'

import Link from "next/link"

export default function Conectar(){
    
   


    return(
        <>
           <Link
            href={`/auth/facebook`}
           >
                Conectar
           </Link>
        </>
    )
}