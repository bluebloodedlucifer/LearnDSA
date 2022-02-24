import java.util.Scanner;

public class ReverseANumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();

        while(num > 0){
            System.out.println(num%10);
            num /= 10;
        }

        input.close();
    }
}
