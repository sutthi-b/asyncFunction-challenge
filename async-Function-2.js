// สร้างฟังก์ชันที่มี การรับค่าเป็นฟังก์ชัน โดยตรวจสอบว่า ถ้าค่าที่รับมาเป็นฟังก์ชัน ให้รันฟังก์ชันนั้นหลังจากผ่านไป 3 วินาทีและแสดงข้อความว่า "Callback is executed after 2 seconds"  หากค่าที่รับมาไม่ใช่ฟังก์ชัน ให้รีเทิร์นข้อความไปว่า "Argument is not function"

function checkFunction(input) {
    return new Promise((resolve, reject) => {
        if (typeof input === "function") {
            input();
            setTimeout(() => {
                resolve('Callback is executed after 2 seconds')
            }, 3000)
        } else {
            reject("Argument is not function");
        }
    });
};

function testInput1() {
    console.log('run testInput1 = function');
};

const testInput2 = 'testInput2 = string';

checkFunction(testInput1)
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
});

