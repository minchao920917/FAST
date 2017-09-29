//全局的年月日，适用于任何时候获取今天的年月日。（很重要）
//
var sev_m, sev_y, sev_d, active = 3;

/*
 * 主体滑动对象
 */
var mySwiper = new Swiper('.swiper-container', {

    initialSlide: 1,
    loop: true,
    speed: 400,

    followFinger: false,
  
    /*
     * 滑动变化开始
     */
    onSlideChangeStart: function(swiper) {
        // alert("滑动开始");
        swiper.lockSwipes();
    },
    /*
     * 滑动变化结束
     */
    onSlideChangeEnd: function(swiper) {
        // alert("滑动结束");
        // 获取当前时间
        var nows = $(".swiper-slide-active").find("table").attr("id");
        
        if (nows == 'now2')
            return;

        nows = parseInt(nows.substr(1, 1));
        
        if (nows == active)
            return;

        if (active == 4 && nows == 5) {
            var fors = 1;

            sev_m++;

            if (sev_m > 12) {
                sev_m = 1;
                sev_y++;
            }

            var nowweak = new Date(sev_y, sev_m - 1, 1).getDay();
            get_first(nowweak, sev_y, sev_m, 0, "d2");

            var lastm = sev_m - 1;
            var lasty = sev_y;
            if (lastm < 1) {
                lastm = 12;
                lasty--;
            }

            var nm = sev_m + 1;
            var ny = sev_y;
            if (nm > 12) {
                nm = 1;
                ny++;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            var lastweek = new Date(lasty, lastm - 1, 1).getDay();
            get_first(lastweek, lasty, lastm, 0, "d" + fors);
            get_first(nowweak, ny, nm, 0, "d3");
            
            $("#ymym").html(sev_y + "年" + sev_m + "月");//绑定当前月份

            active = 5;

        } else if (active == 2 && nows == 1) {
            var fors = 5;

            var nextweak = new Date(sev_y, sev_m - 1, 1).getDay();
            get_first(nextweak, sev_y, sev_m, 0, "d" + fors);
            sev_m--;
            if (sev_m < 1) {
                sev_m = 12;
                sev_y--;
            }
            var nowweak = new Date(sev_y, sev_m - 1, 1).getDay();
            get_first(nowweak, sev_y, sev_m, 0, "d4");

            var nm = sev_m - 1;
            var ny = sev_y;
            if (nm < 1) {
                nm = 12;
                ny--;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            //get_first(nowweak, ny, nm, 0, "d4");
            get_first(nowweak, ny, nm, 0, "d3");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 1;
        } else if (active == 5 && nows == 3) {
            var fors = 4;

            var lastm = sev_m;
            var lasty = sev_y;

            sev_m++;
            if (sev_m > 12) {
                sev_m = 1;
                sev_y++;
            }

            var nm = sev_m + 1;
            var ny = sev_y;
            if (nm > 12) {
                nm = 1;
                ny++;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            var nowweak = new Date(lasty, lastm - 1, 1).getDay();
            get_first(nowweak, lasty, lastm, 0, "d2");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 3;
        } else if (active == 1 && nows == 3) {
            var fors = 2;

            var lastm = sev_m;
            var lasty = sev_y;

            sev_m--;
            if (sev_m < 1) {
                sev_m = 12;
                sev_y--;
            }

            var nm = sev_m - 1;
            var ny = sev_y;
            if (nm < 1) {
                nm = 12;
                ny--;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            var nowweak = new Date(lasty, lastm - 1, 1).getDay();
            get_first(nowweak, lasty, lastm, 0, "d4");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 3;
        } else if (active == 1 && nows == 5) {
            var fors = 3;

            var lastm = sev_m;
            var lasty = sev_y;

            sev_m++;
            if (sev_m > 12) {
                sev_m = 1;
                sev_y++;
            }

            var nm = sev_m + 1;
            var ny = sev_y;
            if (nm > 12) {
                nm = 1;
                ny++;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 5;
        } else if (active == 5 && nows == 1) {
            var fors = 3;


            sev_m--;
            if (sev_m < 1) {
                sev_m = 12;
                sev_y--;
            }
            var lastm = sev_m;
            var lasty = sev_y;

            var nm = sev_m - 1;
            var ny = sev_y;
            if (nm < 1) {
                nm = 12;
                ny--;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            var lastweak = new Date(lasty, sev_m - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            // console.log(lasty,lastm)
            get_first(lastweak, lasty, sev_m, 0, "d4");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 1;
        } else if (active > nows) {
            var fors = nows - 1;
            if (fors < 1)
                fors = 5;

            sev_m--;
            if (sev_m < 1) {
                sev_m = 12;
                sev_y--;
            }

            var nm = sev_m - 1;
            var ny = sev_y;
            if (nm < 1) {
                nm = 12;
                ny--;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = nows;
        } else if (active < nows) {
            var fors = nows + 1;
            if (fors > 5)
                fors = 1;

            sev_m++;
            if (sev_m > 12) {
                sev_m = 1;
                sev_y++;
            }

            var nm = sev_m + 1;
            var ny = sev_y;
            if (nm > 12) {
                nm = 1;
                ny++;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = nows;
        }
        var trLength = $("#d"+nows).find("tr").length;
        if(trLength==6){
          $(".swiper-container").css("paddingBottom",".45rem");
        }else{
          $(".swiper-container").css("paddingBottom","");
            
        }
        swiper.unlockSwipes();
    }

})


var yl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

window.onload = function() {

    $(".load8").hide();
    
    $("#now3").attr("id", "d1");
    $("#now1").attr("id", "d2");
    $("#now2").attr("id", "d3");
    $("#now3").attr("id", "d4");
    $("#now1").attr("id", "d5");

    var globledate = new Date();
    var y = globledate.getFullYear();//年
    var m = globledate.getMonth() + 1;//月
    var d = globledate.getDate();//日
    sev_m = m;
    sev_y = y;
    sev_d = d;

    //当前周
    var nowweak = new Date(y, m - 1, 1).getDay();
    if (nowweak == 7) nowweak = 0;
    get_first(nowweak, y, m, d, "d3");
    set_top(0);

    m = m + 1;
    if (m > 12) {
        m = 1;
        y += 1;
    }
    nowweak = new Date(y, m - 1, 1).getDay();
    get_first(nowweak, y, m, 0, "d4");

    m = sev_m - 1;
    if (m < 1) {
        m = 12;
        y = sev_y - 1;
    }
    nowweak = new Date(y, m - 1, 1).getDay();
    get_first(nowweak, y, m, 0, "d2");

    $("#ymym").html(sev_y + "年" + sev_m + "月");

    $(".js_jin").click(function() {
        active = 3;
        var globledate = new Date();
        var y = globledate.getFullYear();
        var m = globledate.getMonth() + 1;
        var d = globledate.getDate();
        sev_m = m;
        sev_y = y;
        sev_d = d;
        var nowweak = new Date(y, m - 1, 1).getDay();
        if (nowweak == 7) nowweak = 0;
        get_first(nowweak, y, m, d, "d3");
        set_top(0);

        m = m + 1;
        if (m > 12) {
            m = 1;
            y += 1;
        }
        nowweak = new Date(y, m - 1, 1).getDay();
        get_first(nowweak, y, m, 0, "d4");

        m = sev_m - 1;
        if (m < 1) {
            m = 12;
            y = sev_y - 1;
        }
        nowweak = new Date(y, m - 1, 1).getDay();
        get_first(nowweak, y, m, 0, "d2");

        $("#ymym").html(sev_y + "年" + sev_m + "月");
        mySwiper.slideTo(2, 500, false);
    });
    mySwiper.unlockSwipes();
};

/*
 * @public
 * @func  jupm 跳转到具体日期页面
 * @param[yyyy] 年份
 * @param[mm] 月份
 * @param[dd]  日期
 */

function jump(yyyy, mm, dd) {

    sev_y = parseInt(yyyy);
    sev_m = parseInt(mm);
    sev_d = parseInt(dd);

    active = 3;
    var globledate = new Date(yyyy, parseInt(mm) - 1, parseInt(dd));
    //var nowweak = globledate.getDay();
    var y = globledate.getFullYear();
    var m = globledate.getMonth() + 1;
    var d = globledate.getDate();
    //console.log("globledate:",y,m,d);

    var sev_m_tmp = m;
    var sev_y_tmp = y;
    var sev_d_tmp = d;
    var nowweak = new Date(y, m - 1, 1).getDay();
    if (nowweak == 7) nowweak = 0;
    get_first(nowweak, y, m, d, "d3");

    m = m + 1;
    if (m > 12) {
        m = 1;
        y += 1;
    }
    nowweak = new Date(y, m - 1, 1).getDay();
    get_first(nowweak, y, m, 0, "d4");

    m = sev_m - 1;
    if (m < 1) {
        m = 12;
        y = sev_y - 1;
    }
    nowweak = new Date(y, m - 1, 1).getDay();
    get_first(nowweak, y, m, 0, "d2");

    $("#ymym").html(sev_y + "年" + sev_m + "月");
    $(".covers").hide();
    mySwiper.slideTo(2, 500, false);
    click_sev();

}

function click_sev() {
    $("#d3").find("td").each(function() {
        if ($(this).attr("data_y") == sev_y && $(this).attr("data_m") == sev_m && $(this).attr("data_d") == sev_d) {
            $(this).click();
        }
    });
}

function get_first(a, b, c, d, e) {
    // console.log(a+","+b+","+c+","+d+","+e);
    var str = '<tr>';
    if ((c - 2) < 0) {
        var ldays = 31;
        var lm = 12;
        var lb = b - 1;
    } else {
        var ldays = yl[c - 2];
        var lm = c - 1;
        var lb = b;
    }

    if (c == 12) {
        var xdays = 31;
        var xm = 1;
        var xb = b + 1;
    } else {
        var xdays = yl[c];
        var xm = c + 1;
        var xb = b;
    }

    if (ldays == 28) {
        if ((lb % 4 == 0 && lb % 100 != 0) || (lb % 100 == 0 && lb % 400 == 0)) {
            ldays = 29;
        }
    }

    if (xdays == 28) {
        if ((xb % 4 == 0 && xb % 100 != 0) || (xb % 100 == 0 && xb % 400 == 0)) {
            xdays = 29;
        }
    }
    var dd;
    if (yl[c - 1] == 28) {
        if ((b % 4 == 0 && b % 100 != 0) || (b % 100 == 0 && b % 400 == 0)) {
            dd = 29;
        } else {
            dd = 28;
        }
    } else {
        dd = yl[c - 1];
    }

    var num = 1;

    for (var i = a; i > 0; i--) {
        var bday = ldays - i + 1;
        var ly = LunarDate.GetLunarDayDetail(lb, lm, bday);
        var jq = getjq(lb, lm, bday);
        if (jq) {
            ly = '<font color="#00b7ec">' + jq;
        }
        var jd = "";
        var hb = lb + "-" + lm + "-" + bday;
        str += ' <td data_y="' + lb + '" data_m="' + lm + '" data_d="' + bday + '" class="list not_this js_up"><i>' + bday + '</i><span>' + ly + '</span>' + jd + '</td>';
        if (num % 7 == 0) {
            str += '</tr><tr>';
        }
        num++;
    }

    for (var i = 1; i <= dd; i++) {
        var bday = ldays - i + 1;
        var ly = LunarDate.GetLunarDayDetail(b, c, i);
        var jq = getjq(b, c, i);
        if (jq) {
            ly = '<font color="#00b7ec">' + jq;
        }
        var jd = "";
        var hb = b + "-" + c + "-" + i;
        if (new Date().getDate() == i && b == new Date().getFullYear() && c == (new Date().getMonth() + 1)) {
            str += ' <td data_y="' + b + '" data_m="' + c + '" data_d="' + i + '" class="list today"><i>' + i + '</i><span>' + ly + '</span>' + jd + '</td>';
        } else {
            str += ' <td data_y="' + b + '" data_m="' + c + '" data_d="' + i + '" class="list"><i>' + i + '</i><span>' + ly + '</span>' + jd + '</td>';
        }

        if (num % 7 == 0) {
            str += '</tr><tr>';
        }
        num++;
    }

     var last = 42 - a - dd;
     if(last<=6){

        for (var i = 1; i <= last; i++) {
            var ly = LunarDate.GetLunarDayDetail(xb, xm, i);
            var jq = getjq(xb, xm, i);
            if (jq) {
                ly = '<font color="#00b7ec">' + jq;
            }
            var jd = "";
            var hb = xb + "-" + xm + "-" + i;
            str += ' <td data_y="' + xb + '" data_m="' + xm + '" data_d="' + i + '" class="list not_this js_down"><i>' + i + '</i><span>' + ly + '</span>' + jd + '</td>';
            if (num % 7 == 0) {
                str += '</tr><tr>';
            }
            num++;
        }
    }
    if(str.substring(str.length-4,str.length)=="<tr>"){
        str = str.substring(0,str.length-4);
    }
    document.getElementById(e).innerHTML = str;
    bind_click(e);
}

function bind_click(a) {
    // console.log(typeof(a));
    $("#" + a).find("td").unbind("click");//取消click事件

    $("#" + a).find("td").each(function() {

        if ($(this).hasClass('not_this')) {
            $(this).click(function() {
                console.log($(this));
                jump($(this).attr('data_y'), $(this).attr('data_m'), $(this).attr('data_d'));
            });
        } else {
            $(this).click(function() {
                set_top($(this));
                var y = $(this).attr("data_y");
                var m = parseInt($(this).attr("data_m"));
                if (m < 10) m = "0" + m;
                var d = parseInt($(this).attr("data_d"));
                if(d< 10) d = "0" + d;
                // 跳转到具体日期详情
                setTimeout(function () { 
                   window.location.href="/daily/dailyEdit?date="+y+"-"+m+"-"+d;
                }, 600);
            });
        }
    });
}

/*
 * @public
 * @function  设置top的内容
 * @param[a]  点击选中的dom对象
 */
function set_top(a) {
   
    var weeks = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
    if (!a) {//如果不是a
        var data = new Date();
        var weekk = weeks[data.getDay() - 1];
        var yue = LunarDate.GetLunarDay(data.getFullYear(), data.getMonth(), data.getDate());
        var shu = data.getDate();
        document.getElementById("top_shu").innerHTML = shu;
        sev_d = parseInt(shu);
        document.getElementById("top_week").innerHTML = weekk;
        document.getElementById("top_yue").innerHTML = yue;
        // 跳转到具体日期详情
       
    } else {
        var y = a.attr("data_y");
        var m = parseInt(a.attr("data_m")) - 1;
        if (m < 0) m = 11;
        var d = parseInt(a.attr("data_d"));
        var weekk = weeks[new Date(y, m, d).getDay()];
        var ms = parseInt(a.attr("data_m"));
        var yue = LunarDate.GetLunarDay(y, ms, d);
        document.getElementById("top_shu").innerHTML = d;
        sev_d = parseInt(d);
        document.getElementById("top_week").innerHTML = weekk;
        document.getElementById("top_yue").innerHTML = yue;
        $(".xuanzhong").removeClass('xuanzhong');
        a.addClass("xuanzhong");
       
    }
}

/*
 * 农历对象
 */
var LunarDate = {
    madd: new Array(0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334),
    HsString: '甲乙丙丁戊己庚辛壬癸',
    EbString: '子丑寅卯辰巳午未申酉戌亥',
    NumString: "一二三四五六七八九十",
    MonString: "正二三四五六七八九十冬腊",
    CalendarData: new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95),
    Year: null,
    Month: null,
    Day: null,
    TheDate: null,
    /*
     * @private
     * @func  利用二进制求一个n的第几位是几
     * @param   m第几位
     * @param   n 二进制数
     */
    GetBit: function(m, n) {
        return (m >> n) & 1;
    },

    e2c: function() {

        this.TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
        var total, m, n, k;
        var isEnd = false;
        var tmp = this.TheDate.getFullYear();
        total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + this.madd[this.TheDate.getMonth()] + this.TheDate.getDate() - 38;
        if (this.TheDate.getYear() % 4 == 0 && this.TheDate.getMonth() > 1) {
            total++;
        }
        for (m = 0;; m++) {
            k = (this.CalendarData[m] < 0xfff) ? 11 : 12;
            for (n = k; n >= 0; n--) {
                if (total <= 29 + this.GetBit(this.CalendarData[m], n)) {
                    isEnd = true;
                    break;
                }
                total = total - 29 - this.GetBit(this.CalendarData[m], n);
            }
            if (isEnd)
                break;
        }
        this.Year = 1921 + m;
        this.Month = k - n + 1;
        this.Day = total;
        if (k == 12) {
            if (this.Month == Math.floor(this.CalendarData[m] / 0x10000) + 1) {
                this.Month = 1 - this.Month;
            }
            if (this.Month > Math.floor(this.CalendarData[m] / 0x10000) + 1) {
                this.Month--;
            }
        }
    },
    GetcDateString: function(tip) {
        if (tip == 1) {
            var ts = (this.Day < 11) ? "初" : ((this.Day < 20) ? "十" : ((this.Day < 30) ? "廿" : "三十"));
            if (this.Day % 10 != 0 || this.Day == 10) {
                ts += this.NumString.charAt((this.Day - 1) % 10);
            }
            return ts;
        }
        var tmp = "";
        if (this.Month < 1) {
            tmp += this.MonString.charAt(-this.Month - 1);
        } else {
            tmp += this.MonString.charAt(this.Month - 1);
        }
        tmp += "月";
        tmp += (this.Day < 11) ? "初" : ((this.Day < 20) ? "十" : ((this.Day < 30) ? "廿" : "三十"));
        if (this.Day % 10 != 0 || this.Day == 10) {
            tmp += this.NumString.charAt((this.Day - 1) % 10);
        }
        return tmp;
    },
    GetLunarDay: function(solarYear, solarMonth, solarDay) {
        if (solarYear < 1921 || solarYear > 2020) {
            return "";
        } else {
            solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
            this.e2c(solarYear, solarMonth, solarDay);
            return this.GetcDateString(0);
        }
    },
    GetLunarDayDetail: function(solarYear, solarMonth, solarDay) {
        if (solarYear < 1921 || solarYear > 2020) {
            return "";
        } else {
            solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
            this.e2c(solarYear, solarMonth, solarDay);
            return this.GetcDateString(1);
        }
    }
};

/*
 * @public 
 * @method getjq 获取农历节气
 * @param {yyyy} 年份
 * @param {mm} mm 月份
 * @param {dd} dd 日期
 */
function getjq(yyyy, mm, dd) {

    if(yyyy==2016&&mm==12&&dd==7){
        return "大雪";
    }

    if(yyyy==2016&&mm==12&&dd==6){
        return "";
    }

    mm = mm - 1;

    var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
    var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
    
    var tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    // console.log(tmp1.getFullYear()+"-"+tmp1.getMonth()+"-"+tmp1.getDay());
    var tmp2 = tmp1.getUTCDate();

    var solarTerms = "";

    if (tmp2 == dd)
        solarTerms = solarTerm[mm * 2 + 1];

    tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    
    tmp2 = tmp1.getUTCDate();

    if (tmp2 == dd)
        solarTerms = solarTerm[mm * 2];

    return solarTerms;
}

// $(function() {

//     // $(".prorup").on("click", function() {
//     //     $(".prorup").hide();
//     //     $(".jie").hide();
//     //     $(".layer").hide();
//     // });

//     // $(".jqclass").click(function() {
//     //     var riziss = $(this).attr('data');
//     //     var srt = riziss.split("-");
//     //     $(".prorup").hide();
//     //     $(".layer").hide();
//     //     jump(srt[0], srt[1], srt[2]);
//     //     $(".jie").hide();
//     // });

// });

/*
 * 点击日期打开日期选择模态框
 */
$('.date').on('click', function() {

    $('.tc').show();//模态框
    $('.tc-innner').show();//模态内容
   
    tc();

});

var e = 1;
/*
 * 弹框事件
 */
function tc() {
    var b, c, d;
    var myDate = new Date();

    if (e == 0) {
        b = myDate.getFullYear() - 1900;
        c = myDate.getMonth();
        d = myDate.getDate()-1;
       
    } else {
        b = sev_y - 1900;
        c = sev_m - 1;
        d = sev_d - 1;
    }
    e = 1;
    var mySwiper = new Swiper('.swiper-container2', {//滑动年份
        direction: 'vertical',
        initialSlide: b,
        slidesPerView: 'auto',
        roundLengths: true,
        centeredSlides: true,

        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        freeMode: true,
        freeModeMomentumRatio: 1,
        freeModeSticky: true,
        onTouchMove: function(swiper) {//开始滑动绑定
            var b1 = $('.year').children('.swiper-slide-active').html();
            $('.i-year').html(b1);
        },
        onSlideChangeEnd: function(swiper) {//滑动结束绑定
            var b1 = $('.year').children('.swiper-slide-active').html();
            $('.i-year').html(b1);
        },


    });
    var mySwiper = new Swiper('.swiper-container3', {//滑动月份
        direction: 'vertical',
        initialSlide: c,
        slidesPerView: 'auto',
        roundLengths: true,
        centeredSlides: true,

        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        freeMode: true,
        freeModeMomentumRatio: 1,
        freeModeSticky: true,
        onTouchMove: function(swiper) {
            var b1 = $('.month').children('.swiper-slide-active').html();
            $('.i-month').html(b1);
        },
        onSlideChangeEnd: function(swiper) {
            var b1 = $('.month').children('.swiper-slide-active').html();
            $('.i-month').html(b1);
        },


    });
    var mySwiper = new Swiper('.swiper-container4', {//滑动日期
        direction: 'vertical',
        initialSlide: d,
        slidesPerView: 'auto',
        roundLengths: true,
        centeredSlides: true,

        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        freeMode: true,
        freeModeMomentumRatio: 1,
        freeModeSticky: true,
        onTouchMove: function(swiper) {
            var b1 = $('.date').children('.swiper-slide-active').html();
            $('.i-date').html(b1);
        },
        onSlideChangeEnd: function(swiper) {
            var b1 = $('.date').children('.swiper-slide-active').html();
            $('.i-date').html(b1);
        },

    });
};

/*
*   点击回到今天
 */
$('.tc-bot-left').click(function() {
    e = 0;
    tc();
});

/*
 * 点击确认
 */
$('.tc-bot-right').click(function() {
    $('.tc').hide();
    $('.tc-innner').hide();
    var yyyy = parseInt($('.year').children('.swiper-slide-active').html());
    var mm = parseInt($('.month').children('.swiper-slide-active').html());
    var dd = parseInt($('.date').children('.swiper-slide-active').html());
    if (mm != sev_m || yyyy != sev_y || dd != sev_d) {
        jump(yyyy, mm, dd);  
    };
});

/*
 * 弹框点击外部
 */
$(".tc").on("click",function(){
    $(".tc-innner").hide();
    $(this).hide();

}); 