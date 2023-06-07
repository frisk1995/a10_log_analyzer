// 3文字の月を数字に変換
function changeMonth(month_str) {
    var month_num = 0
    switch (month_str) {
        case 'Jun':
            month_num = 0;
            break;
        case 'Feb':
            month_num = 1;
            break;
        case 'Mar':
            month_num = 2;
            break;
        case 'Apr':
            month_num = 3;
            break;
        case 'May':
            month_num = 4;
            break;
        case 'Jun':
            month_num = 5;
            break;
        case 'Jul':
            month_num = 6;
            break;
        case 'Aug':
            month_num = 7;
            break;
        case 'Sep':
            month_num = 8;
            break;
        case 'Oct':
            month_num = 9;
            break;
        case 'Nov':
            month_num = 10;
            break;
        case 'Dec':
            month_num = 11;
            break;
    }
    return month_num
}

function formatDate(date, format) {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
};

function getType(msg) {
    var result = msg.slice(msg.indexOf(" ", 0) + 1, msg.indexOf("[", 0));
    return result
};

function getResponse(msg) {
    var result = msg.slice(msg.indexOf("[", 0), msg.indexOf("]", 0) + 1);
    return result
};

// 未完
function getFromAddress(msg) {
    var start = msg.indexOf(" from ") + 6
    var end = msg.indexOf(",", start)
    var result = msg.slice(start, end);
    return result
};

function getToUrl(msg) {
    var start = msg.indexOf(" url ") + 5
    var end = msg.indexOf(" ", start)
    var result = msg.slice(start, end);
    return result
};

function getToAddress(msg) {
    var start = msg.indexOf(" to ") + 4
    var end = msg.indexOf(" ", start)
    var result = msg.slice(start, end);
    return result
};

function getFileCSV() {
    const result = document.getElementById('output').value;
    let bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    let blob = new Blob([bom, result], { type: "text/csv" });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'output.csv';
    link.click();
}
