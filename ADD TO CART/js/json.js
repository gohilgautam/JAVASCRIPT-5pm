function viewData(){
    var viewdata = localStorage.getItem('add');
    var view = JSON.parse(viewdata);

    var data = "<table border='1'><tr><th>name</th><th>Profile pic</th><th>quantity</th><th>Price</th><th>edit</th><th>delete</th></tr>";
    for(var i=0; i<view.length; i++){
        data += `<tr>`
        data += `<td>${view[i]['name']}</td>`
        data += `<td><img src = 'img/${view[i]['img']}' width='50px'></img></td>`;
        data += `<td>${view[i]['quantity']}</td>`
        data += `<td>${view[i]['price']}</td>`
        data += `<td><a href = "javascript:editData(${view[i]['no']})">edit</a></td>`
        data += `<td><a href = "javascript:deletData(${view[i]['no']})">delete</a></td>`
        data += `</tr>`
    }
    data += "</table>";
    document.getElementById("res").innerHTML = data;
}
viewData();

function deletData(no){
    var dedata = localStorage.getItem('cart');
    var ddata = JSON.parse(dedata);

    for(var i=0;i<ddata.length;i++){
        if(ddata[i]['no'] == no){
            ddata.splice(i, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(ddata));
    viewData();
}

function editData(no){
    var edata = localStorage.getItem('cart');
    var eddata = JSON.parse(edata);

    for(var i=0; i<eddata.length; i++){
        if(eddata[i]['no'] == no){
            var item = eddata[i];
            var newName = prompt("Edit the name:", item['name']);
            var newQuantity = prompt("Edit the quantity:", item['quantity']);
            var newPrice = prompt("Edit the price:", item['price']);

            if (newName !== null && newQuantity !== null && newPrice !== null) {
                item['name'] = newName;
                item['quantity'] = newQuantity;
                item['price'] = newPrice;
            }
        }
    }
    localStorage.setItem('cart', JSON.stringify(eddata));
    viewData();
}
