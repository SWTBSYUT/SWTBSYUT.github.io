const items = [
    { name: "ダイヤモンド", type: "鉱石", buy: 500, sell: 250 },
    { name: "鉄インゴット", type: "鉱石", buy: 100, sell: 50 },
    { name: "パン", type: "食料", buy: 20, sell: 10 },
    { name: "金リンゴ", type: "食料", buy: 1000, sell: 500 },
    { name: "石炭", type: "鉱石", buy: 50, sell: 25 },
    { name: "エメラルド", type: "鉱石", buy: 800, sell: 400 },
    { name: "ネザライトインゴット", type: "鉱石", buy: 2000, sell: 1000 },
    { name: "木材", type: "建築", buy: 30, sell: 15 },
    { name: "ガラス", type: "建築", buy: 40, sell: 20 },
];

const tableBody = document.getElementById("itemTableBody");
const searchBox = document.getElementById("searchBox");
const priceFilter = document.getElementById("priceFilter");

// テーブルを更新する関数
function updateTable() {
    const searchText = searchBox.value.toLowerCase();
    const priceRange = priceFilter.value;

    tableBody.innerHTML = ""; // 一旦リセット

    items.forEach(item => {
        // 検索フィルター（部分一致）
        if (!item.name.toLowerCase().includes(searchText)) return;

        // 価格フィルター
        if (
            (priceRange === "low" && item.buy > 100) ||
            (priceRange === "mid" && (item.buy < 100 || item.buy > 500)) ||
            (priceRange === "high" && item.buy < 500)
        ) return;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.buy}M</td>
            <td>${item.sell}M</td>
        `;
        tableBody.appendChild(row);
    });
}

// イベントリスナー
searchBox.addEventListener("input", updateTable);
priceFilter.addEventListener("change", updateTable);

// 初回テーブル更新
updateTable();

// ハンバーガーメニューの開閉処理
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});