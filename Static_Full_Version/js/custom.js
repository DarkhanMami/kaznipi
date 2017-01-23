(function() {
    var lines = 0;
    var vertData =0;
    var horData = 0;
    var inlineData = 0;
    var fourthData = 0;

    function rand(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function replotPie() {
        var data = [{
            label: "#1",
            data: vertData,
            color: "#d3d3d3",
        }, {
            label: "#2",
            data: horData,
            color: "#bababa",
        }, {
            label: "#3",
            data: inlineData,
            color: "#79d2c0",
        }, {
            label: "#4",
            data: fourthData,
            color: "#1ab394",
        }];
        var plotObj = $.plot($("#flot-pie-chart-2"), data, {
            series: {
                    pie: {
                        show: true,               
                        label: {
                            show:true,
                            radius: 0.8,
                            formatter: function (label, series) {               
                                return '<div style="border:1px solid grey;font-size:8pt;text-align:center;padding:5px;color:white;">' +
                                label + ' : ' +
                                Math.round(series.percent) +
                                '%</div>';
                            },
                            background: {
                                opacity: 0.8,
                                color: '#000'
                            }
                        }
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
            },
            legend: {
                show: false
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
                // var curAdded = adding * rand(80, 100) / 100.0;
                var curAdded = adding;
                addedData = addedData + curAdded;

                value[1] = value[1] + curAdded;
                if (value[1] > yMAX) {
                    yMAX = Math.floor(value[1]);
                }
                adding = adding - adding * 0.005;
            }
        });
        $("#addedData").text(addedData.toFixed(2));
        $("#addedPercent").text((100.0 * (addedData / 76121.0)).toFixed(0) + '%');
        // console.log('adding data');
        // console.log(addedData.toFixed(2));
        // if (o_type == "0") {
        //     vertWork = parseInt(vertWork) + parseInt(o_count);
        //     vertData = parseInt(vertData) + parseInt(addedData);
        // }
        // if (o_type == "1") {
        //     horWork = parseInt(horWork) + parseInt(o_count);
        //     horData = parseInt(horData) + parseInt(addedData);
        // }
        // if (o_type == "2") {
        //     inlineWork = parseInt(inlineWork) + parseInt(o_count);
        //     inlineData = parseInt(inlineData) + parseInt(addedData);
        // }
        vertWork = parseInt(vertWork) + parseInt(o_count);
        vertData = parseInt(vertData) + parseInt(addedData);
        $("#vertWork").text(vertWork);
        $("#horWork").text(horWork);
        $("#inlineWork").text(inlineWork);

        replot();
        replotPie();

    });
 
    $("#o_add_5").on('click', function() {
        var o_count = $("#o_count_5").val();
        var o_volume = $("#o_volume_5").val();
        var o_date = $("#o_date_5").val();
        var o_type = $("#o_type_5").val();
        lines = lines + 1;
        var o_type_text = "Физико-химические методы ПНП";
        if (o_type == "0") {
            o_type_text = "Физико-химические методы ПНП";
        }
        if (o_type == "1") {
            o_type_text = "Гидродинамические методы ПНП";
        }
        if (o_type == "2") {
            o_type_text = "Ввод нагнетательных скважин";
        }
        if (o_type == "3") {
            o_type_text = "Ремонт нагнетательных скважин";
        }
        if (o_type == "4") {
            o_type_text = "Выбытие скважин из действующего фонда";
        }
        if (o_type == "5") {
            o_type_text = "Остановка сезонно работающих скважин";
        }
        if (o_type == "6") {
            o_type_text = "Ликвидация скважин";
        }
        var str = '<tr id="' + lines + '" ><td>' + o_type_text + '</td><td>' + o_count + '</td><td>' + o_volume + '</td><td>' + o_date + '</td><td></td></tr>';

        $("#o_table_4").append(str);
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
                // var curAdded = adding * rand(80, 100) / 100.0;
                var curAdded = adding;
                addedData = addedData + curAdded;

                value[1] = value[1] + curAdded;
                if (value[1] > yMAX) {
                    yMAX = Math.floor(value[1]);
                }
                adding = adding - adding * 0.005;
            }
        });
        $("#addedData").text(addedData.toFixed(2));
        $("#addedPercent").text((100.0 * (addedData / 76121.0)).toFixed(0) + '%');
        // console.log('adding data');
        // console.log(addedData.toFixed(2));
        // if (o_type == "0") {
        //     vertWork = parseInt(vertWork) + parseInt(o_count);
        //     vertData = parseInt(vertData) + parseInt(addedData);
        // }
        // if (o_type == "1") {
        //     horWork = parseInt(horWork) + parseInt(o_count);
        //     horData = parseInt(horData) + parseInt(addedData);
        // }
        // if (o_type == "2") {
        //     inlineWork = parseInt(inlineWork) + parseInt(o_count);
        //     inlineData = parseInt(inlineData) + parseInt(addedData);
        // }
        fourthWork = parseInt(fourthWork) + parseInt(o_count);
        fourthData = parseInt(fourthData) + parseInt(addedData);

        $("#vertWork").text(vertWork);
        $("#horWork").text(horWork);
        $("#inlineWork").text(inlineWork);

        replot();
        replotPie();

    });

    $("#o_add_2").on('click', function() {
        var o_count = $("#o_count_2").val();
        var o_volume = $("#o_volume_2").val();
        var o_date = $("#o_date_2").val();
        lines = lines + 1;
        var o_type_text = "Ввод скважин из бездействия";
        var str = '<tr id="' + lines + '" ><td>' + o_type_text + '</td><td>Спуск ГНО</td><td>' + o_count + '</td><td>' + o_volume + '</td><td>' + o_date + '</td><td></td></tr>';

        $("#o_table_2").append(str);
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
                // var curAdded = adding * rand(80, 100) / 100.0;
                var curAdded = adding;
                addedData = addedData + curAdded;

                value[1] = value[1] + curAdded;
                if (value[1] > yMAX) {
                    yMAX = Math.floor(value[1]);
                }
                adding = adding - adding * 0.005;
            }
        });
        $("#addedData").text(addedData.toFixed(2));
        $("#addedPercent").text((100.0 * (addedData / 76121.0)).toFixed(0) + '%');
        // console.log('adding data');
        // console.log(addedData.toFixed(2));
        horWork = parseInt(horWork) + parseInt(o_count);
        horData = parseInt(horData) + parseInt(addedData);

        $("#vertWork").text(vertWork);
        $("#horWork").text(horWork);
        $("#inlineWork").text(inlineWork);

        replot();
        replotPie();

    });


    $("#o_add_3").on('click', function() {
        var o_count = $("#o_count_3").val();
        var o_volume = $("#o_volume_3").val();
        var o_date = $("#o_date_3").val();
        lines = lines + 1;
        var o_type_text = "Мероприятия по КРС и интенсификации добычи";
        var str = '<tr id="' + lines + '" ><td>' + o_type_text + '</td><td>Изменение эксплуатационного объекта</td><td>' + o_count + '</td><td>' + o_volume + '</td><td>' + o_date + '</td><td></td></tr>';

        $("#o_table_2").append(str);
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
                // var curAdded = adding * rand(80, 100) / 100.0;
                var curAdded = adding;
                addedData = addedData + curAdded;

                value[1] = value[1] + curAdded;
                if (value[1] > yMAX) {
                    yMAX = Math.floor(value[1]);
                }
                adding = adding - adding * 0.005;
            }
        });
        $("#addedData").text(addedData.toFixed(2));
        $("#addedPercent").text((100.0 * (addedData / 76121.0)).toFixed(0) + '%');
        // console.log('adding data');
        // console.log(addedData.toFixed(2));
        horWork = parseInt(horWork) + parseInt(o_count);
        horData = parseInt(horData) + parseInt(addedData);
        

        $("#vertWork").text(vertWork);
        $("#horWork").text(horWork);
        $("#inlineWork").text(inlineWork);

        replot();
        replotPie();

    });

    $("#o_add_4").on('click', function() {
        var o_count = $("#o_count_4").val();
        var o_volume = $("#o_volume_4").val();
        var o_date = $("#o_date_4").val();
        lines = lines + 1;
        var o_type_text = "Мероприятия на действующем фонде";
        var str = '<tr id="' + lines + '" ><td>' + o_type_text + '</td><td>Оптимизация режимов работы скважин</td><td>' + o_count + '</td><td>' + o_volume + '</td><td>' + o_date + '</td><td></td></tr>';

        $("#o_table_3").append(str);
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
                // var curAdded = adding * rand(80, 100) / 100.0;
                var curAdded = adding;
                addedData = addedData + curAdded;

                value[1] = value[1] + curAdded;
                if (value[1] > yMAX) {
                    yMAX = Math.floor(value[1]);
                }
                adding = adding - adding * 0.005;
            }
        });
        $("#addedData").text(addedData.toFixed(2));
        $("#addedPercent").text((100.0 * (addedData / 76121.0)).toFixed(0) + '%');
        // console.log('adding data');
        // console.log(addedData.toFixed(2));
        inlineWork = parseInt(inlineWork) + parseInt(o_count);
        inlineData = parseInt(inlineData) + parseInt(addedData);

        $("#vertWork").text(vertWork);
        $("#horWork").text(horWork);
        $("#inlineWork").text(inlineWork);

        replot();
        replotPie();

    });

})();

var showThirdGraph = function() {
    $(".invis").show();
    $(".shift").attr('class', 'col-xs-3');
    showFact = true;
    replot();
}
