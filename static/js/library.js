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
    var type = msg
    
    console.log(type)
    return type
};