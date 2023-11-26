import React from "react";
import styles from "./ManufactureTemplate.module.scss";
import Input from "../../../../UI/Input/Input";
import { api } from "../../../../Api";
import { useState } from "react";
import Button from "../../../../UI/button/Button";
import { useEffect } from "react";

function ManufactureTemplate({ title, endpoint, submitEndpoint }) {
  const [calculations, setCalculations] = useState();
  const [tons, setTons] = useState(0);
  const [errorMsgs, setErrorMsgs] = useState([]);
  const handleInputChange = (e) => {
    const tons = +e.target.value;
    setTons(tons);
  };

  useEffect(() => {
    let timeoutId;
    const getCalculations = () => {
      api.get(`${endpoint}?tons=${tons}`).then((res) => {
        setCalculations(res.data);
        setErrorMsgs([]);
      });
    };

    const delayedGetCalculations = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(getCalculations, 500);
    };

    if (!tons || tons === 0) {
      setCalculations(undefined);
      return;
    }

    delayedGetCalculations();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [tons]);

  const handleSubmit = () => {
    api.post(submitEndpoint, { tons }).then((res) => {
      console.log(res);
      if (res.data.status === 0) {
        setErrorMsgs(res.data.errors);
      }
    });
  };

  return (
    <div className={styles.container}>
      <p id={styles.title}>{title}</p>
      <div className={styles.input_wrapper}>
        <Input type="number" placeholder="ტონა" onChange={handleInputChange} />
      </div>
      {calculations && (
        <React.Fragment>
          <div className={styles.calculation_container}>
            <div className={styles.calculation_wrapper}>
              <p>
                {`ღორღი 10x20 - ${(
                  calculations?.groud10x20 * 1000 || 0
                ).toFixed(2)}kg (${(calculations?.groud10x20 || 0).toFixed(
                  2
                )}ტ)`}
              </p>
            </div>
            <div className={styles.calculation_wrapper}>
              <p>
                {`ღორღი 5x10 - ${(calculations?.groud5x10 * 1000 || 0).toFixed(
                  2
                )}kg (${(calculations?.groud5x10 || 0).toFixed(2)}ტ)`}
              </p>
            </div>
            <div className={styles.calculation_wrapper}>
              <p>
                {`ქვიშა 0.5 - ${(calculations?.sand * 1000 || 0).toFixed(
                  2
                )}kg (${(calculations?.sand || 0).toFixed(2)}ტ)`}
              </p>
            </div>
            <div className={styles.calculation_wrapper}>
              <p>
                {`ფილერი - ${(calculations?.filler * 1000 || 0).toFixed(
                  2
                )}kg (${(calculations?.filler || 0).toFixed(2)}ტ)`}
              </p>
            </div>
            <div className={styles.calculation_wrapper}>
              <p>{`ბიტუმი - ${(calculations?.bitumen * 1000 || 0).toFixed(
                2
              )}kg (${(calculations?.bitumen || 0).toFixed(2)}ტ)`}</p>
            </div>
          </div>
          {errorMsgs.length !== 0 &&
            errorMsgs.map((msg) => {
              return <p id={styles.errorMsg}>*{msg}</p>;
            })}
          <div className={styles.button_wrapper}>
            <Button title="გადამუშავება" onClick={handleSubmit} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ManufactureTemplate;
