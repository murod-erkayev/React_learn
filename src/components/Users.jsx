import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setPageLimit] = useState(3); // boshlanishiga 3 qilaylik

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`)
      .then((res) => {
        setUsers(res.data);
      });
  }, [page, limit]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const nextPageL = () => setPageLimit((prev) => prev + 1);
  const prevPageL = () => setPageLimit((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container">
      <div className="row">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Website</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.address.street}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-3">
          <button onClick={prevPage} className="btn btn-primary">
            Previous
          </button>
          <span className="mx-2">Page: {page}</span>
          <button
            onClick={nextPage}
            className="btn btn-primary"
            disabled={users.length < limit}
          >
            Next
          </button>
        </div>

        <div className="mt-3">
          <button
            onClick={prevPageL}
            className="btn btn-secondary"
            disabled={limit === 1}
          >
            - Limit
          </button>
          <span className="mx-2">Limit: {limit}</span>
          <button
            onClick={nextPageL}
            className="btn btn-secondary"
            disabled={limit >= 10}
          >
            + Limit
          </button>
        </div>
      </div>
    </div>
  );
};
