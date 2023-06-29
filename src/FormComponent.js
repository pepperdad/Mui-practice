import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: 데이터를 DB에 저장하는 로직을 추가합니다.

    // 데이터를 보여주는 페이지로 이동합니다.
    navigate(`/data/${formData}`);
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data:
        <input type="text" value={formData} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
