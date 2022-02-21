import java.util.Scanner;

/**
 * PrintIncreasingDecreasing
 */
public class PrintIncreasingDecreasing {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        pdi(num);
        input.close();
    }
    public static void pdi(int n){
        if(n == 0) return;
        System.out.println(n);
        pdi(n-1);
        System.out.println(n);

    }
}