export function getArrowByFromUid (program, uid) {
    
    const found = program.arrows.find(item=>{
        return item.from.uid === uid;
    });
    if (found) {
        return found;
    }
    throw new Error(`arrow from uid ${uid} not found `);
}