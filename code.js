function convertToAdjList(adjMatrix) {
    //start with empty list
    let adjList = [];

    //iterate through each row
    for (let i = 0; i < adjMatrix.length; i++) {
        adjList[i] = [];
        //iterate though each column in that row
        for (let j = 0; j < adjMatrix[i].length; j++) {
            //if there is a edge we push that to the list
            if (adjMatrix[i][j] === 1) {
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}
