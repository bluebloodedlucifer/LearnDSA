import java.util.Scanner;

public class FirstIndex {
    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i<n; i++){
            arr[i] = input.nextInt();
        }
        int x = input.nextInt();
        System.out.println(firstIndex(arr, 0, x)); 
        input.close();
    }

    public static int firstIndex(int[] arr, int idx, int x){
        if(idx == arr.length) return -1;

        if(arr[idx] == x) return idx;

        return firstIndex(arr, idx+1, x);
        
    }
}
