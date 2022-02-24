import java.util.Scanner;

public class PrintAllPrimesTillN {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num1 = input.nextInt();
        int num2 = input.nextInt();

        for(int i = num1; i<=num2; i++){
            if(isPrime(i)) System.out.println(i);
        }
        input.close();
    }

    static boolean isPrime(int num){
        for(int i=2; i*i<=num; i++){
            if(num % i == 0) return false;
        }
        return true;
    }
}
