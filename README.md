# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The run time complexity for the given code is $O(n^2)$. This is because the outer loop that goes each row takes $O(n)$ and then the inner loop goes through each column of that row which also take $O(n)$. In total we get $O(n^2)$. The runtime actually depends on the number of vertices because we first start by going through each row representing the vertex. And then we check if there is a edge for that vertex or not. Because we start by checking the vertex, it depends on it rather than the edges for that vertex.









## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
