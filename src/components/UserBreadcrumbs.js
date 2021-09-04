import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function UserBreadcrumb() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="textPrimary" href="/" onClick={handleClick}>
        <h2>Name</h2>
      </Link>
      <Link
        color="textPrimary"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        <h2 style={{ marginLeft: "204px" }}>User Name</h2>
      </Link>
      <Link
        color="textPrimary"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        <h2 style={{ marginLeft: "150px" }}>Email</h2>
      </Link>
    </Breadcrumbs>
  );
}
