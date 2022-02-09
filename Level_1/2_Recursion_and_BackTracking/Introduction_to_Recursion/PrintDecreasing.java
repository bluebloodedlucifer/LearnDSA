import java.util.Scanner;

/**
 * PrintDecreasing
 */
public class PrintDecreasing {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();

        printDecreasing(n);
        input.close();
        
    }
    static void printDecreasing(int n){
        if(n == 1){
            System.out.println(1);
            return;
        }
        System.out.println(n);
        printDecreasing(n-1);
    }


    
}