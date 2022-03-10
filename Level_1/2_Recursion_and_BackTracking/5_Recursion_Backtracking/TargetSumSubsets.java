import java.util.Scanner;

public class TargetSumSubsets {
    public static void main(String[] args) throws Exception {

        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++){
            arr[i] = input.nextInt();
        }
        int tar = input.nextInt();
        printTargetSumSubsets(arr, 0, "", 0, tar);
        input.close();
    }

    // set is the subset
    // sos is sum of subset
    // tar is target
    public static void printTargetSumSubsets(int[] arr, int idx, String set, int sos, int tar) {
        if(sos > tar) return;
        
        if(idx == arr.length){
            if(sos == tar){
                System.out.println(set + ".");
            }
            return;

        }
        printTargetSumSubsets(arr, idx+1, set + arr[idx] +" ,", sos + arr[idx], tar);
        printTargetSumSubsets(arr, idx+1, set, sos, tar);


    }
}
