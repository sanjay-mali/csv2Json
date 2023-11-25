function CSVToJSON() {
    const csvInput = document.getElementById('csvInput').value;
    const jsonData = parseCSV(csvInput);
    document.getElementById('jsonOutput').value = JSON.stringify(jsonData, null, 2);
}
function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}