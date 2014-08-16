
$(document).ready(function(){
        var cartSums = JSON.parse(localStorage.getItem('cartSum'));
        $('#cartItemSum').text(cartSums);
});

function getItems(){

    var allItems =  [
        new Item('ITEM000001','水果','苹果','3.00','斤'),
        new Item('ITEM000002','水果','香蕉','3.50','斤'),
        new Item('ITEM000003','水果','菠萝','4.00','个'),
        new Item('ITEM000004','饮料','雪碧','3.00','瓶'),
        new Item('ITEM000005','饮料','可口可乐','3.00','瓶'),
        new Item('ITEM000006','日常用品','电池','2.00','个'),
        new Item('ITEM000007','日常用品','水杯','16.00','个')
    ];

    return allItems;
}



//$(document).ready(function() {
//
//
//
//    var cartItemSum = 0;
//    var items = getItems();
//    localStorage.setItem('allItems', JSON.stringify(getItems()));
//    for (var i = 0; i < items.length; i++) {
//        if (judgeCategory(items[i].category)) {
//            categories.push(items[i].category);
//            $('#products').append('<div class="panel panel-info">' + '<div class="panel-heading">' +
//                '<div class="row">' + '<div class="col-md-3">' + items[i].category + '</div>' + '<div class="col-md-3">单价</div>' +
//                '<div class="col-md-3">单位</div>' + '<div class="col-md-3">购买</div>' + '</div>' +
//                '</div>' + '<div class="panel-body">' + '<div class="row" id=' + items[i].category + '>' +
//                '<div class="col-md-3 form-group text-danger">' + items[i].name + '</div>' +
//                '<div class="col-md-3 form-group text-info">' + items[i].price + '</div>' +
//                '<div class="col-md-3 form-group text-success">' + items[i].unit + '</div>' +
//                '<div class="col-md-3 form-group"><button id="'+items[i].barcode+'" type="button" class="btn btn-primary btn-sm">添加到购物车</button></div>' +
//                '</div>' + '</div>' + '</div>');
//        }
//        else {
//            $('#' + items[i].category + '').append('<div class="col-md-3 form-group">' + items[i].name + '</div>' +
//                '<div class="col-md-3 form-group">' + items[i].price + '</div>' +
//                '<div class="col-md-3 form-group">' + items[i].unit + '</div>' +
//                '<div class="col-md-3 form-group"><button  type="button" id="'+items[i].barcode+'" class="btn btn-primary btn-sm">添加到购物车</button></div>');
//        }
//        $('#'+items[i].barcode+'').on('click', function(){
//               cartItemSum++;
//
//            $('#cartItemSum').text(cartItemSum);
//            $('#cartItemSumIndex').text(cartItemSum);
//            $('#cartItemSumCart').text(cartItemSum);
//            $('#cartItemSumPay').text(cartItemSum);
//        }
//    );
//   }
//});
