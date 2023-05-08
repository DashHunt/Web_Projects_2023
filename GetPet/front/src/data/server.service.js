export function ApiServer(){
    if(mode() === 'local'){
        return process.env.REACT_APP_API_KEY
    }

    return process.env.REACT_APP_MOBILE
}

function mode(){
    const url = new URL(document.location.href)
    const prefix = url.hostname.substring(0, 2)

    if(prefix === '19'){
        return 'prod'
    }

    return 'local'
}