import React, { FunctionComponent, useEffect, useState } from "react";
import { fetchUsers } from "../helpers/fetch";
import { IUser } from "../interfaces";

interface UsersProps {}
 
const Users: FunctionComponent<UsersProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<IUser[]>([]);

  const fetch = async (): Promise<void> => {
    const result = await fetchUsers(page);
    setUsers(result)
  };

  useEffect(() => { fetch() }, [page])

  return (
    <div className="usersContainer">

      <form onSubmit={ (e) => { e.preventDefault() } }>
        <input type="text" />

        <button>search</button>
      </form>

      <section className="usersList">
        {
          !users.length ? 'no users yet...' : (
            users.map(({ picture: { large }, name: { first, last }, email, login: { username }, dob: { age } }) => (
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
        <button onClick={ () => setPage((prev) => prev === 1 ? 10 : prev - 1) }>-</button>

        <div>
          {
            users.map((_, index) => <span className={ `${index + 1 === page ? 'bg-blue-600 rounded-full text-white' : ''}` }>{ index + 1 }</span>)
          }
        </div>

        <button onClick={ () => setPage((prev) => prev === 10 ? 1 : prev + 1) }>+</button>
      </footer>

    </div>
  );
}
 
export default Users;