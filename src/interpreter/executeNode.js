import { getArrowByFromUidAndBranch } from "./getArrowByFromUidAndBranch.js";
import { getNodeByUid } from "./getNodeByUid";

export function executeNode (program, context, node) {
    let arrowToFollow;
    if (node.type === 'switch') {
        const branch = executeNodeSwitch(program, context, node);
        arrowToFollow = getArrowByFromUidAndBranch(program, node.uid, branch );
    }
    else {
        executeNonSwitchNode(program, context, node);
        arrowToFollow = getArrowByFromUid(program, node.uid );
    }
    
    if (arrowToFollow.to !== 'end') {
        const nextNode = getNodeByUid(program, arrowToFollow.to);
        executeNode(program, context, nextNode); 
    }
}