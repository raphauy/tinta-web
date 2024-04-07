
const NODE_ENV= process.env.NODE_ENV
//const CONTACT_API = NODE_ENV === 'development' ? 'http://localhost:3000/api/contact' : 'https://planner.tinta.wine/api/contact'
const CONTACT_API = 'https://planner.tinta.wine/api/contact'

export type APIResponse = {
    ok: boolean
    message: string
}

export async function sendContact(clientId: string, name: string | undefined, email: string): Promise<APIResponse> {

    const url= `${CONTACT_API}/${clientId}`
    console.log('url', url)

    const body = JSON.stringify({
        contact: {
            email,
            name
        }
    })

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })

    console.log('res', res)

    let response: APIResponse
    const json = await res.json()

    if (res.status === 200 || res.status === 201) {
        response= {
            ok: true,
            message: json.message
        }
    } else {
        response= {
            ok: false,
            message: json.error
        }        
    }

    return response
}