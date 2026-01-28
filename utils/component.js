import React from 'react';

// 1. Header Component
export const Header = ({ title, subtitle }) => (
  <div className="mb-8 border-b pb-4">
    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    <p className="text-gray-500">{subtitle}</p>
  </div>
);

// 2. Stat Card Component
export const StatCard = ({ label, value, color = "blue" }) => (
  <div className={`p-6 rounded-xl border-l-4 border-${color}-500 bg-white shadow-sm`}>
    <p className="text-sm text-gray-500 uppercase font-bold">{label}</p>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

// 3. Simple Table Component
export const DataTable = ({ headers, data }) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow">
    <table className="w-full text-left">
      <thead className="bg-gray-50">
        <tr>
          {headers.map(h => <th key={h} className="p-4 font-medium border-b">{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 border-b">
            {Object.values(row).map((val, j) => <td key={j} className="p-4">{val}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);