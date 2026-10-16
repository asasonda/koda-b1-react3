import { useEffect, useState } from "react";

/**
 * @param {nama} string untuk mencari nama user
 * @param {array} data url dari https://jsonplaceholder.typicode.com/users
 *
 * @returns {data} data array dari user url (name dan email)
 */

export default function User({ nama, array }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    async function fecthData() {
      try {
        const response = await fetch(array);
        const api = await response.json();
        setData(api);
        setFilter(nama);
      } catch (err) {
        console.error(err);
      }
    }
    fecthData();
  });

  return (
    <div>
      {!filter
        ? data.map((item) => {
            return (
              <div className="border border-gray-300">
                <h2>{item.name}</h2>
                <h3>{item.email}</h3>
              </div>
            );
          })
        : data
            .filter((tampilkan) => {
              tampilkan.name.toLowerCase().include(filter.toLowerCase());
            })
            .map((items) => {
              return (
                <div className="border border-gray-300">
                  <h2>{items.name}</h2>
                  <h3>{items.email}</h3>
                </div>
              );
            })}
    </div>
  );
}
