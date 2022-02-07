import java.util.Scanner;

public class DigitsOfANumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        int temp = num;

        int count = 0;
        while(temp > 0){
            temp/=10;
            count++;
        }
        int p = (int)Math.pow(10, count-1);
        while(p>0){
            System.out.println(num/p);
            num %= p;
            p /= 10;
        }

        input.close();
    }
}
