import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';
import Message from '../models/message.model.js';


chai.use(chaiHttp);

describe(`Testing requests on the database`, () =>
{
    beforeEach(async () =>
    {
        await Message.deleteMany()
            .then(() => console.log(`Database cleared`))
            .catch(error =>
            {
                console.log(`Error clearing message collection`);
                console.log(error);
                throw new Error();
            });
    });
    describe(`GET - '/messages'`, () =>
    {
        it(`should receive a response with status code 200`, async () =>
        {
            const message = {
                'text': 'test',
                'timestamp': '2015-01-22T14:56:59.301+00:00',
                'username': 'test2'
            };
            const addRes = await chai.request(server)
                .post(`/messages`)
                .set('Content-Type', 'application/json')
                .send(message)
            const res = await chai.request(server)
                .get(`/messages`)
                .send();

            const messages = res.body.allMessages;
            expect(messages.length).to.equal(1);
            expect(messages[0].text).to.equal(message.text);
        });
    });
});