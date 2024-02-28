/**
 * Config for request
 * @param {string} url
 * @param {string} content
 * @returns promise
 */
const request = async(url, content)=>{
    const reqRoute = await fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(content)
    });

    const resData = await reqRoute.json();

    return resData;
}

/**
 * Config for request with token and type GET
 * @param {string} url
 * @param {string} token
 * @returns promise
 */
const requestGet = async(url)=>{
    const reqRoute = await fetch(url,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    //Status
    const status = reqRoute.status;
    if(status == 404){
        return status;
    }
    const resData = await reqRoute.json();
    return resData;
}


/**
 * Config for request
 * @param {string} url
 * @param {string} content
 * @returns status
 */
const requestStatus = async(url, content)=>{
    const reqRoute = await fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(content)
    });

    //Status
    const status = reqRoute.status;
    return status;
}


export { request, requestGet, requestStatus  };

