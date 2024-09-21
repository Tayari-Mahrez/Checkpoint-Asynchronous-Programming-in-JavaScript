async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(value);

    }
}

iterateWithAsyncAwait(['A', 'B', 'C']);
//----------------------------------------------------------------
async function awaitCall() {
    const response = await new Promise(resolve => 
        setTimeout(() => resolve("Data fetched from API"), 1000)
    );
    console.log(response);
}

awaitCall();
//---------------------------------------------------
async function awaitCalls() {
    try {
        const response = await new Promise((resolve, reject) => 
            setTimeout(() => reject(new Error("API call failed")), 1000)
        );
        console.log(response);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

awaitCalls();
//----------------------------------------------------------------------------------------------
async function concurrentRequests() {
    const request1 = new Promise(resolve => 
        setTimeout(() => resolve("Response from API 1"), 1000)
    );
    const request2 = new Promise(resolve => 
        setTimeout(() => resolve("Response from API 2"), 1000)
    );

    const results = await Promise.all([request1, request2]);
    console.log("Combined Results:", results);
}

concurrentRequests();
//-----------------------------------------------------------------------------------
async function parallelCalls(urls) {
    const fetchData = url => 
        new Promise(resolve => 
            setTimeout(() => resolve(`Data from ${url}`), 1000)
        );

    const requests = urls.map(url => fetchData(url));
    const responses = await Promise.all(requests);
    console.log("Responses:", responses);
}

parallelCalls(['http://api1.com', 'http://api2.com', 'http://api3.com']);
