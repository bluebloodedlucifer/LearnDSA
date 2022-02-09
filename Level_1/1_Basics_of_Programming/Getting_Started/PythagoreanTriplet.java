import java.util.Scanner;

public class PythagoreanTriplet {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt(), b = input.nextInt(), c = input.nextInt();
        int maxi = Math.max(a, Math.max(b, c));
        int mini = Math.min(a, Math.min(b, c));
        int other = a + b + c - maxi - mini;
        if(maxi*maxi*1L == mini*mini*1L + other*other*1L) System.out.println("true");
        else System.out.println("false");
        input.close();

    }
}
