// แสดงตัวเลข 1-10 โดยแต่ละตัวเลขทำการหน่วงเวลาไว้ทุกๆ 1 วินาที โดยใช้ฟังก์ชัน setTimeout

const timeoutPromise = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x)
        }, 1000)
    })
}

async function counter() {
    const counter = [1,2,3,4,5,6,7,8,9,10];

    for (let no in counter) {
        const result = await timeoutPromise(counter[no]);
        console.log(result);
    }
}

counter();