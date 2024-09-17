var fRow = row.value;
var fCol = col.value;

function makeTable() {
    var hed = bodmasEval.value
    var tab = "<table>"
    tab += "<tr></tr>"

for (let i = 1; i <= parseInt(col.value); i++) {
    tab += "<td></td> "   
    for (let j = 1; j <= parseInt(row.value); j++) {
        var calcValue = (eval(i + hed + j))  
        
        if (calcValue % 1 === 0) {
            var calcValue = parseFloat(eval(i + hed + j))
        }
        tab += i + hed + j + "=" + calcValue + "<br>" + "<br>";
    }
}

for (let i = 1; i <= parseInt(col.value); i++) {
    tab += "<td></td>"
    for (let j = 1; j <= parseInt(row.value); j++) {
        var calcValue = (eval(i - hed - j))

        if (calcValue % 1 === 0) {
            var calcValue = parseFloat (eval(i - hed - j))
        }        
    }
    
    tab += "<table></table>"
    tableDisp.innerHTML = tab
}
}