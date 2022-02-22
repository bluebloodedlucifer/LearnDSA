import java.util.Scanner;

public class DisplayArrayInReverse {
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
        displayArr(arr, idx+1);
        System.out.println(arr[idx]);
    }
}
