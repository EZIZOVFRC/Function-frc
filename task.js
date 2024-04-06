// ===============KREDIT MESELESI

// let qaliq = 0;
// let mebleg = 0;

// function kredit(pul, ay) {
//     mebleg = pul / ay;
//     let aya = parseInt(mebleg.toString().split('.')[0]);
//     qaliq = pul % ay
//     let ayliq = [];

//     for (let i = 0; i < ay; i++) {
//         ayliq.push(aya);
//     }
//     ayliq[ayliq.length - 1] += qaliq;
//     return ayliq;
// }

// alert(kredit(1000, 3));





// ==================TEKRAR ELEMENT MESELSI

// let arr = [1, 2, 3, 4, 4, 2];
// let tekrar = {};

// function dublicate(array) {
//     let tekrarEdenler = [];

//     for (let i = 0; i < array.length; i++) {
//         if (tekrar[array[i]] === undefined) {
//             tekrar[array[i]] = 1;
//         } else {
//             if (tekrar[array[i]] === 1) {
//                 tekrarEdenler.push(array[i]);
//             }
//             tekrar[array[i]]++;
//         }
//     }

//     return tekrarEdenler;
// }

// alert(dublicate(arr));






// =================F TO C>>>>>>>>>>

// function celsi(faran) {
//     return (faran-32)*(5/9)
// }
// alert(celsi(172))