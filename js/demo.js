// 接口返回的数据就是一个函数的调用
function weather(data) {
    var location = document.getElementById("location");
    var updateTime = document.getElementById("update-time");
    var wea = document.getElementById("wea");
    var tem = document.getElementById("tem");
    var humidity = document.getElementById("humidity");
    var air = document.getElementById("air");
    var airLevel = document.getElementById("air_level");
    var airTips = document.getElementById("air_tips");
    var win = document.getElementById("win");
    var winSpeed = document.getElementById("win_speed");
    var pressure= document.getElementById("pressure");

    var hour1 = document.getElementById("hour1");
    var span1 = hour1.getElementsByTagName("span");
    var hour2 = document.getElementById("hour2");
    var span2 = hour2.getElementsByTagName("span");
    var hour3 = document.getElementById("hour3");
    var span3 = hour3.getElementsByTagName("span");
    var hour4 = document.getElementById("hour4");
    var span4 = hour4.getElementsByTagName("span");
    var hour5 = document.getElementById("hour5");
    var span5 = hour5.getElementsByTagName("span");
    var hour6 = document.getElementById("hour6");
    var span6 = hour6.getElementsByTagName("span");
    var hour7 = document.getElementById("hour7");
    var span7 = hour7.getElementsByTagName("span");
    /*
    var hour8 = document.getElementById("hour8");
    var span8 = hour8.getElementsByTagName("span");
    var hour9 = document.getElementById("hour9");
    var span9 = hour9.getElementsByTagName("span");
    var hour10 = document.getElementById("hour10");
    var span10 = hour10.getElementsByTagName("span");
    var hour11 = document.getElementById("hour11");
    var span11 = hour11.getElementsByTagName("span");
    var hour12 = document.getElementById("hour12");
    var span12 = hour12.getElementsByTagName("span");
    var hour13 = document.getElementById("hour13");
    var span13 = hour13.getElementsByTagName("span");
    var hour14 = document.getElementById("hour14");
    var span14 = hour14.getElementsByTagName("span");
    var hour15 = document.getElementById("hour15");
    var span15 = hour15.getElementsByTagName("span");
    var hour16 = document.getElementById("hour16");
    var span16 = hour16.getElementsByTagName("span");
    var hour17 = document.getElementById("hour17");
    var span17 = hour17.getElementsByTagName("span");
    var hour18 = document.getElementById("hour18");
    var span18 = hour18.getElementsByTagName("span");
    var hour19 = document.getElementById("hour19");
    var span19 = hour19.getElementsByTagName("span");
    var hour20 = document.getElementById("hour20");
    var span20 = hour20.getElementsByTagName("span");
    var hour21 = document.getElementById("hour21");
    var span21 = hour21.getElementsByTagName("span");
    var hour22 = document.getElementById("hour22");
    var span22 = hour22.getElementsByTagName("span");
*/

    var day1 = document.getElementById("day1");
    var daySpan1 = day1.getElementsByTagName("span");
    var day2 = document.getElementById("day2");
    var daySpan2 = day2.getElementsByTagName("span");
    var day3 = document.getElementById("day3");
    var daySpan3 = day3.getElementsByTagName("span");
    var day4 = document.getElementById("day4");
    var daySpan4 = day4.getElementsByTagName("span");
    var day5 = document.getElementById("day5");
    var daySpan5 = day5.getElementsByTagName("span");
    var day6 = document.getElementById("day6");
    var daySpan6 = day6.getElementsByTagName("span");
    var day7 = document.getElementById("day7");
    var daySpan7 = day7.getElementsByTagName("span");

    var zwx = document.getElementById("zwx");
    zwx.innerHTML = data.data[0].index[0].desc;
    var yd = document.getElementById("yd");
    yd.innerHTML = data.data[0].index[1].desc;
    var xt = document.getElementById("xt");
    xt.innerHTML = data.data[0].index[2].desc;
    var cy = document.getElementById("cy");
    cy.innerHTML = data.data[0].index[3].desc;
    var xc= document.getElementById("xc");
    xc.innerHTML = data.data[0].index[4].desc;
    var kq = document.getElementById("kq");
    kq.innerHTML = data.data[0].index[5].desc;
    

    location.innerHTML = data.city;
    updateTime.innerHTML = "中央气象台" + data.update_time.slice(11,16) + "发布";
    wea.innerHTML = data.data[0].wea;
    tem.innerHTML = data.data[0].tem + "℃";
    humidity.innerHTML = "湿度" + data.data[0].humidity;
    air.innerHTML = data.data[0].air;
    airLevel.innerHTML = data.data[0].air_level;
    airTips.innerHTML = data.data[0].air_tips;
    win.innerHTML = data.data[0].win[0];
    winSpeed.innerHTML = data.data[0].win_speed;
    pressure.innerHTML = "气压" + data.data[0].pressure + "hpa";


    function weatherIcon(t) {
        if (data.data[0].hours[t].wea_img.search("yin") != -1){
            return "&#xe8b2;";
        }
        if (data.data[0].hours[t].wea_img.search("yu") != -1){
            return "&#xe617;";
        }
        if (data.data[0].hours[t].wea_img.search("duoyun") != -1){
            return "&#xe60c;";
        }
        if (data.data[0].hours[t].wea_img.search("qing") != -1){
            return "&#xe78e;";
        }
        if (data.data[0].hours[t].wea_img.search("xue") != -1){
            return "&#xe621;";
        }
        if (data.data[0].hours[t].wea_img.search("mai") != -1){
            return "&#xe623;";
        }
        if (data.data[0].hours[t].wea_img.search("wu") != -1){
            return "&#xe600;";
        }
        if (data.data[0].hours[t].wea_img.search("shachenbao") != -1){
            return "&#xe665;";
        }
        if (data.data[0].hours[t].wea_img.search("bingbao") != -1){
            return "&#xe841;";
        }
        if (data.data[0].hours[t].wea_img.search("lei") != -1){
            return "&#xe663;";
        }
    }

    function weatherDayIcon(d) {
        if (data.data[d].wea_day_img.search("yin") != -1){
            return "&#xe8b2;";
        }
        if (data.data[d].wea_day_img.search("yu") != -1){
            return "&#xe617;";
        }
        if (data.data[d].wea_day_img.search("duoyun") != -1){
            return "&#xe60c;";
        }
        if (data.data[d].wea_day_img.search("qing") != -1){
            return "&#xe78e;";
        }
        if (data.data[d].wea_day_img.search("xue") != -1){
            return "&#xe621;";
        }
        if (data.data[d].wea_day_img.search("mai") != -1){
            return "&#xe623;";
        }
        if (data.data[d].wea_day_img.search("wu") != -1){
            return "&#xe600;";
        }
        if (data.data[d].wea_day_img.search("shachenbao") != -1){
            return "&#xe665;";
        }
        if (data.data[d].wea_day_img.search("bingbao") != -1){
            return "&#xe841;";
        }
        if (data.data[d].wea_day_img.search("lei") != -1){
            return "&#xe663;";
        }
    }

    function weatherNightIcon(d) {
        if (data.data[d].wea_night_img.search("yin") != -1){
            return "&#xe8b2;";
        }
        if (data.data[d].wea_night_img.search("yu") != -1){
            return "&#xe617;";
        }
        if (data.data[d].wea_night_img.search("duoyun") != -1){
            return "&#xe60c;";
        }
        if (data.data[d].wea_night_img.search("qing") != -1){
            return "&#xe78e;";
        }
        if (data.data[d].wea_night_img.search("xue") != -1){
            return "&#xe621;";
        }
        if (data.data[d].wea_night_img.search("mai") != -1){
            return "&#xe623;";
        }
        if (data.data[d].wea_night_img.search("wu") != -1){
            return "&#xe600;";
        }
        if (data.data[d].wea_night_img.search("shachenbao") != -1){
            return "&#xe665;";
        }
        if (data.data[d].wea_night_img.search("bingbao") != -1){
            return "&#xe841;";
        }
        if (data.data[d].wea_night_img.search("lei") != -1){
            return "&#xe663;";
        }
    }

    span1[0].innerHTML = data.data[0].hours[0].hours.slice(0,2) + ":00";
    span1[1].innerHTML = weatherIcon(0);
    span1[2].innerHTML = data.data[0].hours[0].tem + "℃";

    span2[0].innerHTML = data.data[1].hours[1].hours.slice(0,2) + ":00";
    span2[1].innerHTML = weatherIcon(1);
    span2[2].innerHTML = data.data[0].hours[1].tem + "℃";

    span3[0].innerHTML = data.data[2].hours[2].hours.slice(0,2) + ":00";
    span3[1].innerHTML = weatherIcon(2);
    span3[2].innerHTML = data.data[0].hours[2].tem + "℃";

    span4[0].innerHTML = data.data[3].hours[3].hours.slice(0,2) + ":00";
    span4[1].innerHTML = weatherIcon(3);
    span4[2].innerHTML = data.data[0].hours[3].tem + "℃";

    span5[0].innerHTML = data.data[4].hours[4].hours.slice(0,2) + ":00";
    span5[1].innerHTML = weatherIcon(4);
    span5[2].innerHTML = data.data[0].hours[4].tem + "℃";

    span6[0].innerHTML = data.data[5].hours[5].hours.slice(0,2) + ":00";
    span6[1].innerHTML = weatherIcon(5);
    span6[2].innerHTML = data.data[0].hours[5].tem + "℃";

    span7[0].innerHTML = data.data[6].hours[6].hours.slice(0,2) + ":00";
    span7[1].innerHTML = weatherIcon(6);
    span7[2].innerHTML = data.data[0].hours[6].tem + "℃";
/*
    span8[0].innerHTML = data.data[7].hours[7].hours.slice(0,2) + ":00";
    span8[1].innerHTML = weatherIcon(7);
    span8[2].innerHTML = data.data[7].hours[7].tem + "℃";

    span9[0].innerHTML = data.data[8].hours[8].hours.slice(0,2) + ":00";
    span9[1].innerHTML = weatherIcon(8);
    span9[2].innerHTML = data.data[8].hours[8].tem + "℃";

    span10[0].innerHTML = data.data[9].hours[9].hours.slice(0,2) + ":00";
    span10[1].innerHTML = weatherIcon(9);
    span10[2].innerHTML = data.data[9].hours[9].tem + "℃";

    span11[0].innerHTML = data.data[10].hours[10].hours.slice(0,2) + ":00";
    span11[1].innerHTML = weatherIcon(10);
    span11[2].innerHTML = data.data[10].hours[10].tem + "℃";

    span12[0].innerHTML = data.data[11].hours[11].hours.slice(0,2) + ":00";
    span12[1].innerHTML = weatherIcon(11);
    span12[2].innerHTML = data.data[11].hours[11].tem + "℃";

    span13[0].innerHTML = data.data[12].hours[12].hours.slice(0,2) + ":00";
    span13[1].innerHTML = weatherIcon(12);
    span13[2].innerHTML = data.data[12].hours[12].tem + "℃";

    span14[0].innerHTML = data.data[13].hours[13].hours.slice(0,2) + ":00";
    span14[1].innerHTML = weatherIcon(13);
    span14[2].innerHTML = data.data[13].hours[13].tem + "℃";

    span15[0].innerHTML = data.data[14].hours[14].hours.slice(0,2) + ":00";
    span15[1].innerHTML = weatherIcon(14);
    span15[2].innerHTML = data.data[14].hours[14].tem + "℃";

    span16[0].innerHTML = data.data[15].hours[15].hours.slice(0,2) + ":00";
    span16[1].innerHTML = weatherIcon(15);
    span16[2].innerHTML = data.data[15].hours[15].tem + "℃";
    
    span17[0].innerHTML = data.data[16].hours[16].hours.slice(0,2) + ":00";
    span17[1].innerHTML = weatherIcon(16);
    span17[2].innerHTML = data.data[16].hours[16].tem + "℃";

    span18[0].innerHTML = data.data[17].hours[17].hours.slice(0,2) + ":00";
    span18[1].innerHTML = weatherIcon(17);
    span18[2].innerHTML = data.data[17].hours[17].tem + "℃";

    span19[0].innerHTML = data.data[18].hours[18].hours.slice(0,2) + ":00";
    span19[1].innerHTML = weatherIcon(18);
    span19[2].innerHTML = data.data[18].hours[18].tem + "℃";

    span20[0].innerHTML = data.data[19].hours[19].hours.slice(0,2) + ":00";
    span20[1].innerHTML = weatherIcon(19);
    span20[2].innerHTML = data.data[19].hours[19].tem + "℃";

    span21[0].innerHTML = data.data[20].hours[20].hours.slice(0,2) + ":00";
    span21[1].innerHTML = weatherIcon(20);
    span21[2].innerHTML = data.data[20].hours[20].tem + "℃";

    span22[0].innerHTML = data.data[21].hours[21].hours.slice(0,2) + ":00";
    span22[1].innerHTML = weatherIcon(21);
    span22[2].innerHTML = data.data[21].hours[21].tem + "℃";

*/

    daySpan1[0].innerHTML = "周" + data.data[0].week.slice(2,3);
    daySpan1[1].innerHTML = data.data[0].date.slice(5,7) + "月" + data.data[0].day.slice(0,3);
    daySpan1[2].innerHTML = data.data[0].wea_day;
    daySpan1[3].innerHTML = weatherDayIcon(0);
    daySpan1[4].innerHTML = data.data[0].tem1 + "℃";
    daySpan1[5].innerHTML = data.data[0].tem2 + "℃";
    daySpan1[6].innerHTML = weatherNightIcon(0);
    daySpan1[7].innerHTML = data.data[0].wea_night;
    daySpan1[8].innerHTML = data.data[0].win[1] + " " + data.data[0].win_speed;

    daySpan2[0].innerHTML = "周" + data.data[1].week.slice(2,3);
    daySpan2[1].innerHTML = data.data[1].date.slice(5,7) + "月" + data.data[1].day.slice(0,3);
    daySpan2[2].innerHTML = data.data[1].wea_day;
    daySpan2[3].innerHTML = weatherDayIcon(1);
    daySpan2[4].innerHTML = data.data[1].tem1 + "℃";
    daySpan2[5].innerHTML = data.data[1].tem2 + "℃";
    daySpan2[6].innerHTML = weatherNightIcon(1);
    daySpan2[7].innerHTML = data.data[1].wea_night;
    daySpan2[8].innerHTML = data.data[1].win[1] + " " + data.data[1].win_speed;

    daySpan3[0].innerHTML = "周" + data.data[2].week.slice(2,3);
    daySpan3[1].innerHTML = data.data[2].date.slice(5,7) + "月" + data.data[2].day.slice(0,3);
    daySpan3[2].innerHTML = data.data[2].wea_day;
    daySpan3[3].innerHTML = weatherDayIcon(2);
    daySpan3[4].innerHTML = data.data[2].tem1 + "℃";
    daySpan3[5].innerHTML = data.data[2].tem2 + "℃";
    daySpan3[6].innerHTML = weatherNightIcon(2);
    daySpan3[7].innerHTML = data.data[2].wea_night;
    daySpan3[8].innerHTML = data.data[2].win[1] + " " + data.data[2].win_speed;

    daySpan4[0].innerHTML = "周" + data.data[3].week.slice(2,3);
    daySpan4[1].innerHTML = data.data[3].date.slice(5,7) + "月" + data.data[3].day.slice(0,3);
    daySpan4[2].innerHTML = data.data[3].wea_day;
    daySpan4[3].innerHTML = weatherDayIcon(3);
    daySpan4[4].innerHTML = data.data[3].tem1 + "℃";
    daySpan4[5].innerHTML = data.data[3].tem2 + "℃";
    daySpan4[6].innerHTML = weatherNightIcon(3);
    daySpan4[7].innerHTML = data.data[3].wea_night;
    daySpan4[8].innerHTML = data.data[3].win[1] + " " + data.data[3].win_speed;

    daySpan5[0].innerHTML = "周" + data.data[4].week.slice(2,3);
    daySpan5[1].innerHTML = data.data[4].date.slice(5,7) + "月" + data.data[4].day.slice(0,3);
    daySpan5[2].innerHTML = data.data[4].wea_day;
    daySpan5[3].innerHTML = weatherDayIcon(4);
    daySpan5[4].innerHTML = data.data[4].tem1 + "℃";
    daySpan5[5].innerHTML = data.data[4].tem2 + "℃";
    daySpan5[6].innerHTML = weatherNightIcon(4);
    daySpan5[7].innerHTML = data.data[4].wea_night;
    daySpan5[8].innerHTML = data.data[4].win[1] + " " + data.data[4].win_speed;

    daySpan6[0].innerHTML = "周" + data.data[5].week.slice(2,3);
    daySpan6[1].innerHTML = data.data[5].date.slice(5,7) + "月" + data.data[5].day.slice(0,3);
    daySpan6[2].innerHTML = data.data[5].wea_day;
    daySpan6[3].innerHTML = weatherDayIcon(5);
    daySpan6[4].innerHTML = data.data[5].tem1 + "℃";
    daySpan6[5].innerHTML = data.data[5].tem2 + "℃";
    daySpan6[6].innerHTML = weatherNightIcon(5);
    daySpan6[7].innerHTML = data.data[5].wea_night;
    daySpan6[8].innerHTML = data.data[5].win[1] + " " + data.data[5].win_speed;

    daySpan7[0].innerHTML = "周" + data.data[6].week.slice(2,3);
    daySpan7[1].innerHTML = data.data[6].date.slice(5,7) + "月" + data.data[6].day.slice(0,3);
    daySpan7[2].innerHTML = data.data[6].wea_day;
    daySpan7[3].innerHTML = weatherDayIcon(6);
    daySpan7[4].innerHTML = data.data[6].tem1 + "℃";
    daySpan7[5].innerHTML = data.data[6].tem2 + "℃";
    daySpan7[6].innerHTML = weatherNightIcon(6);
    daySpan7[7].innerHTML = data.data[6].wea_night;
    daySpan7[8].innerHTML = data.data[6].win[1] + " " + data.data[6].win_speed;


}





















window.onload = function() {

    var btn = document.getElementById("location-button");
    var city = document.getElementById("city");

    var oldScript = document.createElement("script");
    oldScript.src = `https://v0.yiketianqi.com/api?version=v9&appid=34785583&appsecret=8vfS3MzL&callback=weather`;
    //插入到页面中去
    document.body.appendChild(oldScript);

    city.onkeydown = function(event) {
        if(event.key=='Enter'){
            if (city.value) {
                var newScript = document.createElement("script");
                newScript.src = `https://v0.yiketianqi.com/api?version=v9&appid=34785583&appsecret=8vfS3MzL&city=${city.value}&callback=weather`;
    
                //插入到页面中去
                document.body.replaceChild(newScript, oldScript);
                oldScript = newScript;
            } else {
                alert("请输入城市名称!");
            }
        }
    }
    
    btn.onclick = function() {
        // 加个判断，输入内容是否为空
        if (city.value) {
            var newScript = document.createElement("script");
            newScript.src = `https://v0.yiketianqi.com/api?version=v9&appid=34785583&appsecret=8vfS3MzL&city=${city.value}&callback=weather`;

            //插入到页面中去
            document.body.replaceChild(newScript, oldScript);
            oldScript = newScript;
        } else {
            alert("请输入城市名称!");
        }
    }
}
