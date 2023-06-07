const selectFile = () => {
    // FileListオブジェクト取得
    const selectFiles = document.querySelector("#select-file").files

    // Fileオブジェクト取得
    const file = selectFiles[0]

    // FileReaderオブジェクト取得
    const reader = new FileReader()
    reader.readAsText(file)

    // ファイル読み込み完了時の処理
    reader.onload = () => {
        // テキストエリアに書き込み
        let output_text = logAnalyzer(reader.result);
//        getFileCSV(output_text)
        for (const line of output_text) {
            //document.querySelector("#output").innerHTML = line
            document.getElementById("output").value += line + "\n";
        }
    }

    // ファイル読み込みエラー時の処理
    reader.onerror = () => {
        console.log("ファイル読み込みエラー")
    }
}

const getFile = () => {

}

// ログ解析関数
function logAnalyzer(strline) {

    // ログ出力用配列
    let output_line = [];
    var d = new Date();

    output_line.push("datetime,Type,response,fromAddress,fromPort,toAddress,toPort,toUrl")

    // ログファイルを改行単位で分割
    const messages = strline.split(/\n/);
    for (const str of messages) {
        const str1 = str.split(/Info/)
        const log_date = str1[0].split(/ +/)

        // get YYYY/MM/dd hh:mm:ss
        const year = log_date[2]
        const month = changeMonth(log_date[0])
        const day = log_date[1]
        const time = log_date[3]

        var type = getType(str1[1].split(/:/)[1])
        var response = getResponse(str1[1].split(/:/)[1])
        var fromAddress = getFromAddress(str1[1])
        var toUrl = getToUrl(str1[1])
        var toAddress = getToAddress(str1[1])
        var fromPort = fromAddress.split(/:/)[1]
        var toPort = toAddress.split(/:/)[1]

        if (typeof fromPort === 'undefined') { fromPort = "" }
        if (typeof toPort === 'undefined') { toPort = "" }
        // methodごとに処理を分ける
        // 出力
        const d = new Date(year, month, day)
        output_line.push(d.toLocaleDateString({ year: "numeric", month: "2-digit" }) + " " + time + "," + type + "," + response + "," + fromAddress.split(/:/)[0] + "," + fromPort + "," + toAddress.split(/:/)[0] + "," + toPort + "," + toUrl);
    }
    return output_line;
}

function clearTextarea() {
    var textareaForm = document.getElementById("output");
    textareaForm.value = '';
}

