import React, { useEffect, useState } from "react";
import axios from "axios";
import UserBreadcrumb from "../components/UserBreadcrumbs";
import User from "../components/User";

const UserList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const getUsers = async () => {
    try {
      const data = await axios("https://jsonplaceholder.typicode.com/users/");
      setData(data.data);
      setIsloading(true);
    } catch (error) {
      alert("Не удалось получить юзеров");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="content">
      <UserBreadcrumb />
      {data
        ? data.map((item, index) => (
            <User
              key={index}
              name={item.name}
              username={item.username}
              email={item.email}
              isLoading={isLoading}
            />
          ))
        : null}
    </div>
  );
};

export default UserList;
