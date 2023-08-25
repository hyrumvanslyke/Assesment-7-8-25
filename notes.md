Results for the extraLargeArray
insert 1.3385496 s
append 3.6321 ms

Results for the tinyArray
insert 95.2 μs
append 4.3432 ms

Results for the smallArray
insert 104 μs
append 4.619 ms

Results for the mediumArray
insert 232.9 μs
append 3.7825 ms

Results for the largeArray
insert 11.1044 ms
append 3.5662 ms

The append function (using the push() method) has a better scale for worst case scenarios than the insert function. As the input gets bigger, the time to perform the append function grows linearly, and the time to perform the insert function grows exponentially. 

The append function has a time complexity of 0(n)
The insert function has a time complexity of 0(n^2)

Another way to explain this is, both functions have a for loop that iterates through every element in the array. Now, for the append function, the push() method has a base time complexity of 0(1) and therefore the overall timne complexity of the function  is 0(n).  As of the insert function, the unshift() method has a time complexity of 0(n), which combined with the complexity of the for loop, the overall is  0(n^2).