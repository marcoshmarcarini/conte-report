'use client'

import { useEffect } from "react"
import { initPassport } from "@/utils/passport-config"

//https://www.your-clever-domain-name.com/webhooks? hub.mode=subscribe& hub.challenge=1158201444& hub.verify_token=meatyhamhock

initPassport()

export default function report({ user }) {

    useEffect(() => {
        const handlePassport = async () => {
            try {
                const response = await fetch('/api/facebook')
                const data = await response.json()
                console.log(data)
            } catch (err) {
                console.error('Erro ao obter dados do Passport:', err)
            }
        }
        handlePassport()
    }, [])


    return (
        <>
            Página com os dados da API do Facebook.
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            user: context.req.user || null
        }
    }
}