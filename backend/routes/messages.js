import express from 'express';

const router = express.Router();

import Message from '../models/message.model.js';

router.route(`/`)
    .get((req, res) =>
    {
        Message.find({}, ['text', 'timestamp', 'username'], {
            sort: {
                timestamp: -1
            }
        }, (err, messages) =>
        {
            res.send({ allMessages: messages })
        });
    })
    .post((req, res) =>
    {
        const message = new Message(req.body);
        message.save(err =>
        {
            if (err)
            {
                res.send(err);

            } else
            {
                res.send({ message: `Message posted successfully`, message })
            }

        })

    }
    )
export { router as messages };