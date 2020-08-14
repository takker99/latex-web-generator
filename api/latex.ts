import {NowRequest, NowResponse} from '@vercel/node';
import {mjAPI} from 'mathjax-node';

export default (request: NowRequest, response: NowResponse): void => {
    // a simple TeX-input example
    mjAPI.config({
        MathJax: {
            // traditional MathJax configuration
        }
    });
    mjAPI.start();

    const yourMath = 'E = mc^2';

    mjAPI.typeset({
        math: yourMath,
        format: 'TeX', // or "inline-TeX", "MathML"
        svg:true
    }, function (data:any) {
        if (!data.errors) {
            response.status(200).send(data.svg);
        }
        // will produce:
        // <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        //   <mi>E</mi>
        //   <mo>=</mo>
        //   <mi>m</mi>
        //   <msup>
        //     <mi>c</mi>
        //     <mn>2</mn>
        //   </msup>
        // </math>
    });
};
