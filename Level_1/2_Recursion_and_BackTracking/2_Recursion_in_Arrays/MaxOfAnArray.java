import java.util.Scanner;

public class MaxOfAnArray {
    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i<n; i++){
            arr[i] = input.nextInt();
        }
        System.out.println(maxOfArray(arr, 0)); 
        input.close();
    }

    public static int maxOfArray(int[] arr, int idx){
        if(idx == arr.length){
            return Integer.MIN_VALUE;
        }
        return Integer.max(arr[idx], maxOfArray(arr, idx+1));
    }
}
