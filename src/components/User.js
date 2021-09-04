import { Breadcrumbs, Link } from "@material-ui/core";
import React from "react";
import ContentLoader from "react-content-loader";

const User = ({ name, username, email, isLoading = false }) => {
  return (
    <div>
      {isLoading ? (
        <div className="user-grid">
          <h3>{name}</h3>
          <h3>{username}</h3>
          <h3>{email}</h3>
        </div>
      ) : (
        <ContentLoader
          speed={2}
          width={800}
          height={50}
          viewBox="0 0 800 50"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="121" height="17" />
          <rect x="227" y="0" rx="0" ry="0" width="121" height="17" />
          <rect x="432" y="0" rx="0" ry="0" width="121" height="17" />
        </ContentLoader>
      )}
    </div>
  );
};

export default User;
