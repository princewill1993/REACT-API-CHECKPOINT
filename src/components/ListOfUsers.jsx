import axios from "axios";
import React, { useEffect, useState } from "react";

function ListOfUsers() {
  const [usersList, setUsersList] = useState([]);
  // function to get users list
  const getUsersList = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // Update userList with the list of users gotten from the API
      setUsersList(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  //   console.log(usersList);

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="text-left border shadow-md rounded-md w-fit p-10 ">
      <h2 className="text-center text-6xl font-extrabold mb-20">
        LIST OF ALL USERS
      </h2>
      {usersList.map((user) => {
        return (
          <ul key={user.id} className="text-red-600  ">
            <li className="flex flex-col gap-7">
              <h1>Name: {user.name} </h1>
              <h2> Email: {user.email}</h2>
              <h2> Username: {user.username}</h2>
              <p className="text-black">
                Address: {user.address.street}, {user.address.suite},
                {user.address.city}, {user.address.zipcode}
              </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ListOfUsers;
