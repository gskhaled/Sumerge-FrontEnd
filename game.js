var level = 1;
function nextLevel() {
    document.querySelectorAll('button').forEach(function (b) { return b.remove(); });
    level++;
    instantiate(level);
}
function instantiate(level) {
    document.getElementById("level").innerHTML = "Current Level: " + level;
    for (var i = 0; i < level * 5; i++) {
        var xAlign = Math.random() * 500;
        var yAlign = Math.random() * 500;
        var leftButton = document.createElement('button');
        leftButton.style.top = (yAlign + 90) + "px";
        leftButton.style.left = xAlign + "px";
        var leftImg = document.createElement('img');
        leftImg.src = "./sface.jpg";
        leftButton.appendChild(leftImg);
        document.body.appendChild(leftButton);
        var rightButton = document.createElement('button');
        rightButton.style.top = (yAlign + 90) + "px";
        rightButton.style.left = (xAlign + 960) + "px";
        var rightImg = document.createElement('img');
        rightImg.src = "./sface.jpg";
        rightButton.appendChild(rightImg);
        document.body.appendChild(rightButton);
    }
    // creating the extra button
    var xAlignOther = Math.random() * 500;
    var yAlignOther = Math.random() * 500;
    var leftOrRight = Math.round(Math.random());
    var otherButton = document.createElement('button');
    otherButton.onclick = nextLevel;
    otherButton.style.top = (xAlignOther + 90) + "px";
    otherButton.style.left = (yAlignOther + (leftOrRight == 0 ? 0 : 960)) + "px";
    var otherImg = document.createElement('img');
    otherImg.src = "./sface.jpg";
    otherButton.appendChild(otherImg);
    document.body.appendChild(otherButton);
}
instantiate(level);
