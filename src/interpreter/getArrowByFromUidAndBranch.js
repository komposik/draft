export function getArrowByFromUidAndBranch (program, uid, branch) {
    
    const found = program.arrows.find(item=>{
        return item.from.uid === uid && item.from.branch === branch;
    });
    if (found) {
        return found;
    }
    throw new Error(`arrow from uid ${uid} and branch ${branch} not found `);
}