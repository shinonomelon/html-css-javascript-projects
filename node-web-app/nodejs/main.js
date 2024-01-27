// タスクを追加するためのフォームを取得
const addTask = document.querySelector('.add');
// タスクリストを表示するためのul要素を取得
const list = document.querySelector('.tasks');

// タスクを保存するための配列を初期化
let todos = [];

// タスクを追加する関数
function addTodo(text) {
    // タスクのIDとテキストを持つオブジェクトを作成
    const todo = {
        id: Date.now(),
        text,
    };
    // タスクを配列に追加
    todos.push(todo);
}

// タスクを表示する関数
function renderTodo() {
    // 一時的なHTMLを保存するための変数を初期化
    let temp = '';
    // 各タスクに対して
    todos.forEach(todo => {
        // タスクのHTMLを作成
        const html = `
        <li key="${todo.id}">
            <span>${todo.text}</span>
        </li>
        `;
        // 一時的なHTMLに追加
        temp += html;
    });

    // タスクリストのHTMLを更新
    list.innerHTML = temp;
}

// タスク追加フォームのsubmitイベントにリスナーを追加
addTask.addEventListener('submit', e => {
// フォームのデフォルトの動作を停止
e.preventDefault();

// 入力されたテキストを取得し、前後の空白を削除
const text = addTask.add.value.trim();
// テキストが空でない場合
if (text !== '') {
    // タスクを追加
    addTodo(text);
    // フォームをリセット
    addTask.reset();
    // タスクを表示
    renderTodo();
}
});
});