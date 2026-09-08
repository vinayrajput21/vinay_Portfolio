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
  
};