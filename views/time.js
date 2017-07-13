function timer(time){
    var str;
    var nowtime;

    nowtime = new Date();
    var t = parseInt((nowtime.getTime() - time.getTime())/1000);

    var days = parseInt(t / 3600 / 24);
    var hours = parseInt((t / 3600) % 24);
    var minutes = parseInt((t / 60) % 60);
    var seconds = parseInt(t % 60);
    if(days > 0){
      str = days + "天前";
    }else if(days <= 0 && hours > 0) {
      str = hours + "小时前";
    }else if(hours <= 0 && minutes >= 1){
      str = minutes + "分钟前";
    }else if(minutes < 1 && seconds > 0){
      str = "刚刚";
    }
    return str;
    console.log(str);
}
