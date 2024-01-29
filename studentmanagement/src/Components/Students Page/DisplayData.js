import React, { useEffect, useState } from 'react';
import { app } from '../Firebase'; 
import { getDatabase, ref, onValue } from 'firebase/database';
import './DisplayData.css';

const database = getDatabase(app);

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const databaseRef = ref(database, 'student-info');
    onValue(databaseRef, (snapshot) => {
      const dataFromFirebase = snapshot.val();
      if (dataFromFirebase) {
        const dataArray = Object.values(dataFromFirebase);
        setData(dataArray);
      }
    });
  }, []);

  return (
    <div className="display-data-container">
      <table className="data-table">
        <thead>
          <tr className="table-header">
            <th className="table-cell">First Name</th>
            <th className="table-cell">Family Name</th>
            <th className="table-cell">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">{item.firstName}</td>
              <td className="table-cell">{item.familyName}</td>
              <td className="table-cell">{item.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;



