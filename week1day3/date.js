class Timer{
    
    print(){
        let date = new Date();
        let hrs = date.getHours();
        if(hrs < 10){
            hrs = "0"+hrs;
        }
        let minutes = date.getMinutes();
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        let secs = date.getSeconds();
        if(secs < 10){
            secs = "0"+secs;
        }
        console.log(hrs+":"+minutes+":"+secs);
    }
    startTimer(){

    }

    stopTimer(){

    }
}

let dateTime = new Timer();
dateTime.print();
