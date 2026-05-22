/**
 * Fetches the json all information and organizes in array. 
 * @param {string} jsonPath the JSON path string
 * @returns the JSON as array
 */
export
async function FetchJSON(jsonPath = "")
{
    try 
    {
        const response = (await fetch(`${jsonPath}`));    
        const data = await response.json();
        const arrData = Array.isArray(data) ? data : Object.values(data);
        return arrData;
    } 
    catch (error) 
    {
        console.error('Error fetching data:', error);
        return null;
    }
}

/**
 * Fetches the json 
 * @param {String} jsonPath
 * @param {number} [requestData] 
 * @returns the retrieved data from JSON
 */
export 
async function FetchJSON_data(jsonPath = "", requestData = 0) 
{  
    const data = await FetchJSON(jsonPath);
    return data?.[requestData];
}
