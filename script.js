document.addEventListener("DOMContentLoaded", function () {
    const rankingData = [
        { name: "r015180k", score: 11123 },
        { name: "r015047k", score: 11114 },
        { name: "r015183k", score: 3043 },
        { name: "r015238k", score: 0 },
        { name: "r015198k", score: 5796 },
        { name: "r015138k", score: 0 },
        { name: "r015084k", score: 1100 },
        { name: "r015086k", score: 0 },
        { name: "r015174k", score: 0 },
        { name: "r015235k", score: 0 },
        { name: "r015308k", score: 0 },
        { name: "r015278k", score: 2122 },
        { name: "r024818k", score: 27 },
        { name: "r024820k", score: 3 },
        { name: "r024837k", score: 0 },
        { name: "r024896k", score: 38 },
        { name: "r025050k", score: 0 },
        { name: "r025012k", score: 2154 },
        { name: "r035209k", score: 809 },
        { name: "r035322k", score: 28 }
    ];

    // スコアの降順に並び替え
    rankingData.sort((a, b) => b.score - a.score);

    const rankingTable = document.getElementById("ranking-body");
    if (!rankingTable) {
        console.error("ランキングのテーブル要素が見つかりません！");
        return;
    }

    rankingTable.innerHTML = ""; // 既存の内容をクリア

    rankingData.forEach((player, index) => {
        let row = document.createElement("tr");

        let rankCell = document.createElement("td");
        rankCell.textContent = index + 1; // 順位を自動計算
        row.appendChild(rankCell);

        let nameCell = document.createElement("td");
        nameCell.textContent = player.name;
        row.appendChild(nameCell);

        let scoreCell = document.createElement("td");
        scoreCell.textContent = player.score; // スコアを表示
        row.appendChild(scoreCell);

        // 順位ごとの色設定
        if (index + 1 === 1) {
            row.style.backgroundColor = "gold";
            row.style.color = "black";
            row.style.fontWeight = "bold";
        } else if (index + 1 === 2) {
            row.style.backgroundColor = "silver";
            row.style.color = "black";
            row.style.fontWeight = "bold";
        } else if (index + 1 === 3) {
            row.style.backgroundColor = "#cd7f32"; // 銅メダル色
            row.style.color = "black";
            row.style.fontWeight = "bold";
        } else if (index + 1 === 4 || index + 1 === 5) {
            row.style.backgroundColor = "#8b5a2b"; // 4位・5位の色
            row.style.color = "white";
        } else if (index + 1 >= 6) {
            row.style.backgroundColor = "white"; // 6位以降は白背景
            row.style.color = "black"; // 黒文字
            row.style.fontWeight = "bold";
        }

        rankingTable.appendChild(row);
    });

    // ハンバーガーメニューの開閉処理
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
