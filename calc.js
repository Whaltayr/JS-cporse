let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
const btnSoma = document.getElementById("btnsom");
const btnMult = document.getElementById("btnmul");
const btnSubt = document.getElementById("btnsub");
const btnDivi = document.getElementById("btndiv");

const p_result = document.getElementById("result");

const op = [
  () => {
    const val = [
      document.getElementById("num1").value,
      document.getElementById("num2").value,
    ];
    p_result.value = Number(val[0]) + Number(val[1]);
  },
  () => {
    const val = [
      document.getElementById("num1").value,
      document.getElementById("num1").value,
    ];
    p_result.value = Number(val[0]) * Number(val[1]);
  },
  ()=>{
        const val = [
      document.getElementById("num1").value,
      document.getElementById("num1").value,
    ];
    p_result.value = Number(val[0])-Number(val[1])
  },
    ()=>{
        const val = [
      document.getElementById("num1").value,
      document.getElementById("num1").value,
    ];
    p_result.value = Number(val[0])/Number(val[1])
  }
];
btnSoma.addEventListener("click", op[0]);
btnMult.addEventListener("click", op[1]);
btnSubt.addEventListener("click", op[2]);
btnDivi.addEventListener("click", op[3]);
