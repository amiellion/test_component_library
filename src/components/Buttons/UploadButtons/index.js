import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import style from './style.module.scss';

const UploadLogo = () => {
  
  const [logo, setLogo] = useState(null);
  const [logoData, setLogoData] = useState(null);
  const onChangeLogo = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setLogo(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setLogoData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
      <>
        <input id="actual-btn" type="file" onChange={onChangeLogo} hidden/>
        <label className={style["image"]} for="actual-btn" >
          {
            logoData === null
              ? <div className={style["text"]}><UploadOutlined/> Upload image (.jpg, .png, .tiff)</div>
              : <img className={style["profile_image"]} alt='upload' src={logoData} />
          }
        </label>
      </>
  );
}

const UploadChart = () => {
  
  const [chart, setChart] = useState(null);
  const [chartData, setChartData] = useState(null);
  const onChangeChart = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setChart(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setChartData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
      <>
        <input id="actual-btn" type="file" onChange={onChangeChart} hidden/>
        <label className={style["image"]} for="actual-btn" >
          {
            chartData === null
              ? <div className={style["text"]}><UploadOutlined/> Upload image (.jpg, .png, .tiff)</div>
              : <img className={style["profile_image"]} alt='upload' src={chartData} />
          }
        </label>
      </>
  );
}

const UploadCompliance = () => {
  
  const [compliance, setCompliance] = useState(null);
  const [complianceData, setComplianceData] = useState(null);
  const onChangeCompliance = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setCompliance(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setComplianceData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
      <>
        <input id="actual-btn" type="file" onChange={onChangeCompliance} hidden/>
        <label className={style["image"]} for="actual-btn" >
          {
            complianceData === null
              ? <div className={style["text"]}><UploadOutlined/> Upload image (.jpg, .png, .tiff)</div>
              : <img className={style["profile_image"]} alt='upload' src={complianceData} />
          }
        </label>
      </>
  );
}

export { UploadLogo, UploadChart, UploadCompliance };
