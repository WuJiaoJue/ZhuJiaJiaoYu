var mainVideo=document.getElementById("mainVideo");
var teacherVideo=document.getElementById("teacherVideo");
// var name = '我';

function playAll(){
    teacherVideo.play();
}

function pauseAll(){
    teacherVideo.pause();
}

function speak(){
    var name = '我:';
    var text = document.getElementById('say').value;
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var node1 = document.createTextNode(name);
    var node2 = document.createTextNode(text);
    td1.appendChild(node1);
    td2.appendChild(node2);
    td1.className = 'name';
    td2.className = 'pl';
    tr.appendChild(td1);
    tr.appendChild(td2);
    var table = document.getElementById('plq');
    table.appendChild(tr);
}