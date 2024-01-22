// ----------Thêm số vào mảng---------
var arrInput = [];
function themSo() {
    var soN = document.getElementById('soN').value * 1;
    // console.log(soN);
    arrInput.push(soN);
    document.getElementById('themSo').innerHTML = `Thêm số: ${arrInput} `;
}
document.getElementById('btnThemSo').onclick = themSo;
// ---------Câu 1: Tính tổng các số dương-------------
/*
Input: Mảng số nguyên từ người dùng nhập
Xử lý: Dùng vòng lặp duyệt mảng. Nếu arrInput[i] > 0 thì tổng += arrInput[i]
In kết quả ra giao diện.
*/
function tongSoDuong() {
    var tong = 0;
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i] > 0) {
            tong += arrInput[i];
        }
    }
    // console.log(tong);
    document.getElementById('ketQua1').innerHTML = `Tổng của các số dương là: ${tong} `;
}
document.getElementById('btnKetQua1').onclick = tongSoDuong;
// -----------Câu 2: Đếm có bao nhiêu số dương-----------
/*
Input: Mảng số nguyên từ người dùng nhập
Xử lý: Dùng vòng lặp duyệt mảng. Nếu arrInput[i] > 0 thì count + 1
In kết quả ra giao diện.
*/
function countNum() {
    var count = 0;
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i] > 0) {
            count++;
        }
    }
    // console.log(count);
    document.getElementById('ketQua2').innerHTML = `Số dương có trong mảng là: ${count} `;
}
document.getElementById('btnKetQua2').onclick = countNum;
// ------------Câu 3: Tìm số nhỏ nhất trong mảng-----------
/*
Input: Mảng số nguyên từ người dùng nhập
Xử lý: Dùng vòng lặp duyệt mảng. Nếu min > arrInput[i] ==> min là arrInput[i]
In kết quả ra giao diện.
*/
function numMin() {
    var min = arrInput[0];
    for (var index = 0; index < arrInput.length; index++) {
        if (min > arrInput[index]) {
            min = arrInput[index];
        }
    }
    // console.log(min);
    document.getElementById('ketQua3').innerHTML = `Số nhỏ nhất trong mảng là: ${min} `;
}
document.getElementById('btnKetQua3').onclick = numMin;
// ------------Câu 4: Tìm số dương nhỏ nhất trong mảng-------------
/*
Input: Mảng số nguyên từ người dùng nhập
Xử lý: Dùng vòng lặp duyệt mảng. Nếu arrInput[i] > 0 && (min === 0 || arrInput[i] < min) ==> min dương
In kết quả ra giao diện.
*/
function numMinDuong() {
    var min = 0;
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i] > 0 && (min === 0 || arrInput[i] < min)) {
            min = arrInput[i];
        }
    }

    if (min !== 0) {
        document.getElementById('ketQua4').innerHTML = `Số dương nhỏ nhất trong mảng là: ${min} `;
    } else {
        document.getElementById('ketQua4').innerHTML = `Không có số dương trong mảng`;
    }
}

document.getElementById('btnKetQua4').onclick = numMinDuong;

// --------Câu 5: Tìm số chẵn cuỗi cùng trong mảng---------------
/*
Input: Mảng số nguyên từ người dùng nhập
Xử lý: Duyệt ngươc mảng. Nếu chia hết cho 2 --> break. Nếu num != -1 ==> kết quả là num. Còn không thì sẽ là -1
In kết quả ra giao diện.
*/
function findLastNum() {
    var num = -1;
    for (var index = arrInput.length - 1; index > 0; index--) {
        if (arrInput[index] % 2 == 0) {
            num = arrInput[index];
            break;
        }
    }
    if (num != -1) {
        console.log(num);
        document.getElementById('ketQua5').innerHTML = `Số chẵn cuối cùng trong mảng là: ${num} `;
    } else {
        document.getElementById('ketQua5').innerHTML = `Không có số chẵn trong mảng`;
    }
}
document.getElementById('btnKetQua5').onclick = findLastNum;
// ----------Câu 6: Đổi vị trí--------------
/*
1. Input: mảng, vị trí 1, vị trí 2
2. Xử lý:
Tạo biến hứng
biến hứng = phần tử 1
index1 = index2
index 2 = index hứng
3. In mảng mới đã đổi vị trí
*/
function changeNum() {
    // document.getElementById('themSo').innerHTML = arrInput;
    var viTri1 = document.getElementById('viTri1').value * 1;
    var viTri2 = document.getElementById('viTri2').value * 1;
    var temp = 0;
    temp = arrInput[viTri1];
    arrInput[viTri1] = arrInput[viTri2];
    arrInput[viTri2] = temp;
    document.getElementById('ketQua6').innerHTML = arrInput;
    console.log(arrInput);
}
document.getElementById('btnKetQua6').onclick = changeNum;
// --------Câu 7: Sắp xếp mảng theo thứ tự tăng dần-------------
function sapXep() {
    var sapXep = arrInput.slice().sort(function (a, b) {
        return a - b;
    });
    document.getElementById('ketQua7').innerHTML = sapXep;
}
document.getElementById('btnKetQua7').onclick = sapXep;
console.log(arrInput);
// ---------Câu 8: Tìm số nguyên tố-----------------------
// Hàm kiểm tra xem một số có phải là số nguyên tố hay không
function isPrime(number) {
    // Nếu nhỏ hơn hoặc bằng 1 ==> không phải là số nguyên tố
    if (number <= 1) {
        return false;
    }
    // Lặp qua các số từ 2 đến căn bậc 2 của số. Nếu chia hết cho số bất kì ==> không phải là số nguyên tố
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    // Không chia hết cho số nào trả về true
    return true;
}
// Hàm tìm số nguyên tố đầu tiên trong mảng
function findFirstPrimeNumber() {
    for (var index = 0; index < arrInput.length; index++) {
        if (isPrime(arrInput[index])) {
            document.getElementById('btnKetQua8').innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${arrInput[index]}`;
            return;
        }
    }
    document.getElementById('btnKetQua8').innerHTML = 'Không có số nguyên tố trong mảng';
}
document.getElementById('btnKetQua8').onclick = findFirstPrimeNumber;

// --------Câu 9: Tìm trong mảng có bao nhiêu số nguyên------------
var arrNum9 = [];
function themSo9() {
    var num9 = document.getElementById('num9').value * 1;
    arrNum9.push(num9);
    document.getElementById('themSo9').innerHTML = `Mảng số được thêm là: ${arrNum9}`;
}
/*
Input: Nhận số thực từ người dùng.
Xử lý: Dùng hàm Number.isInteger() để kiểm tra số nguyên. Nếu đúng biến result tăng lên 1.
In kết quả ra giao diện
*/
document.getElementById('btnThemSo9').onclick = themSo9;
function findNum() {
    var result = 0;
    for (let index = 0; index < arrNum9.length; index++) {
        if (Number.isInteger(arrNum9[index]) == true) {
            result++;
        }
    }
    document.getElementById('ketQua9').innerHTML = `Số nguyên có trong mảng là: ${result}`;
}
document.getElementById('btnKetQua9').onclick = findNum;

// -----------Câu 10 So sánh số lượng số dương và số âm--------
/*
1. Input: mảng số nguyên từ người dùng nhập
2. Xử lý: 
 - Tạo biến soDuong và soAm
 - Dùng vòng lặp kiểm tra số dương và số âm. Nếu là số dương thì soDuong tăng thêm 1, tương tự số âm
 - So sánh soDuong và soAm
 3. In kết quả
*/
function compareNum() {
    var soDuong = 0;
    for (var index = 0; index < arrInput.length; index++) {
        if (arrInput[index] > 0) {
            soDuong++;
        }
    }
    var soAm = 0;
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i] < 0) {
            soAm++;
        }
    }
    var result = '';
    if (soDuong > soAm) {
        result = `tổng số lượng số dương là ${soDuong} > tổng số lượng số âm là ${soAm}`;
    } else if (soDuong < soAm) {
        result = `tổng số lượng số dương là ${soDuong} < tổng số lượng số âm là ${soAm}`;
    }
    document.getElementById('ketQua10').innerHTML = result;
}
document.getElementById('btnKetQua10').onclick = compareNum;
