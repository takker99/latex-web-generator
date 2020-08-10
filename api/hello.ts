import {NowRequest, NowResponse} from '@vercel/node';

export default (request: NowRequest, response: NowResponse): void => {
    const {name = 'World'} = request.query;
    response.status(200).send(`Hello ${name}!`);
};
