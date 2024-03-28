## [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

Easy

Given an integer array <code>nums</code> sorted in __non-decreasing order__, remove the duplicates __in-place__ such that each unique element 
appears only __once__. The __relative order__ of the elements should be kept the __same__. Then return the number of unique 
elements in <code>nums</code>.

Consider the number of unique elements of <code>nums</code> to be <code>k</code>, to get accepted, you need to do the following things:

- Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the unique elements
in the order they were present in <code>nums</code> initially. The remaining elements of <code>nums</code> are not important as
well as the size of <code>nums</code>.
- Return <code>k</code>.

#### Custom Judge:

> The judge will test your solution with the following code:  

```java
int[] nums = [...]; // Input array  
int[] expectedNums = [...]; // The expected answer with correct length  
 
int k = removeDuplicates(nums); // Calls your implementation  
 
assert k == expectedNums.length;  
for (int i = 0; i < k; i++) {  
      assert nums[i] == expectedNums[i];  
}
```

If all assertions pass, then your solution will be __accepted__.
 
#### Example 1:

> __Input:__ nums = [1,1,2]  
> __Output:__ 2, nums = [1,2,_]  
> __Explanation:__ Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.  
> It does not matter what you leave beyond the returned k (hence they are underscores).

#### Example 2:

> __Input:__ nums = [0,0,1,1,1,2,2,3,3,4]  
> __Output:__ 5, nums = [0,1,2,3,4,_,_,_,_,_]  
> __Explanation:__ Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.  
> It does not matter what you leave beyond the returned k (hence they are underscores).

#### Constraints:

- <code>1 <= nums.length <= 3 * 10<sup>4</sup></code>
- <code>-100 <= nums[i] <= 100</code>
- <code>nums</code> is sorted in __non-decreasing__ order.
