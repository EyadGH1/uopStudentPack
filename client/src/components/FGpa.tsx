import React, { useState } from 'react';

interface SemesterData {
  semester: number;
  gpa: number;
}

const GPAEstimatorWithRegression: React.FC = () => {
  const [pastData, setPastData] = useState<SemesterData[]>([
    { semester: 1, gpa: 3.2 },
    { semester: 2, gpa: 3.5 },
    { semester: 3, gpa: 3.7 },
  ]);
  const [futureHours, setFutureHours] = useState<number>(30);
  const [completedHours, setCompletedHours] = useState<number>(90);

  const handleUpdate = (index: number, field: keyof SemesterData, value: number) => {
    const newData = [...pastData];
    newData[index][field] = value;
    setPastData(newData);
  };

  const addSemester = () => {
    setPastData([...pastData, { semester: pastData.length + 1, gpa: 0 }]);
  };

  const linearRegression = (): number => {
    const n = pastData.length;
    const sumX = pastData.reduce((acc, d) => acc + d.semester, 0);
    const sumY = pastData.reduce((acc, d) => acc + d.gpa, 0);
    const sumXY = pastData.reduce((acc, d) => acc + d.semester * d.gpa, 0);
    const sumX2 = pastData.reduce((acc, d) => acc + d.semester * d.semester, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const nextSemester = pastData[pastData.length - 1].semester + 1;
    return parseFloat((slope * nextSemester + intercept).toFixed(2));
  };

  const currentGPA = (): number => {
    const totalPoints = pastData.reduce((acc, d) => acc + d.gpa, 0);
    return parseFloat((totalPoints / pastData.length).toFixed(2));
  };

  const expectedCumulativeGPA = (): number => {
    const current = currentGPA();
    const predicted = linearRegression();
    const totalPoints = current * completedHours + predicted * futureHours;
    const totalHours = completedHours + futureHours;
    return totalHours === 0 ? 0 : parseFloat((totalPoints / totalHours).toFixed(2));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4">
      <h2 className="text-2xl font-bold text-center">📈 GPA Estimator (with Regression)</h2>

      <div className="space-y-2">
        <p className="font-semibold">Past Semester GPA Data:</p>
        {pastData.map((data, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="number"
              value={data.semester}
              min={1}
              className="w-24 p-1 border rounded"
              onChange={(e) => handleUpdate(index, 'semester', parseInt(e.target.value))}
            />
            <input
              type="number"
              value={data.gpa}
              step="0.01"
              max={4}
              className="w-24 p-1 border rounded"
              onChange={(e) => handleUpdate(index, 'gpa', parseFloat(e.target.value))}
            />
          </div>
        ))}
        <button onClick={addSemester} className="text-blue-600 hover:underline">+ Add Semester</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-medium block mb-1">Completed Credit Hours</label>
          <input
            type="number"
            value={completedHours}
            onChange={(e) => setCompletedHours(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="font-medium block mb-1">Future Credit Hours</label>
          <input
            type="number"
            value={futureHours}
            onChange={(e) => setFutureHours(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="text-center mt-4 space-y-2">
        <p className="text-lg">📊 Predicted Next GPA (Regression): <strong>{linearRegression()}</strong></p>
        <p className="text-lg">🎓 Expected Cumulative GPA: <strong className="text-blue-600">{expectedCumulativeGPA()}</strong></p>
      </div>
    </div>
  );
};

export default ;
