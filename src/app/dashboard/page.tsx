"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
  }, []);

//   if (!data) {
//     throw new Promise((resolve) => setTimeout(resolve, 2000));
//   }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data}</p>
      {/* Add more content as needed */}
    </div>
  );
}
