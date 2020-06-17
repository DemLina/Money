function Money() {
    let count = 0;
    penny *= 100;
    penny = Math.round(penny);

    while (penny > 0) {
        if (penny >= 25) {
            penny -= 25;
            count += 1;
        } else
            if (penny >= 10) {
                penny -= 10;
                count += 1;

            } else
                if (penny >= 5) {
                    penny -= 05;
                    count += 1;
                } else
                    if (penny >= 1) {
                        penny -= 1;
                        count += 1;

                    }
    }
    alert("Количество монет ровно:" + count);
}

let penny = prompt("Введите сумму сдачи",);
penny = Number(penny);
Money();
