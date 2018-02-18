jQuery(document).ready(function(){
        // This button will increment the value
        $('.qtyplus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            fieldName = $(this).attr('field');
            // Get its current value
            var currentVal = parseInt($('input[name='+fieldName+']').val());
            // If is not undefined
            if (!isNaN(currentVal)) {
                // Increment only if value is < 20
                if (currentVal < 999)
                {
                  $('input[name='+fieldName+']').val(currentVal + 1);
                  $('.qtyminus').val("-").removeAttr('style');
								}
                else
                {
                	$('.qtyplus').val("+").css('color','#aaa');
                    $('.qtyplus').val("+").css('cursor','not-allowed');
                }
            } else {
                // Otherwise put a 0 there
                $('input[name='+fieldName+']').val(1);
            }
        });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 60) {
            // Decrement one only if value is > 1
            $('input[name='+fieldName+']').val(currentVal - 1);
             $('.qtyplus').val("+").removeAttr('style');
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(60);
            $('.qtyminus').val("-").css('color','#aaa');
            $('.qtyminus').val("-").css('cursor','not-allowed');
        }
    });
});