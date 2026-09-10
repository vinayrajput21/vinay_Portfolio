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
    slidingWindowTwoPointer: { label: "Sliding Window & Two Pointer Combined Problems", number: "10" },
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
        }
    ],
    sorting: [
        {
            title: "Bubble Sort",
            question:
                "Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm. Optimize the algorithm so that it terminates early if no swaps occur in a pass.",
            example: `Input: arr = [23, 2, 5, 67, 9, 3, 8]
Output: [2, 3, 5, 8, 9, 23, 67]`,
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
            example: `Input: arr = [23, 2, 5, 67, 9, 3, 8]
Output: [2, 3, 5, 8, 9, 23, 67]`,
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
            title: 'Second largest element in an array',
            question:
                "Given an array of integers, find the second largest element in the array.",
            example: `Input: [12, 35, 1, 10, 34, 1]`,
            output: `Output: 34`,
            approach: 'Initialize two variables, first and second, to the minimum integer value. Iterate through the array; if an element is greater than first, update second to first and first to the element. Otherwise, if the element is greater than second and not equal to first, update second to the element.',
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
        }`, language: "java",
        },
        {
            title: 'Two sum problem',
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
    }`,
            language: "java",
        },
        {
    title: 'Check if an array is sorted and rotated',
    question:
        "Given an array of integers, check whether the array is sorted and then rotated.",
    example: `Input: [3, 4, 5, 1, 2]`,
    output: `Output: true`,
    approach: 'Count the number of times an element is greater than the next element. Since a sorted and rotated array can have at most one such point, return true if the count is less than or equal to 1.',
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
    title: 'Remove duplicates and return actual elements size',
    question:
        "Given a sorted array, remove the duplicates in-place and return the number of unique elements.",
    example: `Input: [1, 1, 2, 2, 3]`,
    output: `Output: 3`,
    approach: 'Use two pointers. Keep one pointer i at the position of the last unique element and another pointer j to scan the array. Whenever nums[j] is different from nums[i], move i forward and store nums[j] at that position. Finally, return i + 1 as the number of unique elements.',
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
    title: 'Rotate array',
    question:
        "Given an array of integers, rotate the array to the right by k positions.",
    example: `Input: [1, 2, 3, 4, 5, 6, 7], k = 3`,
    output: `Output: [5, 6, 7, 1, 2, 3, 4]`,
    approach: 'First calculate k modulo the length of the array to handle cases where k is larger than the array size. Store the last k elements in a temporary array, shift the remaining elements to the right by k positions, and then place the stored elements at the beginning.',
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
    title: 'Move zeroes to the end',
    question:
        "Given an array of integers, move all zeroes to the end while maintaining the relative order of the non-zero elements.",
    example: `Input: [0, 1, 0, 3, 12]`,
    output: `Output: [1, 3, 12, 0, 0]`,
    approach: 'Use a pointer k to track the position where the next non-zero element should be placed. Iterate through the array and copy every non-zero element to nums[k]. After all non-zero elements are placed, fill the remaining positions with zeroes.',
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
    title: 'Linear search',
    question:
        "Given an array of integers and a target element, find the index of the target element using linear search.",
    example: `Input: [10, 20, 30, 40, 50], target = 30`,
    output: `Output: 2`,
    approach: 'Iterate through the array from the beginning and compare each element with the target. If an element matches the target, return its index. If the target is not found after checking all elements, return -1.',
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
    title: 'Maximum consecutive ones',
    question:
        "Given a binary array, find the maximum number of consecutive 1s in the array.",
    example: `Input: [1, 1, 0, 1, 1, 1]`,
    output: `Output: 3`,
    approach: 'Maintain a count of consecutive 1s and a variable max to store the maximum count found so far. Increment count when the current element is 1. When a 0 is encountered, update max and reset count to 0. Finally, return the maximum of count and max to handle an array ending with 1s.',
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
    title: 'Single number using XOR',
    question:
        "Given a non-empty array of integers where every element appears twice except for one element, find the element that appears only once.",
    example: `Input: [4, 1, 2, 1, 2]`,
    output: `Output: 4`,
    approach: 'Use the XOR operation on every element. XOR has the property that a number XOR itself is 0 and a number XOR 0 is the number itself. Therefore, all duplicate elements cancel each other out, leaving only the element that appears once.',
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

            
    ]
};