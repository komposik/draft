import {getStartArrow} from './getStartArrow.js';
import {getNodeByUid} from './getNodeByUid.js';
import { executeNode } from './executeNode.js';

function executeProgram (program) {
    const context = {
        data: {},
    }

    // schema.data.forEach((data)=>{
    // })

    const startArrow = getStartArrow(program);

    const firstNode = getNodeByUid(startArrow.to);

    executeNode(program, context, firstNode);

    
}