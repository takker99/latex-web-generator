import {NowRequest, NowResponse} from '@vercel/node';
import mjAPI from 'mathjax-node';

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
        format: 'TeX', // "inline-TeX", "MathML"
        mml:true,
        svg: true //  svg:true,
    }, function (data) {
        if (!data.errors) {
            const output = '<span aria-hidden=\'true\'>' + data.html + '</span><span class=\'hidden\'> ' + data.mml + '</span>';
            // where class=hidden might include
            // position:absolute!important, top: 0, left: 0;
            // clip: rect(1px 1px 1px 1px) : rect(1px, 1px, 1px, 1px));
            // padding: 1px 0 0 0!important;
            // border: 0!important;
            // height: 1px!important;
            // width: 1px!important;
            // overflow: hidden!important;
            // display:block!important;
            // -webkit-touch-callout: none;
            // -webkit-user-select: none;
            // -khtml-user-select: none;
            // -moz-user-select: none;
            // -ms-user-select: none;
            // user-select: none;
            response.setHeader('content-type', 'image/svg+xml');
            response.status(200).send(output);
        }
    });
};
