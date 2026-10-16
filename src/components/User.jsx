import { useEffect, useState } from "react";

/**
 * @param {nama} string untuk mencari nama user
 * @param {array} data url dari https://jsonplaceholder.typicode.com/users
 *
 * @returns {data} data array dari user url (name dan email)
 */

export default function User({ nama, array }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fecthData() {
      try {
        const response = await fetch(array);
        const api = await response.json();
        setData(api);
      } catch (err) {
        console.error(err);
      }
    }
    fecthData();
  }, [array]);

  return (
    <div className="px-2 p-2">
      {data.map((difilters) => {
        if (difilters.name.toLowerCase().includes(nama.toLowerCase())) {
          return (
            <div
              key={difilters.id}
              className="border border-gray-300 max-w-2xl mx-auto"
            >
              <h2>{difilters.name}</h2>
              <h3>{difilters.email}</h3>
            </div>
          );
        }
      })}
    </div>
  );
}
