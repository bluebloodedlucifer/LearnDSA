import java.util.Scanner;

public class InverseOfANumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        int temp=0, count = 1;
        while(num > 0){
            int rem = num%10;
            temp = temp + (int)Math.pow(10, rem-1)*count;
            num /= 10;
            count++;
        }
        System.out.println(temp);
    }
}
