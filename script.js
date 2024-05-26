let submitBtn = document.getElementById("submitBtn")
let username = document.getElementById("username")
let reultscontainer = document.getElementById("reultscontainer")


var result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "kaifrooman12345",
    "email": "kaifrooman12345@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async(e)=>{
    e.preventDefault()
    reultscontainer.innerHTML = `<img src="/images/loading.svg" alt="">`;
    
    const key = "ema_live_fD0i1OuTQ5DQOh3qTURqvMGzTz4qxJkpqWjUp2U0";

    let mail = username.value;

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${mail}`;

    let res = await fetch(url)
    let result = await res.json()
    // Call the function to populate the table with the sample data
    populateTable(result);
    // Remove the loading animation
    reultscontainer.innerHTML = " ";
    
})

function populateTable(data) {
    
    const tableBody = document.getElementById('api-data-table');
    
    tableBody.innerHTML = " ";
    
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            // Check if the value is null, empty, or only whitespace
            const value = data[key];
            if (value !== null && value !== "" && !/^\s*$/.test(value)) {
                const row = document.createElement('tr');
                
                const keyCell = document.createElement('td');
                keyCell.textContent = key;
                row.appendChild(keyCell);
                
                const valueCell = document.createElement('td');
                valueCell.textContent = value;
                row.appendChild(valueCell);
                
                tableBody.appendChild(row);
            }
        }
    }
}


























// function populateTable(data) {
//     const tableBody = document.getElementById('api-data-table');
    
//     for (const key in data) {
//         if (data.hasOwnProperty(key)) {
//             const row = document.createElement('tr');
            
//             const keyCell = document.createElement('td');
//             keyCell.textContent = key;
//             row.appendChild(keyCell);
            
//             const valueCell = document.createElement('td');
//             valueCell.textContent = data[key] !== null ? data[key] : 'null';
//             row.appendChild(valueCell);
            
//             tableBody.appendChild(row);
//         }
//     }
// }

// // Call the function to populate the table with the sample data
// populateTable(apiData);

// let str = ``

// for(keys of Object.keys(result)){
//     str = str + `<div>${keys} : ${result[keys]}</div>`
// }

// reultscontainer.innerHTML = str;














// document.addEventListener("DOMContentLoaded", () => {
//     let submitBtn = document.getElementById("submitBtn");
//     let username = document.getElementById("username");
//     let reultscontainer = document.getElementById("reultscontainer");
//     let tableBody = document.getElementById('api-data-table');

//     submitBtn.addEventListener("click", async(e) => {
//         e.preventDefault();
//         reultscontainer.innerHTML = `<img src="/images/loading.svg" alt="Loading">`;
        
//         const key = "ema_live_fD0i1OuTQ5DQOh3qTURqvMGzTz4qxJkpqWjUp2U0";
//         let mail = username.value;
//         let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${mail}`;

//         try {
//             let res = await fetch(url);
//             let result = await res.json();
//             populateTable(result);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             reultscontainer.innerHTML = '<p>Error fetching data</p>'; // Display an error message
//         } finally {
//             reultscontainer.innerHTML = ''; // Clear the loading animation
//         }
//     });

//     function populateTable(data) {
//         // const tableBody = document.getElementById('api-data-table');
        
//         // Check if the table body element exists
//         if (!tableBody) {
//             console.error('Table body element not found');
//             return;
//         }

//         tableBody.innerHTML = ''; // Clear existing table data

//         for (const key in data) {
//             if (data.hasOwnProperty(key)) {
//                 // Check if the value is null, empty, or only whitespace
//                 const value = data[key];
//                 if (value !== null && value !== "" && !/^\s*$/.test(value)) {
//                     const row = document.createElement('tr');
                    
//                     const keyCell = document.createElement('td');
//                     keyCell.textContent = key;
//                     row.appendChild(keyCell);
                    
//                     const valueCell = document.createElement('td');
//                     valueCell.textContent = value;
//                     row.appendChild(valueCell);
                    
//                     tableBody.appendChild(row);
//                 }
//             }
//         }
//     }
// });












// document.addEventListener("DOMContentLoaded", () => {
//     let submitBtn = document.getElementById("submitBtn");
//     let username = document.getElementById("username");
//     let reultscontainer = document.getElementById("reultscontainer");

//     submitBtn.addEventListener("click", async(e) => {
//         e.preventDefault();
//         reultscontainer.innerHTML = `<img src="/images/loading.svg" alt="Loading">`;
        
//         const key = "ema_live_fD0i1OuTQ5DQOh3qTURqvMGzTz4qxJkpqWjUp2U0";
//         let mail = username.value;
//         let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${mail}`;

//         try {
//             let res = await fetch(url);
//             let result = await res.json();
//             populateTable(result);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             reultscontainer.innerHTML = '<p>Error fetching data</p>'; // Display an error message
//         } finally {
//             reultscontainer.innerHTML = ''; // Clear the loading animation
//         }
//     });

//     function populateTable(data) {
//         // Remove the table
//         let table = document.getElementById('api-data-table');
//         if (table) {
//             table.parentNode.removeChild(table);
//         }

//         // Create a new table
//         let newTable = document.createElement('table');
//         newTable.id = 'api-data-table';

//         for (const key in data) {
//             if (data.hasOwnProperty(key)) {
//                 // Check if the value is null, empty, or only whitespace
//                 const value = data[key];
//                 if (value !== null && value !== "" && !/^\s*$/.test(value)) {
//                     const row = document.createElement('tr');
                    
//                     const keyCell = document.createElement('td');
//                     keyCell.textContent = key;
//                     row.appendChild(keyCell);
                    
//                     const valueCell = document.createElement('td');
//                     valueCell.textContent = value;
//                     row.appendChild(valueCell);
                    
//                     newTable.appendChild(row);
//                 }
//             }
//         }

//         // Append the new table to the results container
//         reultscontainer.appendChild(newTable);
//     }
// });
