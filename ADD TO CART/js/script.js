var product = [];


function addData() {

    if (product == null) {
        product = [];
    }

    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    var img = document.getElementById("img").files[0].name;
    var editno = document.getElementById("editno").value;

    if (editno) {

        for (var i = 0; i < product.length; i++) {

            if (product[i]['no'] == editno) {

                product[i]['name'] = name;
                product[i]['price'] = price;
                product[i]['quantity'] = quantity;
                product[i]['img'] = img;
                document.querySelector('#submit').value = "insert";
                document.querySelector('#editno').value = "";

            };

        };
    }
    else {
        var book = {
            name: name,
            price: price,
            quantity: quantity,
            img: img,
            no: Math.round(Math.random() * 1000),
        }
        product.push(book);
    };




    var add = JSON.stringify(product);
    localStorage.setItem('add', add);

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("img").value = "";
    viewData();


}
  function deletData(no){
    var cartdata = localStorage.getItem('add');
    var cdata = JSON.parse(cartdata);

    for(var i=0;i<cartdata.length;i++){
        if(cartdata[i]['no'] == no){
            cartdata.slice(i, 1);
        }
    }
    localStorage.setItem('add', JSON.stringify(cartdata));
    viewData();

  }      
