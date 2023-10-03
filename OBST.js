<script>
//Javascript Implementation

// A recursive function to calculate
// cost of optimal binary search tree
function optCost(freq, i, j)
{
	// Base cases
	if (j < i) // no elements in this subarray
		return 0;
	if (j == i) // one element in this subarray
		return freq[i];
	
	// Get sum of freq[i], freq[i+1], ... freq[j]
	var fsum = sum(freq, i, j);
	
	// Initialize minimum value
	var min = Number. MAX_SAFE_INTEGER;
	
	// One by one consider all elements
	// as root and recursively find cost
	// of the BST, compare the cost with
	// min and update min if needed
	for (var r = i; r <= j; ++r)
	{
		var cost = optCost(freq, i, r - 1) +
				optCost(freq, r + 1, j);
		if (cost < min)
			min = cost;
	}
	
	// Return minimum value
	return min + fsum;
}

// The main function that calculates
// minimum cost of a Binary Search Tree.
// It mainly uses optCost() to find
// the optimal cost.
function optimalSearchTree(keys, freq, n)
{
	// Here array keys[] is assumed to be
	// sorted in increasing order. If keys[]
	// is not sorted, then add code to sort
	// keys, and rearrange freq[] accordingly.
	return optCost(freq, 0, n - 1);
}

// A utility function to get sum of
// array elements freq[i] to freq[j]
function sum(freq, i, j)
{
	var s = 0;
	for (var k = i; k <= j; k++)
	s += freq[k];
	return s;
}


// Driver Code

var keys = [10, 12, 20];
var freq = [34, 8, 50];
var n = keys.length;
document.write("Cost of Optimal BST is " +
	optimalSearchTree(keys, freq, n));
	
// This code is contributed by shubhamsingh10
</script>
