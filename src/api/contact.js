
const GG_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby6P-B5qF9wKG2S1mhcKUoK8NupHMbD5gSyFScjliK80t-ejMA4azMRIsxRIv0tkFMYZQ/exec';
export default class ContactService {
    
    static submitContact(data) {
        return new Promise(async (resolve, reject) => {
            const response = await fetch(GG_SCRIPT_URL, { method: 'POST', body: JSON.stringify(data)});
            var json;
            if (response != '') json = await response.json();
            if (json) {
                console.log(JSON.stringify(json));
                resolve(json);
            }
        });
    }
}