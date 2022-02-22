import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        System.out.println(factorial(num));
        input.close();
    }
    public static int factorial(int n){
        if(n <= 1) return 1;
        return n*factorial(n-1);
    }
}
