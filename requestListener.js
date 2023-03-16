const express = require("express");
const app = express();
app.use(cookieParser());

import { user } from './user.js'

export const requestListener = (req, res) => {
  if (req.method === 'POST') {
    res.writeHead(200);
    const { login, password } = req.body;
    if (login === user.username && password === user.password) {
      res.cookie("path=/", {
        user: login,
        password: password,
        max_age: 172800,
        httpOnly: true,
      });
    }

  } else
    res.writeHead(405);
  res.end('HTTP method not allowed');
};
