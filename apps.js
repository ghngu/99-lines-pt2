var friends = ['Zellie', 'Haley', 'Josh', 'Heather', 'Garret'];
var verse = [
    ' lines of code in the file, ',
    ' lines of code. ',
    ' strikes one out, clears it on out, ',
    ' lines of code in the file. ',
    ' line of code in the file. ',
    ' line of code. ',
    ' strikes one out, clears it all out, no more lines of code in the file'
];

var btn = document.createElement('button');
var btnText = document.createTextNode('Sing!');

btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener('click', function () {
    for (var z = 0; z < friends.length; z++) {
        var div = document.createElement('div');
        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode(friends[z]);
        h3.appendChild(h3Text);
        div.appendChild(h3);
        // p.appendChild(pText);
        // div.appendChild(p);
        document.body.appendChild(div);
        div.className = ('friend');
        for (var i = 99; i > 0; i--) {
            if (i > 2) {
                var p = document.createElement('p');
                var pText = document.createTextNode(i + verse[0] + i + verse[1] + friends[z] + verse[2] + (i - 1) + verse[3]);
                //console.log(i + verse[0] + i + verse[1] + friends[z] + verse[2] + (i - 1) + verse[3]);
            } else if (i === 2) {
                var p = document.createElement('p');
                var pText = document.createTextNode(i + verse[0] + i + verse[1] + friends[z] + verse[2] + (i - 1) + verse[4]);
                //console.log(i + verse[0] + i + verse[1] + friends[z] + verse[2] + (i - 1) + verse[4]);
            } else {
                var p = document.createElement('p');
                var pText = document.createTextNode(i + verse[4] + i + verse[5] + friends[z] + verse[6]);
                //console.log(i + verse[0] + i + verse[1] + friends[z] + verse[5]);
            }
            p.appendChild(pText);
            div.appendChild(p);
        }
    }
});
