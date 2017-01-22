(function() {
    var lines = 0;
    var vertData =0;
    var horData = 0;
    var inlineData = 0;

    function rand(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function replotPie() {
        var data = [{
            label: "Вертикальные скважины",
            data: vertData,
            color: "#79d2c0",
        }, {
            label: "Горизонтальные скважины",
            data: horData,
            color: "#bababa",
        }, {
            label: "Наклонные скважины",
            data: inlineData,
            color: "#69B8CA",
        }];
        var plotObj = $.plot($("#flot-pie-chart-2"), data, {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                shifts: {
                    x: 20,
                    y: 0
                },
                defaultTheme: false
            }
        });
    }

    replotPie();
    $("#o_add").on('click', function() {
        var o_count = $("#o_count").val();
        var o_volume = $("#o_volume").val();
        var o_date = $("#o_date").val();
        var o_type = $("#o_type").val();
        lines = lines + 1;
        var o_type_text = "Вертикальная";
        if (o_type == "0") {
            o_type_text = "Вертикальная";
        }
        if (o_type == "1") {
            o_type_text = "Горизонтальная";
        }
        if (o_type == "2") {
            o_type_text = "Наклонная";
        }
        var str = '<tr id="' + lines + '" ><td>' + o_type_text + '</td><td>' + o_count + '</td><td>' + o_volume + '</td><td>' + o_date + '</td><td></td></tr>';

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
        $("#addedPercent").text((100.0 * (addedData / 82764.0)).toFixed(0) + '%');
        // console.log('adding data');
        // console.log(addedData.toFixed(2));
        if (o_type == "0") {
            vertWork = parseInt(vertWork) + parseInt(o_count);
            vertData = parseInt(vertData) + parseInt(addedData);
        }
        if (o_type == "1") {
            horWork = parseInt(horWork) + parseInt(o_count);
            horData = parseInt(horData) + parseInt(addedData);
        }
        if (o_type == "2") {
            inlineWork = parseInt(inlineWork) + parseInt(o_count);
            inlineData = parseInt(inlineData) + parseInt(addedData);
        }

        $("#vertWork").text(vertWork);
        $("#horWork").text(horWork);
        $("#inlineWork").text(inlineWork);

        replot();
        replotPie();

    });
})();
