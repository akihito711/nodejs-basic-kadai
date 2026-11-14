// 外部データを取得
async function fetchData() {
  console.log('ユーザーデータの取得を開始します。');

  try {
    // ① 外部APIからデータを取得
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    // ② 取得したデータをJavaScriptで扱える形に変換
    const data = await response.json();

    // 動作確認用に500ミリ秒待つ
    await new Promise((resolve) => setTimeout(resolve, 500));

    // ③ 取得結果を表示
    console.log('データ取得が完了しました。取得件数：', data.length);
    console.log('ユーザー一覧：');

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }

    console.log('ユーザーデータの取得が終了しました。');

  } catch (error) {
    // ④ エラーが発生した場合
    console.error('エラー発生：', error);
  }
}

// 外部データを取得
console.log('fetchData()関数を実行します。');

fetchData();

console.log('fetchData()関数を実行しました。');

// 100ミリ秒ごとにメッセージを表示
let count = 1;

const interval = setInterval(() => {
  console.log(`別の処理を実行中... ${count++}`);

  if (count > 10) clearInterval(interval);
}, 100);