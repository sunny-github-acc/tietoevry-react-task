import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export default function Input({ placeholder, setInput }) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHelperText("Searching...");
    setError(false);

    // Destination to gps
    const params = {
      auth: "113516871718232291270x24806",
      locate: value,
      json: "1",
    };
    axios
      .get("https://geocode.xyz", { params })
      .then((response) => {
        if (response.data.error) {
          setError(true);
          setHelperText(`We could not find "${value}"`);
        } else {
          setInput(value);
          setError(false);
          setHelperText("");
        }
      })
      .catch(() => {
        setError(true);
        setHelperText("There seems to be a connection error");
      });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        id="standard-primary"
        label={placeholder}
        color="primary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText={helperText}
        error={error}
        onBlur={handleSubmit}
      />
    </form>
  );
}
