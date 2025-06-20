import React, { useState } from "react";

const Players = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    position: "",
    club: "",
  });
  const [players, setPlayers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    if (
      form.name.trim() &&
      form.number.trim() &&
      form.position.trim() &&
      form.club.trim()
    ) {
      setPlayers([...players, form]);
      setForm({ name: "", number: "", position: "", club: "" });
    } else {
      alert("Iltimos, barcha maydonlarni to‘ldiring");
    }
  };

  return (
    <header className="asosiy">
      <div className="card">
        <div className="card-header">
          <h1>Football player</h1>
          <div className="card-body">
            <form>
              <input
                type="text"
                name="name"
                className="form-control my-1"
                placeholder="Name..."
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="number"
                className="form-control my-1"
                placeholder="Player number..."
                value={form.number}
                onChange={handleChange}
              />
              <input
                type="text"
                name="position"
                className="form-control my-1"
                placeholder="Position..."
                value={form.position}
                onChange={handleChange}
              />
              <input
                type="text"
                name="club"
                className="form-control my-1"
                placeholder="Club..."
                value={form.club}
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="card-footer">
            <button className="btn btn-success" onClick={submit}>
              create
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <table className="table table-bordered table-hover text-center">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Player number</th>
              <th>Position</th>
              <th>Club</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.number}</td>
                <td>{player.position}</td>
                <td>{player.club}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </header>
  );
};

export default Players;
