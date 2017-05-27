$(function () {
		var text="Стоимость поездки: ";
        var currency=" руб.";
        function price(length, car){
            var km_price=10;
            var base;
            switch(car){
                case 'standart':
                base = 70;
                break;
                case 'comfort':
                base = 170;
                break;
                case 'business':
                base = 270;
            }
            if(length<=3)
                length=3;
            var price = base + (length - 3)*km_price;
            return price;
        }

        var car = $('#car').val();
        var length = $('#distance').val();
        cost = price(length, car);
        $("div.price").append("<span class='price'>" + text +cost + currency+"</span>"); 
       
        $( '.slider' ).slider({
            range: false,
            min: 3,
            max: 100,
            value: 3,
            slide: function ( event, ui ) {
                $('#distance').val( ui.value );
                var car = $('#car').val();
                cost = price(ui.value, car);
                console.log(cost);
                $("span.price").remove()
                $("div.price").append("<span class='price'>" + text +cost + currency+"</span>");
            }
        });

        function sliderChange () {
            $('#distance').on('input', function (event) {
                var val = $(this).val();
                $( '.slider' ).slider({
                    value: val,
                });

                var car = $('#car').val();
                cost=price(val, car);
                console.log(cost);
                $("span.price").remove()
                $("div.price").append("<span class='price'>" + text +cost + currency+"</span>");
            });   
        }
        sliderChange();

         $('#car').on('input', function (event) {
            var car = $(this).val();
            var length = $('#distance').val();
            cost = price(length, car);
            $("span.price").remove()
            $("div.price").append("<span class='price'>" + text +cost + currency+"</span>");
         })
})