import React from "react";
import { useLocation } from "react-router-dom"

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salary = formData.salary;
  let salaryOfYear = salary * 12 + parseInt(formData.bonus); 
  let expenses = salaryOfYear * 0.5 <= 100000 ? salaryOfYear * 0.5:100000;
  let child = parseInt(formData.child) * 30000 <=60000 ? parseInt(formData.child) * 0.5:60000; 
  let social = parseInt(formData.social);
  let insurance = parseInt(formData.insurance);
  let Deduction = 60000 + child + social + insurance;
  let income = salaryOfYear - Deduction - expenses;

  let tax = 0;
  if (income <= 100000 ) tax = 0
  else if (income <=300000) tax = 0.05
  else if (income <=1000000) tax = 0.10
  else tax = 0.15
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-950 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="block mb-2 text-center font-extrabold text-slate-50 bg-gray-800 rounded-lg">Result</h1>
      <p>
        <strong className="block mb-2 text-sky-200">เงินได้ทั้งปี: {salaryOfYear} บาท</strong>
      </p>
      <p>
        <strong className="block mb-2 text-sky-200">ค่าใช้จ่าย: {expenses} บาท</strong>
      </p>
      <p>
        <strong className="block mb-2 text-sky-200">ค่าลดหย่อน: {Deduction} บาท</strong>
      </p>
      <p>
        <strong className="block mb-2 text-sky-200">เงินได้พึ่งประเมินสุทธิ: {income} บาท</strong>
      </p>
      <p>
        <strong className="block mb-2 text-sky-200">ภาษี {tax*100} %</strong>
      </p>
      <p>
        <strong className="block mb-2 text-sky-200">ภาษีที่ต้องชำระ {income*tax} บาท</strong>
      </p>
      <footer className="block mb-2 bg-gray-800 rounded-lg text-center font-semibold text-slate-50">@by phuwadet</footer>
      </div>
    </div>
  );
};

export default Results;
