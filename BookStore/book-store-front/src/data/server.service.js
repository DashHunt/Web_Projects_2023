export function ApiServer(){
    if(mode() === 'local'){
        return process.env.REACT_APP_API_PATH
    }

    return process.env.REACT_APP_API_PATH_PROD
}

function mode(){
    const url = new URL(document.location.href)
    const prefix = url.hostname.substring(0, 5)

    if(prefix !== 'local'){
        return 'prod'
    }

    return 'local'
}