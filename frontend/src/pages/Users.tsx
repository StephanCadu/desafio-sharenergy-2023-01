import React, { FunctionComponent, useEffect, useState } from "react";
import { fetchUsers } from "../helpers/fetch";
import { IUser } from "../interfaces";

interface UsersProps {}
 
const Users: FunctionComponent<UsersProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<IUser[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [search, setSearch] = useState<boolean>(false);

  const fetch = async (): Promise<void> => {
    const result = await fetchUsers(page);
    setUsers(result)
  };

  useEffect(() => { fetch() }, [page])

  useEffect(() => { if(filter === '') setSearch(false) }, [filter])

  return (
    <div className="usersContainer">

      <form
        onSubmit={ (e) => {
          e.preventDefault();
          setSearch(true);
        } }
        className="usersFilter"
      >
        <h1 className=" text-xl">Filter by name, user or email:</h1>

        <div className=" w-full h-auto flex items-center justify-center">
          <input
            type="text"
            value={ filter }
            onChange={ (e) => setFilter(e.target.value) }
            className="usersFilterInput"
            placeholder="Ex: Clarke"
          />

          <button className="usersFilterButton">search</button>
        </div>
      </form>

      <section className="usersList">
        {
          !users.length ? 'no users yet...' : (
            users
              .filter(({ name: { first, last }, email, login: { username } }) => !search || !filter
                || `${first} ${last} ${email} ${username}`.includes(filter))
              .map(({ picture: { large }, name: { first, last }, email, login: { username }, dob: { age } }) => (
              <div className="userCard" key={ email }>
                <img
                  src={ large }
                  alt=""
                  className="userImg"
                />

                <section className="userInfo">
                  <h1 className=" font-bold text-3xl text-center">{ `${first} ${last}` }</h1>

                  <p>{ `${age} years` }</p>

                  <p className="font-bold">{ username }</p>

                  <span className="text-sm">{ email }</span>
                </section>
              </div>
            ))
          ) 
        }
      </section>

      <footer className="usersController">
        <button onClick={ () => setPage((prev) => prev === 1 ? 10 : prev - 1) } className=" text-2xl font-bold mr-3">-</button>

        <div className="flex items-center justify-center gap-1">
          {
            users.map((_, index) => (
              <span
                className={ `flex items-center justify-center h-7 w-7 ${index + 1 === page ? 'bg-blue-600 rounded-full text-white' : ''}` }
                onClick={ () => setPage(index + 1) }
              >
                { index + 1 }
              </span>
            ))
          }
        </div>

        <button onClick={ () => setPage((prev) => prev === 10 ? 1 : prev + 1) } className=" text-2xl font-bold ml-3">+</button>
      </footer>

    </div>
  );
}
 
export default Users;