let todayTime = document.querySelector(".todayTime");
window.onload = function () {
    todayTime.innerHTML = getToday();

}

// 获取当前时间
function getToday() {
    var tempDate = new Date();
    var days = tempDate.getDay();
    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var week, month, day;

    switch (days) {
        case 1:
            week = 'Monday';
            break;
        case 2:
            week = 'Tuesday';
            break;
        case 3:
            week = 'Wednesday';
            break;
        case 4:
            week = 'Thursday';
            break;
        case 5:
            week = 'Friday';
            break;
        case 6:
            week = 'Saturday';
            break;
        case 0:
            week = 'Sunday';
            break;
    }

    month = monthArr[tempDate.getMonth()];
    day = tempDate.getDate() < 0 ? `0${tempDate.getDate()}` : tempDate.getDate();
    return `${week} ${month} ${day}`;
}