async function readCSV(url) {
    const response = await fetch(url);
    const data = await response.text();
    
    const rows = data.split("\n").map(row => row.split(",")); 
    // console.log("readCSV : ",rows);
    return rows;
}
  