import express from 'express';

const router = express.Router();

import User from '../models/user.model.js';

router.route(`/`)
    .post((req, res) =>
    {
        const { email } = req.body;

        User.findOne({ email }, (err, user) =>
        {

            if (user)
            {
                res.send({ message: `User already exists` });
            }
            else
            {
                const user = new User(req.body);

                user.save(err =>
                {
                    if (err)
                    {
                        res.send(err);
                    }
                    else
                    {
                        res.send({ message: `Registration successful` });
                    }
                });
            }
        });
    });

export { router as register };