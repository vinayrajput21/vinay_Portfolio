export const topicOrder = [
  "learnTheBasics",
  "sorting",
  "arrays",
  "binarySearch",
  "strings",
  "linkedList",
  "recursion",
  "bitManipulation",
  "stackAndQueues",
  "slidingWindowTwoPointer",
  "heaps",
  "greedyAlgorithms",
  "binaryTrees",
  "binarySearchTrees",
  "graphs",
  "dynamicProgramming",
  "tries",
];

export const topicMeta = {
  learnTheBasics: { label: "Pattern", number: "01" },
  sorting: { label: "Sorting Techniques", number: "02" },
  arrays: { label: "Arrays", number: "03" },
  binarySearch: { label: "Binary Search", number: "04" },
  strings: { label: "Strings", number: "05" },
  linkedList: { label: "LinkedList", number: "06" },
  recursion: { label: "Recursion", number: "07" },
  bitManipulation: { label: "Bit Manipulation", number: "08" },
  stackAndQueues: { label: "Stack and Queues", number: "09" },
  slidingWindowTwoPointer: {
    label: "Sliding Window & Two Pointer Combined Problems",
    number: "10",
  },
  heaps: { label: "Heaps", number: "11" },
  greedyAlgorithms: { label: "Greedy Algorithms", number: "12" },
  binaryTrees: { label: "Binary Trees", number: "13" },
  binarySearchTrees: { label: "Binary Search Trees", number: "14" },
  graphs: { label: "Graphs", number: "15" },
  dynamicProgramming: { label: "Dynamic Programming", number: "16" },
  tries: { label: "Tries", number: "17" },
};

export const dsaData = {
  learnTheBasics: [
    {
      title: "Pyramid Pattern",
      question:
        "Given a number n, print a centered pyramid pattern of stars with n rows, where the i-th row (0-indexed) contains (2*i + 1) stars preceded by spaces.",
      example: `    *
   ***
  *****
 *******
*********`,
      approach:
        "Iterate row index i from 0 to n - 1. For each row, print (n - i - 1) leading spaces to center the stars, then run an inner loop to print (2 * i + 1) stars, followed by a newline.",
      code: `class Main {
    public static void main(String[] args) {
        int n=5;
       for(int i=0;i<n;i++){
           for(int k=0;k<n-i-1;k++){
               System.out.print(" ");
           }
           for(int j=0;j<=2*i;j++){
                System.out.print("*");
           }
           System.out.println(" ");
       }
    }
}`,
      language: "java",
    },
    {
      title: "Inverted Pyramid Pattern",
      question:
        "Given a number n, print an inverted pyramid pattern of stars with n rows, where the top row has the maximum number of stars and each subsequent row decreases symmetrically.",
      example: `*********
 *******
  *****
   ***
    *`,
      approach:
        "Iterate row index i from 0 to n - 1. Print i leading spaces to indent each subsequent line, followed by an inner loop printing the decreasing odd count of stars (2 * (n - i) - 1).",
      code: `class Main {
    public static void main(String[] args) {
        int n=5;
       for(int i=0;i<n;i++){
            for(int k=0;k<i;k++){
               System.out.print(" ");
           }
           for(int j=n*2;j>2*i+1;j--){
                System.out.print("*");
           }
  
           System.out.println(" ");
       }
    }
}`,
      language: "java",
    },
    {
      title: "Diamond Pattern",
      question:
        "Given a number n, print a symmetric diamond shape made of stars consisting of an upper pyramid of (n - 1) rows and an inverted pyramid of n rows.",
      example: `    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *`,
      approach:
        "Divide the pattern into two sections. First, print an upright pyramid of n - 1 rows using leading spaces and odd star counts. Second, print an inverted pyramid of n rows with increasing leading spaces and decreasing star counts.",
      code: `class Main {
    public static void main(String[] args) {
        int n=5;
       for(int i=0;i<n-1;i++){
            for(int k=0;k<n-i-1;k++){
               System.out.print(" ");
           }
            for(int j=0;j<=2*i;j++){
                System.out.print("*");
           }
            System.out.println(" ");
       }
        for(int i=0;i<n;i++){
            for(int k=0;k<i;k++){
               System.out.print(" ");
           }
           for(int j=n*2;j>2*i+1;j--){
                System.out.print("*");
           }
  
           System.out.println(" ");
       }
    }
}`,
      language: "java",
    },
    {
      title: "Hollow Square Pattern",
      question:
        "Given a number n, print an n x n hollow square where only the border positions contain stars and all internal positions contain spaces.",
      example: `*****
*   *
*   *
*   *
*****`,
      approach:
        "Loop through rows from 0 to n - 1. For the first (i == 0) and last (i == n - 1) rows, fill all columns with stars. For intermediate rows, print a star at the boundary columns (j == 0 or j == n - 1) and spaces everywhere in between.",
      code: `class Main {
    public static void main(String[] args) {
        int n=5;
       for(int i=0;i<n;i++){
           if(i==0||i==n-1){
               for(int j=0;j<n;j++){
                   System.out.print("*");
               }
           }else{
               for(int j=0;j<n;j++){
                   if(j==0||j==n-1){
                     System.out.print("*");  
                   }else{
                     System.out.print(" ");
                   }
               }
           
           }
           System.out.println("");
       }
    }
}`,
      language: "java",
    },
    {
      title: "Floyd's Triangle Pattern",
      question:
        "Given a number n, print Floyd's Triangle with n rows, filling consecutive natural numbers sequentially in a right-angled triangle format.",
      example: `1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15`,
      approach:
        "Maintain a running counter initialized to 1. Use an outer loop for the row number and an inner loop running up to the current row index, printing and incrementing the counter at each step.",
      code: `class Main {
    public static void main(String[] args) {
        int n=5;
        int num=1;
        for(int i=0;i<=n;i++){
            for(int j=0;j<i;j++){
                System.out.print(num++ +" ");
            }
        System.out.println("");
        }
    }
}`,
      language: "java",
    },
    {
      title: "0-1 Alternating Triangle Pattern",
      question:
        "Given a number n, print a right-angled triangle where each cell alternates between 1 and 0 based on row and column index parity.",
      example: `1
0 1
1 0 1
0 1 0 1
1 0 1 0 1`,
      approach:
        "Iterate row index i from 0 to n - 1. For each row, iterate column index j from 0 to i. If the sum of indices (i + j) is even, print 1; otherwise, print 0.",
      code: `class Main {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print( (i+j) % 2 );
            }
            System.out.println("");
        }
    }
}`,
      language: "java",
    },
    {
      title: "Palindromic Number Pyramid Pattern",
      question:
        "Given a number n, print a centered pyramid where each row forms a numerical palindrome counting down to 1 and then back up to the row number.",
      example: `    1
   212
  32123
 4321234
543212345`,
      approach:
        "Iterate row i from 1 to n. Print (n - i) leading spaces, print numbers counting down from i to 1, and then print numbers counting up from 2 to i.",
      code: `class Main {
    public static void main(String[] args) {
        int n=5;
        for(int i=1;i<=n;i++){
            for(int k=1;k<=n-i;k++){
                System.out.print(" ");
            }
            for(int j=i;j>=1;j--){
                System.out.print(j);    
            }
            for(int j=2;j<=i;j++){
                System.out.print(j);
            }
        System.out.println("");
        }
    }
}`,
      language: "java",
    },
    {
      title: "Butterfly Pattern",
      question:
        "Given a number n, print a symmetric butterfly pattern of stars consisting of an expanding upper half and a contracting lower half separated by inner spacing.",
      example: `*        *
**      **
***    ***
****  ****
**********
**********
****  ****
***    ***
**      **
*        *`,
      approach:
        "Split the pattern into upper and lower sections. In the top half, print increasing stars, decreasing middle spaces, and increasing stars. In the bottom half, print decreasing stars, increasing middle spaces, and decreasing stars.",
      code: `class Main {
    public static void main(String[] args) {
        int n=5;
        for(int i=0;i<n;i++){
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            for(int j=n*2;j>2*i+2;j--){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println("");
        }
        for(int i=0;i<n;i++){
            for(int j=0;j<n-i;j++){
                System.out.print("*");
            }
            for(int j=0;j<2*i;j++){
                System.out.print(" ");
            }
            for(int j=0;j<n-i;j++){
                System.out.print("*");
            }
            System.out.println("");
        }
    }
}`,
      language: "java",
    },
  ],
  sorting: [
    {
      title: "Bubble Sort",
      question:
        "Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm. Optimize the algorithm so that it terminates early if no swaps occur in a pass.",
      example: `Input: arr = [23, 2, 5, 67, 9, 3, 8]`,
output: `Output:[2, 3, 5, 8, 9, 23, 67]`,
      approach:
        "Iterate through the array multiple times, comparing adjacent elements and swapping them if they are out of order. Maintain a boolean flag to track if any swaps occurred during the iteration; if no elements were swapped, the array is already sorted and the loop breaks early.",
      code: `import java.util.*;
class Main {
    static int [] bubbleSort(int arr[]){
        int n = arr.length;
        boolean swapped=false;
        for(int i=0;i<n;i++){
            for(int j=0;j<n-1;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    swapped=true;
                }
            }
            if(!swapped){
                break;
            }
        }
        return arr;
    }
    public static void main(String[] args) {
        int arr[]={23,2,5,67,9,3,8};
        int result[] = bubbleSort(arr);
        System.out.println(Arrays.toString(result));
    }
}`,
      language: "java",
    },
    {
      title: "Selection Sort",
      question:
        "Given an array of integers, sort the array in ascending order using the Selection Sort technique by repeatedly locating the appropriate element and placing it into position.",
      example: `Input: arr = [23, 2, 5, 67, 9, 3, 8]`,
output:`Output: [2, 3, 5, 8, 9, 23, 67]`,
      approach:
        "Iterate across the array indices. For each position, scan the remaining elements to identify the target value according to order, then swap the values into the active position.",
      code: `import java.util.*;
class Main {
    static int [] selectionSort(int arr[]){
        int n = arr.length;
       for(int i=0;i<n;i++){
           int smallest=i;
           for(int j=0;j<n;j++){
               if(arr[j]>arr[smallest]){
                 int temp = arr[smallest];
                    arr[smallest]=arr[j];
                    arr[j]=temp;
               }
           }
       }
        return arr;
    }
    public static void main(String[] args) {
        int arr[]={23,2,5,67,9,3,8};
        int result[] = selectionSort(arr);
        System.out.println(Arrays.toString(result));
    }
}`,
      language: "java",
    },
    {
      title: "Insertion Sort",
      question:
        "Given an array of integers, sort the array in ascending order using the Insertion Sort algorithm by building a sorted prefix one element at a time.",
      example: `Input: arr = [23, 2, 5, 67, 9, 3, 8]
Output: [2, 3, 5, 8, 9, 23, 67]`,
      approach:
        "Iterate from index 1 to the end of the array, picking the current element as a key. Compare the key with elements in the already sorted subarray to its left, shifting all elements greater than the key one position to the right, and then insert the key into its correct position.",
      code: `import java.util.*;
class Main {
    static int [] insertionSort(int arr[]){
        int n = arr.length;
        for(int i=1;i<n;i++){
            int key = arr[i];
            int j=i-1;
            while(j>=0&&arr[j]>key){
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=key;
        }
        return arr;
    }
    public static void main(String[] args) {
        int arr[]={23,2,5,67,9,3,8};
        int result[] = insertionSort(arr);
        System.out.println(Arrays.toString(result));
    }
}`,
      language: "java",
    },
    {
      title: "Merge Sort",
      question:
        "Given an array of integers, sort the array in ascending order using the Merge Sort divide-and-conquer algorithm.",
      example: `Input: arr = [23, 2, 5, 67, 9, 3, 8]
Output: [2, 3, 5, 8, 9, 23, 67]`,
      approach:
        "Divide the array recursively into two halves until single-element subarrays remain. Merge the halves back together by copying elements into temporary arrays, comparing elements sequentially, and placing the smaller value back into the original array.",
      code: `import java.util.*;
class Main {
    static void merge(int arr[],int l, int m, int r){
        int n1=m-l+1;
        int n2=r-m;
        int L[]=new int[n1];
        int R[]=new int[n2];

        for(int i=0;i<n1;i++){
            L[i]=arr[l+i];
        }
        for(int i=0;i<n2;i++){
            R[i]=arr[m+i+1];
        }

        int i=0,j=0;
        int k=l;
        while(i<n1&&j<n2){
             if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
        
    }
    static void mergeSort(int arr[], int l, int r){
        if(l<r){
            int m = l+(r-l)/2;
            mergeSort(arr,l,m);
            mergeSort(arr,m+1,r);
            merge(arr,l,m,r);
        }
    }
    public static void main(String[] args) {
        int arr[]={23,2,5,67,9,3,8};
        mergeSort(arr,0,arr.length-1);
        System.out.println(Arrays.toString(arr));
    }
}`,
      language: "java",
    },
    {
      title: "Quick Sort",
      question:
        "Given an array of integers, sort the array in ascending order using the Quick Sort divide-and-conquer partitioning algorithm.",
      example: `Input: arr = [23, 2, 5, 67, 9, 3, 8]
Output: 2 3 5 8 9 23 67`,
      approach:
        "Choose the last element as the pivot. Rearrange the array so that all elements smaller than the pivot are placed to its left and all greater elements to its right. Recursively apply the same partitioning strategy to the subarrays on either side of the pivot index.",
      code: `import java.util.*;

class Main {
    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        
        swap(arr, i + 1, high);  
        return i + 1;
    }
    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {
        int arr[]={23,2,5,67,9,3,8};
        int n = arr.length;
      
        quickSort(arr, 0, n - 1);
        
        for (int val : arr) {
            System.out.print(val + " ");  
        }
    }
}`,
      language: "java",
    },
  ],
  arrays: [
    {
      title: "Second largest element in an array",
      question:
        "Given an array of integers, find the second largest element in the array.",
      example: `Input: [12, 35, 1, 10, 34, 1]`,
      output: `Output: 34`,
      approach:
        "Initialize two variables, first and second, to the minimum integer value. Iterate through the array; if an element is greater than first, update second to first and first to the element. Otherwise, if the element is greater than second and not equal to first, update second to the element.",
      code: `class Main {
        public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;
        for(int i = 0; i < arr.length; i++) {
            if(arr[i] > first) {
                 second = first;
                 first = arr[i];
            } else if(arr[i] > second && arr[i] != first) {
                 second = arr[i];
                }
            }
                System.out.println(second);
            }
        }`,
      language: "java",
    },
    {
      title: "Two sum problem",
      question:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: `Nums: [2, 7, 11, 15], Target: 9`,
      output: `Output: [0, 1]`,
      approach:
        "Iterate through the array and use a HashMap to store each number and its index. For each element, calculate its complement by subtracting it from the target. If the complement exists in the map, return its index along with the current index.",
      code: `class Main {
        public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        for(int i = 0; i < nums.length; i++) {
            for(int j = i + 1; j < nums.length; j++) {
                if(nums[i] + nums[j] == target) {
                    System.out.println(i + " " + j);
                    return;
                }
            }
        }
    }
        
    OR

    import java.util.HashMap;
    import java.util.Map;

    public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }
}`,
      language: "java",
    },
    {
      title: "Check if an array is sorted and rotated",
      question:
        "Given an array of integers, check whether the array is sorted and then rotated.",
      example: `Input: [3, 4, 5, 1, 2]`,
      output: `Output: true`,
      approach:
        "Count the number of times an element is greater than the next element. Since a sorted and rotated array can have at most one such point, return true if the count is less than or equal to 1.",
      code: `class Solution {
    public boolean check(int[] nums) {
        int n = nums.length;
        int count = 0;

        for(int i = 0; i < n; i++) {
            if(nums[i] > nums[(i + 1) % n]) {
                count++;
            }
        }

        return count <= 1;
    }
}`,
      language: "java",
    },
    {
      title: "Remove duplicates and return actual elements size",
      question:
        "Given a sorted array, remove the duplicates in-place and return the number of unique elements.",
      example: `Input: [1, 1, 2, 2, 3]`,
      output: `Output: 3`,
      approach:
        "Use two pointers. Keep one pointer i at the position of the last unique element and another pointer j to scan the array. Whenever nums[j] is different from nums[i], move i forward and store nums[j] at that position. Finally, return i + 1 as the number of unique elements.",
      code: `class Solution {
    public int removeDuplicates(int[] nums) {
        int i = 0;

        for(int j = 1; j < nums.length; j++) {
            if(nums[i] != nums[j]) {
                i++;
                nums[i] = nums[j];
            }
        }

        return i + 1;
    }
}`,
      language: "java",
    },
    {
      title: "Rotate array",
      question:
        "Given an array of integers, rotate the array to the right by k positions.",
      example: `Input: [1, 2, 3, 4, 5, 6, 7], k = 3`,
      output: `Output: [5, 6, 7, 1, 2, 3, 4]`,
      approach:
        "First calculate k modulo the length of the array to handle cases where k is larger than the array size. Store the last k elements in a temporary array, shift the remaining elements to the right by k positions, and then place the stored elements at the beginning.",
      code: `class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        if(k == 0) return;

        int[] temp = new int[k];

        for(int i = n - k; i < n; i++) {
            temp[i - n + k] = nums[i];
        }

        for(int i = n - k - 1; i >= 0; i--) {
            nums[k + i] = nums[i];
        }

        for(int i = 0; i < k; i++) {
            nums[i] = temp[i];
        }
    }
}`,
      language: "java",
    },
    {
      title: "Move zeroes to the end",
      question:
        "Given an array of integers, move all zeroes to the end while maintaining the relative order of the non-zero elements.",
      example: `Input: [0, 1, 0, 3, 12]`,
      output: `Output: [1, 3, 12, 0, 0]`,
      approach:
        "Use a pointer k to track the position where the next non-zero element should be placed. Iterate through the array and copy every non-zero element to nums[k]. After all non-zero elements are placed, fill the remaining positions with zeroes.",
      code: `class Solution {
    public void moveZeroes(int[] nums) {
        int k = 0;

        for(int num : nums) {
            if(num != 0) {
                nums[k++] = num;
            }
        }

        while(k < nums.length) {
            nums[k++] = 0;
        }
    }
}`,
      language: "java",
    },
    {
      title: "Linear search",
      question:
        "Given an array of integers and a target element, find the index of the target element using linear search.",
      example: `Input: [10, 20, 30, 40, 50], target = 30`,
      output: `Output: 2`,
      approach:
        "Iterate through the array from the beginning and compare each element with the target. If an element matches the target, return its index. If the target is not found after checking all elements, return -1.",
      code: `class Solution {
    public int linearSearch(int[] nums, int target) {
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == target) {
                return i;
            }
        }

        return -1;
    }
}`,
      language: "java",
    },
    {
      title: "Maximum consecutive ones",
      question:
        "Given a binary array, find the maximum number of consecutive 1s in the array.",
      example: `Input: [1, 1, 0, 1, 1, 1]`,
      output: `Output: 3`,
      approach:
        "Maintain a count of consecutive 1s and a variable max to store the maximum count found so far. Increment count when the current element is 1. When a 0 is encountered, update max and reset count to 0. Finally, return the maximum of count and max to handle an array ending with 1s.",
      code: `class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int n = nums.length;
        int count = 0;
        int max = 0;

        for(int i = 0; i < n; i++) {
            if(nums[i] == 1) {
                count++;
            } else {
                max = Math.max(max, count);
                count = 0;
            }
        }

        return Math.max(count, max);
    }
}`,
      language: "java",
    },
   
    {
      title: "Majority Element using Hash Map",
      question:
        "Given an array of integers of size n, find the majority element. The majority element is the element that appears more than n/2 times.",
      example: `Input: [2, 2, 1, 1, 1, 2, 2]`,
      output: `Output: 2`,
      approach:
        "Use a Hash Map to store the frequency of each element in the array. Then, iterate through the map entries to find the element whose count is greater than n/2.",
      code: `class Solution {
    public int majorityElement(int[] nums) {
        int n = nums.length;
        Map<Integer, Integer> mpp = new HashMap<>();
        for(int i = 0; i < n; i++){
            mpp.put(nums[i], mpp.getOrDefault(nums[i], 0) + 1);
        }
        for(Map.Entry<Integer, Integer> entry : mpp.entrySet()){
            if(entry.getValue() > n / 2){
                return entry.getKey();
            }
        }
        return -1;
    }
}`,
      language: "java",
    },
    {
      title: "Maximum Subarray Sum (Kadane's Algorithm)",
      question:
        "Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      example: `Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]`,
      output: `Output: 6`,
      approach:
        "Use Kadane's Algorithm to iterate through the array while maintaining a running sum. If the running sum drops below zero, reset it to zero since a negative sum will only decrease the sum of any subsequent subarray. Track the maximum sum encountered throughout the iteration.",
      code: `class Solution {
    public long maxSubArray(int[] nums) {
        int n = nums.length;
        long max = Long.MIN_VALUE;
        long sum = 0;
        for(int i = 0; i < n; i++){
            sum += nums[i];
            if(sum > max){
                max = sum;
            }
            if(sum < 0){
                sum = 0;
            }
        }
        return max;
    }
}`,
      language: "java",
    },
    {
      title: "Best Time to Buy and Sell Stock",
      question:
        "You are given an array prices where prices[i] is the price of a given stock on the ith day. Maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      example: `Input: [7, 1, 5, 3, 6, 4]`,
      output: `Output: 5`,
      approach:
        "Iterate through the prices array while tracking the minimum price seen so far. At each step, calculate the profit if you sold on the current day, and update the maximum profit encountered.",
      code: `class Solution {
    public int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for(int i = 0; i < prices.length; i++){
            min = Math.min(min, prices[i]);
            max = Math.max(max, prices[i] - min);
        }
        return max;
    }
}`,
      language: "java",
    },
    {
  title: "Rearrange Array Elements by Sign",
  question: "You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers. Rearrange the array such that the modified array maintains alternate positive and negative integers while preserving the relative order of elements.",
  example: `Input: [3, 1, -2, -5, 2, -4]`,
  output: `Output: [3, -2, 1, -5, 2, -4]`,
  approach: "Use two pointers to place positive numbers at even indices and negative numbers at odd indices in a new result array, allowing the rearrangement to be done in a single pass while preserving relative order.",
  code: `class Solution {
    public int[] rearrangeArray(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];
        int posIndex = 0, negIndex = 1;
        for(int i = 0; i < n; i++) {
            if(nums[i] > 0) {
                ans[posIndex] = nums[i];
                posIndex += 2;
            } else {
                ans[negIndex] = nums[i];
                negIndex += 2;
            }
        }
        return ans;
    }
}`,
  language: "java",
},
{
  title: "Next Permutation",
  question: "Given an array of integers representing a permutation, rearrange the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange it into the lowest possible order (sorted in ascending order).",
  example: `Input: [1, 2, 5, 4, 3]`,
  output: `Output: [1, 3, 2, 4, 5]`,
  approach: "Find the pivot where the sequence stops increasing from the right. Swap it with the next greater element on its right, then reverse the suffix to obtain the next lexicographical permutation.",
  code: `class Solution {
    public void nextPermutation(int[] nums) {
        int n = nums.length;
        int pivot = -1;

        for (int i = n - 2; i >= 0; i--) {
            if (nums[i] < nums[i + 1]) {
                pivot = i;
                break;
            }
        }

        if (pivot == -1) {
            reverse(nums, 0, n - 1);
            return;
        }

        int right = n - 1;
        while (right > pivot) {
            if (nums[right] > nums[pivot]) {
                swap(nums, pivot, right);
                break;
            }
            right--;
        }

        reverse(nums, pivot + 1, n - 1);
    }

    private void reverse(int[] nums, int left, int right) {
        while (left < right) {
            swap(nums, left, right);
            left++;
            right--;
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}`,
  language: "java",
},
{
  title: "Merge Sorted Array",
  question: "You are given two sorted integer arrays nums1 and nums2, where nums1 has a size of m + n with the last n elements set to 0 and reserved for nums2. Merge nums2 into nums1 as one sorted array in non-decreasing order.",
  example: `Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`,
  output: `Output: [1,2,2,3,5,6]`,
  approach: "Start from the end of both arrays and compare the largest remaining elements. Place the larger element at the end of nums1, moving backwards until all elements from nums2 are merged.",
  code: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;
        int j = n - 1;
        int k = m + n - 1;

        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k] = nums1[i];
                i--;
            } else {
                nums1[k] = nums2[j];
                j--;
            }
            k--;
        }

        while (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
}`,
  language: "java",
},
{
  title: "Longest Consecutive Sequence",
  question: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
  example: "Input: [100, 4, 200, 1, 3, 2]",
  output: "Output: 4",
  approach: "Store all elements in a HashSet for O(1) lookups. Iterate through the set, and for each element that is the start of a sequence (i.e., num - 1 is not in the set), count the length of the consecutive sequence and track the maximum.",
  code: `import java.util.*;
class Main{
    public static void main(String[]args){
      int arr[]={100,4,200,1,3,2};
        int max=Integer.MIN_VALUE;
        Set<Integer>set=new HashSet<>();
        for(int num : arr){
            set.add(num);
        }
        for(int i=0;i<arr.length-1;i++){
            int val = arr[i];
            int count=0;
            int temp=val;
            while(set.contains(--temp)){
                count++;
                set.remove(temp);
            }
            while(set.contains(++temp)){
                count++;
                set.remove(temp);
            }
            max=Math.max(max,count+1);
        }
        System.out.println(max);
    }
}`,
  language: "java",
},
{
  title: "Set Matrix Zeroes",
  question: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.",
  example: "Input: [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]",
  output: "Output: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
  approach: "Use separate row and column tracking arrays to record which rows and columns contain a zero during the first pass, then iterate through the matrix a second time to set elements to zero where necessary.",
  code: `class Solution {
    public void setZeroes(int[][] arr) {
        int row[] = new int[arr.length];
        int col[] = new int[arr[0].length];
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                if (arr[i][j] == 0) {
                    row[i] = -1;
                    col[j] = -1;
                }
            }
        }
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                if (row[i] == -1 || col[j] == -1) {
                    arr[i][j] = 0;
                }
            }
        }
    }
}`,
  language: "java",
},
{
  title: "Check if Array Elements are Consecutive",
  question: "Given an array of integers, determine whether the array contains consecutive numbers by checking if each adjacent element differs by 1 when sorted.",
  example: "Input: [5, 2, 3, 1, 4]",
  output: "Output: true",
  approach: "Sort the array in ascending order, then iterate through the elements to check if each adjacent pair satisfies nums[i] + 1 == nums[i + 1]. If any pair fails, return false.",
  code: `class Solution {
    public boolean isConsecutive(int[] nums) {
        Arrays.sort(nums);
        boolean flag = true;
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] + 1 != nums[i + 1]) {
                flag = false;
            }
        }
        return flag;
    }
}`,
  language: "java",
},
{
  title: "Pascal's Triangle Element",
  question: "Given the row and column indices (r and c), generate Pascal's triangle up to row r and return the element at the specified position.",
  example: "Input: r = 4, c = 2",
  output: "Output: 3",
  approach: "Use dynamic programming to construct Pascal's triangle row by row, where each interior element is the sum of the two elements directly above it, then retrieve the value at the target row and column.",
  code: `class Main {
    public static void main(String[] args) {
        int r = 4;
        int c = 2;
        int pas[][] = new int[r][r];
        pas[0][0] = 1;
        for (int i = 1; i < r; i++) {
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    pas[i][j] = 1;
                } else {
                    pas[i][j] = pas[i - 1][j - 1] + pas[i - 1][j];                    
                }
            }
        }
        System.out.println(pas[r - 1][c - 1]);
    }
}`,
  language: "java",
},
{
  title: "Intersection of Two Sorted Arrays",
  question: "Given two sorted arrays nums1 and nums2, return an array containing their intersection.",
  example: "Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]",
  output: "Output: [2, 2]",
  approach: "Use a two-pointer approach to traverse both sorted arrays simultaneously, comparing elements and adding matches to a result list while advancing the pointers accordingly.",
  code: `class Solution {
    public int[] intersectionArray(int[] nums1, int[] nums2) {
        int i = 0;
        int j = 0;
        List<Integer> result = new ArrayList<>();

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                i++;
            } else if (nums1[i] > nums2[j]) {
                j++;
            } else {
                result.add(nums1[i]);
                i++;
                j++;
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}`,
  language: "java",
},
{
  title: "Design Hit Counter",
  question: "Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds). Your system should accept a timestamp parameter and return the number of hits in the past 300 seconds.",
  example: "Input: hitCounter.hit(1), hitCounter.hit(2), hitCounter.hit(3), hitCounter.getHits(4)",
  output: "Output: 3",
  approach: "Use two fixed-size arrays of length 300 (one for timestamps and one for hit counts) mapped via modulo arithmetic to record hits in O(1) time, and sum the valid hits within a 300-second window during retrieval.",
  code: `public class Main {
    public static void main(String[] args) {
        HitCounter hitCounter = new HitCounter();
        
        hitCounter.hit(1);
        hitCounter.hit(2);
        hitCounter.hit(3);
        
        System.out.println(hitCounter.getHits(4));
        
        hitCounter.hit(300);
        
        System.out.println(hitCounter.getHits(300));
        System.out.println(hitCounter.getHits(301));
    }
}

class HitCounter {
    private int[] times;
    private int[] hits;

    public HitCounter() {
        times = new int[300];
        hits = new int[300];
    }
    
    public void hit(int timestamp) {
        int idx = timestamp % 300;
        if (times[idx] != timestamp) {
            times[idx] = timestamp;
            hits[idx] = 1;
        } else {
            hits[idx]++;
        }
    }
    
    public int getHits(int timestamp) {
        int totalHits = 0;
        for (int i = 0; i < 300; i++) {
            if (timestamp - times[i] < 300) {
                totalHits += hits[i];
            }
        }
        return totalHits;
    }
}`,
  language: "java",
},


  ],

binarySearch:[
    {
  title: "Find a Peak Grid",
  question: "A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom. Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element and return its coordinates [i, j].",
  example: "Input: mat = [[1, 4], [3, 2]]",
  output: "Output: [0, 1]",
  approach: "Iterate through every cell in the 2D matrix, checking if the current element is greater than its valid top, bottom, left, and right neighbors to identify and return the coordinates of a peak element.",
  code: `class Solution {
    public int[] findPeakGrid(int[][] mat) {
     for(int i=0;i<mat.length;i++){
        for(int j=0;j<mat[0].length;j++){
            if(i==0||mat[i][j]>mat[i-1][j]){
                if(i==mat.length-1||mat[i][j]>mat[i+1][j]){
                    if(j==0||mat[i][j]>mat[i][j-1]){
                        if(j==mat[0].length-1||mat[i][j]>mat[i][j+1]){
                            return new int[]{i,j};
                        }
                    }
                }
            }
        }
     }
        return new int[]{-1,-1};
    }
}`,
  language: "java",
},

],
  strings:[
{
  title: "Count Prefix Occurrences",
  question: "Given a string s of length n, the task is to count the number of occurrences of each prefix of the string in the entire string. For a prefix defined as s[0...i] (where i ranges from 0 to n-1), determine how many times this prefix appears as a substring within s.",
  example: "Input: s = \"abab\"",
  output: "Output: [2, 2, 1, 1]",
  approach: "For each prefix of the string, find its occurrences within the string by repeatedly searching using indexOf and advancing the index, then store the total count for each prefix.",
  code: `class Solution {
    public List<Integer> countPrefixOccurrences(String s) {
        List<Integer> ans = new ArrayList<>();
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            String prefix = s.substring(0, i + 1);
            
            int count = 0;
            int index = 0;
            
            while ((index = s.indexOf(prefix, index)) != -1) {
                count++;
                index++;
            }
            
            ans.add(count);
        }
        
        return ans;
    }
}`,
  language: "java",
},
{
  title: "Capitalize First and Last Character of Each Word",
  question: "Given a string, capitalize the first and last characters of each word in the string.",
  example: "Input: s = \"hello world\"",
  output: "Output: \"HellO WorlD\"",
  approach: "Iterate through each character of the string, using adjacent spaces and string boundaries to identify the first and last characters of each word, and capitalize them using a StringBuilder.",
  code: `class Solution {
    public String capitalizeFirstLast(String s) {
        StringBuilder str = new StringBuilder();
        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            if(i==0||i==s.length()-1){
                str.append(Character.toUpperCase(ch));
            }else if(s.charAt(i-1)==' '||(i+1<s.length() && s.charAt(i+1)==' ')){
                str.append(Character.toUpperCase(ch));
            }else{
                str.append(ch);
            }
        }
        return str.toString();
    }
}`,
  language: "java",
},
{
  title: "Output Contest Matches",
  question: "During the NBA playoffs, we want to predict the sequential tournament matchups between teams based on their initial rankings. Given n teams, form pairs such that the first team plays the last team, the second plays the second to last, and so on, repeating the process recursively until only one pair remains.",
  example: "Input: n = 4",
  output: "Output: \"((1,4),(2,3))\"",
  approach: "Initialize an array of strings representing team numbers, then iteratively pair up elements from the outside in using a two-pointer approach until a single combined string match structure remains.",
  code: `class Solution {
    public String findContestMatch(int n) {
        String[] matches = new String[n];
        for (int i = 0; i < n; i++) {
            matches[i] = String.valueOf(i + 1);
        }

        while (n > 1) {
            for (int i = 0; i < n / 2; i++) {
                matches[i] = "(" + matches[i] + "," + matches[n - 1 - i] + ")";
            }
            n /= 2;
        }

        return matches[0];
    }
}`,
  language: "java",
},

  ],
  linkedList:[ 
    {
  title: "Reverse Linked List",
  question: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
  example: "Input: head = [1, 2, 3, 4]",
  output: "Output: [4, 3, 2, 1]",
  approach: "Use an iterative approach with pointers (prev, curr, next) to reverse the links of the linked list in-place, alongside a recursive alternative.",
  code: `class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Main {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    public static ListNode reverseListRecursive(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode newHead = reverseListRecursive(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    public static void printList(ListNode head) {
        ListNode curr = head;
        while (curr != null) {
            System.out.print(curr.val + (curr.next != null ? " -> " : ""));
            curr = curr.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);

        System.out.print("Original: ");
        printList(head);

        head = reverseList(head);

        System.out.print("Reversed: ");
        printList(head);
    }
}`,
  language: "java",
},
    {
  title: "Remove Duplicates from an Unsorted Linked List",
  question: "Given the head of a linked list, find all the duplicate elements and remove them such that only distinct elements remain in the linked list. Return the linked list head.",
  example: "Input: head = [1, 2, 3, 2]",
  output: "Output: [1, 3]",
  approach: "Use a HashMap to count the frequencies of each node's value in a first pass, then iterate through the linked list a second time to build a new result list containing only elements that appear exactly once.",
  code: `class Solution {
    public ListNode deleteDuplicatesUnsorted(ListNode head) {
        ListNode current = head;
        HashMap<Integer, Integer> mpp = new HashMap<>();
        while (current != null) {
            mpp.put(current.val, mpp.getOrDefault(current.val, 0) + 1);
            current = current.next;
        }
        ListNode ans = new ListNode(0);
        current = head;
        ListNode tail = ans;
        while (current != null) {
            if (mpp.get(current.val) == 1) {
                tail.next = current;
                tail = tail.next;
            }
            current = current.next;
        }
        tail.next = null;
        return ans.next;
    }
}`,
  language: "java",
}
  ],
  recursion:[
    {
  title: "Pow(x, n)",
  question: "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
  example: "Input: x = 2.0000, n = 10",
  output: "Output: 1024.000000",
  approach: "Use recursive binary exponentiation to efficiently compute x raised to the power n in logarithmic time complexity, handling negative exponents by using reciprocal values.",
  code: `import java.util.Locale;

public class Solution {
    public static double myPow(double x, int n) {
        long exp = n;
        if (exp < 0) {
            return 1.0 / power(x, -exp);
        }
        return power(x, exp);
    }

    private static double power(double x, long exp) {
        if (exp == 0) {
            return 1.0;
        }

        double half = power(x, exp / 2);

        if (exp % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }

    public static void main(String[] args) {
        double x1 = 2.0000;
        int n1 = 10;
        System.out.printf(Locale.US, "%.6f%n", myPow(x1, n1));

        double x2 = 2.0000;
        int n2 = -2;
        System.out.printf(Locale.US, "%.6f%n", myPow(x2, n2));
    }
}`,
  language: "java",
},
{
  title: "Generate Parentheses",
  question: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
  example: "Input: n = 3",
  output: "Output: [\"((()))\", \"(()())\", \"(())()\", \"()(())\", \"()()()\"]",
  approach: "Use a backtracking recursive strategy with a StringBuilder to build valid combinations of parentheses by tracking the counts of open and close brackets, ensuring open brackets never exceed n and close brackets never exceed the current count of open brackets.",
  code: `class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList<>();
        backtrack(ans, new StringBuilder(), 0, 0, n);
        return ans;
    }

    private void backtrack(List<String> ans, StringBuilder current, int open, int close, int max) {
        if (current.length() == max * 2) {
            ans.add(current.toString());
            return;
        }

        if (open < max) {
            current.append('(');
            backtrack(ans, current, open + 1, close, max);
            current.deleteCharAt(current.length() - 1);
        }

        if (close < open) {
            current.append(')');
            backtrack(ans, current, open, close + 1, max);
            current.deleteCharAt(current.length() - 1);
        }
    }
}`,
  language: "java",
},{
  title: "Subsets (Power Set)",
  question: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
  example: "Input: nums = [1, 2, 3]",
  output: "Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]",
  approach: "Use a backtracking recursive strategy to explore all inclusion and exclusion choices for each element, generating every possible subset combination systematically.",
  code: `class Solution {
    public List<List<Integer>> powerSet(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        backtrack(nums, 0, new ArrayList<>(), ans);
        return ans;
    }
    
    private void backtrack(int[] nums, int index, List<Integer> current, List<List<Integer>> ans) {
        ans.add(new ArrayList<>(current));
        
        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);
            backtrack(nums, i + 1, current, ans);
            current.remove(current.size() - 1);
        }
    }
}`,
  language: "java",
},
{
  title: "Count Good Numbers",
  question: "A digit string is good if the digits (0-indexed) at even indices are even numbers (0, 2, 4, 6, 8) and the digits at odd indices are prime numbers (2, 3, 5, 7). Given an integer n, return the total number of good digit strings of length n modulo 10^9 + 7.",
  example: "Input: n = 1",
  output: "Output: 5",
  approach: "Calculate the counts of even and odd indices for a length n string, then use modular exponentiation to compute 5^(evenCount) * 4^(oddCount) % (10^9 + 7) efficiently in logarithmic time.",
  code: `class Solution {
    private static final long MOD = 1000000007;

    public int countGoodNumbers(long n) {
        long evenCount = (n + 1) / 2;
        long oddCount = n / 2;
        long evenResult = power(5, evenCount);
        long oddResult = power(4, oddCount);
        return (int) ((evenResult * oddResult) % MOD);
    }

    private long power(long base, long exp) {
        long res = 1;
        base %= MOD;
        while (exp > 0) {
            if ((exp & 1) == 1) {
                res = (res * base) % MOD;
            }
            base = (base * base) % MOD;
            exp >>= 1;
        }
        return res;
    }
}`,
  language: "java",
}
  ],
  bitManipulation:[
    {
  title: "Check if ith Bit is Set",
  question: "Given two integers n and i, return true if the ith bit in the binary representation of n (counting from the least significant bit, 0-indexed) is set (i.e., equal to 1). Otherwise, return false.",
  example: "Input: n = 5, i = 0",
  output: "Output: true",
  approach: "Use the bitwise AND operator combined with a left-shifted mask (1 << i) to isolate and check whether the i-th bit from the least significant bit is set.",
  code: `class Solution {
    public boolean checkIthBit(int n, int i) {
        return (n & (1 << i)) != 0;
    }
}`,
  language: "java",
},
{
  title: "Bitwise OR of Adjacent Elements",
  question: "Given an array nums of length n, return an array answer of length n - 1 such that answer[i] = nums[i] | nums[i + 1] where | is the bitwise OR operation.",
  example: "Input: nums = [1, 3, 7, 15]",
  output: "Output: [3, 7, 15]",
  approach: "Iterate through the list up to the second-to-last element, compute the bitwise OR operation between each adjacent pair of elements, and add the result to a new list.",
  code: `class Solution {
    public List<Integer> orArray(List<Integer> A) {
        ArrayList<Integer> ans = new ArrayList<>();
        for (int i = 0; i < A.size() - 1; i++) {
            ans.add(A.get(i) | A.get(i + 1));
        }
        return ans;
    }
}`,
  language: "java",
},
 {
      title: "Single number using XOR",
      question:
        "Given a non-empty array of integers where every element appears twice except for one element, find the element that appears only once.",
      example: `Input: [4, 1, 2, 1, 2]`,
      output: `Output: 4`,
      approach:
        "Use the XOR operation on every element. XOR has the property that a number XOR itself is 0 and a number XOR 0 is the number itself. Therefore, all duplicate elements cancel each other out, leaving only the element that appears once.",
      code: `class Solution {
    public int singleNumber(int[] nums) {
        int result = 0;

        for(int num : nums) {
            result ^= num;
        }

        return result;
    }
}`,
      language: "java",
    },
  ],
  greedyAlgorithms:[
    {
  title: "Minimum Coins (Greedy Approach)",
  question: "Given a list of coin denominations and a target amount, find the minimum number of coins needed to make up that amount using a greedy strategy.",
  example: "Input: coins = [1, 5, 2, 10], amount = 39",
  output: "Output: 6",
  approach: "Sort the coin denominations in descending order and iteratively take the maximum possible count of each coin from the remaining amount until the target amount is reduced to zero.",
  code: `import java.util.*;

class Main {
    public static int minCoins(int[] coins, int amount) {
        int n = coins.length;
        Arrays.sort(coins);
        int res = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (amount >= coins[i]) {
                int count = amount / coins[i];
                res += count;
                amount -= count * coins[i];
            }
            if (amount == 0) {
                break;
            }
        }
        return res;
    }

    public static void main(String[] args) {
        int coins[] = {1, 5, 2, 10};
        int amount = 39;
        System.out.println(minCoins(coins, amount));
    }
}`,
  language: "java",
},
{
  title: "Meeting Rooms",
  question: "Given an array of meeting time intervals where intervals[i] = [start_i, end_i], determine if a person could attend all meetings.",
  example: "Input: intervals = [[0, 30], [5, 10], [15, 20]]",
  output: "Output: false",
  approach: "Sort the meeting intervals by their start times, then iterate through the sorted intervals to check if any meeting starts before the previous meeting ends. If an overlap is found, return false.",
  code: `class Solution {
    public boolean canAttendMeetings(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < intervals[i - 1][1]) {
                return false;
            }
        }
        
        return true;
    }
}`,
  language: "java",
}
  ],
  binaryTrees:[
    {
  title: "Binary Tree Inorder Traversal",
  question: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
  example: "Input: root = [1, 2, 3, 4, 5, null, 6]",
  output: "Output: 4 2 5 1 3 6",
  approach: "Use a recursive depth-first search approach to perform an in-order traversal of the binary tree by visiting the left subtree, the root, and then the right subtree, collecting node values into a list.",
  code: `class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) {
        data = x;
        left = right = null;
    }
}

class Main {
    public static void inOrder(ArrayList<Integer> ans, TreeNode root) {
        if (root == null) {
            return;
        }
        inOrder(ans, root.left);
        ans.add(root.data);
        inOrder(ans, root.right);
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(6);

        ArrayList<Integer> res = new ArrayList<>();
        inOrder(res, root);
        for (int num : res) {
            System.out.print(num + " ");
        }
    }
}`,
  language: "java",
},
{
  title: "Binary Tree Preorder Traversal",
  question: "Given the root of a binary tree, return the preorder traversal of its nodes' values.",
  example: "Input: root = [1, 2, 3, 4, 5, null, 6]",
  output: "Output: 1 2 4 5 3 6",
  approach: "Use a recursive depth-first search approach to perform a pre-order traversal of the binary tree by visiting the root first, followed by the left subtree and then the right subtree, collecting node values into a list.",
  code: `import java.util.*;
class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) {
        data = x;
        left = right = null;
    }
}
class Main {
    public static void preOrder(ArrayList<Integer> ans, TreeNode root) {
        if (root == null) {
            return;
        }
        ans.add(root.data);
        preOrder(ans, root.left);
        preOrder(ans, root.right);
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(6);

        ArrayList<Integer> res = new ArrayList<>();
        preOrder(res, root);
        for (int num : res) {
            System.out.print(num + " ");
        }
    }
}`,
  language: "java",
},
{
  title: "Binary Tree Postorder Traversal",
  question: "Given the root of a binary tree, return the postorder traversal of its nodes' values.",
  example: "Input: root = [1, 2, 3, 4, 5, null, 6]",
  output: "Output: 4 5 2 6 3 1",
  approach: "Use a recursive depth-first search approach to perform a post-order traversal of the binary tree by visiting the left subtree first, then the right subtree, and finally the root, collecting node values into a list.",
  code: `import java.util.*;
class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) {
        data = x;
        left = right = null;
    }
}
class Main {
    public static void postOrder(ArrayList<Integer> ans, TreeNode root) {
        if (root == null) {
            return;
        }
        postOrder(ans, root.left);
        postOrder(ans, root.right);
        ans.add(root.data);
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(6);

        ArrayList<Integer> res = new ArrayList<>();
        postOrder(res, root);
        for (int num : res) {
            System.out.print(num + " ");
        }
    }
}`,
  language: "java",
},
{
  title: "Binary Tree Level Order Traversal",
  question: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
  example: "Input: root = [1, 2, 3, 4, 5, null, 6]",
  output: "Output: [[1], [2, 3], [4, 5, 6]]",
  approach: "Use a recursive depth-first search approach passing the current level index, creating a new sublist in the result list when encountering a new level for the first time, and adding node values accordingly.",
  code: `class Solution {
    public static void traversal(TreeNode root, int level, List<List<Integer>> ans) {
        if (root == null) {
            return;
        }
        if (ans.size() <= level) {
            ans.add(new ArrayList<>());
        }

        ans.get(level).add(root.data);
        traversal(root.left, level + 1, ans);
        traversal(root.right, level + 1, ans);
    }
    
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> ans = new ArrayList<>();
        traversal(root, 0, ans);
        return ans;
    }
}`,
  language: "java",
},
{
  title: "Maximum Depth of Binary Tree",
  question: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
  example: "Input: root = [3, 9, 20, null, null, 15, 7]",
  output: "Output: 3",
  approach: "Use a recursive depth-first search approach to find the maximum depth of the left and right subtrees, then return the greater depth plus one for the current root node.",
  code: `class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int lheight = maxDepth(root.left);
        int rheight = maxDepth(root.right);

        return Math.max(lheight, rheight) + 1;
    }
}`,
  language: "java",
},
{
  title: "Same Tree",
  question: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
  example: "Input: p = [1, 2, 3], q = [1, 2, 3]",
  output: "Output: true",
  approach: "Use a recursive depth-first search approach to compare both trees simultaneously, verifying that their structural null states and node values match at every corresponding position.",
  code: `class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        }
        if (p == null || q == null) {
            return false;
        }
        if (p.data != q.data) {
            return false;
        }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}`,
  language: "java",
},
{
  title: "Balanced Binary Tree",
  question: "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.",
  example: "Input: root = [3, 9, 20, null, null, 15, 7]",
  output: "Output: true",
  approach: "Use a bottom-up recursive DFS approach to compute the height of each subtree while simultaneously checking for balance, propagating a sentinel value (-1) upward immediately if any subtree violates the height-difference condition.",
  code: `class Solution {
    public boolean isBalanced(TreeNode root) {
        return checkHeight(root) != -1;
    }

    private int checkHeight(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int leftHeight = checkHeight(node.left);
        if (leftHeight == -1) {
            return -1;
        }

        int rightHeight = checkHeight(node.right);
        if (rightHeight == -1) {
            return -1;
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }
}`,
  language: "java",
},
{
  title: "Binary Tree Longest Consecutive Sequence",
  question: "Given the root of a binary tree, return the length of the longest consecutive sequence path. A path is consecutive if each node in the path has a value equal to the parent node's value plus 1.",
  example: "Input: root = [1, null, 3, 2, 4, null, null, null, 5]",
  output: "Output: 3",
  approach: "Use a depth-first search (DFS) traversal where each node checks its children to see if their values continue an incrementing sequence of +1, updating and tracking the maximum consecutive length found globally.",
  code: `class Solution {
    private int maxLen = 0; 

    public int longestConsecutive(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        dfs(root);
        return maxLen;
    }

    private int dfs(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftLen = dfs(root.left);
        int rightLen = dfs(root.right);

        int currentLen = 1;
        if (root.left != null && root.left.val == root.val + 1) {
            currentLen = Math.max(currentLen, leftLen + 1);
        }

        if (root.right != null && root.right.val == root.val + 1) {
            currentLen = Math.max(currentLen, rightLen + 1);
        }

        maxLen = Math.max(maxLen, currentLen);
        return currentLen;
    }
}`,
  language: "java",
},

  ],
binarySearchTrees:[
{
  title: "Binary Search Tree Iterator",
  question: "Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST), supporting both forward and backward traversal operations (hasNext, next, hasPrev, prev).",
  example: `operations: ["BSTIterator", "next", "next", "prev", "next", "hasNext", "next", "next", "next", "hasNext", "hasPrev", "prev", "prev"]

root : 7 3 15 null null 9 20`,
  output: "Output: [null, 3, 7, 3, 7, true, 9, 15, 20, false, true, 15, 9]",
  approach: "Flatten the binary search tree using an in-order traversal into a list during initialization, and maintain an internal pointer to support bidirectional iteration in O(1) time per step.",
  code: `class BSTIterator {
    private List<Integer> list;
    private int ptr;

    public BSTIterator(TreeNode root) {
        list = new ArrayList<>();
        inorder(root);
        ptr = -1;
    }

    private void inorder(TreeNode root) {
        if (root == null) {
            return;
        }
        inorder(root.left);
        list.add(root.data);
        inorder(root.right);
    }

    public boolean hasNext() {
        return ptr + 1 < list.size();
    }

    public int next() {
        ptr++;
        return list.get(ptr);
    }

    public boolean hasPrev() {
        return ptr - 1 >= 0;
    }

    public int prev() {
        ptr--;
        return list.get(ptr);
    }
}`,
  language: "java",
}
  ],
  dynamicProgramming:[
    {
  title: "Minimum Cost to Form Target String",
  question: "Given a string target, an array of strings words, and an array of integer costs, find the minimum cost to form the target string by concatenating words from the given array. If it is impossible, return -1.",
  example: "Input: target = \"abcdef\", words = [\"ab\", \"def\"], costs = [1, 2]",
  output: "Output: 3",
  approach: "Store all words and their minimum associated costs in a Trie for efficient prefix lookup, then use a dynamic programming array to compute the minimum cost to form each prefix of the target string in O(n * L) time.",
  code: `class Solution {
    static class Node {
        Node[] next = new Node[26];
        int cost = Integer.MAX_VALUE; 
    }

    public int minimumCost(String target, List<String> words, List<Integer> costs) {
        Node root = new Node();
        for (int k = 0; k < words.size(); k++) {
            Node cur = root;
            for (char ch : words.get(k).toCharArray()) {
                int c = ch - 'a';
                if (cur.next[c] == null) cur.next[c] = new Node();
                cur = cur.next[c];
            }
            cur.cost = Math.min(cur.cost, costs.get(k));
        }

        int n = target.length();
        long INF = Long.MAX_VALUE / 2;
        long[] dp = new long[n + 1];
        Arrays.fill(dp, INF);
        dp[0] = 0;

        for (int i = 0; i < n; i++) {
            if (dp[i] >= INF) continue;
            Node cur = root;
            for (int j = i; j < n; j++) {
                cur = cur.next[target.charAt(j) - 'a'];
                if (cur == null) break;
                if (cur.cost != Integer.MAX_VALUE) {
                    dp[j + 1] = Math.min(dp[j + 1], dp[i] + cur.cost);
                }
            }
        }

        return dp[n] >= INF ? -1 : (int) dp[n];
    }
}`,
  language: "java",
}
  ],
  graphs:[
    {
  title: "All Paths from Source Lead to Destination",
  question: "Given the edges of a directed graph, and two nodes source and destination, determine whether or not all paths starting from source eventually end at destination, and that no path leads to a dead end or an infinite loop.",
  example: "Input: n = 3, edges = [[0, 1], [0, 2], [1, 3], [2, 3]], source = 0, destination = 3",
  output: "Output: true",
  approach: "Use a depth-first search (DFS) with a three-state node coloring technique (unvisited, visiting, visited) to detect cycles and verify that all paths successfully terminate exclusively at the destination node.",
  code: `class Solution {
    private List<Integer>[] graph;
    private int[] states;
    private int dest;

    public boolean leadsToDestination(int n, int[][] edges, int source, int destination) {
        this.dest = destination;
        graph = new ArrayList[n];
        Arrays.setAll(graph, i -> new ArrayList<>());
        for (int[] edge : edges) {
            graph[edge[0]].add(edge[1]);
        }
        if (!graph[destination].isEmpty()) {
            return false;
        }
        states = new int[n];
        return dfs(source);
    }

    private boolean dfs(int node) {
        if (states[node] != 0) {
            return states[node] == 2;
        }
        if (graph[node].isEmpty()) {
            return node == dest;
        }
        states[node] = 1;
        for (int neighbor : graph[node]) {
            if (!dfs(neighbor)) {
                return false;
            }
        }
        states[node] = 2;
        return true;
    }
}`,
  language: "java",
}
  ]

};
