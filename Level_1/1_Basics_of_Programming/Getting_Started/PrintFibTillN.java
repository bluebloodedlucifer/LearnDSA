import java.util.Scanner;

/**
 * PrintFibTillN
 */
public class PrintFibTillN {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int prev = 0, curr =1, next;

        while(n-->0){
            System.out.println(prev);
            next = prev + curr;
            prev = curr;
            curr = next;
        }

        input.close();
    }
}