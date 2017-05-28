$(function () {
        function priceCount(length, car){
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
        
           var mess_price = "Стоимость поездки: ";
           var currency = " руб.";
           var error = "Введите значение от 3 до 100";
        
        function sliderChange () {              
                var val = $('#distance').val();
                if($.isNumeric(val)){
                     $( '.slider' ).slider({
                        value: val,
                    });
                     if((val>=3)&&(val<=100)){
                        var car = $('#car').val();
                        var price=priceCount(val, car);
                        var mess = mess_price + price + currency;
                    }
                    else
                        var mess=error;   
                }
                else
                    var mess=error;   
                $('span.price').text(mess);
        }


        $( '.slider' ).slider({
            range: false,
            min: 3,
            max: 100,
            value: 3,
            slide: function ( event, ui ) {
                $('#distance').val( ui.value );
                var car = $('#car').val();
                var price = priceCount(ui.value, car);
                var mess = mess_price + price + currency;
                $('span.price').text(mess);
            }
        });
    
        sliderChange();

        $('#distance').on('input', function (event) {
            sliderChange();
        })

         $('#car').on('input', function (event) {
            var car = $(this).val();
            var length = $('#distance').val();
            if($.isNumeric(length)&&(length>=3)&&(length<=100)){
                price = priceCount(length, car);
                mess = mess_price + price + currency;
                $('span.price').text(mess);
            }
         })
})