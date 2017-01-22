(function() {
    var lines = 10;

    function rand(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    $("#o_add").on('click', function() {
        var o_count = $("#o_count").val();
        var o_volume = $("#o_volume").val();
        var o_date = $("#o_date").val();
        var o_type = $("#o_type").val();
        lines = lines + 1;
        var str = '<tr id="' + lines + '" ><td>' + o_type + '</td><td>' + o_count + '</td><td>' + o_volume + '</td><td>' + o_date + '</td><td><button type="button" class="btn btn-w-m btn-danger btn-sm" id="' + 'b' + lines + '">Удалить</button></td></tr>';

        $("#o_table").append(str);
        $('#b' + lines).on('click', function() {
            // console.log($(this).attr('id').substr(1));
            document.getElementById($(this).attr('id').substr(1)).remove();
        });
        // console.log(data3);
        var minIndex = 30 * (parseInt(o_date.split('/')[0]) - 1) + parseInt(o_date.split('/')[1]);
        var adding = parseInt(o_volume) * parseInt(o_count);
        console.log('adding');
        console.log(adding);
        console.log(minIndex);
        $.each(data4, function( index, value ) {
            if (index >= minIndex) {
                // console.log(index);
                // var ran = rand(80, 100);
                // console.log( adding * ran * 0.01);
                var curAdded = adding * rand(80, 100) / 100.0;
                addedData = addedData + curAdded;

                value[1] = value[1] + curAdded;
                if (value[1] > yMAX) {
                    yMAX = Math.floor(value[1]);
                }
                adding = adding - adding * 0.005;
            }
        });
        $("#addedData").text(addedData.toFixed(2));
        // console.log('adding data');
        // console.log(addedData.toFixed(2));
        replot();

    });
})();
