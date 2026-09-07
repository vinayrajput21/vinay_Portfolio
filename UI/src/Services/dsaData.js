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
      title: "Right-Angled Triangle Pattern",
      link: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/",
      question:
        "Given a number n, print a right-angled triangle made of stars, with n rows, where row i contains i stars.",
      approach:
        "Loop rows from 1 to n. For each row, loop columns from 1 to the current row number and print a star. This is the base pattern most other star/number patterns build on.",
      code: `public class Solution {
    public static void printTriangle(int n) {
        StringBuilder result = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                result.append("*");
            }
            result.append("\\n");
        }
        System.out.print(result.toString());
    }

    public static void main(String[] args) {
        printTriangle(5);
    }
}`,
      language: "java",
      complexity: { time: "O(n^2)", space: "O(1)" },
    },
    {
      title: "Inverted Pyramid Pattern",
      link: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/",
      question:
        "Given a number n, print an inverted pyramid of stars centered on each line, decreasing width as rows go down.",
      approach:
        "For each row i from n down to 1, print (n - i) leading spaces followed by (2*i - 1) stars. Track spaces and stars separately to keep the triangle centered.",
      code: `public class Solution {
    public static void invertedPyramid(int n) {
        StringBuilder result = new StringBuilder();
        for (int i = n; i >= 1; i--) {
            for (int j = 0; j < n - i; j++) {
                result.append(" ");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                result.append("*");
            }
            result.append("\\n");
        }
        System.out.print(result.toString());
    }

    public static void main(String[] args) {
        invertedPyramid(5);
    }
}`,
      language: "java",
      complexity: { time: "O(n^2)", space: "O(1)" },
    },
  ],

  sorting: [
    {
      title: "Bubble Sort",
      link: "https://takeuforward.org/data-structure/bubble-sort-algorithm/",
      question:
        "Sort an array of integers in ascending order using bubble sort, and stop early once no swaps happen in a pass.",
      approach:
        "Repeatedly walk the array, swapping adjacent elements that are out of order. After each full pass, the largest remaining element is guaranteed to be at the end, so shrink the range each time. Add a swapped flag to break early on an already-sorted array.",
      code: `import java.util.Arrays;

public class Solution {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}`,
      language: "java",
      complexity: { time: "O(n^2)", space: "O(1)" },
    },
  ],

  arrays: [
    {
      title: "Second Largest Element in an Array",
      link: "https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/",
      question:
        "Given an array of integers, find the second largest element without sorting the array.",
      approach:
        "Track two variables, largest and secondLargest, in a single pass. When a number beats largest, the old largest becomes secondLargest. When a number sits strictly between the two, only secondLargest updates.",
      code: `public class Solution {
    public static int secondLargest(int[] arr) {
        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num > second && num < largest) {
                second = num;
            }
        }

        return second == Integer.MIN_VALUE ? -1 : second;
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        System.out.println(secondLargest(arr));
    }
}`,
      language: "java",
    },
  ],
};