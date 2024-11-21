import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-950 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-stone-50 bg-gray-800 rounded-lg">กรอกข้อมูล</h1>
        <form onSubmit={submitForm}>
          <div className="mb-4 space-x-2">
            <label className=" text-sky-300 ">เงินเดือนทั้งปี</label>
            <input className="border border-gray-300 rounded-lg w-64 p-2 " type="number" name="salary" id="salary"onChange={handleChange}/>
          </div>    
          <div className="mb-4 space-x-2">
            <label className=" text-sky-300">โบนัสเงินเดือน</label>
            <input className="border rounded-lg w-64 p-2" type="number" name="bonus" id="bonus"onChange={handleChange}/>
          </div>    
          <div className="mb-4 space-x-2">
            <label className=" text-sky-300">หักค่าประกันสังคม</label>
            <input className="border border-gray-300 rounded-lg w-60 p-2" type="number" name="social" id="social"onChange={handleChange}/>
          </div>
          <div className="mb-4 space-x-2">
            <label className=" text-sky-300">จำนวนบุตร</label>
            <input className="border border-gray-300 rounded-lg w-72 p-2"type="number" name="child" id="child"onChange={handleChange}/>
          </div>
          <div className="mb-4 space-x-2">
            <label className=" text-sky-300">ค่าเบี้ยประกันชีวิต</label>
            <input className="border border-gray-300 rounded-lg w-60 p-2" type="number"name="insurance"id="insurance"onChange={handleChange}/>
          </div>
          <button className="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
