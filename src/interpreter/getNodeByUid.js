export function getNodeByUid (program, uid) {
    const found = program.nodes.find(item=>{
        return item.uid === uid;
    });
    if (found) {
        return found;
    }
    throw new Error(`node with uid ${uid} not found `);

}