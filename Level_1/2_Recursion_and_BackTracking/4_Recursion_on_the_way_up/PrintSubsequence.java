import java.util.Scanner;

/**
 * PrintSubsequence
 */
public class PrintSubsequence {

    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        String ip = input.next();
        String op = "";
        printSS(ip, op);
        input.close();
    }

    public static void printSS(String ip, String op) {
        
        if(ip.length() == 0){
            System.out.println(op);
            return;
        }
        char ch = ip.charAt(0);
        ip = ip.substring(1);
        printSS(ip, op + ch);
        printSS(ip, op);
    }
}