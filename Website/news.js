document.addEventListener("DOMContentLoaded", function () {
    const newsList = [
        { date: "2025-02-20", title: "新アップデート！", description: "最新のアップデート情報！" },
        { date: "2025-01-15", title: "イベント終了", description: "先日のイベントが終了しました！" },
        { date: "2024-12-25", title: "クリスマスイベント開催！", description: "特別なイベント開催！" }
    ];

    const newsContainer = document.getElementById("news-list");
    const pastNewsContainer = document.getElementById("past-news-list");

    const today = new Date().toISOString().split("T")[0]; // 今日の日付（YYYY-MM-DD）

    newsList.forEach(news => {
        let listItem = document.createElement("li");
        listItem.classList.add("news-item");

        let newsTitle = document.createElement("h3");
        newsTitle.textContent = `${news.title} (${news.date})`;
        listItem.appendChild(newsTitle);

        let newsDescription = document.createElement("p");
        newsDescription.textContent = news.description;
        listItem.appendChild(newsDescription);

        // 過去のお知らせは「過去のお知らせ一覧」へ
        if (news.date < today) {
            pastNewsContainer.appendChild(listItem);
        } else {
            newsContainer.appendChild(listItem);
        }
    });

    // ハンバーガーメニューの開閉処理
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
