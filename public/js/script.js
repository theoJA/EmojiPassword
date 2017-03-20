$(document).ready(() => {

    let well = $('#password');
    let facebook = $('#facebook');
    let email = $('#email');
    let bank = $('#bank');
    let clear = $('#clear');
    let writ_pass = $('#written-password');
    writ_pass.hide();

    let counter = 1;

    facebook.click(() => {

        if (counter === 1) {
            $.get('/random_emojis', (data) => {
                for (let i = 0; i < data.length; i++) {
                    for (var emoji in data[i]) {
                        if (data[i].hasOwnProperty(emoji)) {
                            well.append(data[i][emoji]);
                        }
                    }
                };
            });
            counter++;
        }

        facebook.addClass("disabled");
        email.addClass("disabled");
        bank.addClass("disabled");
    });

    email.click(() => {
        if (counter === 1) {
            $.get('/random_emojis', (data) => {
                for (let i = 0; i < data.length; i++) {
                    for (var emoji in data[i]) {
                        if (data[i].hasOwnProperty(emoji)) {
                            well.append(data[i][emoji]);
                        }
                    }
                };
            });
            counter++;
        }
        facebook.addClass("disabled");
        email.addClass("disabled");
        bank.addClass("disabled");
    });

    bank.click(() => {
        if (counter === 1) {
            $.get('/random_emojis', (data) => {
                for (let i = 0; i < data.length; i++) {
                    for (var emoji in data[i]) {
                        if (data[i].hasOwnProperty(emoji)) {
                            well.append(data[i][emoji]);
                        }
                    }
                };
            });
            writ_pass.show();
            counter++;
        }
        facebook.addClass("disabled");
        email.addClass("disabled");
        bank.addClass("disabled");
    });

    clear.click(() => {
        well.html('');
        facebook.removeClass("disabled");
        email.removeClass("disabled");
        bank.removeClass("disabled");
        writ_pass.hide();
        counter = 1;
    });
});
