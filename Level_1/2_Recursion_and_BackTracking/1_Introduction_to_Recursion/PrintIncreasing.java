import java.util.Scanner;

public class PrintIncreasing {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();

        printIncreasing(n);
        input.close();
        
    }
    static void printIncreasing(int n){
        if(n == 1){
            System.out.println(1);
            return;
        }
        printIncreasing(n-1);
        System.out.println(n);
    }
}
