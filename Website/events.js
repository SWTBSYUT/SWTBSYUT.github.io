document.addEventListener("DOMContentLoaded", function () {
    const eventsList = [
        { startDate: "2025-02-21T19:00:00", endDate: "2025-02-21T22:00:00", title: "ゆうクラ！鉄道日記 第十三回", description: "サーバーを開きました。" }
    ];

    const now = new Date().getTime();
    const upcomingEvents = eventsList.filter(event => new Date(event.endDate).getTime() > now);
    const finishedEvents = eventsList.filter(event => new Date(event.endDate).getTime() <= now);

    // 日付の昇順にソート
    upcomingEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    finishedEvents.sort((a, b) => new Date(b.endDate) - new Date(a.endDate)); // 終了イベントは新しい順

    const eventsContainer = document.getElementById("events-list");
    const finishedEventsContainer = document.getElementById("finished-events-list");

    function createEventItem(event, isFinished) {
        let listItem = document.createElement("li");
        listItem.classList.add("event-item");

        let eventTitle = document.createElement("h3");
        eventTitle.textContent = `${event.title} (${event.startDate.split("T")[0]})`;
        listItem.appendChild(eventTitle);

        let eventDescription = document.createElement("p");
        eventDescription.textContent = event.description;
        listItem.appendChild(eventDescription);

        if (!isFinished) {
            let countdown = document.createElement("p");
            countdown.classList.add("countdown");
            listItem.appendChild(countdown);

            function updateCountdown() {
                const now = new Date().getTime();
                const eventDate = new Date(event.startDate).getTime();
                const timeLeft = eventDate - now;

                if (timeLeft > 0) {
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                    countdown.textContent = `あと ${days}日 ${hours}時間 ${minutes}分`;
                } else {
                    countdown.textContent = "イベント開始！";
                }
            }

            updateCountdown();
            setInterval(updateCountdown, 60000);
        } else {
            let finishedText = document.createElement("p");
            finishedText.textContent = "このイベントは終了しました";
            finishedText.style.color = "gray";
            listItem.appendChild(finishedText);
        }

        return listItem;
    }

    upcomingEvents.forEach(event => eventsContainer.appendChild(createEventItem(event, false)));
    finishedEvents.forEach(event => finishedEventsContainer.appendChild(createEventItem(event, true)));

    // ハンバーガーメニューの開閉処理
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
