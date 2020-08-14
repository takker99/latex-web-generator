import {NowRequest, NowResponse} from '@vercel/node';
/* import {mjAPI} from 'mathjax-node'; */

export default (request: NowRequest, response: NowResponse): void => {
    // a simple TeX-input example
    /* mjAPI.config({ */
    /*     MathJax: { */
    /*         // traditional MathJax configuration */
    /*     } */
    /* }); */
    /* mjAPI.start(); */

    /* const yourMath = 'E = mc^2'; */

    /* mjAPI.typeset({ */
    /*     math: yourMath, */
    /*     format: 'TeX', // or "inline-TeX", "MathML" */
    /*     svg:true */
    /* }, function (data:any) { */
    /*     if (!data.errors) { */
    /*         response.setHeader('content-type', 'image/svg+xml'); */
    /*         response.status(200).send(data.svg); */
    /*     } else { */
    /*         response.status(200).send('failed'); */
    /*     } */
    /*     // will produce: */
    /*     // <math xmlns="http://www.w3.org/1998/Math/MathML" display="block"> */
    /*     //   <mi>E</mi> */
    /*     //   <mo>=</mo> */
    /*     //   <mi>m</mi> */
    /*     //   <msup> */
    /*     //     <mi>c</mi> */
    /*     //     <mn>2</mn> */
    /*     //   </msup> */
    /*     // </math> */
    /* }); */
    response.setHeader('content-type', 'image/svg+xml');
    response.status(200).send(`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="400" height="100" viewBox="0 0 400 100">
    <circle cx="50" cy="50" r="40" fill="none" stroke="black" stroke-width="2"></circle>
    <ellipse cx="200" cy="50" rx="80" ry="40" fill="red" stroke="black" stroke-width="2"></ellipse>
  </svg>
                              `);
};
