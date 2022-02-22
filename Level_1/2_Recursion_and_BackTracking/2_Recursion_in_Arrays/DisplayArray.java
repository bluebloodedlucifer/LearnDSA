import java.util.Scanner;

/**
 * DisplayArray
 */
public class DisplayArray {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i<n; i++){
            arr[i] = input.nextInt();
        }
        displayArr(arr, 0);
        input.close();
    }

    public static void displayArr(int[] arr, int idx){
        if(idx == arr.length){
            return;
        }
        System.out.println(arr[idx]);
        displayArr(arr, ++idx);
    }
}