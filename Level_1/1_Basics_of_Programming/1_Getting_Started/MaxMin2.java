import java.util.Scanner;

public class MaxMin2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int arr[] = new int[n];
        int maxi1= Integer.MIN_VALUE;
        int maxi2= Integer.MIN_VALUE;

        int mini1 = Integer.MAX_VALUE;
        int mini2 = Integer.MAX_VALUE;
        for(int i = 0; i<n; i++){
            arr[i] = input.nextInt();
            if(arr[i] > maxi1) maxi1 = arr[i];
            if(arr[i] < mini1) mini1 = arr[i];
        }

        for(int i = 0; i<n; i++){
            if(arr[i] > maxi2 && arr[i]<maxi1) maxi2 = arr[i];
            if(arr[i]< mini2 && arr[i] > mini1) mini2 = arr[i]; 
        }
        System.out.println(maxi2 +" "+mini2);
        input.close();

    }
}
