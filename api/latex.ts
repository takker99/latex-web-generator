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
<svg x="0px" y="0px" width="400px" height="60px" style="background-color:#ddd">
  <a xlink:href="http://www.yahoo.co.jp">
    <polygon id="logomark-polyline" fill-rule="evenodd" clip-rule="evenodd"
      fill="#99f" points="200 10, 220 30, 200 50, 180 30"/>
  </a>
</svg>
                              `);
};
