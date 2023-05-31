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
        console.log(output_text)
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

// ログ解析関数
function logAnalyzer(strline) {

    // ログ出力用配列
    let output_line = [];
    var d = new Date();

    // ログファイルを改行単位で分割
    const messages = strline.split(/\n/);
    for (const str of messages) {
        const str1 = str.split(/Info/)
        const log_date = str1[0].split(/ +/)
        const log_msg = str1[1].split(/:/)
        const year = log_date[2]
        const month = changeMonth(log_date[0])
        const day = log_date[1]
        const time = log_date[3]
        //        const type = log_msg[1] //msg部分
        var type = getType(log_msg[1]);
        var response = log_msg[1].substr(log_msg[1].indexOf("[", 0), log_msg[1].indexOf("]", 0));
        const d = new Date(year, month, day);

        // methodごとに処理を分ける
        // 出力
        output_line.push(d.toLocaleDateString({ year: "numeric", month: "2-digit" }) + " " + time + "," + type + "," + response);
    }
    return output_line;
}

function clearTextarea() {
    var textareaForm = document.getElementById("output");
    textareaForm.value = '';
}