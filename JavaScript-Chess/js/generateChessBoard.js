function generateTable() {
    var chessBoard = '<table id="chessBoard">';
    for (var i = 0; i < 10; i++) {
        if (i == 0 || i == 9) {
            chessBoard += '<tr id="margines"><td> </td>\n<td> A </td>\n<td > B </td >\n<td > C </td >\n<td > D </td >\n<td > E </td >\n<td > F </td >\n<td > G </td >\n<td > H </td >\n<td > </td >\n</tr >';
        } else {
            chessBoard += '<tr>\n';
            for (var j = 0; j < 10; j++) {
                if (j == 0 || j == 9) {
                    chessBoard += '<td>' + (9 - i) + '</td>\n';
                } else {
                    if (i == 2) {
                        chessBoard += '<td>' + '<div id="' + (i + j) + '" ondrop="drop(event)" ondragover="allowDrop(event)">' + '<img id="' + 'blackPawn' + (i + j) + '" src="img/alpha/80/BlackPawn.png" draggable="true" ondragstart="drag(event)"/>' + '</div>' + '</td>\n';
                    } else if (i == 7) {
                        chessBoard += '<td>' + '<div id="' + (i + j) + '" ondrop="drop(event)" ondragover="allowDrop(event)">' + '<img id="' + 'whitePawn' + (i + j) + '" src="img/alpha/80/WhitePawn.png" draggable="true" ondragstart="drag(event)"/>' + '</div>' + '</td>\n';
                    } else {
                        chessBoard += '<td>' + '<div id="' + (i + j) + '" ondrop="drop(event)" ondragover="allowDrop(event)"></div>' + '</td>\n';
                    }
                }
            }
            chessBoard += '</tr>\n';
        }
    }
    chessBoard += '</table>';
    document.getElementById('container').innerHTML = chessBoard;
} 