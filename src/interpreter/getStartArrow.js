import {getArrowByFromUid} from './getArrowByFromUid.js';

export function getStartArrow (program) {
    // const start = program.arrows[0];
    // if (start.from.uid === 'start') {
    //     return start;
    // }
    // console.log('start is not first arrow, bad formatting but following through');

    return getArrowByFromUid(program, 'start')
}