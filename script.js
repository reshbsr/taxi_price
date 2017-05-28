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
            var mess="Стоимость поездки: " + price + " руб."        
            return mess;
        }
   
        function sliderChange () {              
                var val = $('#distance').val();
                if($.isNumeric(val)){
                     $( '.slider' ).slider({
                        value: val,
                    });
                     if((val>=3)&&(val<=100)){
                        var car = $('#car').val();
                        mess=priceCount(val, car);
                    }
                    else
                        mess="Введите значение от 3 до 100";   
                }
                else
                    mess="Введите значение от 3 до 100";   
                $("span.price").remove();
                $("div.price").append("<span class='price'>" + mess +"</span>");
                console.log(mess);
        }


        $( '.slider' ).slider({
            range: false,
            min: 3,
            max: 100,
            value: 3,
            slide: function ( event, ui ) {
                $('#distance').val( ui.value );
                var car = $('#car').val();
                mess = priceCount(ui.value, car);
                console.log(mess);
                $("span.price").remove()
                $("div.price").append("<span class='price'>" + mess +"</span>");
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
                mess = priceCount(length, car);
                console.log(mess);
                $("span.price").remove()
                $("div.price").append("<span class='price'>" + mess +"</span>");
            }
         })
})