console.log('hello world');
for (var i = 0; i < 10; i++) {
    Left = Math.floor(Math.random() * 80) + 10;
    Top = Math.floor(Math.random() * 20) + 5;
    $("#area").append("<div class='circle-blue' + id=" + i + "></div>");
    $("#" + i).css({
        "position": "absolute",
            "top": Top + "%",
            "left": Left + "%"
    });
};