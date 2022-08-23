import express from 'express';

const router = express.Router();

import User from '../models/user.model.js';

router.route(`/`)
    .post((req, res) =>
    {
        const { email, password } = req.body;

        User.findOne({ email }, (err, user) =>
        {
            if (user && password === user.password)
            {
                res.send({ message: `Login successful`, user });
            }
            else
            {
                res.send({ message: `Details not found` });
            }
        });
    });

export { router as login };
