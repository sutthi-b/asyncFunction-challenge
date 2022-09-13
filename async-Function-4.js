// แสดงตัวเลข 1-10 โดยแต่ละตัวเลขทำการหน่วงเวลาไว้ทุกๆ 1 วินาที โดยใช้ฟังก์ชัน setInterval

const counter = () => {
    let counter = 1;
    const testInteval = setInterval(()=> {
        console.log(counter);
        counter++;
        if(counter > 10) {
            clearInterval(testInteval);
        }
    }, 1000)
}

counter();